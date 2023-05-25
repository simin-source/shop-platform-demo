import React, { useEffect } from 'react';
import { Card } from 'antd';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { ProColumns, ProTable } from '@ant-design/pro-components';

export interface SortDataType {
    key: string;
    name: string;
    rentArea: number;
}

export type SortProps = {
    baseData: SortDataType[];
};

const SortCard: React.FC<SortProps> = (props) => {
    useEffect(() => {
    }, []);

    const numberStyle = useEmotionCss(() => {
        return {
            width: '24px',
            height: '24px',
            color: '#fff',
            fontWeight: "bold",
            background: '#FF9900',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            paddingTop: '2px',
            margin: '0 auto'
        };
    });
    const otherNumStyle = useEmotionCss(() => {
        return {
            width: '24px',
            height: '24px',
            color: '#fff',
            fontWeight: "bold",
            background: '#cccccc',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            paddingTop: '2px',
            margin: '0 auto'
        };
    });

    const tableStyle = useEmotionCss(() => {
        return {
            ".ant-table": {
                borderRadius: '8px',
            },
            ".ant-pro-card": {
                borderRadius: '8px',
            },
            ".ant-pro-card-body": {
                paddingInline: '0 !important',
                paddingBlock: '0',
            },
            "thead>tr>.ant-table-cell": {
                background: '#E9E9E9',
            },
            "table": {
                borderRadius: '0 0 8px 8px',
            }
        };
    });

    const columns: ProColumns<any>[] = [
        {
            title: '排序',
            dataIndex: 'key',
            width: 70,
            align: 'center',
            render: (dom, entity) => {
                console.log(dom === '1');
                return (
                    <div className={`${Number(dom) > 3 ? otherNumStyle : numberStyle}`}>
                        {dom}
                    </div>
                );
            },
        },
        {
            title: '业态',
            dataIndex: 'name',
            align: 'center',
            width: 70,
            render: (dom) => {
                return (<div>{dom}</div>);
            },
        },
        {
            title: '已出租面积（㎡）',
            dataIndex: 'rentArea',
            align: 'center',
            render: (dom) => {
                return (<div>{dom}</div>);
            },
        },
    ];
    return (
        <ProTable
            className={tableStyle}
            dataSource={props.baseData}
            options={false}
            search={false}
            pagination={false}
            columns={columns}
            scroll={{ y: 282 }}
        />
    );
}

export default SortCard;