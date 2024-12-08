import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomInput from './CustomInput';

const AddProductForm = () => {
    const validationSchema = Yup.object({
        name: Yup.string().required('Обов’язкове поле'),
        price: Yup.number()
            .min(0, 'Ціна не може бути меншою за 0')
            .max(100000, 'Ціна не може перевищувати 100000')
            .required('Обов’язкове поле'),
        quantity: Yup.number()
            .min(1, 'Має бути хоча б 1')
            .max(1000, 'Максимальна кількість — 1000')
            .required('Обов’язкове поле'),
    });

    return (
        <Formik
            initialValues={{ name: '', price: '', quantity: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log('Новий товар:', values);
            }}
        >
            {() => (
                <Form style={{ maxWidth: '400px', margin: '20px auto', textAlign: 'center' }}>
                    <h2>Додавання товару</h2>
                    <CustomInput label="Назва товару" name="name" type="text" />
                    <CustomInput label="Ціна" name="price" type="number" />
                    <CustomInput label="Кількість" name="quantity" type="number" />
                    <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px' }}>
                        Додати товар
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default AddProductForm;