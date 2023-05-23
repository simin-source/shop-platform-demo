/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  //TODO:配置权限
  return {
    SuperAdmin: currentUser && currentUser.access === 'admin1',
    Admin: currentUser && currentUser.access === 'admin2',
    CommodityManager: currentUser && currentUser.access === 'admin3',
    OrderAdmin: currentUser && currentUser.access === 'admin4',
    FinancialAdmin: currentUser && currentUser.access === 'admin5',
    ChannelManager: currentUser && currentUser.access === 'admin6',
    DataAnalysis: currentUser && currentUser.access === 'admin7',
  };
}
