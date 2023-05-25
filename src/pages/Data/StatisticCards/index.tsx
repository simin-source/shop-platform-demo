import { StatisticCard } from '@ant-design/pro-components';
import { Col, Row } from 'antd';
import RcResizeObserver from 'rc-resize-observer';
import { useState } from 'react';
import PieChart, { PieDataType } from './components/PieChart';
import RatioChart from './components/RatioChart';
import SortCard from './components/SortCard';

const { Statistic } = StatisticCard;

const StatisticCards: React.FC = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
        <StatisticCard
          style={{ borderLeft: '5px solid #FB6260' }}
          statistic={{
            title: '总铺位面积（平方米）',
            value: 19000,
            valueStyle: {
              fontWeight: 'bold'
            },
            style: {
              height: '90px'
            }
          }}
        />
        <StatisticCard
          style={{ borderLeft: '5px solid #0099FF' }}
          statistic={{
            title: '已租面积（平方米）',
            value: 1000,
            valueStyle: {
              fontWeight: 'bold'
            },
            description: (
              <Statistic title="月同比" value="10%" trend="up" />
            ),
            style: {
              height: '90px'
            }
          }}
        />
        <StatisticCard
          style={{ borderLeft: '5px solid #8167F5' }}
          statistic={{
            title: '未租面积（平方米）',
            value: 200000,
            valueStyle: {
              fontWeight: 'bold'
            },
            description: (
              <Statistic title="月同比" value="10%" trend="up" />
            ),
            style: {
              height: '90px'
            }
          }}
        />
        <StatisticCard
          style={{ borderLeft: '5px solid #52D350' }}
          statistic={{
            title: '总铺位数',
            value: 15000,
            valueStyle: {
              fontWeight: 'bold'
            },
            style: {
              height: '90px'
            }
          }}
        />
        <StatisticCard
          style={{ borderLeft: '5px solid #FFC542' }}
          statistic={{
            title: '入住率',
            value: '54%',
            valueStyle: {
              fontWeight: 'bold'
            },
            style: {
              height: '90px'
            }
          }} />
      </StatisticCard.Group>
      <Row gutter={[16, 24]} justify="space-between" style={{ marginTop: '10px' }}>
        <Col className="gutter-row" span={10}>
          <RatioChart
            label="各楼层入驻率"
            baseData={[30, 50, 80, 70, 30] as number[]}
          />
        </Col>
        <Col className="gutter-row" span={8}>
          <PieChart
            label="各楼层业态分布"
            baseData={[{
              color: '#4FB5FF',
              name: '珠宝',
              proportion: 65,
            }, {
              color: '#FFC542',
              name: '化妆品',
              proportion: 45,
            }, {
              color: '#FF7474',
              name: '女装',
              proportion: 45,
            }, {
              color: '#52D350',
              name: '餐饮',
              proportion: 45,
            }, {
              color: '#8167F5',
              name: '运动休闲',
              proportion: 45,
            },] as PieDataType[]} />
        </Col>
        <Col className="gutter-row" span={6}>
          <SortCard baseData={[{ key: '1', name: '餐饮', rentArea: 100 },
          { key: '2', name: '女装', rentArea: 100 },
          { key: '3', name: '鞋包', rentArea: 100 },
          { key: '4', name: '鞋包', rentArea: 100 },
          { key: '5', name: '化妆品', rentArea: 100 },
          { key: '6', name: '运动', rentArea: 100 },
          { key: '7', name: '化妆品', rentArea: 100 },]} />
        </Col>
      </Row>
      {/* <ProCard
        // title="数据概览"
        // extra="2019年9月28日 星期五"
        // headerBordered
        split={responsive ? 'horizontal' : 'vertical'}
        bordered
        style={{ marginTop: '10px' }}
      >
        <ProCard split="horizontal">
          <ProCard split="vertical">
            <PieChart
              label="各楼层业态分布"
              baseData={[{
                color: '#4FB5FF',
                name: '珠宝',
                proportion: 65,
              }, {
                color: '#FFC542',
                name: '化妆品',
                proportion: 45,
              }, {
                color: '#FF7474',
                name: '女装',
                proportion: 45,
              }, {
                color: '#52D350',
                name: '餐饮',
                proportion: 45,
              }, {
                color: '#8167F5',
                name: '运动休闲',
                proportion: 45,
              }] as PieDataType[]} />
          </ProCard>
        </ProCard>
      </ProCard> */}
    </RcResizeObserver>
  );
};

export default StatisticCards;
