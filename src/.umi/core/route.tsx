// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"1":{"path":"/login","layout":false,"id":"1"},"2":{"path":"/welcome","name":"商场介绍","icon":"smile","parentId":"ant-design-pro-layout","id":"2"},"3":{"path":"/map","name":"地图首页","icon":"EnvironmentOutlined","parentId":"ant-design-pro-layout","id":"3"},"4":{"path":"/admin","name":"admin","icon":"crown","access":"SuperAdmin","parentId":"ant-design-pro-layout","id":"4"},"5":{"path":"/admin","redirect":"/admin/sub-page","parentId":"4","id":"5"},"6":{"path":"/admin/sub-page","name":"sub-page","parentId":"4","id":"6"},"7":{"path":"/user","name":"用户管理","icon":"UserOutlined","parentId":"ant-design-pro-layout","id":"7"},"8":{"name":"账户管理","path":"/user/account","parentId":"7","id":"8"},"9":{"name":"角色管理","path":"/user/role","parentId":"7","id":"9"},"10":{"path":"/store","name":"店铺管理","icon":"ShoppingOutlined","parentId":"ant-design-pro-layout","id":"10"},"11":{"name":"业态规划","icon":"TagOutlined","path":"/store/industry","parentId":"10","id":"11"},"12":{"name":"店铺列表","icon":"ProfileOutlined","path":"/store/list","parentId":"10","id":"12"},"13":{"path":"/data","name":"数据中心","icon":"BarChartOutlined","parentId":"ant-design-pro-layout","id":"13"},"14":{"name":"招商可视化统计","path":"/data/statistic","parentId":"13","id":"14"},"15":{"name":"流量分析平台","path":"/data/analysis","parentId":"13","id":"15"},"16":{"name":"人流热力图","path":"/data/heatmap","parentId":"13","id":"16"},"17":{"path":"/service","name":"客户服务管理","icon":"/icons/service.svg","parentId":"ant-design-pro-layout","id":"17"},"18":{"name":"商场WIFI管理","path":"/service/wifi","parentId":"17","id":"18"},"19":{"name":"失物招领","path":"/service/lost","parentId":"17","id":"19"},"20":{"name":"寄存服务","path":"/service/deposit","parentId":"17","id":"20"},"21":{"path":"/advert","name":"广告管理","icon":"/icons/advert.svg","parentId":"ant-design-pro-layout","id":"21"},"22":{"path":"*","layout":false,"id":"22"},"ant-design-pro-layout":{"id":"ant-design-pro-layout","path":"/","isLayout":true},"umi/plugin/openapi":{"path":"/umi/plugin/openapi","id":"umi/plugin/openapi"}} as const;
  return {
    routes,
    routeComponents: {
'1': React.lazy(() => import(/* webpackChunkName: "p__User__Login__index" */'@/pages/User/Login/index.tsx')),
'2': React.lazy(() => import(/* webpackChunkName: "p__Welcome" */'@/pages/Welcome.tsx')),
'3': React.lazy(() => import(/* webpackChunkName: "p__Map__index" */'@/pages/Map/index.tsx')),
'4': React.lazy(() => import( './EmptyRoute')),
'5': React.lazy(() => import( './EmptyRoute')),
'6': React.lazy(() => import(/* webpackChunkName: "p__Admin" */'@/pages/Admin.tsx')),
'7': React.lazy(() => import( './EmptyRoute')),
'8': React.lazy(() => import(/* webpackChunkName: "p__User__AccountList__index" */'@/pages/User/AccountList/index.tsx')),
'9': React.lazy(() => import(/* webpackChunkName: "p__User__RoleList__index" */'@/pages/User/RoleList/index.tsx')),
'10': React.lazy(() => import( './EmptyRoute')),
'11': React.lazy(() => import(/* webpackChunkName: "p__Store__IndustryList__index" */'@/pages/Store/IndustryList/index.tsx')),
'12': React.lazy(() => import(/* webpackChunkName: "p__Store__StoreList__index" */'@/pages/Store/StoreList/index.tsx')),
'13': React.lazy(() => import( './EmptyRoute')),
'14': React.lazy(() => import(/* webpackChunkName: "p__Data__StatisticCards__index" */'@/pages/Data/StatisticCards/index.tsx')),
'15': React.lazy(() => import(/* webpackChunkName: "p__Data__Analysis__index" */'@/pages/Data/Analysis/index.tsx')),
'16': React.lazy(() => import(/* webpackChunkName: "p__Data__Heatmap__index" */'@/pages/Data/Heatmap/index.tsx')),
'17': React.lazy(() => import( './EmptyRoute')),
'18': React.lazy(() => import(/* webpackChunkName: "p__Service__Wifi__index" */'@/pages/Service/Wifi/index.tsx')),
'19': React.lazy(() => import(/* webpackChunkName: "p__Service__Lost__index" */'@/pages/Service/Lost/index.tsx')),
'20': React.lazy(() => import(/* webpackChunkName: "p__Service__Deposit__index" */'@/pages/Service/Deposit/index.tsx')),
'21': React.lazy(() => import(/* webpackChunkName: "p__Advert__index" */'@/pages/Advert/index.tsx')),
'22': React.lazy(() => import(/* webpackChunkName: "p__404" */'@/pages/404.tsx')),
'ant-design-pro-layout': React.lazy(() => import(/* webpackChunkName: "umi__plugin-layout__Layout" */'/Users/chaisimin/项目/练习/shop-platform-demo/src/.umi/plugin-layout/Layout.tsx')),
'umi/plugin/openapi': React.lazy(() => import(/* webpackChunkName: "umi__plugin-openapi__openapi" */'/Users/chaisimin/项目/练习/shop-platform-demo/src/.umi/plugin-openapi/openapi.tsx')),
},
  };
}
