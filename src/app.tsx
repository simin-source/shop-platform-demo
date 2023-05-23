import { EditPOI, Footer, MapEditor, SelectMap } from '@/components';
import { PageLoading, Settings as LayoutSettings } from '@ant-design/pro-components';
import { SettingDrawer } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { history } from '@umijs/max';
import React from 'react';
import { useState } from 'react';
import defaultSettings from '../config/defaultSettings';
import Header from './components/Header';
import { MapContext, mapStateType } from './pages/Map/index';
import { errorConfig } from './requestErrorConfig';
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/login';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
    settings?: Partial<LayoutSettings>;
    currentUser?: API.CurrentUser;
    loading?: boolean;
    collapsed?: boolean; //导航栏是否收缩
    fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
    const fetchUserInfo = async () => {
        // try {
        //     const msg = await queryCurrentUser({
        //         skipErrorHandler: true,
        //     });
        //     return msg.data;
        // } catch (error) {
        //     history.push(loginPath);
        // }
        // return undefined;
        return {
            name: 'admin',
            avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
            userid: '00000001',
            access: 'admin'
        }
    };
    // 如果不是登录页面，执行
    const { location } = history;
    if (location.pathname !== loginPath) {
        const currentUser = await fetchUserInfo();
        return {
            collapsed: true,
            fetchUserInfo,
            currentUser,
            settings: defaultSettings as Partial<LayoutSettings>,
        };
    }
    return {
        collapsed: true,
        fetchUserInfo,
        settings: defaultSettings as Partial<LayoutSettings>,
    };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
    const { location } = history;
    const [mapState, setMapState] = useState({ mapId: '449174', isOpenPOI: false, isOpenEditor: false } as mapStateType);

    const activeMenuStyle = useEmotionCss(() => {
        return {
            'span &:hover': {
                width: '100%',
                height: '40px',
                position: 'absolute',
                top: '0',
                left: '0',
                paddingLeft: `${initialState?.collapsed ? '16px' : '32px'}`,
                background: '#3A6293',
            }
        };
    });

    return {
        menuHeaderRender: () => {
            return <div className="logo" style={{ width: '100%', height: `${initialState?.collapsed ? '38px' : 'auto'}`, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
                <img style={{ width: `${initialState?.collapsed ? '24px' : '80px'}`, margin: '0 auto' }} src='/logo.svg' alt='logo' />
                {initialState?.collapsed ? null : <div style={{ color: "#fff", fontSize: '20px', fontWeight: 'bold', margin: '15px auto 5px auto' }}>商场后台管理系统</div>}
            </div>
        },
        menuItemRender: (context: any, children: React.ReactNode, props: any) => {
            return <div className={`${+context.parentId ? activeMenuStyle : ''}`} onClick={() => { history.push(context.path); }}>{children}</div>
        },
        actionsRender: () => [],
        waterMarkProps: {
            content: initialState?.currentUser?.name,
        },
        footerRender: () => <Footer />,
        onPageChange: () => {
            // 如果没有登录，重定向到 login
            if (!initialState?.currentUser && location.pathname !== loginPath) {
                history.push(loginPath);
            }
        },
        collapsed: initialState?.collapsed,
        onCollapse: (collapsed: boolean) => {
            setInitialState((state) => ({
                ...state,
                collapsed: collapsed,
            }));
        },
        // 自定义 403 页面
        unAccessible: <div>unAccessible</div>,
        // 增加一个 loading 的状态
        childrenRender: (children) => {
            if (initialState?.loading) return <PageLoading />;
            return (
                <>
                    <Header>
                        {location.pathname === '/map' && <MapContext.Provider value={{ mapState, setMapState }}>
                            <SelectMap />
                            <EditPOI />
                            <MapEditor />
                        </MapContext.Provider>}
                    </Header>
                    <div style={{ paddingTop: '58px' }}>
                        {location.pathname === '/map' ? <MapContext.Provider value={{ mapState, setMapState }}>
                            {children}
                        </MapContext.Provider> : children}
                    </div>
                    {
                        isDev && (
                            <SettingDrawer
                                disableUrlParams
                                enableDarkTheme
                                settings={initialState?.settings}
                                onSettingChange={(settings) => {
                                    setInitialState((preInitialState) => ({
                                        ...preInitialState,
                                        settings,
                                    }));
                                }}
                            />
                        )
                    }
                </>
            );
        },
        ...initialState?.settings,
    };
};

// export const fetchRequest = (url: string, options: any) => {
//     return fetch(url, options)
//         .then((res) => res.json())
//         .then((resData) => {
//             return Promise.resolve({
//                 ...resData,
//                 total: resData.sum,
//                 success: resData.ok,
//                 errorMessage: resData.message,
//             });
//         });
// };

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
    ...errorConfig,
};
