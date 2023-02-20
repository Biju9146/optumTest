
import { Form, Radio } from 'antd';




const MultipleQuestion = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
      

 return (
    <div>
<Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item label="Your Fav Color">
          <Radio.Group>
            <Radio value="apple"> Red </Radio>
            <Radio value="green"> Green </Radio>
            <Radio value="Orange"> Orange </Radio>
          </Radio.Group>
        </Form.Item>
    </Form>
       </div>
 )
}

export default MultipleQuestion;