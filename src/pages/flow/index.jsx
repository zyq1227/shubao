import React, { Component } from 'react';
import './mock/mock';
import axios from 'axios';
import styles from './index.less';

export default class index extends Component {
    state = {
        list: []
    }
    render() {
        let { list } = this.state;
        return (
            <div className={styles.flow}>
                {
                    list && list.map((item, index) => {
                       return <div className={styles.con} key={index}>
                            <h4 className={styles.h3}>{item.name}</h4>
                            <div className={styles.bord}>
                                {
                                    item.icon.map((val,i)=>{
                                        return <div className={styles.bort}
                                        key={i}
                                        >
                                            <h3 className={styles.h4s}>{val.title}</h3>
                                            <p className={styles.p}>{val.count}</p>
                                        </div>
                                    })
                                }
                                
                                
                            </div>
                        </div>
                    })
                }

            </div>
        )
    }

    componentDidMount() {
        axios.get('/api/list').then((res) => {
            this.setState({
                list: res.data.data
            })
        })
    }
}
