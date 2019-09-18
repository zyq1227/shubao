/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { Upload, Icon, Modal, Breadcrumb, Input } from 'antd';
import styles from './style.less';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
// eslint-disable-next-line react/prefer-stateless-function
export default class Add extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [
      {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
    ],
  };
  // eslint-disable-next-line lines-between-class-members
  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      // eslint-disable-next-line no-undef
      <div className={styles.clearfix}>
        <div className={styles.antcte}>
          <div className={styles.breadcrumb}>
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>添加轮播图</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className={styles.card}>
            <div className={styles.row}>
              <span>跳转连接：</span>
              <Input placeholder="请输入跳转连接" />
            </div>
            <div className={styles.form}>
              <div className={styles.antform}>
                <span>上传图片：</span>

                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                  <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
              </div>
            </div>
            <div className={styles.btn}>
              <span className={styles.butn}>提交</span>
              <span className={styles.bnd}>保存</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
