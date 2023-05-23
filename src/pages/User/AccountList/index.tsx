import { ActionType, ModalForm, PageContainer, ProColumns, ProFormCheckbox, ProFormInstance, ProFormSelect, ProFormText, ProTable } from "@ant-design/pro-components"
import { Button, Checkbox, Col, message, Row } from "antd";
import { FormattedMessage } from '@umijs/max';
import { addRole, getRole, updateRole } from "@/services/ant-design-pro/api";
import { useRef, useState } from "react";
import { ExclamationCircleOutlined, PlusOutlined } from "@ant-design/icons";
import modal from "antd/es/modal";

const handleAdd = async (fields: API.RoleListItem) => {
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

const handleUpdate = async (fields: API.RoleListItem) => {
    const hide = message.loading('Configuring');
    try {
        await updateRole({
            name: fields.name,
            limits: fields.limits,
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
        title: '是否删除该账户',
        icon: <ExclamationCircleOutlined />,
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
            console.log('删除' + key);
        }
    });
};

const RoleEnum = {
    '1': { text: '超级管理员', },
    '2': { text: '管理员', },
    '3': { text: '店铺管理员', },
}

const limitsEnum = {
    1: { text: '数据管理' },
    2: { text: '账户管理' },
    3: { text: '店铺管理' },
    4: { text: '客服管理' },
    5: { text: '数据分析' },
}

const limits = [
    { value: '1', label: '数据管理' },
    { value: '2', label: '账户管理' },
    { value: '3', label: '店铺管理' },
    { value: '4', label: '客服管理' },
    { value: '5', label: '数据分析' },
]

const AccountList: React.FC = () => {
    const roleRef = useRef<ActionType>();
    const modalFormRef = useRef<ProFormInstance>();
    const [key, setKey] = useState(Date.now()); // 初始化 key 值
    const [currentRow, setCurrentRow] = useState<API.RoleListItem>();
    const [createModalOpen, handleModalOpen] = useState<boolean>(false);
    const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);

    const mocklist = [{ key: 1, name: '张三', roleId: 1, phone: '12323453432', email: 'zs@zs.com', limits: ['1', '2'], passwd: "123321", confirmPasswd: '123321' },
    { key: 2, name: '李四', roleId: 2, phone: '12323453432', email: 'ls@ls.com', limits: ['3', '4'], passwd: "123321", confirmPasswd: '123321' },
    { key: 3, name: '小五', roleId: 3, phone: '12323453432', email: 'xw@xw.com', limits: ['1', '5'], passwd: "123321", confirmPasswd: '123321' }] as API.AccountListItem[];

    const columns: ProColumns<API.AccountListItem>[] = [
        {
            title: '账户名称',
            dataIndex: 'name',
            render: (dom, entity) => {
                console.log(entity);
                
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
            title: '角色',
            dataIndex: 'roleId',
            filters: true,
            onFilter: true,
            valueEnum: RoleEnum,
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
            title: '手机号码',
            dataIndex: 'phone',
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
            title: '邮箱',
            dataIndex: 'email',
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
            title: '权限',
            dataIndex: 'limits',
            valueEnum: limitsEnum,
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
        },
    ];

    return (
        <PageContainer
            header={{
                title: '账户管理',
                breadcrumb: {},
            }}
        >
            <ProTable<API.AccountListItem, API.PageParams>
                headerTitle="账户列表"
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
                search={false}
                options={false}
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
                title='新账户'
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
                    label='账户名称'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    width="md"
                    rules={[
                        {
                            required: true,
                            message: ("请输入账户名称！"),
                        },
                    ]}
                />

                <ProFormSelect
                    name="roleId"
                    label='角色'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    width="md"
                    rules={[
                        {
                            required: true,
                            message: ("请选择角色！"),
                        },
                    ]}
                    valueEnum={RoleEnum}
                />
                <ProFormText
                    name="phone"
                    label='手机号码'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    width="md"
                    rules={[
                        {
                            required: true,
                            message: ("请输入手机号码！"),
                        },
                    ]}
                />
                <ProFormText
                    name="email"
                    label='邮箱'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    width="md"
                    rules={[
                        {
                            required: true,
                            message: ("请输入邮箱！"),
                        },
                    ]}
                />
                <ProFormCheckbox.Group
                    name="limits"
                    label='权限'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    rules={[{ required: true }]}
                >
                    <Checkbox.Group>
                        <Row>
                            {limits.map(item => {
                                return <Col span={10}>
                                    <Checkbox value={item.value}>{item.label}</Checkbox>
                                </Col>
                            })}
                        </Row>
                    </Checkbox.Group>
                </ProFormCheckbox.Group>
                <ProFormText.Password
                    label="登陆密码"
                    name="passwd"
                    rules={[{ required: true }]}
                />
                <ProFormText.Password
                    label="确认密码"
                    name="confirmPasswd"
                    rules={[{ required: true }]}
                />
            </ModalForm>
            <ModalForm
                title='更新账户'
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
                    label='账户名称'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    width="md"
                    rules={[
                        {
                            required: true,
                            message: ("请输入账户名称！"),
                        },
                    ]}
                />
                <ProFormSelect
                    name="roleId"
                    label='角色'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    width="md"
                    rules={[
                        {
                            required: true,
                            message: ("请选择角色！"),
                        },
                    ]}
                    valueEnum={RoleEnum}
                />
                <ProFormText
                    name="phone"
                    label='手机号码'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    width="md"
                    rules={[
                        {
                            required: true,
                            message: ("请输入手机号码！"),
                        },
                    ]}
                />
                <ProFormText
                    name="email"
                    label='邮箱'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    width="md"
                    rules={[
                        {
                            required: true,
                            message: ("请输入邮箱！"),
                        },
                    ]}
                />
                <ProFormCheckbox.Group
                    name="limits"
                    label='权限'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    rules={[{ required: true }]}
                >
                    <Checkbox.Group>
                        <Row>
                            {limits.map(item => {
                                return <Col span={10}>
                                    <Checkbox value={item.value}>{item.label}</Checkbox>
                                </Col>
                            })}
                        </Row>
                    </Checkbox.Group>
                </ProFormCheckbox.Group>
                <ProFormText.Password
                    label="登陆密码"
                    name="passwd"
                    rules={[{ required: true }]}
                />
                <ProFormText.Password
                    label="确认密码"
                    name="confirmPasswd"
                    rules={[{ required: true }]}
                />
            </ModalForm>
        </PageContainer>
    )
}

export default AccountList;