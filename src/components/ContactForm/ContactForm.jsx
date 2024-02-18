import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters long')
    .max(50, 'Name must not exceed 50 characters')
    .required('This is a required field'),
  number: Yup.string()
    .min(5, 'Number must be at least 5 characters long')
    .max(20, 'Number must not exceed 20 characters')
    .matches(
      /^(\d{3}-\d{2}-\d{2}|\(\d{3}\) \d{3}-\d{4}|\+\d{1,2}\s\d{3}-\d{2}-\d{2}-\d{2}|\d{10})$/,
      'Invalid phone number format.'
    )
    .required('This is a required field'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contactsItems = values => {
    dispatch(addContact(values));
  };
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        contactsItems(values);
        actions.resetForm();
      }}
    >
      <Form className={css.contactForm} autoComplete="off">
        <div className={css.contactFormGroup}>
          <label className={css.labelForm} htmlFor="name">
            Name
          </label>
          <Field className={css.input} type="text" name="name" id="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.contactFormGroup}>
          <label className={css.labelForm} htmlFor="number">
            Number
          </label>
          <Field className={css.input} type="text" name="number" id="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btnAddContact} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
