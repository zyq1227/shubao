import React, { Component } from 'react';
import { Card } from 'antd';
import styles from './style.less';

const tabList = [
  {
    key: 'tab1',
    tab: '详情',
  },
  {
    key: 'tab2',
    tab: '全部音频',
  },
];
const contentList = {
  tab1: (
    <table>
      <tbody>
        <tr>
          <td className={styles.tableTd}>课程名称：</td>
          <td className={styles.tableTd}>亲子1</td>
        </tr>
        <tr>
          <td className={styles.tableTd}>所属老师：</td>
          <td className={styles.tableTd}>张老师</td>
        </tr>
        <tr>
          <td className={styles.tableTd}>上架时间：</td>
          <td className={styles.tableTd}>2019.3.7</td>
        </tr>
        <tr>
          <td className={styles.tableTd}>销售数量：</td>
          <td className={styles.tableTd}>3000</td>
        </tr>
        <tr>
          <td className={styles.tableTd}>销售金额：</td>
          <td className={styles.tableTd}>13342</td>
        </tr>
        <tr>
          <td className={styles.tableTd}>老师分成：</td>
          <td className={styles.tableTd}>66333</td>
        </tr>
        <tr>
          <td className={styles.tableTd}>合伙人分成：</td>
          <td className={styles.tableTd}>6333</td>
        </tr>
      </tbody>
    </table>
  ),
  tab2: <p>content2</p>,
};

class Look extends Component {
  state = {
    key: 'tab1',
    noTitleKey: 'app',
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };
  render() {
    return (
      <div>
        <Card
          style={{ width: '100%' }}
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={key => {
            this.onTabChange(key, 'key');
          }}
        >
          {contentList[this.state.key]}
        </Card>
      </div>
    );
  }
}

export default Look;
