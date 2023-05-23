import { ActionType, ModalForm, PageContainer, ProColumns, ProFormInstance, ProFormText, ProTable } from "@ant-design/pro-components"
import { Button, Space, Switch, Table } from "antd";
import { FormattedMessage } from '@umijs/max';
import { useRef, useState } from "react";
import { ExclamationCircleOutlined, PlusOutlined } from "@ant-design/icons";
import modal from "antd/es/modal";
import React from "react";
import WifiDetail from "./WifiDetail";

export interface wifiStateType {
    isOpenDetail?: boolean;
}

export const WifiContext = React.createContext({
    wifiState: {} as wifiStateType,
    setWifiState: undefined as any
});

const handleDelete = async (key: number) => {
    modal.confirm({
        title: '是否删除该WiFi',
        icon: <ExclamationCircleOutlined />,
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
            console.log('删除' + key);
        }
    });
};

const Wifi: React.FC = () => {
    const roleRef = useRef<ActionType>();
    const modalFormRef = useRef<ProFormInstance>();
    const [key, setKey] = useState(Date.now()); // 初始化 key 值
    const [currentRow, setCurrentRow] = useState<API.WifiListItem>();
    const [createModalOpen, handleModalOpen] = useState<boolean>(false);
    const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
    const [selectedRowKeys_, setSelectedRowKeys] = useState<string[]>(['1']);
    const [wifiState, setWifiState] = useState<wifiStateType>({ isOpenDetail: false });
    const mocklist = [{ key: '1', name: 'wasdasdad', wifiPasswd: '123123123', visible: true },
    { key: '2', name: 'asdasdasd', wifiPasswd: '123123123', visible: false },
    { key: '3', name: 'asdcxzvvcx', wifiPasswd: '123123123', visible: true },] as API.WifiListItem[];

    const columns: ProColumns<API.WifiListItem>[] = [
        {
            title: 'WiFi名称',
            dataIndex: 'name',
            render: (dom, entity) => {
                return (
                    <div
                        onClick={() => {
                            setCurrentRow(entity);
                        }}
                    >
                        {dom}
                    </div>
                );
            },
        },
        {
            title: 'WiFi密码',
            dataIndex: 'wifiPasswd',
            search: false,
            render: (dom, entity) => {
                return (
                    <div
                        onClick={() => {
                            setCurrentRow(entity);
                        }}
                    >
                        {dom}
                    </div>
                );
            },
        },
        {
            title: '显示/隐藏',
            dataIndex: 'visible',
            search: false,
            render: (dom, entity) => {
                return (
                    <div
                        onClick={() => {
                            setCurrentRow(entity);
                        }}
                    >
                        <Switch size="small" disabled={false} checked={dom ? true : false} />
                    </div>
                );
            },
        },
        {
            title: '操作',
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record: any) => [
                <a
                    onClick={() => {
                        console.log(record);
                        handleUpdateModalOpen(true);
                        setCurrentRow(record);
                    }}
                >
                    编辑
                </a>,
                <a
                    onClick={() => {
                        setCurrentRow(record);
                        setWifiState({ isOpenDetail: true } as wifiStateType);
                    }}
                >
                    详情
                </a>,
                <a
                    onClick={() => {
                        handleDelete(record.key)
                    }}
                >
                    删除
                </a>,
            ],
        }
    ];

    return (
        wifiState.isOpenDetail && currentRow ? <WifiContext.Provider value={{ wifiState, setWifiState }}>
            <WifiDetail data={currentRow} />  </WifiContext.Provider> :
            <PageContainer
                header={{
                    title: '商场WIFI管理',
                    breadcrumb: {},
                }}
            >
                <ProTable<API.WifiListItem, API.PageParams>
                    headerTitle="WiFi列表"
                    // request={getRole}
                    request={(params, sorter, filter) => {
                        // 表单搜索项会从 params 传入，传递给后端接口。
                        console.log(params, sorter, filter);
                        return Promise.resolve({
                            data: mocklist,
                            success: true,
                        });
                    }}
                    actionRef={roleRef}
                    options={false}
                    rowSelection={{
                        type: 'checkbox',
                        selections: [
                            Table.SELECTION_ALL,
                            Table.SELECTION_INVERT,
                            Table.SELECTION_NONE,
                            {
                                key: 'odd',
                                text: 'Select Odd Row',
                                onSelect: (changeableRowKeys) => {
                                    let newSelectedRowKeys = [];
                                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                                        if (index % 2 !== 0) {
                                            return false;
                                        }
                                        return true;
                                    });
                                    setSelectedRowKeys(newSelectedRowKeys as string[]);
                                },
                            },
                            {
                                key: 'even',
                                text: 'Select Even Row',
                                onSelect: (changeableRowKeys) => {
                                    let newSelectedRowKeys = [];
                                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                                        if (index % 2 !== 0) {
                                            return true;
                                        }
                                        return false;
                                    });
                                    setSelectedRowKeys(newSelectedRowKeys as string[]);
                                },
                            },
                        ],
                        selectedRowKeys: selectedRowKeys_,
                        onChange: (newSelectedRowKeys: React.Key[]) => {
                            setSelectedRowKeys(newSelectedRowKeys as string[]);
                        }
                    }}
                    tableAlertOptionRender={() => {
                        return (
                            <Space size={16}>
                                <a>批量删除</a>
                            </Space>
                        );
                    }}
                    toolBarRender={() => [
                        <Button
                            type="primary"
                            key="primary"
                            onClick={() => {
                                handleModalOpen(true);
                            }}
                        >
                            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="New" />
                        </Button>,
                    ]}
                    columns={columns}
                />
                <ModalForm
                    title='新建WiFi'
                    width="420px"
                    layout='horizontal'
                    labelAlign="left"
                    formRef={modalFormRef}
                    open={createModalOpen}
                    onOpenChange={handleModalOpen}
                    onFinish={async (value) => {
                        console.log(value);
                        // const success = await handleAdd(value as API.RoleListItem);
                        // if (success) {
                        handleModalOpen(false);
                        modalFormRef.current?.resetFields();
                        // }
                    }}
                >
                    <ProFormText
                        name="name"
                        label='WiFi名称'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请输入WiFi名称！"),
                            },
                        ]}
                    />
                    <ProFormText
                        name="wifiPasswd"
                        label='WiFi密码'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请输入WiFi密码！"),
                            },
                        ]}
                    />
                </ModalForm>
                <ModalForm
                    title='编辑WiFi'
                    width="420px"
                    layout='horizontal'
                    labelAlign="left"
                    style={{ display: `${updateModalOpen ? 'block' : 'none'}` }}
                    open={updateModalOpen}
                    key={key} //设置key，新的key值会触发React卸载并重新挂载组件
                    onOpenChange={(value) => {
                        if (!value) {
                            handleUpdateModalOpen(false)
                            setCurrentRow(undefined);
                            setKey(Date.now());
                        }
                    }}
                    initialValues={currentRow}
                    onFinish={async (value) => {
                        console.log(value);
                        // const success = await handleUpdate(value);
                        // if (success) {
                        handleUpdateModalOpen(false);
                        setCurrentRow(undefined);
                        roleRef.current?.reload();
                        // }
                    }}
                >
                    <ProFormText
                        name="name"
                        label='WiFi名称'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请输入WiFi名称！"),
                            },
                        ]}
                    />
                    <ProFormText
                        name="wifiPasswd"
                        label='WiFi密码'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请输入WiFi密码！"),
                            },
                        ]}
                    />
                </ModalForm>
            </PageContainer>
    )
}

export default Wifi;

