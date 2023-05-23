import { PageContainer, ProDescriptions } from "@ant-design/pro-components"
import { Button } from "antd";
import { useContext } from "react";
import { ArrowLeftOutlined, } from "@ant-design/icons";
import { DepositContext, depositStateType } from "..";

interface detailProps {
    data: API.DepositListItem;
}

const DepositDetail: React.FC<detailProps> = (props) => {
    const { setDepositState } = useContext(DepositContext);

    return (
        <PageContainer
            header={{
                title: '',
                breadcrumb: {},
            }}
            content={<Button type="primary" shape="circle" onClick={() => {
                setDepositState({ isOpenDetail: false } as depositStateType)
            }}><ArrowLeftOutlined /></Button>}
        >
            <ProDescriptions
                title="柜机详情"
                dataSource={props.data}
                columns={[
                    {
                        title: '柜机编码',
                        key: 'cabinetCode',
                        dataIndex: 'cabinetCode',
                        ellipsis: true,
                        copyable: true,
                    },
                    {
                        title: '详细地址',
                        key: 'address',
                        dataIndex: 'address',
                    },
                    {
                        title: '设备型号',
                        key: 'deviceNum',
                        dataIndex: 'deviceNum',
                        ellipsis: true,
                        copyable: true,
                    },
                    {
                        title: '箱格',
                        key: 'boxNum',
                        dataIndex: 'boxNum',
                    },
                    {
                        title: '系统版本',
                        key: 'system',
                        dataIndex: 'system',
                    },
                    {
                        title: '箱门状态',
                        key: 'boxStatus',
                        dataIndex: 'boxStatus',
                    },
                    {
                        title: '柜机状态',
                        key: 'cabinetStatus',
                        dataIndex: 'cabinetStatus',
                    },
                ]}
            >
            </ProDescriptions>
        </PageContainer>
    )
}

export default DepositDetail;