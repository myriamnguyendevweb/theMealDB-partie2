import React from 'react'
import Form from "react-bootstrap/Form";
import { useField } from "formik";

const Input = ({ id, type = "text" }) => {
    const [field] = useField(id);
    return (
        <Form.Control type={type} />
    );
};

export default Input