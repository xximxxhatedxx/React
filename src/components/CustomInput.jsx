import React from 'react';
import { useField } from 'formik';

const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px' }}>{label}</label>
            <input {...field} {...props} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            {meta.touched && meta.error ? (
                <div style={{ color: 'red', marginTop: '4px' }}>{meta.error}</div>
            ) : null}
        </div>
    );
};

export default CustomInput;
