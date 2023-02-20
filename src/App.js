import { useState } from 'react';
import { Form,
  Button, message, Steps, theme } from 'antd';
import './App.css'; 
import MultipleQuestion from "./Component/MultipleQuestion"
import AgeRange from "./Component/AgeRange"
import DateRange from "./Component/DateRange"
import TextAreaForm from "./Component/TextAreaForm"

const contentStyle: React.CSSProperties = {
  lineHeight: '260px',
  textAlign: 'center',
  color: "#000",
  backgroundColor: "#ccc",
  borderRadius: "5px",
  border: `1px dashed #ccc`,
  marginTop: 16,
};

const steps = [
  {
    title: 'First',
    content: <MultipleQuestion/>,
  },
  {
    title: 'Second',
    content: <AgeRange/>,
  },
  {
    title: 'Third',
    content: <DateRange/>,
  },
  {
    title: 'Last',
    content: <TextAreaForm/>,
  },
];

function App() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div className="App"> 
  <Steps current={current} items={items} />
    <div style={contentStyle}>{steps[current].content}</div>
    <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
</div>

</div>

  );
}

export default App;
