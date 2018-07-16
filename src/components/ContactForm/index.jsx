import React, { Component } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './style.scss';

const InnerForm = ({ errors, touched, isSubmitting }) => (
  <Form className="form__contact">
    <Field type="text" name="name" placeholder="Name" />
    {touched.name &&
      errors.name && <span className="errors">{errors.name}</span>}
    <Field type="email" name="email" placeholder="Email" />
    {touched.email &&
      errors.email && <span className="errors">{errors.email}</span>}
    <Field component="textarea" name="message" placeholder="Message" />
    {touched.message &&
      errors.message && <span className="errors">{errors.message}</span>}
    <button type="submit">{isSubmitting ? 'Sending...' : 'Send'}</button>
    <span id="messages" />
  </Form>
);

const ContactForm = withFormik({
  mapPropsToValues({ name, email, message }) {
    return {
      name: name || '',
      email: email || '',
      message: message || ''
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Email not valid')
      .required('Email is required'),
    message: Yup.string().required('Message is required')
  }),
  handleSubmit(values, { resetForm, setSubmitting }) {
    const url = `https://formcarry.com/s/UBSqyHcclJl`;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        resetForm();
        setSubmitting(false);

        const success = document.getElementById('messages');
        success.innerHTML = "Success! I'll get back to you ASAP.";

        // Reset message after 5 seconds
        setTimeout(() => {
          success.innerHTML = '';
        }, 5000);
      })
      .catch(() => {
        setSubmitting(false);

        const success = document.getElementById('messages');
        success.innerHTML = 'Oh no! Something went wrong.';

        // Reset message after 5 seconds
        setTimeout(() => {
          success.innerHTML = '';
        }, 5000);
      });
  }
})(InnerForm);

export default ContactForm;
