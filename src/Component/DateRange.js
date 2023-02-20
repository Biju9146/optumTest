import {Form , DatePicker } from 'antd';

const { RangePicker } = DatePicker;


const DateRange = () => {
  return (
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    autoComplete="off"
  >
    <Form.Item label="Book you traveling dates">
    <RangePicker />
    </Form.Item>
    </Form>
  )   
}

export default DateRange