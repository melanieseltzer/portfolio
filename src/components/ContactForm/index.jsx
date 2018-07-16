import React, { Component } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './style.scss';

const InnerForm = ({ values, errors, touched, isSubmitting }) => (
  <Form
    className="form__contact"
    action="https://formspree.io/hi@melanieseltzer.io"
    method="POST"
  >
    <Field type="text" name="name" placeholder="Name" />
    {touched.name &&
      errors.name && <span className="errors">{errors.name}</span>}
    <Field type="email" name="email" placeholder="Email" />
    {touched.email &&
      errors.email && <span className="errors">{errors.email}</span>}
    <textarea name="message" placeholder="Message" />
    {touched.message &&
      errors.message && <span className="errors">{errors.message}</span>}
    <button type="submit" disabled={isSubmitting}>
      Send
    </button>
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
  })
})(InnerForm);

export default ContactForm;
