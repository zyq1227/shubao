import React, { Component } from "react";
import { connect } from "dva";
import {
  Layout,
  Row,
  Col,
  Breadcrumb,
  Form,
  Input,
  Icon,
  Cascader,
  DatePicker,
  Radio,
  Button
} from "antd";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;
const { TextArea } = Input;
const { MonthPicker, RangePicker } = DatePicker;
// @connect(({ profileBasic, loading }) => ({
//   profileBasic,
//   loading: loading.effects["profileBasic/fetchBasic"]
// }))
class Add extends Component {
  //   componentDidMount() {
  //     const { dispatch } = this.props;
  //     dispatch({
  //       type: "profileBasic/fetchBasic"
  //     });
  //   }
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 7 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 10 },
        sm: { span: 10 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const residences = [
      {
        value: "zhejiang",
        label: "Zhejiang",
        children: [
          {
            value: "hangzhou",
            label: "Hangzhou",
            children: [
              {
                value: "xihu",
                label: "West Lake"
              }
            ]
          }
        ]
      },
      {
        value: "jiangsu",
        label: "Jiangsu",
        children: [
          {
            value: "nanjing",
            label: "Nanjing",
            children: [
              {
                value: "zhonghuamen",
                label: "Zhong Hua Men"
              }
            ]
          }
        ]
      }
    ];
    const config = {
      rules: [
        { type: "object", required: true, message: "Please select time!" }
      ]
    };
    return (
      <div>
        <Layout className="layout" style={{ margin: "-24px" }}>
          <Breadcrumb
            style={{
              background: "#fff",
              borderBottom: "1px solid #e8e8e8",
              padding: " 16px 32px 0",
              height: "89.8px"
            }}
          >
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>合伙人</Breadcrumb.Item>
            <Breadcrumb.Item>添加合伙人</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ padding: "24px" }}>
            <Form
              {...formItemLayout}
              onSubmit={this.handleSubmit}
              style={{ background: "#fff", padding: "30px" }}
            >
              <Form.Item label="姓名">
                {getFieldDecorator("username", {
                  rules: [
                    {
                      validator: (rule, value, callback) => {
                        if ( /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/.test(value)) {
                          callback();
                        } else {
                          callback("please input you username!");
                        }
                      }
                    }
                  ]
                })(<Input placeholder="Username" />)}
              </Form.Item>
              <Form.Item label="电话">
                {getFieldDecorator("phone", {
                  rules: [
                    {
                      validator: (rule, value, callback) => {
                        if ( /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value)) {
                          callback();
                        } else {
                          callback("please input you phone number!");
                        }
                      }
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="邮箱">
                {getFieldDecorator("email", {
                  rules: [
                    {
                      validator: (rule, value, callback) => {
                        if (/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(value)) {
                          callback();
                        } else {
                          callback("please input you E-mail!");
                        }
                      }
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="地址">
                {getFieldDecorator("residence", {
                  rules: [
                    {
                      validator: (rule, value, callback) => {
                        if (value) {
                          callback();
                        } else {
                          callback("please input you residence!");
                        }
                      }
                    }
                  ]
                })(<Cascader options={residences} placeholder="请输入地址" />)}
              </Form.Item>
              <Form.Item label="详细地址">
                {getFieldDecorator("address", {
                  rules: [
                    {
                      validator: (rule, value, callback) => {
                        if (value) {
                          callback();
                        } else {
                          callback("please input you address!");
                        }
                      }
                    }
                  ]
                })(<TextArea placeholder="详细地址" rows="4" />)}
              </Form.Item>
              <Form.Item label="开始时间">
                {getFieldDecorator(
                  "date-picker",
                  { rules: [ {
                    validator: (rule, value, callback) => {
                      if (value) {
                        callback();
                      } else {
                        callback("please input you time!");
                      }
                    }
                  }] },
                  config
                )(<DatePicker />)}
              </Form.Item>
              <Form.Item label="网站名称">
                {getFieldDecorator("webname", {
                  rules: [
                    {
                      validator: (rule, value, callback) => {
                        if (value) {
                          callback();
                        } else {
                          callback("please input you webname!");
                        }
                      }
                    }
                  ]
                })(<Input placeholder="请输入网站名称" />)}
              </Form.Item>
              <Form.Item label="账号">
                {getFieldDecorator("account", {
                  rules: [
                    {
                      validator: (rule, value, callback) => {
                        if (value) {
                          callback();
                        } else {
                          callback("please input you account!");
                        }
                      }
                    }
                  ]
                })(<Input placeholder="请输入账号" />)}
              </Form.Item>
              <Form.Item label="密码">
                {getFieldDecorator("password", {
                  rules: [
                    {
                      validator: (rule, value, callback) => {
                        if (/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(value)) {
                          callback();
                        } else {
                          callback("please input you account!");
                        }
                      }
                    }
                  ]
                })(<Input type="password" placeholder="请输入密码" />)}
              </Form.Item>
              <Form.Item label="邀请人（选填）">
                <Input placeholder="请输入邀请人" />
              </Form.Item>
              <Form.Item label="状态">
                <Radio.Group name="radiogroup" defaultValue={1}>
                  <Radio value={1}>在线</Radio>
                  <Radio value={2}>禁用</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginRight: "25px" }}
                >
                  提交
                </Button>
                <Button>保存</Button>
              </Form.Item>
            </Form>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Form.create()(Add);
