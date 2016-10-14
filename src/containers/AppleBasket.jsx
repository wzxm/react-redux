import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import AppleItem from '../components/AppleItem';
import actions from '../actions/appleActions';

class AppleBusket extends React.Component {
    render() {
        let { state, actions } = this.props;

        // 这部分从对应的 appleBasketReducer.js 中拷贝
        let mockState = {
            isPicking: false,
            newAppleId: 3,
            apples: [{
                id: 1,
                weight: 235,
                isEaten: true
            },{
                id: 2,
                weight: 256,
                isEaten: false
            }]
        };

        // 是否开启模拟数据的开关， 注释这行代码关闭模拟数据
        state = mockState;

        // 对 state 做显示级别的转化
        let stats = {
            appleNow: {
                quantity: 0,
                weight: 0
            },
            appleEaten: {
                quantity: 0,
                weight: 0
            }
        };

        state.apples.map(apple => {
            let selector = apple.isEaten ? 'appleEaten' : 'appleNow';
            stats[selector].quantity++;
            stats[selector].weight += apple.weight;
        });
        
        return (
            <div className="appleBusket">
                <div className="title">苹果篮子</div>

                <div className="stats">
                    <div className="section">
                        <div className="head">当前</div>
                        <div className="content">{stats.appleNow.quantity}个苹果，{stats.appleNow.weight}克</div>
                    </div>
                    <div className="section">
                        <div className="head">已吃掉</div>
                        <div className="content">{stats.appleEaten.quantity}个苹果，{stats.appleEaten.weight}克</div>
                    </div>
                </div>

                <div className="appleList">
                    { state.apples.map(apple => <AppleItem state = {apple} actions={{eatApple: actions.eatApple}} key={apple.id} />) }
                </div>

                <div className="btn-div">
                     <button onClick={actions.pickApple}>摘苹果</button>
                </div>

            </div>
        );
    }
}

function select(state) {
    return {
        state: state.appleBusket
    }
}

function buildActionDispatcher(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(select, buildActionDispatcher)(AppleBusket);