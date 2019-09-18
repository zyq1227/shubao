import React, { Component, useState, useEffect } from 'react';
import { Form, Input, Table, Col, Row, Select, Button } from 'antd';
import styles from './index.less';
import Mock from 'mockjs';

const { Option } = Select;

const tableColumns = [
  {
    title: '订单编码',
    dataIndex: 'code',
  },
  {
    title: '用户',
    dataIndex: 'username',
  },
  {
    title: '手机号',
    dataIndex: 'tel',
  },
  {
    title: '订单名',
    dataIndex: 'name',
  },
  {
    title: '订单金额',
    dataIndex: 'money',
  },
  {
    title: '支付时间',
    dataIndex: 'time',
  },
  {
    title: '操作',
    dataIndex: 'action',
    render: () => <a>查看</a>,
  },
];
// class ClassTable extends Component {
//   state = {
//     labelName: ['姓名', '手机号', '课程编码'],
//     name: ['username', 'tel', 'code'],
//     tableList: [],

  // };
//   getFields() {
//     let { labelName, name } = this.state;
//     const count = labelName;
//     const { getFieldDecorator } = this.props.form;
//     const children = [];
//     for (let i = 0; i < labelName.length; i++) {
//       children.push(
//         <Col span={8} key={i}>
//           <Form.Item label={labelName[i]}>
//             {getFieldDecorator(`${name[i]}`, {
//               rules: [
//                 {
//                   required: true,
//                   message: `Please input your ${name[i]}!`,
//                 },
//               ],
//             })(<Input placeholder="请输入" />)}
//           </Form.Item>
//         </Col>,
//       );
//     }
//     return children;
//   }
//   handleCurrencyChange = () => {};
//   componentDidMount() {
//     let basicData = Mock.mock({
//       'list|1-100': [
//         {
//           'key|+1': 1,
//           code: '@ip',
//           username: '@name',
//           money: '@integer(0)',
//           name: '@character("upper")',
//           tel: '@string("lower", 13, 20)',
//           time: '@datetime("yyyy-MM-dd A HH:mm:ss")',
//         },
//       ],
//     });
//     this.setState({
//       tableList: basicData,
//     });
//   }

// }

let inter = 0;

const data = Mock.mock({
  'list|1-100': [
    {
      'key|+1': 1,
      code: '@id',
      username: '@cname',
      'money|100-10000.2': 100,
      name: '@ctitle',
      tel: /^1(5|3|7|8)[0-9]{9}$/,
      time: '@datetime("yyyy-MM-dd  HH:mm:ss")',
    },
  ],
});
const ClassTable = props=>{
  const {getFieldDecorator} = props.form;
  // 在hooks中申明state
  const [columns, setColumns] = useState([])
  const [tableList, setTableList] = useState({list: []})

  // 初始化列表数据
  useEffect(()=>{
    // 填充列表数据
    setTableList(data);
    // 填充表头
    setColumns(tableColumns);
  }, []);

  // 生成筛选表头
  let getFields = ()=>{
    let [labelName, name ] = [['姓名','手机号','课程编码'], ['username', 'tel', 'code']];
    const children = [];
    for (let i = 0; i < labelName.length; i++) {
      children.push(
        <Col span={8} key={i}>
          <Form.Item label={labelName[i]}>
            {getFieldDecorator(`${name[i]}`)(<Input placeholder="请输入" />)}
          </Form.Item>
        </Col>,
      );
    }
    return children;
  }

  // 通过筛选查询
  let search = ()=>{
    let values = props.form.getFieldsValue()
    console.log('values...', values);
    setTableList({
      list: data.list.filter(item=>{
        let flag = true;
        for (let key in values){
          if (values[key]){
            flag = flag && item[key].includes(values[key])
          }
        }
        return flag;
      })
    })
  }
  // let [count, setCount] = useState(0);

  // // useEffect模拟componentDidMount
  // useEffect(()=>{
  //   console.log('触发了componentDidMount');
  // }, []);

  // // useEffect模拟shouldComponentUpdate
  // useEffect(()=>{
  //   console.log('触发了componentDidMount', count);
  // }, [count]);

  // // useEffect模拟componentWillReceiveProps
  // useEffect(()=>{
  //   console.log('props.form改变')
  //   // 通过return一个函数的方式模拟componentWillUnmount
  //   return ()=>{
  //     console.log('组件销毁了');
  //   }
  // }, [props.form]);

  // clearInterval(inter);
  // inter = setInterval(()=>{
  //   setCount(count+1);
  // }, 1000);

  return <div className={styles.ClassTableInput}>
    <Form className="ant-advanced-search-form">
      {/* <p>{count}</p> */}
      <Row gutter={24}>{getFields()}</Row>
      <Form.Item label="所在地">
        <Select
          placeholder="请选择"
          style={{ width: '15%' }}
          // onChange={this.handleCurrencyChange}
        >
          <Option value="close">推荐</Option>
          <Option value="open">北京</Option>
        </Select>
      </Form.Item>
      <Col md={8} sm={24}>
        <span className={styles.submitButtons}>
          <Button type="primary" onClick={search}>
            查询
          </Button>
          <Button
            style={{
              marginLeft: 8,
            }}
            onClick={search}
          >
            重置
          </Button>
          <Button
            type="primary"
            style={{
              marginLeft: 8,
            }}
            // onClick={this.handleFormReset}
          >
            +新建
          </Button>
        </span>
      </Col>
    </Form>
    <Table style={{ marginTop: '25px' }} columns={columns} dataSource={tableList.list} />
  </div>
}
export default Form.create()(ClassTable);
