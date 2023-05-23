import { PageContainer, ProDescriptions } from "@ant-design/pro-components"
import { Button } from "antd";
import { useContext } from "react";
import { ArrowLeftOutlined, } from "@ant-design/icons";
import { LostContext, lostStateType } from "..";

interface detailProps {
    data: API.LostListItem;
}

const LostDetail: React.FC<detailProps> = (props) => {
    const { setLostState } = useContext(LostContext);

    return (
        <PageContainer
            header={{
                title: '',
                breadcrumb: {},
            }}
            content={<Button type="primary" shape="circle" onClick={() => {
                setLostState({ isOpenDetail: false } as lostStateType)
            }}><ArrowLeftOutlined /></Button>}
        >
            <ProDescriptions
                title="物品详情"
                dataSource={props.data}
                columns={[
                    {
                        title: '物品名称',
                        key: 'name',
                        dataIndex: 'name',
                    },
                    {
                        title: '创建时间',
                        key: 'createTime',
                        valueType: 'date',
                        dataIndex: 'createTime',
                        
                    },
                    {
                        title: '状态',
                        key: 'status',
                        dataIndex: 'status',
                        valueEnum: {
                            claimed: { text: '已认领', status: 'Success' },
                            unclaimed: { text: '未认领', status: 'Default' },
                        },
                    },
                ]}
            >
            </ProDescriptions>
        </PageContainer>
    )
}

export default LostDetail;