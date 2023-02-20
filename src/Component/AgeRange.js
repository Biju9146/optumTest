import { Slider, Form } from 'antd';
import { useState } from 'react';




const AgeRange = () => {

    const [inputValue, setInputValue] = useState(0);

    const onChange = (newValue) => {
        setInputValue(newValue);
    };


    return (
        <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    autoComplete="off"
  >
    <Form.Item label="What is Your Age ?">
        <Slider 
        min={0}
        max={100}
        onChange={onChange}
        value={typeof inputValue === 'number' ? inputValue : 10}
        />
    </Form.Item>
</Form>
    )
}

export default AgeRange