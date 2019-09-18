import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { formatMessage } from 'umi-plugin-react/locale';
import axios from 'axios';
import { Table, Divider, Tag, Button } from 'antd';
import Mock from 'mockjs';

let data = Mock.mock('/api/type', {
  'list|50-100': [
    {
      name: /[a-z][A-Z][0-9]/,
      datas: ['修改', '删除'],
    },
  ],
});

class index extends Component {
  state = {
    data: [],
  };

  render() {
    const { data } = this.state;
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
      },
    ];
    return (
      <PageHeaderWrapper
        content={formatMessage({
          id: 'editor-flow.description',
          defaultMessage: 'description',
        })}
      >
        <div classname="wrap">
          <div classname="top">
            <div className="cont">
              <Button type="primary">+新建</Button>
              <Table columns={columns} dataSource={this.state.data} />
            </div>
          </div>
        </div>
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
