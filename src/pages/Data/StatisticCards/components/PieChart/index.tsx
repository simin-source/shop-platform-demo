import React, { useEffect, useRef, useState } from 'react';
import { Card, Select } from 'antd';
import * as echarts from 'echarts';
import { useEmotionCss } from '@ant-design/use-emotion-css';

export interface PieDataType {
    color: string;
    name: string;
    proportion: number;
}

const getData = (data: PieDataType[]) => {
    const temp = data?.map(item => {
        return {
            value: item.proportion,
            name: item.name,
        };
    });
    return temp;
}

const getColor = (data: PieDataType[]) => {
    const temp = data?.map(item => {
        return item.color;
    });
    return temp;
}

export type PieProps = {
    label: string;
    baseData: PieDataType[];
};

const PieChart: React.FC<PieProps> = (props) => {
    const ref = useRef(null);
    const [pieData, setPieData] = useState<PieDataType[]>(props.baseData);
    const [floor, setFloor] = useState<string>('-1');

    useEffect(() => {
        if (!ref.current) return;
        const chart = echarts.init(ref.current);
        const option = {
            tooltip: {
                trigger: 'item',
            },
            legend: {
                top: 90,
                orient: 'vertical',
                itemWidth: 14,
                itemHeight: 14,
                icon: 'circle',
                textStyle: {
                    fontSize: 13,
                    lineHeight: 18,
                },
            },
            color: getColor(pieData),
            series: [
                {
                    name: props.label,
                    type: 'pie',
                    radius: ['65%', '100%'], // 内半径，外半径
                    top: 70,
                    width: 185,
                    height: 185,
                    avoidLabelOverlap: false,
                    clockwise: false, //刻度方向，是否顺时针
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    data: getData(pieData),
                },
            ],
        };

        chart.setOption(option);
        return () => {
            chart.dispose(); // 组件卸载前销毁图表实例
        };
    }, [floor]);

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

    const selectName = useEmotionCss(() => {
        return {
            width: '120px',
            margin: '0 10px',
            position: 'absolute',
            right: 0,
            top: '16px',
            zIndex: 2,
        };
    });

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
        setFloor(value);
        setPieData([{
            color: '#4FB5FF',
            name: '珠宝',
            proportion: 12,
        }, {
            color: '#FFC542',
            name: '化妆品',
            proportion: 23,
        }, {
            color: '#FF7474',
            name: '女装',
            proportion: 60,
        }, {
            color: '#52D350',
            name: '餐饮',
            proportion: 21,
        }, {
            color: '#8167F5',
            name: '运动休闲',
            proportion: 45,
        }]);
    };

    return (
        <Card style={{ width: '100%' }}>
            <div className={labelName}>{props.label}</div>
            <Select
                defaultValue='-1'
                className={selectName}
                onChange={handleChange}
                options={[
                    { value: '-1', label: '全部楼层' },
                    { value: '0', label: '1F' },
                    { value: '1', label: '2F' },
                    { value: '2', label: '3F' },
                    { value: '3', label: '4F' },
                ]}
            />
            <div ref={ref} style={{ width: 540, height: 280 }} />
        </Card>
    );
}

export default PieChart;