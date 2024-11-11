import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const initialValues = { name: '', number: '' };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
   number: Yup.string().required('Required'),
  });

  const onSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };
    addContact(newContact);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {() => (
        <Form className={styles.form}>
                  <div className={styles.formTxt}>
            <label htmlFor="name">Name</label>
            <Field className={styles.formInput} name="name" type="text" />
            <ErrorMessage className={styles.formError} name="name" component="div" />
          </div>
          <div className={styles.formNumber}>
            <label htmlFor="number">Number</label>
            <Field className={styles.formInput} name="number" type="text" />
            <ErrorMessage className={styles.formError} name="number" component="div" />
          </div>
          <button className={styles.formButton} type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
