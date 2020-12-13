import React from "react";
import { Formik } from "formik";

import Modal from "components/styled/Modal";
import styled from "styled-components";

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

const TextArea = styled.textarea`
  background-color: #8a8a8a;
  border-radius: 1rem;
  color: #ffffff;
  font-family: "Arial", monospace;
  height: 10rem;
  line-height: 1.5;
  outline: none;
  padding: 0.5rem;
  resize: none;
  width: 100%;

  ::placeholder {
    color: #ffffff;
  }
`;

const InputText = styled.input`
  background-color: #8a8a8a;
  border-radius: 1rem;
  border: none;
  color: #ffffff;
  font-family: "Arial", monospace;
  line-height: 1.5;
  margin-right: 1rem;
  outline: none;
  padding: 0.5rem;
  width: 100%;

  ::placeholder {
    color: #ffffff;
  }
`;

const Submit = styled.button`
  background-color: #9a9a9a;
  border-radius: 1rem;
  border: none;
  color: #ffffff;
  cursor: pointer;
  line-height: 1.3;
  min-height: 2rem;
  min-width: 5rem;
  outline: none;

  ::disabled {
  }
`;

const Label = styled.label`
  position: relative;
  width: 100%;
`;

const Error = styled.p`
  position: absolute;
`;

const Email = ({ showForm, setDisplayForm }) => {
  return (
    <Modal style={{ zIndex: 4 }} show={showForm} onClick={setDisplayForm}>
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
            errors.body = "Come on write to me, something!`";
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
          }).then(() => setSubmitting(false));
        }}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
            <legend>Write me an E-mail</legend>
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
            <Submit type="submit" disabled={isSubmitting}>
              Send
            </Submit>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default Email;
