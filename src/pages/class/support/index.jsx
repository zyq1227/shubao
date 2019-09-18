
import React, { Component } from 'react';
import {Table, Col, Row ,Input ,Select ,Button} from 'antd';
import GGEditor, { Mind } from 'gg-editor';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less';
GGEditor.setTrackable(false);
const { Option } = Select;
let list = require('../../../../mock/support.json')

class index extends Component {
    state={
        inoutStyle:{//input的css样式
            width: '26%',
            margin: '8px'
        },
        data:[],
        columns :[
            { title: '老师编号', dataIndex: 'callNo', key: 'callNo'},
            { title: '姓名', dataIndex: 'name', key: 'name' },
            { title: '手机号', dataIndex: 'updatedAt', key: 'updatedAt',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.updatedAt - b.updatedAt, },
            { title: '所在地', dataIndex: 'createdAt', key: 'createdAt' ,
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.createdAt - b.createdAt,},
            { title: '课程数', dataIndex: 'progress', key: 'progress' ,
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.progress - b.progress,},
            { title: '交易额', dataIndex: 'progress', key: 'status' ,
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.status - b.status,},
            { title: '状态', key:"key" , filters: [
                {
                  text: '正常',
                  value: '正常',
                },
                {
                  text: '禁用',
                  value: '禁用',
                },{
                    text: '正常1',
                    value: '正常1',
                  },
                  {
                    text: '禁用1',
                    value: '禁用1',
                  }
              ],
             onFilter: (value, record) => record.name.indexOf(value) === 0,
              sorter: (a, b) => a.name.length - b.name.length,
              sortDirections: ['descend'],
              render:(e)=><p style={{"display":"flex","justifyContent": "spaceAround","alignItems": "center"}}>
                    <span 
                    style={e.disabled?{"width":"10px","height":"10px","borderRadius":"50%","background": "darkseagreen"}:{"width":"10px","height":"10px","borderRadius":"50%","background": "deepskyblue"}}></span>
                    <b>{e.disabled?"正常":"禁用"}</b>
               </p>},
            { title: '操作', key: 'operation', render: (e) => <p>
                <a style={{marginLeft:"3px"}} onClick={()=>{

                }}>查看</a>
                <a style={{marginLeft:"3px"}}  onClick={()=>{
                    
                }}>编辑</a>
                <a style={{marginLeft:"3px"}}  onClick={()=>{
                    
                }}>禁用</a>
            </p> },
        ],
    }
    // ==========select
    onChange(value) {
        console.log(`selected ${value}`);
      }
      
    onBlur() {
        console.log('blur');
      }
      
    onFocus() {
        console.log('focus');
      }
      
    onSearch(val) {
        console.log('search:', val);
      }
    //   ============
    render() {
        console.log(list,'data')
        return (
            <PageHeaderWrapper>
                <GGEditor className={styles.editor} style={{width:"100%"}}>

                    <div className={styles.navLxt}>

                        <div style={{width: '95%',margin:'0 auto'}}>
                            <b style={{ marginRight: '3px'}}>姓名:</b><Input style={this.state.inoutStyle} placeholder="请输入" />
                            <b style={{ marginRight: '3px'}}>手机号:</b><Input style={this.state.inoutStyle} placeholder="请输入"/>
                            <b style={{ marginRight: '3px'}}>老师编号:</b><Input style={this.state.inoutStyle} placeholder="请输入"/>
                        </div>

                       <div style={{width: '95%',margin:'0 auto'}}>
                            <b style={{ marginRight: '3px'}}>所在地:</b> <Select
                                showSearch
                                style={{ width: '240px' ,margin: '8px'}}
                                placeholder="请选择"
                                optionFilterProp="children"
                                onChange={this.onChange}
                                onFocus={this.onFocus}
                                onBlur={this.onBlur}
                                onSearch={this.onSearch}
                                filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="关闭">关闭</Option>
                                <Option value="运行中">运行中</Option>
                            </Select>
                        </div>

                        <div style={{width: '95%',margin:'15px auto'}}>
                            <Button style={{ marginRight: '20px'}} type="primary">查询</Button>
                            <Button style={{ marginRight: '20px'}} >重置</Button>
                            <Button style={{ width: '80px' , marginRight: '20px'}} type="primary"><b>＋</b>新建</Button>
                        </div>

                    </div>
                    
                    <Table style={{background:"#fff"}} columns={this.state.columns} dataSource={this.state.data}/>
                </GGEditor>
            </PageHeaderWrapper>
        );
    }
    componentDidMount(){
        this.setState({data:list})
    }
}

export default index;