import { PageContainer, ProDescriptions } from "@ant-design/pro-components"
import { Button, Switch } from "antd";
import { useContext } from "react";
import { ArrowLeftOutlined, } from "@ant-design/icons";
import { WifiContext, wifiStateType } from "..";

interface detailProps {
    data: API.WifiListItem;
}

const WifiDetail: React.FC<detailProps> = (props) => {
    const { setWifiState } = useContext(WifiContext);

    return (
        <PageContainer
            header={{
                title: '',
                breadcrumb: {},
            }}
            content={<Button type="primary" shape="circle" onClick={() => {
                setWifiState({ isOpenDetail: false } as wifiStateType)
            }}><ArrowLeftOutlined /></Button>}
        >
            <ProDescriptions
                title="Wifi详情"
                dataSource={props.data}
                columns={[
                    {
                        title: 'WiFi名称',
                        key: 'name',
                        dataIndex: 'name',
                        ellipsis: true,
                        copyable: true,
                    },
                    {
                        title: 'WiFi密码',
                        key: 'wifiPasswd',
                        dataIndex: 'wifiPasswd',
                        ellipsis: true,
                        copyable: true,
                    },
                    {
                        title: '显示/隐藏',
                        key: 'visible',
                        dataIndex: 'visible',
                        render: (dom) => {
                            return <Switch style={{ marginTop: '2px' }} size="small" disabled={false} checked={dom ? true : false} />
                        }
                    },
                ]}
            >
            </ProDescriptions>
        </PageContainer>
    )
}

export default WifiDetail;