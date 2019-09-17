import { Card, Form, Input, Select, Button, Table } from "antd";
import React, { Fragment } from "react";
import data from "../../data.json";
import styles from "./index.less";
const { Item } = Form;
const { Option } = Select;

const columns = [
  {
    title: "用户编号",
    dataIndex: "id"
  },
  {
    title: "姓名",
    dataIndex: "name"
  },
  {
    title: "手机号",
    dataIndex: "tel",
    sortDirections: ["descend", "ascend"],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length
  },
  {
    title: "用户数",
    dataIndex: "number",
    sortDirections: ["descend", "ascend"],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length
  },
  {
    title: "交易额",
    dataIndex: "money",
    sortDirections: ["descend", "ascend"],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length
  },
  {
    title: "状态",
    dataIndex: "type",
    filters: [
      {
        text: "上线",
        value: "上线"
      },
      {
        text: "未上线",
        value: "未上线"
      }
    ]
  },
  {
    title: "操作",
    dataIndex: "operation"
  }
];

function onChange(pagination, filters, sorter) {
  console.log("params", pagination, filters, sorter);
}

class EditorComponent extends React.Component {
  handleSubmit = e => {};

  renderNodeDetail = () => {
    const { form } = this.props;
    return (
      <Fragment>
        <Item label="用户名" className={styles.fromItem}>
          {form.getFieldDecorator("user_name", {
            rules: [
              {
                message: "Please input your user_name!"
              }
            ]
          })(<Input placeholder="请输入" />)}
        </Item>
        <Item label="手机号" className={styles.fromItem}>
          {form.getFieldDecorator("user_tel", {
            rules: [
              {
                message: "Please input your user_tel!"
              }
            ]
          })(<Input placeholder="请输入" />)}
        </Item>
        <Item label="用户编号" className={styles.fromItem}>
          {form.getFieldDecorator("user_id", {
            rules: [
              {
                message: "Please input your user_id!"
              }
            ]
          })(<Input placeholder="请输入" />)}
        </Item>
        <Item label="所在地" className={styles.fromItem}>
          {form.getFieldDecorator("user_noun", {
            rules: [
              {
                message: "Please input your user_noun!"
              }
            ]
          })(
            <Select onChange={this.handleSubmit} placeholder="请选择">
              <Option value="关闭">关闭</Option>
              <Option value="运行中">运行中</Option>
            </Select>
          )}
        </Item>
      </Fragment>
    );
  };

  render() {
    const { form } = this.props;
    return (
      <Card type="inner" size="small" bordered={false}>
        <Form className={styles.content} onSubmit={this.handleSubmit}>
          {this.renderNodeDetail()}
        </Form>
        <div className={styles.btns}>
          <Button type="primary">查询</Button>
          <Button>重制</Button>
          <Button type="primary" icon="plus">
            新建
          </Button>
        </div>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </Card>
    );
  }
}
export default Form.create()(EditorComponent);
