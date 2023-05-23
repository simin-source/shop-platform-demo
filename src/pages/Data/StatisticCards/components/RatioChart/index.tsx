import React, { useEffect, useRef } from 'react';
import { Card } from 'antd';
import * as echarts from 'echarts';
import { useEmotionCss } from '@ant-design/use-emotion-css';

export type PieProps = {
    label: string;
    baseData: number[];
};

const RatioChart: React.FC<PieProps> = (props) => {
    const ref = useRef(null);
    let sum = 0;
    props.baseData.forEach(item => {
        sum = sum + item;
    })

    useEffect(() => {
        if (!ref.current) return;
        const chart = echarts.init(ref.current);
        const option = {
            color: '#FF798C',
            grid: {
                left: '5%',
                right: '5%',
                top: '20%',
                bottom: '0%',
                containLabel: true
            },
            xAxis: {
                axisLine: {
                    show: true,
                }, //轴线
                splitLine: {
                    show: false
                }, //分割线
                interval: 20,
            },
            yAxis: {
                // data:['1F','2F','3F','4F','5F'],
                data: props.baseData,
                axisLine: {
                    show: false,
                }, //轴线
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        width: 1,
                        color: '#000'
                    }
                }, //分割线
                // offset: 10,
            },
            series: [
                {
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: '#E9EEF4'
                        }
                    },
                    emphasis: {
                        disabled: true, //关闭hover高亮
                        focus: 'none',
                    },
                    barWidth: 12,
                    barGap: '-100%',
                    data: [100, 100, 100, 100, 100],
                    label: {
                        show: true,
                        position: 'right',
                        padding: [0, 410, 0, 0],
                        align: 'right',
                        formatter(params: { data: number, dataIndex: number }) {
                            switch (params.dataIndex) {
                                case 0:
                                    return '1F';
                                case 1:
                                    return '2F';
                                case 2:
                                    return '3F';
                                case 3:
                                    return '4F';
                                default:
                                    return '5F';
                            }
                        },
                        // color: '#8E8E8E',
                        fontSize: 12,
                    },
                },
                {
                    type: 'bar',
                    barWidth: 12,
                    data: props.baseData,
                    emphasis: {
                        disabled: true, //关闭hover高亮
                        focus: 'none',
                    },
                    label: {
                        show: true,
                        position: 'right',
                        padding: [0, -40, 0, 0],
                        align: 'right',
                        formatter(params: { data: number }) {
                            const percent = `${Number((params.data / sum) * 100).toFixed(2)}%`;
                            return percent;
                        },
                        // color: '#8E8E8E',
                        fontSize: 12,
                    },
                },
            ],
        };

        chart.setOption(option);
        return () => {
            chart.dispose(); // 组件卸载前销毁图表实例
        };
    }, []);

    const labelName = useEmotionCss(() => {
        return {
            width: '124px',
            height: '25px',
            background: '#397BF4',
            fontSize: '16px',
            fontWeight: 600,
            color: '#FFFFFF',
            lineHeight: '25px',
            textAlign: 'center',
            position: 'absolute',
            top: '16px',
            left: '0px',
        };
    });

    return (
        <Card style={{ width: '100%' }}>
            <div className={labelName}>{props.label}</div>
            <div ref={ref} style={{ width: 440, height: 280 }} />
        </Card>
    );
}

export default RatioChart;