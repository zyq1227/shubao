/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-09-17 19:20:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-18 08:30:52
 */
import React, { Component } from 'react';
import styles from './index.less';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { formatMessage } from 'umi-plugin-react/locale';
import mockJs from 'mockjs';
import { Form, Input, Select, Button, Table } from 'antd';
import { copyFileSync } from 'fs';

const { Option } = Select;

export class Productall extends Component {
  state = {
    datalist: [],
  };
  componentDidMount() {
    this.mocklist();
  }
  mocklist = () => {
    let data = mockJs.mock({
      'list|50-100': [
        {
          'id|+1': 25,
          name: /[a-z][A-Z][0-9]/,
          'money|+1': 9,
          type: '@cname',
          'status|1': ['上线', '未上线'],
          operation: ['查看', '编辑'],
        },
      ],
    });
    this.setState({
      datalist: data,
    });
  };
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 8 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 8 },
        sm: { span: 12 },
      },
    };
    const data = [
      {
        key: '1',
        title: '商品编号',
        dataIndex: 'id',
      },
      {
        key: '2',
        title: '商品名称',
        dataIndex: 'name',
      },
      {
        key: '3',
        title: '所属供应商',
        dataIndex: 'name',
      },
      {
        key: '4',
        title: '售价',
        dataIndex: 'money',
      },
      {
        key: '5',
        title: '售卖数量',
        dataIndex: 'money',
      },
      {
        key: '6',
        title: '总收入',
        dataIndex: 'money',
      },
      {
        key: '7',
        title: '分类',
        dataIndex: 'type',
      },
      {
        key: '8',
        title: '状态',
        dataIndex: 'status',
      },
      {
        key: '9',
        title: '操作',
        dataIndex: 'operation',
      },
    ];
    return (
      <PageHeaderWrapper
        content={formatMessage({
          id: 'editor-mind.description',
        })}
      >
        <div className={styles.contents}>
          <Form {...formItemLayout} className={styles.form}>
            <Form.Item label="姓名" className={styles.antRow}>
              <Input placeholder="请输入" className={styles.ipts} />
            </Form.Item>
            <Form.Item label="手机号" className={styles.antRow}>
              <Input placeholder="请输入" className={styles.ipts} />
            </Form.Item>
            <Form.Item label="课程编号" className={styles.antRow}>
              <Input placeholder="请输入" className={styles.ipts} />
            </Form.Item>
            <Form.Item label="所在地" className={styles.select}>
              <Select placeholder="请选择" className={styles.ipts}>
                <Option value="关闭">关闭</Option>
                <Option value="运行中">运行中</Option>
              </Select>
            </Form.Item>
          </Form>
          <div className={styles.btnbox}>
            <Button type="primary" className={styles.btns} size="large">
              查询
            </Button>
            <Button className={styles.btns} size="large">
              重置
            </Button>
            <Button type="primary" className={styles.btns} size="large">
              +新建
            </Button>
          </div>
          <Table columns={data} className={styles.table} dataSource={this.state.datalist.list} />
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default Form.create()(Productall);
