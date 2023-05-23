import { PageContainer, ProDescriptions } from "@ant-design/pro-components"
import { Button } from "antd";
import { useContext } from "react";
import { ArrowLeftOutlined, } from "@ant-design/icons";
import { StoreContext, storeStateType } from "..";

interface detailProps {
    data: API.IndustryListItem;
}

const StoreDetail: React.FC<detailProps> = (props) => {
    const { setStoreState } = useContext(StoreContext);

    return (
        <PageContainer
            header={{
                title: '',
                breadcrumb: {},
            }}
            content={<Button type="primary" shape="circle" onClick={() => {
                setStoreState({ isOpenDetail: false } as storeStateType)
            }}><ArrowLeftOutlined /></Button>}
        >
            <ProDescriptions
                title="店铺详情"
                dataSource={props.data}
                editable={{
                    onSave: async (keypath, newInfo, oriInfo) => {
                        console.log(keypath, newInfo, oriInfo);
                        return true;
                    },
                }}
                columns={[
                    {
                        title: '店铺编号',
                        key: 'code',
                        dataIndex: 'code',
                    },
                    {
                        title: '店铺名称',
                        key: 'name',
                        dataIndex: 'name',
                        ellipsis: true,
                        copyable: true,
                    },
                    {
                        title: '所属楼层',
                        key: 'floor',
                        dataIndex: 'floor',
                    },
                    {
                        title: '出租状态',
                        valueType: 'select',
                        key: 'rentStatus',
                        dataIndex: 'rentStatus',
                        valueEnum: {
                            complete: { text: '已出租', status: 'Success' },
                            prepare: { text: '未出租', status: 'Default' },
                            process: { text: '将到期', status: 'Processing' },
                        },
                    },
                    {
                        title: '福利状态',
                        valueType: 'select',
                        key: 'welfareStatus',
                        dataIndex: 'welfareStatus',
                        valueEnum: {
                            yes: { text: '已配置', status: 'Success' },
                            no: { text: '未配置', status: 'Error' },
                        },
                    },
                    {
                        title: '所属楼层',
                        key: 'industry',
                        dataIndex: 'industry',
                    },
                ]}
            >
            </ProDescriptions>
            <ProDescriptions
                title="出租管理"
                dataSource={props.data}
                editable={{
                    onSave: async (keypath, newInfo, oriInfo) => {
                        console.log(keypath, newInfo, oriInfo);
                        return true;
                    },
                }}
                columns={[
                    {
                        title: '店铺出租状态',
                        key: 'rendStatus',
                        dataIndex: 'rendStatus',
                    },
                    {
                        title: '租期开始日期',
                        key: 'startTime',
                        dataIndex: 'startTime',
                    },
                    {
                        title: '租期到期日期',
                        key: 'endTime',
                        dataIndex: 'endTime',
                    },
                    {
                        title: '租期预警',
                        key: 'rendWarn',
                        dataIndex: 'rendWarn',
                    },
                    {
                        title: '租期到期前',
                        key: 'timeLimit',
                        dataIndex: 'timeLimit',
                    },
                ]}
            >
            </ProDescriptions>
            <ProDescriptions
                title="福利管理"
                dataSource={props.data}
                editable={{
                    onSave: async (keypath, newInfo, oriInfo) => {
                        console.log(keypath, newInfo, oriInfo);
                        return true;
                    },
                }}
                columns={[
                    {
                        title: '活动图片',
                        key: 'picture',
                        dataIndex: 'picture',
                    },
                    {
                        title: '活动简介',
                        key: 'introduction',
                        dataIndex: 'introduction',
                    },
                ]}
            >
            </ProDescriptions>
        </PageContainer>
    )
}

export default StoreDetail;