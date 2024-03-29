import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import styled from "styled-components";

import Modal from "components/styled/Modal";
import {
  Error,
  InputText,
  Label,
  Submit,
  TextArea,
  Cancel,
} from "components/styled/CustomForm";

const Form = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-evenly;
  left: 50%;
  position: absolute;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 50%;

  @media only screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const EmailSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});

const Email = ({ setDisplayEmail }) => {
  return (
    <Modal style={{ zIndex: 4 }}>
      <Formik
        initialValues={{ body: "", name: "", email: "" }}
        validationSchema={EmailSchema}
        onSubmit={(values, { setSubmitting }) => {
          fetch("/.netlify/functions/send-contact-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contactName: values.name,
              contactEmail: values.email,
              message: values.body,
            }),
          })
            .then(() => {
              alert(
                "Your message is received. \n I will get back to you asap."
              );
              setSubmitting(false);
              setDisplayEmail();
            })
            .catch(() => {
              alert("Service not available. \n Please try after sometime.");
            });
        }}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <legend>Write me an e-mail</legend>
            <Label style={{}}>
              <InputText
                name="name"
                onChange={handleChange}
                placeholder="Full name*"
                type="text"
                value={values.name}
              />
              {errors.name && (
                <Error style={{ position: "absolute" }}>{errors.name}</Error>
              )}
            </Label>
            <Label>
              <InputText
                name="email"
                onChange={handleChange}
                placeholder="E-mail*"
                type="email"
                value={values.email}
              />
              {errors.email && (
                <Error style={{ position: "absolute" }}>{errors.email}</Error>
              )}
            </Label>
            <Label>
              <TextArea
                name="message"
                onChange={handleChange}
                placeholder="Say hi and more"
                value={values.message}
              />
              {errors.body && (
                <Error style={{ position: "absolute" }}>{errors.body}</Error>
              )}
            </Label>
            <span>
              <Submit type="submit" disabled={isSubmitting}>
                Send
              </Submit>
              <Cancel
                disabled={isSubmitting}
                onClick={setDisplayEmail}
                type="submit"
              >
                Cancel
              </Cancel>
            </span>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default Email;
