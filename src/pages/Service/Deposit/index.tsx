import { ActionType, ModalForm, PageContainer, ProColumns, ProFormInstance, ProFormSelect, ProFormText, ProTable } from "@ant-design/pro-components"
import { Button, Space, Table } from "antd";
import { FormattedMessage } from '@umijs/max';
import { useRef, useState } from "react";
import { ExclamationCircleOutlined, PlusOutlined } from "@ant-design/icons";
import modal from "antd/es/modal";
import React from "react";
import DepositDetail from "./DepositDetail";
import { MyIcon } from "@/components/Icon";

export interface depositStateType {
    isOpenDetail?: boolean;
}

export const DepositContext = React.createContext({
    depositState: {} as depositStateType,
    setDepositState: undefined as any
});

const handleDelete = async (key: number) => {
    modal.confirm({
        title: '是否删除该柜机',
        icon: <ExclamationCircleOutlined />,
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
            console.log('删除' + key);
        }
    });
};

const Deposit: React.FC = () => {

    const roleRef = useRef<ActionType>();
    const modalFormRef = useRef<ProFormInstance>();
    const [key, setKey] = useState(Date.now()); // 初始化 key 值
    const [currentRow, setCurrentRow] = useState<API.DepositListItem>();
    const [createModalOpen, handleModalOpen] = useState<boolean>(false);
    const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
    const [selectedRowKeys_, setSelectedRowKeys] = useState<string[]>(['1']);
    const [depositState, setDepositState] = useState<depositStateType>({ isOpenDetail: false });

    const mocklist = [{ key: '1', cabinetCode: 'MolinboxC903', address: '塔夫特大街市政厅大堂', deviceNum: 'DOSON 32', boxNum: '1/20', system: 'MoOS 1.0.1', boxStatus: '正常', cabinetStatus: '开通' },
    { key: '2', cabinetCode: 'MolinboxC903', address: '塔夫特大街市政厅大堂', deviceNum: 'DOSON 32', boxNum: '1/20', system: 'MoOS 1.0.1', boxStatus: '异常', cabinetStatus: '禁用' },
    { key: '3', cabinetCode: 'MolinboxC903', address: '塔夫特大街市政厅大堂', deviceNum: 'DOSON 32', boxNum: '1/20', system: 'MoOS 1.0.1', boxStatus: '正常', cabinetStatus: '启用' }] as API.DepositListItem[];

    const columns: ProColumns<API.DepositListItem>[] = [
        {
            title: '柜机编码',
            dataIndex: 'cabinetCode',
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
            title: '详细地址',
            dataIndex: 'address',
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
            title: '设备型号',
            dataIndex: 'deviceNum',
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
            title: '箱格',
            dataIndex: 'boxNum',
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
            title: '系统版本',
            dataIndex: 'system',
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
            title: '箱门状态',
            dataIndex: 'boxStatus',
            filters: true,
            onFilter: true,
            valueEnum: {
                '正常': { text: '正常', status: 'Success' },
                '异常': { text: '异常', status: 'Error' },
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
            title: '柜机状态',
            dataIndex: 'cabinetStatus',
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
                        setDepositState({ isOpenDetail: true } as depositStateType);
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
        depositState.isOpenDetail && currentRow ? <DepositContext.Provider value={{ depositState, setDepositState }}>
            <DepositDetail data={currentRow} />  </DepositContext.Provider> :
            <PageContainer
                header={{
                    title: '寄存服务',
                    breadcrumb: {},
                }}
            >
                <ProTable<API.DepositListItem, API.PageParams>
                    headerTitle="柜机列表"
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
                    title='新建柜机'
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
                        name="cabinetCode"
                        label='柜机编码'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请输入柜机编码！"),
                            },
                        ]}
                    />
                    <ProFormText
                        name="address"
                        label='详细地址'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请输入详细地址！"),
                            },
                        ]}
                    />
                    <ProFormText
                        name="deviceNum"
                        label='设备型号'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请输入设备型号！"),
                            },
                        ]}
                    />
                    <ProFormText
                        name="boxNum"
                        label='箱格'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请输入箱格！"),
                            },
                        ]}
                    />
                    <ProFormText
                        name="system"
                        label='系统版本'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请输入系统版本！"),
                            },
                        ]}
                    />
                    <ProFormSelect
                        name="boxStatus"
                        label='箱门状态'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请输入箱门状态！"),
                            },
                        ]}
                        valueEnum={{
                            '正常': { text: '正常', status: 'Success' },
                            '异常': { text: '异常', status: 'Error' },
                        }}
                    />
                    <ProFormSelect
                        name="cabinetStatus"
                        label='柜机状态'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请选择楼柜机状态！"),
                            },
                        ]}
                        valueEnum={{
                            '开通': { text: (<div style={{ display: "flex", justifyContent: 'flex-start' }}><MyIcon type='icon-kaishi' style={{ fontSize: '16px', marginRight: '2px' }} />开通</div>) },
                            '禁用': { text: (<div style={{ display: "flex", justifyContent: 'flex-start' }}><MyIcon type='icon-jinzhide' style={{ fontSize: '14px', marginRight: '2px' }} />禁用</div>) },
                            '启用': { text: (<div style={{ display: "flex", justifyContent: 'flex-start' }}><MyIcon type='icon-duigouxiao' style={{ color: '#359A35', marginRight: '2px' }} />启用</div>) },
                            '重启': { text: (<div style={{ display: "flex", justifyContent: 'flex-start' }}><MyIcon type='icon-jiazaizhong' style={{ color: '#5151FF', fontSize: '15px', marginRight: '1px' }} />重启</div>) },
                            '关机': { text: (<div style={{ display: "flex", justifyContent: 'flex-start' }}><MyIcon type='icon-guanji' style={{ color: '#FF0C0D', fontSize: '16px', marginRight: '1px' }} />关机</div>) },
                            '开机': { text: (<div style={{ display: "flex", justifyContent: 'flex-start' }}><MyIcon type='icon-guanji' style={{ color: '#359A35', fontSize: '16px', marginRight: '1px' }} />开机</div>) },
                        }}
                    />
                </ModalForm>
                <ModalForm
                    title='编辑柜机'
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
                        name="cabinetCode"
                        label='柜机编码'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请输入柜机编码！"),
                            },
                        ]}
                    />
                    <ProFormText
                        name="address"
                        label='详细地址'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请输入详细地址！"),
                            },
                        ]}
                    />
                    <ProFormText
                        name="deviceNum"
                        label='设备型号'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请输入设备型号！"),
                            },
                        ]}
                    />
                    <ProFormText
                        name="boxNum"
                        label='箱格'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请输入箱格！"),
                            },
                        ]}
                    />
                    <ProFormText
                        name="system"
                        label='系统版本'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请输入系统版本！"),
                            },
                        ]}
                    />
                    <ProFormSelect
                        name="boxStatus"
                        label='箱门状态'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请输入箱门状态！"),
                            },
                        ]}
                        valueEnum={{
                            '正常': { text: '正常', status: 'Success' },
                            '异常': { text: '异常', status: 'Error' },
                        }}
                    />
                    <ProFormSelect
                        name="cabinetStatus"
                        label='柜机状态'
                        labelAlign="left"
                        labelCol={{ flex: '90px' }}
                        width="md"
                        rules={[
                            {
                                required: true,
                                message: ("请选择楼柜机状态！"),
                            },
                        ]}
                        valueEnum={{
                            '开通': { text: (<div style={{ display: "flex", justifyContent: 'flex-start' }}><MyIcon type='icon-kaishi' style={{ fontSize: '16px', marginRight: '2px' }} />开通</div>) },
                            '禁用': { text: (<div style={{ display: "flex", justifyContent: 'flex-start' }}><MyIcon type='icon-jinzhide' style={{ fontSize: '14px', marginRight: '2px' }} />禁用</div>) },
                            '启用': { text: (<div style={{ display: "flex", justifyContent: 'flex-start' }}><MyIcon type='icon-duigouxiao' style={{ color: '#359A35', marginRight: '2px' }} />启用</div>) },
                            '重启': { text: (<div style={{ display: "flex", justifyContent: 'flex-start' }}><MyIcon type='icon-jiazaizhong' style={{ color: '#5151FF', fontSize: '15px', marginRight: '1px' }} />重启</div>) },
                            '关机': { text: (<div style={{ display: "flex", justifyContent: 'flex-start' }}><MyIcon type='icon-guanji' style={{ color: '#FF0C0D', fontSize: '16px', marginRight: '1px' }} />关机</div>) },
                            '开机': { text: (<div style={{ display: "flex", justifyContent: 'flex-start' }}><MyIcon type='icon-guanji' style={{ color: '#359A35', fontSize: '16px', marginRight: '1px' }} />开机</div>) },
                        }}
                    />
                </ModalForm>
            </PageContainer>
    )
}

export default Deposit;