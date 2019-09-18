import GGEditor from "gg-editor";
import React, { Fragment } from "react";
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { Card, Form, Input, Select, Button, Table, Badge } from "antd";
import styles from "./index.less";
import Mock from "mockjs";

const { Item } = Form;
const { Option } = Select;

const columns = [
  {
    title: "用户编号",
    dataIndex: "id",
    render: text => <a>{text}</a>
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
    sorter: (a, b) => a.tel - b.tel
  },
  {
    title: "用户数",
    dataIndex: "number",
    sortDirections: ["descend", "ascend"],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.number - b.number
  },
  {
    title: "交易额",
    dataIndex: "money",
    sortDirections: ["descend", "ascend"],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.money - b.money
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
    ],
    render: data => (
      <span>
        <Badge status="success" />
        {data}
      </span>
    ),
    onFilter: (value, record) => record.type.indexOf(value) === 0
  },
  {
    title: "操作",
    dataIndex: "operation",
    render: data =>
      data.map((item, index) => (
        <a key={index} style={{ marginRight: 10 }}>
          {item}
        </a>
      ))
  }
];

const data = Mock.mock({
  "list|30": [
    {
      "id|+1": 1,
      "key|+1": 1,
      name: "@FIRST",
      tel: 166722193892,
      "number|100-900": 1,
      "money|100-900": 1,
      "type|1": ["上线", "未上线"],
      operation: ["查看", "编辑", "禁用"]
    }
  ]
});

GGEditor.setTrackable(false);

function onChange(pagination, filters, sorter) {
  console.log("params", pagination, filters, sorter);
  console.log(filters);
}

class EditorComponent extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

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
      <PageHeaderWrapper>
        <GGEditor className={styles.editor}>
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
            <Table
              columns={columns}
              dataSource={data.list}
              onChange={onChange}
            />
          </Card>
        </GGEditor>
      </PageHeaderWrapper>
    );
  }
}
export default Form.create()(EditorComponent);