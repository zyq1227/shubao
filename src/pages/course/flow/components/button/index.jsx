import React, { Component } from 'react';
import { Table, Divider, Button, Modal, Form, Input } from 'antd';

import PropTypes from 'prop-types';
import styles from '../../index.less';
import { connect } from 'redux';

class MButton extends Component {
  state = { visible: false };

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
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <Button type="primary" icon="plus" className={styles.binXJ} onClick={this.showModal}>
          新建
        </Button>
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

export default Form.create({ name: 'register' })(MButton);
