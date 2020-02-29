import React, { Component } from 'react';
import echarts from 'echarts';

class LKEchartsTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <div id="main2" style={{height:400}}></div>
        );
    }
    componentDidMount() {
        let main2 = echarts.init(document.getElementById('main2'));
        let option2 = {
            title : {
                text: '付费订单统计',
                subtext: '最近7天',
                x:'right',
                y:'bottom'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                x : 'left',
                data:['Chrome','Firefox','Safari','IE9+','IE8-']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : false,
            series : (function (){
                let series = [];
                for (let i = 0; i < 30; i++) {
                    series.push({
                        name:'付费订单统计',
                        type:'pie',
                        itemStyle : {normal : {
                                label : {show : i > 28},
                                labelLine : {show : i > 28, length:20}
                            }},
                        radius : [i * 4 + 40, i * 4 + 43],
                        data:[
                            {value: i * 128 + 80,  name:'Java'},
                            {value: i * 64  + 160,  name:'Web'},
                            {value: i * 32  + 320,  name:'Python'},
                            {value: i * 16  + 640,  name:'Node'},
                            {value: i * 8  + 1280, name:'大数据+'}
                        ]
                    })
                }
                series[0].markPoint = {
                    symbol:'emptyCircle',
                    symbolSize:series[0].radius[0],
                    effect:{show:true,scaleSize:12,color:'rgba(250,225,50,0.8)',shadowBlur:10,period:30},
                    data:[{x:'50%',y:'50%'}]
                };
                return series;
            })()
        };
        main2.setOption(option2);
    }
}
 
export default LKEchartsTwo;