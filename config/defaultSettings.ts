import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  colorPrimary: '#1890ff',
  layout: 'side', //side、top、mix
  contentWidth: 'Fluid', // 自适应
  title: '商场后台管理系统',
  logo: '/logo.svg',
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#token
    sider: {
      colorTextMenuTitle: '#fff',
      colorMenuItemDivider: '#333744',
      colorMenuBackground: '#333744',
      colorTextMenu: '#CCCCCC',
      colorTextMenuActive: '#ffffff',
      colorTextMenuSelected:'#CCCCCC',
      colorBgMenuItemCollapsedElevated: '#333334',
      colorBgMenuItemSelected: '#262933',
      colorTextMenuItemHover:'#CCCCCC',
      //  失效
      // colorTextMenuSecondary:'#C0E7FF',
      // colorBgMenuItemHover:'#C0E7FF',
    },
  },
};

export default Settings;
