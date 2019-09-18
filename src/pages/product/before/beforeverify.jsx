import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Pagination } from 'antd';
import { Table, Button } from 'antd';
import mock from '../../../../mock/index';
import axios from 'axios';

class Beforeverify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      count: 0,
      arr: [],
    };
  }

  change = (page, pageSize) => {
    const newlist = Object.assign([], this.state.list);
    const arr = newlist.splice((page - 1) * pageSize, pageSize);
    const data = newlist;
    this.setState({ arr });
  };
  handleChange = (pagination, filters, sorter) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };
  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  };
  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: '课程名',
        dataIndex: 'type',
        key: 'type',
        sortOrder: sortedInfo.columnKey === 'type' && sortedInfo.order,
      },
      {
        title: '所属分类',
        dataIndex: 'name',
        key: 'name',
        filters: [{ text: 'J', value: 'J' }],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      },
      {
        title: '课程价格',
        dataIndex: 'price',
        key: 'price',
        sorter: (a, b) => a.price - b.price,
        sortOrder: sortedInfo.columnKey === 'price' && sortedInfo.order,
      },
      {
        title: '提交时间',
        dataIndex: 'time',
        key: 'time',
        sortOrder: sortedInfo.columnKey === 'time' && sortedInfo.order,
      },
      {
        title: '课程老师',
        dataIndex: 'teacher',
        key: 'teacher',
        sortOrder: sortedInfo.columnKey === 'teacher' && sortedInfo.order,
      },
      {
        title: '操作',
        dataIndex: 'status',
        key: 'status',
        sortOrder: sortedInfo.columnKey === 'status' && sortedInfo.order,
      },
    ];
    const { list, count } = this.state;
    let { arr } = this.state;
    arr = arr.length > 0 ? arr : Object.create(list).splice(0, 10);
    const data = arr;
    return (
      <div>
        <PageHeaderWrapper></PageHeaderWrapper>

        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          onChange={this.handleChange}
        />

        <Pagination
          size="small"
          total={count}
          showSizeChanger
          showQuickJumper
          onChange={(page, size) => {
            this.change(page, size);
          }}
          onShowSizeChange={(page, size) => {
            this.change(page, size);
          }}
        />
      </div>
    );
  }
  componentDidMount() {
    if (this.state.list.length === 0) {
      axios.get('/api/list').then(res => {
        if (res.status === 200) {
          this.setState({ list: res.data.list, count: res.data.list.length });
        }
      });
    }
  }
}

export default Beforeverify;
