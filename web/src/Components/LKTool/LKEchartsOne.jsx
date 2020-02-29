import React, { Component } from 'react';
import echarts from 'echarts';

class LKEchartsOne extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <div id="main1" style={{height:400}}></div>
        );
    }
    componentDidMount() {
        let main1 = echarts.init(document.getElementById('main1'));
        let option = {
            title: {
                text: '订单统计'
            },
            tooltip: {},
            legend: {
                data:['购买数量']
            },
            xAxis: {
                data: ["Web全栈","JavaEE","Python","React","Vue","Node"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [45, 10, 26, 29, 23, 33]
            }]
        };
        main1.setOption(option);
    }
}
 
export default LKEchartsOne;
