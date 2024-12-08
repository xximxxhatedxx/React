import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../CustomInput';

const RegistrationForm = () => {
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .min(3, 'Мінімум 3 символи')
            .required('Обов’язкове поле'),
        lastName: Yup.string()
            .max(18, 'Максимум 18 символів')
            .required('Обов’язкове поле'),
        email: Yup.string()
            .email('Невірна електронна пошта')
            .required('Обов’язкове поле'),
        password: Yup.string()
            .matches(/[A-Z]/, 'Має містити одну велику літеру')
            .matches(/[^a-zA-Z0-9]/, 'Має містити один спеціальний символ')
            .required('Обов’язкове поле'),
    });

    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log('Реєстрація успішна:', values);
            }}
        >
            {() => (
                <Form style={{ maxWidth: '400px', margin: '20px auto', textAlign: 'center' }}>
                    <h2>Реєстрація</h2>
                    <CustomInput label="Ім'я" name="firstName" type="text" />
                    <CustomInput label="Прізвище" name="lastName" type="text" />
                    <CustomInput label="Електронна пошта" name="email" type="email" />
                    <CustomInput label="Пароль" name="password" type="password" />
                    <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
                        Зареєструватися
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default RegistrationForm;
