import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { formatMessage } from 'umi-plugin-react/locale';
import axios from 'axios';
import { Table, Divider, Tag, Button } from 'antd';
import Mock from 'mockjs';
import { GridContent } from '@ant-design/pro-layout';
import style from './index.less';
let data = Mock.mock('/api/type', {
  'list|50-100': [
    {
      name: /[a-z][A-Z][0-9]/,
      datas: ['修改', ' 删除'],
    },
  ],
});

class index extends Component {
  state = {
    data: [],
  };

  render() {
    const { data } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 5 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 12 },
      },
    };
    const columns = [
      {
        key: '1',
        title: '分类',
        dataIndex: 'name',
      },
      {
        key: '2',
        title: '操作',
        dataIndex: 'datas',
        render: text => <a>{text}</a>,
      },
    ];
    return (
      <PageHeaderWrapper
        content={formatMessage({
          id: 'editor-flow.description',
          defaultMessage: 'description',
        })}
      >
        <GridContent>
          <div classname={style.wrap}>
            <div classname={style.top}>
              <div className={style.cont}>
                <Button type="primary" className={style.btn}>
                  +新建
                </Button>
                <Table columns={columns} className={style.table} dataSource={this.state.data} />
              </div>
            </div>
          </div>
        </GridContent>
      </PageHeaderWrapper>
    );
  }

  componentDidMount() {
    axios.get('/api/type').then(res => {
      console.log(res);
      this.setState({
        data: res.data.list,
      });
    });
  }
}

export default index;
