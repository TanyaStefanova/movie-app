import { useEffect, useState } from "react";

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
        setFormErrors(state => ({
            ...state,
            [e.target.name]: ''
        }));

    }

    const onSubmit = (e) => {
        e.preventDefault();

        setFormErrors(validate(values));
        setIsSubmit(true);
        setIsSubmitSuccessful(true)
    }

    useEffect(() => {

        if (Object.keys(formErrors).length === 0 && isSubmit) {
            submitHandler(values);
            setIsSubmitSuccessful(false);
        }
    }, [formErrors]);

    useEffect(() => {
        setValues(initialValues);
    }, [isSubmitSuccessful])

    const validate = (values) => {
        const errors = {};
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (values.email !== undefined) {
            if (!values.email) {
                errors.email = 'Email is required!';
            } else if (!regex.test(values.email)) {
                errors.email = 'This is not a valid email!'
            }
        }

        if (values.password !== undefined) {
            if (!values.password) {
                errors.password = 'Password is required!';
            } else if (values.password.length < 6) {
                errors.password = 'Password must be at least 6 characters';
            }
        }

        if (values.repeatPassword !== undefined) {
            if (!values.repeatPassword) {
                errors.repeatPassword = 'Password is required!';
            } else if (values.password !== values.repeatPassword) {
                errors.password = 'Passwords don\'t match';
            }
        }

        if (values.search !== undefined) {
            if (!values.search) {
                errors.search = 'Type something';
            } else if (values.password !== values.repeatPassword) {
                errors.password = 'Passwords don\'t match';
            }
        }

        return errors;
    }

    return {
        values,
        onChange,
        onSubmit,
        formErrors
    }
}