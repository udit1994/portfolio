import { Formik } from "formik";
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

const Email = ({ showForm, setDisplayForm }) => {
  return (
    <Modal style={{ zIndex: 4 }} show={showForm}>
      <Formik
        initialValues={{ body: "", name: "", email: "" }}
        validate={(values) => {
          console.log(values);
          const errors = {};

          if (!values.name) {
            errors.name = "Required";
          } else if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          } else if (!values.body) {
            errors.body = "At least say a 'Hi'. 🥺";
          }

          return errors;
        }}
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
          }).then(() => {
            setSubmitting(false);
            setDisplayForm();
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
                name="body"
                onChange={handleChange}
                placeholder="Say hi and more"
                value={values.body}
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
                onClick={setDisplayForm}
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
