import { ActionType, ModalForm, PageContainer, ProColumns, ProFormInstance, ProFormText, ProTable } from "@ant-design/pro-components"
import { Button, message, Space, Table } from "antd";
import { FormattedMessage } from '@umijs/max';
import { addRole, updateRole } from "@/services/ant-design-pro/api";
import { useRef, useState } from "react";
import { ExclamationCircleOutlined, PlusOutlined } from "@ant-design/icons";
import modal from "antd/es/modal";
import moment from "moment";

const handleAdd = async (fields: API.IndustryListItem) => {
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

const handleUpdate = async (fields: API.IndustryListItem) => {
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
        title: '是否删除该业态',
        icon: <ExclamationCircleOutlined />,
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
            console.log('删除' + key);
        }
    });
};

const IndustryList: React.FC = () => {
    const roleRef = useRef<ActionType>();
    const modalFormRef = useRef<ProFormInstance>();
    const [key, setKey] = useState(Date.now()); // 初始化 key 值
    const [currentRow, setCurrentRow] = useState<API.IndustryListItem>();
    const [createModalOpen, handleModalOpen] = useState<boolean>(false);
    const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
    const [selectedRowKeys_, setSelectedRowKeys] = useState<string[]>(['202010001']);

    const mocklist = [{ code: '202010001', name: '服装', createTime: moment().format('YYYY.MM.DD') },
    { code: '202010002', name: '美妆', createTime: moment().format('YYYY.MM.DD') },
    { code: '202010003', name: '健身', createTime: moment().format('YYYY.MM.DD') }] as API.IndustryListItem[];

    const columns: ProColumns<API.IndustryListItem>[] = [
        {
            title: '业态编号',
            dataIndex: 'code',
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
            title: '业态名称',
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
            dataIndex: 'createTime',
            valueType: 'date',
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
                        handleDelete(record.key)
                    }}
                >
                    删除
                </a>,
            ],
        }
    ];

    return (
        <PageContainer
            header={{
                title: '业态规划',
                breadcrumb: {},
            }}
        >
            <ProTable<API.IndustryListItem, API.PageParams>
                headerTitle="业态列表"
                // request={getRole}
                request={(params, sorter, filter) => {
                    // 表单搜索项会从 params 传入，传递给后端接口。
                    return Promise.resolve({
                        data: mocklist,
                        success: true,
                    });
                }}
                actionRef={roleRef}
                options={false}
                rowKey='code'
                rowSelection={{
                    type: 'checkbox',
                    selections: [
                        Table.SELECTION_ALL,
                        Table.SELECTION_INVERT,
                        Table.SELECTION_NONE,
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
                title='新业态'
                width="400px"
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
                    label='业态名称'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    width="md"
                    rules={[
                        {
                            required: true,
                            message: ("请输入业态名称！"),
                        },
                    ]}
                />
            </ModalForm>
            <ModalForm
                title='更新业态'
                width="400px"
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
                    label='业态名称'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    width="md"
                    rules={[
                        {
                            required: true,
                            message: ("请输入业态名称！"),
                        },
                    ]}
                />
            </ModalForm>
        </PageContainer>
    )
}

export default IndustryList;