import { outLogin } from '@/services/ant-design-pro/api';
import { LogoutOutlined, SafetyCertificateOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { ModalForm, ProFormText } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { history, useModel } from '@umijs/max';
import { Spin } from 'antd';
import { stringify } from 'querystring';
import type { MenuInfo } from 'rc-menu/lib/interface';
import React, { useCallback, useState } from 'react';
import { flushSync } from 'react-dom';
import HeaderDropdown from '../HeaderDropdown';

export type GlobalHeaderRightProps = {
  menu?: boolean;
  children?: React.ReactNode;
};

export const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu, children }) => {
  /**
   * 退出登录，并且将当前的 url 保存
   */
  const loginOut = async () => {
    // await outLogin();
    const { search, pathname } = window.location;
    const urlParams = new URL(window.location.href).searchParams;
    /** 此方法会跳转到 redirect 参数所在的位置 */
    const redirect = urlParams.get('redirect');
    // Note: There may be security issues, please note
    if (window.location.pathname !== '/login' && !redirect) {
      history.replace({
        pathname: '/login',
        search: stringify({
          redirect: pathname + search,
        }),
      });
    }
  };
  const actionClassName = useEmotionCss(({ token }) => {
    return {
      display: 'flex',
      height: '48px',
      marginLeft: 'auto',
      overflow: 'hidden',
      alignItems: 'center',
      padding: '0 8px',
      cursor: 'pointer',
      borderRadius: token.borderRadius,
      '&:hover': {
        backgroundColor: token.colorBgTextHover,
      },
    };
  });
  const { initialState, setInitialState } = useModel('@@initialState');
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
  const [key, setKey] = useState(Date.now());

  const onMenuClick = useCallback(
    (event: MenuInfo) => {
      const { key } = event;
      if (key === 'logout') {
        flushSync(() => {
          setInitialState((s) => ({ ...s, currentUser: undefined }));
        });
        loginOut();
        return;
      } else if (key === 'updatePassd') {
        handleUpdateModalOpen(true)
      }
      // history.push(`/account/${key}`);
    },
    [setInitialState],
  );

  const loading = (
    <span className={actionClassName}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  if (!initialState) {
    return loading;
  }

  const { currentUser } = initialState;

  if (!currentUser || !currentUser.name) {
    return loading;
  }

  const menuItems = [
    ...(menu
      ? [
        {
          key: 'center',
          icon: <UserOutlined />,
          label: '个人中心',
        },
        {
          key: 'settings',
          icon: <SettingOutlined />,
          label: '个人设置',
        },
        {
          type: 'divider' as const,
        },
      ]
      : []),
    {
      key: 'updatePassd',
      icon: <SafetyCertificateOutlined />,
      label: '修改密码',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
    },
  ];

  return (
    <>
      <HeaderDropdown
        menu={{
          selectedKeys: [],
          onClick: onMenuClick,
          items: menuItems,
        }}
        placement="bottom"
      >
        {children}
      </HeaderDropdown>
      <ModalForm
        title='修改密码'
        width="400px"
        layout='horizontal'
        labelAlign="left"
        open={updateModalOpen}
        key={key} //设置key，新的key值会触发React卸载并重新挂载组件
        onOpenChange={(value) => {
          if (!value) {
            handleUpdateModalOpen(false)
            // setCurrentRow(undefined);
            setKey(Date.now());
          }
        }}
        initialValues={initialState}
        onFinish={async (value) => {
          console.log(value);
          // const success = await handleUpdate(value);
          // if (success) {
          handleUpdateModalOpen(false);
          // setCurrentRow(undefined);
          // roleRef.current?.reload();
          // }
        }}
      >
        <ProFormText
          name="name"
          label='旧密码'
          labelAlign="left"
          labelCol={{ flex: '90px' }}
          width="md"
          rules={[
            {
              required: true,
              message: ("请输入旧密码！"),
            },
          ]}
        />
        <ProFormText
          name="name"
          label='新密码'
          labelAlign="left"
          labelCol={{ flex: '90px' }}
          width="md"
          rules={[
            {
              required: true,
              message: ("请输入新密码！"),
            },
          ]}
        />
        <ProFormText
          name="name"
          label='确认密码'
          labelAlign="left"
          labelCol={{ flex: '90px' }}
          width="md"
          rules={[
            {
              required: true,
              message: ("请输入确认密码！"),
            },
          ]}
        />
      </ModalForm>
    </>
  );
};
