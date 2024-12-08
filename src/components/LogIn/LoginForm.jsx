import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
    const validationSchema = Yup.object({
        email: Yup.string().email('Невірна електронна пошта').required('Обов’язкове поле'),
        password: Yup.string().required('Обов’язкове поле'),
    });

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log('Авторизовано:', values);
            }}
        >
            {() => (
                <Form style={{ maxWidth: '400px', margin: '20px auto', textAlign: 'center' }}>
                    <h2>Авторизація</h2>
                    <div style={{ marginBottom: '16px' }}>
                        <label>Електронна пошта</label>
                        <Field name="email" type="email" as="input" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <label>Пароль</label>
                        <Field name="password" type="password" as="input" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    </div>
                    <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
                        Увійти
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
