import { ActionType, ModalForm, PageContainer, ProColumns, ProFormInstance, ProFormRadio, ProFormSelect, ProFormText, ProTable } from "@ant-design/pro-components"
import { Button, Checkbox, Col, message, Radio, Row, Space, Table } from "antd";
import { FormattedMessage } from '@umijs/max';
import { addRole, getRole, updateRole } from "@/services/ant-design-pro/api";
import { useContext, useRef, useState } from "react";
import { ExclamationCircleOutlined, PlusOutlined } from "@ant-design/icons";
import modal from "antd/es/modal";
import StoreDetail from "./StoreDetail";
import React from "react";

const handleAdd = async (fields: API.StoreListItem) => {
    const hide = message.loading('正在添加');
    try {
        await addRole({ ...fields });
        hide();
        message.success('Added successfully');
        return true;
    } catch (error) {
        hide();
        message.error('Adding failed, please try again!');
        return false;
    }
};

const handleUpdate = async (fields: API.StoreListItem) => {
    const hide = message.loading('Configuring');
    try {
        await updateRole({
            name: fields.name,
        });
        hide();

        message.success('Configuration is successful');
        return true;
    } catch (error) {
        hide();
        message.error('Configuration failed, please try again!');
        return false;
    }
};

const handleDelete = async (key: number) => {
    modal.confirm({
        title: '是否删除该店铺',
        icon: <ExclamationCircleOutlined />,
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
            console.log('删除' + key);
        }
    });
};

const rentEnum = {
    0: 'prepare',
    1: 'process',
    2: 'complete',
};
const welfareEnum = {
    0: 'no',
    1: 'yes',
};

export interface storeStateType {
    isOpenDetail?: boolean;
}

export const StoreContext = React.createContext({
    storeState: {} as storeStateType,
    setStoreState: undefined as any
});

const StoreList: React.FC = () => {
    const roleRef = useRef<ActionType>();
    const modalFormRef = useRef<ProFormInstance>();
    const [key, setKey] = useState(Date.now()); // 初始化 key 值
    const [currentRow, setCurrentRow] = useState<API.StoreListItem>();
    const [createModalOpen, handleModalOpen] = useState<boolean>(false);
    const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
    // const [allRowKeys, setAllRowKeys] = useState<string[]>([]);
    const [selectedRowKeys_, setSelectedRowKeys] = useState<string[]>(['0001']);

    const [storeState, setStoreState] = useState<storeStateType>({ isOpenDetail: false });

    const mocklist = [{ code: '0001', name: '店铺1', floor: '1F', rentStatus: rentEnum[0], welfareStatus: welfareEnum[0], industry: '服装' },
    { code: '0002', name: '店铺2', floor: '2F', rentStatus: rentEnum[1], welfareStatus: welfareEnum[0], industry: '健身' },
    { code: '0003', name: '店铺3', floor: '3F', rentStatus: rentEnum[2], welfareStatus: welfareEnum[1], industry: '美妆' }] as API.StoreListItem[];

    const columns: ProColumns<API.StoreListItem>[] = [
        {
            title: '店铺编号',
            search: false,
            dataIndex: 'code',
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
            title: '店铺名称',
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
            title: '所属楼层',
            dataIndex: 'floor',
            filters: true,
            onFilter: true,
            valueEnum: {
                '1F': { text: '1F', },
                '2F': { text: '2F', },
                '3F': { text: '3F', },
                '4F': { text: '4F', },
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
            title: '出租状态',
            dataIndex: 'rentStatus',
            filters: true,
            onFilter: true,
            valueEnum: {
                complete: { text: '已出租', status: 'Success' },
                prepare: { text: '未出租', status: 'Default' },
                process: { text: '将到期', status: 'Processing' },
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
            title: '福利状态',
            dataIndex: 'welfareStatus',
            filters: true,
            onFilter: true,
            valueEnum: {
                yes: { text: '已配置', status: 'Success' },
                no: { text: '未配置', status: 'Error' },
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
            title: '业态类型',
            dataIndex: 'industry',
            filters: true,
            onFilter: true,
            valueEnum: {
                '服装': { text: '服装', },
                '健身': { text: '健身', },
                '美妆': { text: '美妆', },
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
                        setStoreState({ isOpenDetail: true } as storeStateType);
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
        storeState.isOpenDetail && currentRow ? <StoreContext.Provider value={{ storeState, setStoreState }}>
            <StoreDetail data={currentRow} />
        </StoreContext.Provider> :
            <PageContainer
                header={{
                    title: '店铺列表',
                    breadcrumb: {},
                }}
            >
                <ProTable<API.StoreListItem, API.PageParams>
                    headerTitle="店铺列表"
                    // request={getRole}
                    request={(params, sorter, filter) => {
                        // 表单搜索项会从 params 传入，传递给后端接口。
                        console.log(params, sorter, filter);
                        // setAllRowKeys(mocklist.map(item => item.code) as string[]);
                        return Promise.resolve({
                            data: mocklist,
                            success: true,
                        });
                    }}
                    actionRef={roleRef}
                    search={{
                        span: 7
                    }}
                    options={false}
                    rowKey='code'
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
                    tableAlertRender={({
                        selectedRowKeys,
                    }) => {
                        return (
                            <Space size={16}>
                                <span>已选 {selectedRowKeys.length} 项</span>
                                <span>
                                    <a style={{ marginInlineStart: 8 }} onClick={() => {
                                        setSelectedRowKeys([]);
                                    }}>
                                        取消选择
                                    </a>
                                </span>
                                {/* <span>
                                    <a style={{ marginInlineStart: 8 }} onClick={() => {
                                        setSelectedRowKeys(allRowKeys.filter(item => !selectedRowKeys.includes(item)));
                                    }}>
                                        反选
                                    </a>
                                </span> */}
                            </Space>
                        );
                    }}
                    tableAlertOptionRender={() => {
                        return (
                            <Space size={16}>
                                <a>批量删除</a>
                                <a>导出数据</a>
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
                    title='新店铺'
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
                        label='店铺名称'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请输入店铺名称！"),
                            },
                        ]}
                    />
                    <ProFormSelect
                        name="floor"
                        label='楼层'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请选择楼层！"),
                            },
                        ]}
                        valueEnum={{
                            '1F': { text: '1F', },
                            '2F': { text: '2F', },
                            '3F': { text: '3F', },
                            '4F': { text: '4F', },
                        }}
                    />
                    <ProFormSelect
                        name="industry"
                        label='业态类型'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[{ required: true }]}
                        valueEnum={{
                            '服装': { text: '服装', },
                            '健身': { text: '健身', },
                            '美妆': { text: '美妆', },
                        }}
                    />
                    <ProFormRadio.Group
                        name="rentStatus"
                        label='出租状态'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        rules={[{ required: true }]}
                    >
                        <Radio.Group name="rentStatus">
                            <Radio value='prepare'>未出租</Radio>
                            <Radio value='process'>将到期</Radio>
                            <Radio value='complete'>已出租</Radio>
                        </Radio.Group>
                    </ProFormRadio.Group>
                    <ProFormRadio.Group
                        name="welfareStatus"
                        label='福利状态'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        rules={[{ required: true }]}
                    >
                        <Radio.Group name="welfareStatus">
                            <Radio value='no'>未配置</Radio>
                            <Radio value='yes'>已配置</Radio>
                        </Radio.Group>
                    </ProFormRadio.Group>
                </ModalForm>
                <ModalForm
                    title='更新店铺'
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
                        label='店铺名称'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请输入店铺名称！"),
                            },
                        ]}
                    />
                    <ProFormSelect
                        name="floor"
                        label='楼层'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请选择楼层！"),
                            },
                        ]}
                        valueEnum={{
                            '1F': { text: '1F', },
                            '2F': { text: '2F', },
                            '3F': { text: '3F', },
                            '4F': { text: '4F', },
                        }}
                    />
                    <ProFormSelect
                        name="industry"
                        label='业态类型'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[{ required: true }]}
                        valueEnum={{
                            '服装': { text: '服装', },
                            '健身': { text: '健身', },
                            '美妆': { text: '美妆', },
                        }}
                    />
                    <ProFormRadio.Group
                        name="rentStatus"
                        label='出租状态'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        rules={[{ required: true }]}
                    >
                        <Radio.Group name="rentStatus">
                            <Radio value='prepare'>未出租</Radio>
                            <Radio value='process'>将到期</Radio>
                            <Radio value='complete'>已出租</Radio>
                        </Radio.Group>
                    </ProFormRadio.Group>
                    <ProFormRadio.Group
                        name="welfareStatus"
                        label='福利状态'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        rules={[{ required: true }]}
                    >
                        <Radio.Group name="welfareStatus">
                            <Radio value='no'>未配置</Radio>
                            <Radio value='yes'>已配置</Radio>
                        </Radio.Group>
                    </ProFormRadio.Group>
                </ModalForm>
            </PageContainer>
    )
}

export default StoreList;