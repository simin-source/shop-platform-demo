/**
 * 类型文件
 */

// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };

  type RoleList = {
    data?: RoleListItem[];
    total?: number;
    success?: boolean;
  };

  type RoleListItem = {
    name?: string;
    limits?: any[];
    key?: number;
  };

  type AccountList = {
    data?: AccountListItem[];
    total?: number;
    success?: boolean;
  };

  type AccountListItem = {
    key?: number;
    name?: string;
    roleId?: number;
    phone?: string;
    email?: string;
    create_time?: string;
    limits: string[];
    passwd: string;
    confirmPasswd: string;
  };
  //商场介绍类型
  type ShopListItem = {
    name?: string;
    desc?: string;
    logo?: UploadFile;
    key?: number;
  };

  type IndustryList = {
    data?: IndustryListItem[];
    total?: number;
    success?: boolean;
  };

  type IndustryListItem = {
    code?: string;
    name?: string;
    createTime?: string;
  };

  type StoreList = {
    data?: StoreListItem[];
    total?: number;
    success?: boolean;
  };

  type StoreListItem = {
    code?: string;
    name?: string;
    floor?: string;
    rentStatus?: string;
    welfareStatus?: string;
    industry?: string;
  };

  type WifiListItem = {
    key?: string;
    name?: string;
    wifiPasswd?: string;
    visible?: boolean;
  };

  type LostListItem = {
    key?: string;
    name?: string;
    createTime?: string;
    status?: string;
    logo?: UploadFile;
  };

  type DepositListItem = {
    key?: string;
    cabinetCode?: string;
    address?: string;
    deviceNum?: string;
    boxNum?: string;
    system?: string;
    boxStatus?: string;
    cabinetStatus?: string; //柜机状态
  };

  type AdvertListItem = {
    key?: string;
    name?: string;
    position?: string;
    pictrue?: string;
    time?: string[];
    isInline?: boolean;
    clickNum?: number;
  };
}
