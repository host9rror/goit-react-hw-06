import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import PropTypes from 'prop-types';
import css from "./ContactForm.module.css"

const ContactForm = ({ addContact }) => {
    const nameFieldId = useId();
    const numberFieldId = useId();

    const feedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
        number: Yup.string().min(3, "Too short!").max(20, "Too long!").required("Required")
    });

    const initialValues = {
        name: "",
        number: ""
    }

    return (
        <div className={css.formContainer}>
            <Formik initialValues={initialValues} validationSchema={feedbackSchema} onSubmit={(values, actions) => {
                addContact(values); 
                actions.resetForm(); 
            }}>
                <Form>
                    <div className={css.formGroup}>
                        <label htmlFor={nameFieldId} className={css.label}>Name</label>
                        <Field type="text" name="name" id={nameFieldId} className={css.inputField} />
                        <ErrorMessage name="name" component="span" className={css.errorMessage} />
                    </div>
                    <div className={css.formGroup}>
                        <label htmlFor={numberFieldId} className={css.label}>Number</label>
                        <Field type="text" name="number" id={numberFieldId} className={css.inputField} />
                        <ErrorMessage name="number" component="span" className={css.errorMessage} />
                    </div>
                    <button type="submit" className={css.submitBtn}>Add contact</button>
                </Form>
            </Formik>
        </div>
    );
};

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
}

export default ContactForm;
