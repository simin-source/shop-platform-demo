import { ActionType, ModalForm, PageContainer, ProColumns, ProFormDateRangePicker, ProFormDigit, ProFormInstance, ProFormItem, ProFormSwitch, ProFormText, ProTable } from "@ant-design/pro-components"
import { Button, Space, Switch, Table } from "antd";
import { FormattedMessage } from '@umijs/max';
import { useRef, useState } from "react";
import { ExclamationCircleOutlined, PlusOutlined } from "@ant-design/icons";
import modal from "antd/es/modal";
import React from "react";
import moment from "moment";
import MyUpload from "@/components/MyUpload";

const handleDelete = async (key: number) => {
    modal.confirm({
        title: '是否删除该广告',
        icon: <ExclamationCircleOutlined />,
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
            console.log('删除' + key);
        }
    });
};

const Advert: React.FC = () => {

    const roleRef = useRef<ActionType>();
    const modalFormRef = useRef<ProFormInstance>();
    const [key, setKey] = useState(Date.now()); // 初始化 key 值
    const [currentRow, setCurrentRow] = useState<API.AdvertListItem>();
    const [createModalOpen, handleModalOpen] = useState<boolean>(false);
    const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
    const [selectedRowKeys_, setSelectedRowKeys] = useState<string[]>(['1']);

    const mocklist = [{ key: '1', name: 'XXX商店大热促销', position: '小程序首页轮播', pictrue: 'advert.png', time: ['2023-05-26', '2023-06-15'], isInline: true, clickNum: 100, },
    { key: '2', name: 'XXX商店大热促销', position: '小程序首页轮播', pictrue: 'advert.png', time: ['2023-05-26', '2023-06-15'], isInline: false, clickNum: 110, },
    { key: '3', name: 'XXX商店大热促销', position: '导览端轮播', pictrue: 'advert.png', time: ['2023-05-26', '2023-06-15'], isInline: true, clickNum: 120, }] as API.AdvertListItem[];

    const columns: ProColumns<API.AdvertListItem>[] = [
        {
            title: '广告名称',
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
            title: '广告位置',
            dataIndex: 'position',
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
            title: '广告图片',
            dataIndex: 'pictrue',
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
            title: '时间',
            dataIndex: 'time',
            valueType: 'dateRange',
            render: (dom: any, entity: any) => {
                return (
                    <div
                        onClick={() => {
                            setCurrentRow(entity);
                        }}
                    // dangerouslySetInnerHTML={{ __html: dom as any }}
                    >
                        <div>开始时间：{moment(dom[0]).format('YYYY-MM-DD')}</div>
                        <div>结束时间：{moment(dom[1]).format('YYYY-MM-DD')}</div>
                    </div>
                );
            },
        },
        {
            title: '上线/下线',
            dataIndex: 'isInline',
            valueType: 'switch',
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
            title: '点击次数',
            dataIndex: 'clickNum',
            valueType: 'digit',
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
                title: '广告管理',
                breadcrumb: {},
            }}
        >
            <ProTable<API.AdvertListItem, API.PageParams>
                headerTitle="广告列表"
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
                title='新建广告'
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
                    label='广告名称'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    width="md"
                    rules={[
                        {
                            required: true,
                            message: ("请输入广告名称！"),
                        },
                    ]}
                />
                <ProFormText
                    name="position"
                    label='广告位置'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    width="md"
                    rules={[
                        {
                            required: true,
                            message: ("请输入广告位置！"),
                        },
                    ]}
                />
                <ProFormItem
                    name="pictrue"
                    label='广告图片'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    rules={[
                        {
                            required: true,
                            message: ("请输入广告图片！"),
                        },
                    ]}
                >
                    <MyUpload isSingle={true} />
                </ProFormItem>
                <ProFormDateRangePicker
                    name="time"
                    label='时间'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    width="md"
                    rules={[
                        {
                            required: true,
                            message: ("请输入时间！"),
                        },
                    ]}
                />
                <ProFormSwitch
                    name="isInline"
                    label='上线/下线'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    rules={[{ required: true }]}
                />
                <ProFormDigit
                    name="clickNum"
                    label='点击次数'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    width="md"
                    rules={[{ required: true }]}
                />
            </ModalForm>
            <ModalForm
                title='编辑广告'
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
                    label='广告名称'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    width="md"
                    rules={[
                        {
                            required: true,
                            message: ("请输入广告名称！"),
                        },
                    ]}
                />
                <ProFormText
                    name="position"
                    label='广告位置'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    width="md"
                    rules={[
                        {
                            required: true,
                            message: ("请输入广告位置！"),
                        },
                    ]}
                />
                <ProFormItem
                    name="pictrue"
                    label='广告图片'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    rules={[
                        {
                            required: true,
                            message: ("请输入广告图片！"),
                        },
                    ]}
                >
                    <MyUpload isSingle={true} />
                </ProFormItem>
                <ProFormDateRangePicker
                    name="time"
                    label='时间'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    width="md"
                    rules={[
                        {
                            required: true,
                            message: ("请输入时间！"),
                        },
                    ]}
                />
                <ProFormSwitch
                    name="isInline"
                    label='上线/下线'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    rules={[{ required: true }]}
                />
                <ProFormDigit
                    name="clickNum"
                    label='点击次数'
                    labelAlign="left"
                    labelCol={{ flex: '90px' }}
                    width="md"
                    rules={[{ required: true }]}
                />
            </ModalForm>
        </PageContainer>
    )
}

export default Advert;