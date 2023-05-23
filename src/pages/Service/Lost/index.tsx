import { ActionType, ModalForm, PageContainer, ProColumns, ProFormInstance, ProFormItem, ProFormRadio, ProFormText, ProTable } from "@ant-design/pro-components"
import { Button, Radio, Space, Table, } from "antd";
import { FormattedMessage } from '@umijs/max';
import { useRef, useState } from "react";
import { ExclamationCircleOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";
import moment from "moment";
import LostDetail from "./LostDetail";
import modal from "antd/es/modal";
import MyUpload from "@/components/MyUpload";

export interface lostStateType {
    isOpenDetail?: boolean;
}

export const LostContext = React.createContext({
    lostState: {} as lostStateType,
    setLostState: undefined as any
});

const handleDelete = async (key: number) => {
    modal.confirm({
        title: '是否删除该物品',
        icon: <ExclamationCircleOutlined />,
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
            console.log('删除' + key);
        }
    });
};

const lostEnum = {
    0: 'claimed',
    1: 'unclaimed',
};

const Lost: React.FC = () => {
    const roleRef = useRef<ActionType>();
    const modalFormRef = useRef<ProFormInstance>();
    const [key, setKey] = useState(Date.now()); // 初始化 key 值
    const [currentRow, setCurrentRow] = useState<API.LostListItem>();
    const [createModalOpen, handleModalOpen] = useState<boolean>(false);
    const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
    const [selectedRowKeys_, setSelectedRowKeys] = useState<string[]>(['1']);
    const [lostState, setLostState] = useState<lostStateType>({ isOpenDetail: false });

    const mocklist = [{
        key: '1',
        name: '手机',
        createTime: moment().format('YYYY.MM.DD'),
        status: lostEnum[0],
        logo: {
            uid: '1',
            name: '',
            url: ''
        }
    },
    {
        key: '2',
        name: '钱包',
        createTime: moment().format('YYYY.MM.DD'),
        status: lostEnum[1],
        logo: {
            uid: '2',
            name: '',
            url: ''
        }
    },
    {
        key: '3',
        name: '孩子',
        createTime: moment().format('YYYY.MM.DD'),
        status: lostEnum[0],
        logo: {
            uid: '3',
            name: '',
            url: ''
        }
    },] as API.LostListItem[];

    const columns: ProColumns<API.StoreListItem>[] = [
        {
            title: '物品名称',
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
            title: '创建时间',
            valueType: 'date',
            dataIndex: 'createTime',
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
            title: '状态',
            dataIndex: 'status',
            filters: true,
            onFilter: true,
            valueEnum: {
                claimed: { text: '已认领', status: 'Success' },
                unclaimed: { text: '未认领', status: 'Default' },
            },
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
                        setLostState({ isOpenDetail: true } as lostStateType);
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
        lostState.isOpenDetail && currentRow ? <LostContext.Provider value={{ lostState, setLostState }}>
            <LostDetail data={currentRow} />
        </LostContext.Provider> :
            <PageContainer
                header={{
                    title: '失物招领',
                    breadcrumb: {},
                }}
            >
                <ProTable<API.LostListItem, API.PageParams>
                    headerTitle="失物列表"
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
                    search={{
                        span: 6
                    }}
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
                    title='新建失物'
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
                        label='物品名称'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请输入物品名称！"),
                            },
                        ]}
                    />
                    <ProFormRadio.Group
                        name="status"
                        label='物品状态'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        rules={[{ required: true }]}
                    >
                        <Radio.Group name="status">
                            <Radio value='claimed'>已认领</Radio>
                            <Radio value='unclaimed'>未认领</Radio>
                        </Radio.Group>
                    </ProFormRadio.Group>
                    <ProFormItem
                        name="logo"
                        label='物品图片'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        rules={[
                            {
                                required: true,
                                message: ("请上传商场图片"),
                            },
                        ]}
                    >
                        <MyUpload isSingle={false} />
                    </ProFormItem>
                </ModalForm>
                <ModalForm
                    title='编辑失物'
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
                        label='物品名称'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请输入物品名称！"),
                            },
                        ]}
                    />
                    <ProFormRadio.Group
                        name="status"
                        label='物品状态'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        rules={[{ required: true }]}
                    >
                        <Radio.Group name="status">
                            <Radio value='claimed'>已认领</Radio>
                            <Radio value='unclaimed'>未认领</Radio>
                        </Radio.Group>
                    </ProFormRadio.Group>
                    <ProFormItem
                        name="logo"
                        label='物品图片'
                        rules={[
                            {
                                required: true,
                                message: ("请上传商场图片"),
                            },
                        ]}
                    >
                        <MyUpload isSingle={false} />
                    </ProFormItem>
                </ModalForm>
            </PageContainer>
    )
}

export default Lost;