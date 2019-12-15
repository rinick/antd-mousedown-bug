import React from 'react';
import ReactDOM from 'react-dom';
import {Select} from 'antd';

const {Option} = Select;

ReactDOM.render(
  <div>
    <div style={{width: 100, height: 100, background: '#eef'}} onMouseDown={(e)=>e.preventDefault()}>
      click me to hide the dropdown
    </div>
    <Select defaultValue="lucy" style={{width: 120}}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
  </div>,
  document.querySelector('#app')
);