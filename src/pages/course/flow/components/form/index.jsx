import React from 'react';
import GGEditor, { Flow } from 'gg-editor';
import { Table, Divider, Button, Modal, Form, Input } from 'antd';
import MButton from '../button';

import styles from '../../index.less';

GGEditor.setTrackable(false);
const { Column, ColumnGroup } = Table;

class MForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: '1',
          age: 'TradeCode 9317',
        },
        {
          key: '2',
          age: 'TradeCod',
        },
        {
          key: '3',
          age: 'TradeCod',
        },
        {
          key: '4',
          age: 'TradeCode 9317',
        },
        {
          key: '5',
          age: 'TradeCo',
        },
        {
          key: '6',
          age: 'TradeCod',
        },
      ],
      visible: false,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    let { data } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <GGEditor className={styles.editor}>
          <MButton />
          <Table dataSource={data}>
            <Column title="分类" dataIndex="age" key="age" />

            <Column
              title="操作"
              key="action"
              render={(text, record) => (
                <span>
                  <a onClick={this.showModal}>修改</a>
                  <Divider type="vertical" />
                  <a>删除</a>
                </span>
              )}
            />
          </Table>
        </GGEditor>
        <Modal
          title="新建规则"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form layout="inline">
            <Form.Item label="描述">
              {getFieldDecorator('id', {
                rules: [
                  {
                    required: false,
                    pattern: new RegExp(/^.{5,16}$/, 'g'),
                    message: '请输入至少五个字符的规则描述！',
                  },
                ],
                getValueFromEvent: event => {
                  return event.target.value.replace(/\D/g, '');
                },
                initialValue: '',
              })(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}

export default Form.create({ name: 'register' })(MForm);
