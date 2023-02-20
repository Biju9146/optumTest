
import {Input, Form } from 'antd';

const { TextArea } = Input;

const TextAreaForm = () => {
    return (
        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item label="Your Feedback">
         <TextArea rows={4} />
         </Form.Item>
        </Form>
    )
}

export default TextAreaForm;