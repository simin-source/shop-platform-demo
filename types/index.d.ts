export namespace RECORD_API {
  /** GET /api/currentUser */
  export type GET_API_CURRENT_USER_QUERY = {};

  export type GET_API_CURRENT_USER_PAYLOAD = {};

  export type GET_API_CURRENT_USER_RES = {
    /** example: {"name": "Serati Ma", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png", "userid": "00000001", "email": "antdesign@alipay.com", "signature": "海纳百川，有容乃大", "title": "交互专家", "group": "蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED", "tags": [{"key": "0", "label": "很有想法的"}, {"key": "1", "label": "专注设计"}, {"key": "2", "label": "辣~"}, {"key": "3", "label": "大长腿"}, {"key": "4", "label": "川妹子"}, {"key": "5", "label": "海纳百川"}], "notifyCount": 12, "unreadCount": 11, "country": "China", "geographic": {"province": {"label": "浙江省", "key": "330000"}, "city": {"label": "杭州市", "key": "330100"}}, "address": "西湖区工专路 77 号", "phone": "0752-268888888"} */
    data: {
      name: string;
      avatar: string;
      userid: string;
      email: string;
      signature: string;
      title: string;
      group: string;
      tags: {
        key: string;
        label: string;
      }[];
      notifyCount: number;
      unreadCount: number;
      country: string;
      geographic: {
        province: {
          label: string;
          key: string;
        };
        city: {
          label: string;
          key: string;
        };
      };
      address: string;
      phone: string;
    };
  };

  /** GET /api/rule */
  export type GET_API_RULE_QUERY = {
    /** example: 1 */
    current: string;
    /** example: 20 */
    pageSize: string;
  };

  export type GET_API_RULE_PAYLOAD = {};

  export type GET_API_RULE_RES = {
    /** example: [{"key": 99, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", "name": "TradeCode 99", "owner": "曲丽丽", "desc": "这是一段描述", "callNo": 118, "status": "3", "updatedAt": "2023-05-06T06: 00: 33.361Z", "createdAt": "2023-05-06T06: 00: 33.361Z", "progress": 44}, {"key": 98, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", "name": "TradeCode 98", "owner": "曲丽丽", "desc": "这是一段描述", "callNo": 267, "status": "0", "updatedAt": "2023-05-06T06: 00: 33.361Z", "createdAt": "2023-05-06T06: 00: 33.361Z", "progress": 46}, {"key": 97, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", "name": "TradeCode 97", "owner": "曲丽丽", "desc": "这是一段描述", "callNo": 642, "status": "3", "updatedAt": "2023-05-06T06: 00: 33.361Z", "createdAt": "2023-05-06T06: 00: 33.361Z", "progress": 79}, {"key": 96, "disabled": true, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", "name": "TradeCode 96", "owner": "曲丽丽", "desc": "这是一段描述", "callNo": 239, "status": "1", "updatedAt": "2023-05-06T06: 00: 33.361Z", "createdAt": "2023-05-06T06: 00: 33.361Z", "progress": 23}, {"key": 95, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", "name": "TradeCode 95", "owner": "曲丽丽", "desc": "这是一段描述", "callNo": 32, "status": "3", "updatedAt": "2023-05-06T06: 00: 33.361Z", "createdAt": "2023-05-06T06: 00: 33.361Z", "progress": 56}, {"key": 94, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", "name": "TradeCode 94", "owner": "曲丽丽", "desc": "这是一段描述", "callNo": 25, "status": "3", "updatedAt": "2023-05-06T06: 00: 33.361Z", "createdAt": "2023-05-06T06: 00: 33.361Z", "progress": 5}, {"key": 93, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", "name": "TradeCode 93", "owner": "曲丽丽", "desc": "这是一段描述", "callNo": 16, "status": "3", "updatedAt": "2023-05-06T06: 00: 33.361Z", "createdAt": "2023-05-06T06: 00: 33.361Z", "progress": 2}, {"key": 92, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", "name": "TradeCode 92", "owner": "曲丽丽", "desc": "这是一段描述", "callNo": 963, "status": "1", "updatedAt": "2023-05-06T06: 00: 33.361Z", "createdAt": "2023-05-06T06: 00: 33.361Z", "progress": 28}, {"key": 91, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", "name": "TradeCode 91", "owner": "曲丽丽", "desc": "这是一段描述", "callNo": 788, "status": "0", "updatedAt": "2023-05-06T06: 00: 33.361Z", "createdAt": "2023-05-06T06: 00: 33.361Z", "progress": 89}, {"key": 90, "disabled": true, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", "name": "TradeCode 90", "owner": "曲丽丽", "desc": "这是一段描述", "callNo": 948, "status": "1", "updatedAt": "2023-05-06T06: 00: 33.361Z", "createdAt": "2023-05-06T06: 00: 33.361Z", "progress": 22}, {"key": 89, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", "name": "TradeCode 89", "owner": "曲丽丽", "desc": "这是一段描述", "callNo": 498, "status": "2", "updatedAt": "2023-05-06T06: 00: 33.361Z", "createdAt": "2023-05-06T06: 00: 33.361Z", "progress": 89}, {"key": 88, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", "name": "TradeCode 88", "owner": "曲丽丽", "desc": "这是一段描述", "callNo": 269, "status": "1", "updatedAt": "2023-05-06T06: 00: 33.361Z", "createdAt": "2023-05-06T06: 00: 33.361Z", "progress": 19}, {"key": 87, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", "name": "TradeCode 87", "owner": "曲丽丽", "desc": "这是一段描述", "callNo": 299, "status": "0", "updatedAt": "2023-05-06T06: 00: 33.361Z", "createdAt": "2023-05-06T06: 00: 33.361Z", "progress": 26}, {"key": 86, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", "name": "TradeCode 86", "owner": "曲丽丽", "desc": "这是一段描述", "callNo": 255, "status": "3", "updatedAt": "2023-05-06T06: 00: 33.361Z", "createdAt": "2023-05-06T06: 00: 33.361Z", "progress": 16}, {"key": 85, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", "name": "TradeCode 85", "owner": "曲丽丽", "desc": "这是一段描述", "callNo": 32, "status": "3", "updatedAt": "2023-05-06T06: 00: 33.361Z", "createdAt": "2023-05-06T06: 00: 33.361Z", "progress": 95}, {"key": 84, "disabled": true, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", "name": "TradeCode 84", "owner": "曲丽丽", "desc": "这是一段描述", "callNo": 916, "status": "3", "updatedAt": "2023-05-06T06: 00: 33.361Z", "createdAt": "2023-05-06T06: 00: 33.361Z", "progress": 78}, {"key": 83, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", "name": "TradeCode 83", "owner": "曲丽丽", "desc": "这是一段描述", "callNo": 405, "status": "2", "updatedAt": "2023-05-06T06: 00: 33.361Z", "createdAt": "2023-05-06T06: 00: 33.361Z", "progress": 91}, {"key": 82, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", "name": "TradeCode 82", "owner": "曲丽丽", "desc": "这是一段描述", "callNo": 95, "status": "3", "updatedAt": "2023-05-06T06: 00: 33.361Z", "createdAt": "2023-05-06T06: 00: 33.361Z", "progress": 32}, {"key": 81, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", "name": "TradeCode 81", "owner": "曲丽丽", "desc": "这是一段描述", "callNo": 42, "status": "0", "updatedAt": "2023-05-06T06: 00: 33.361Z", "createdAt": "2023-05-06T06: 00: 33.361Z", "progress": 45}, {"key": 80, "disabled": false, "href": "https: //ant.design", "avatar": "https: //gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", "name": "TradeCode 80", "owner": "曲丽丽", "desc": "这是一段描述", "callNo": 254, "status": "1", "updatedAt": "2023-05-06T06: 00: 33.361Z", "createdAt": "2023-05-06T06: 00: 33.361Z", "progress": 81}] */
    data: {
      key: number;
      disabled: boolean;
      href: string;
      avatar: string;
      name: string;
      owner: string;
      desc: string;
      callNo: number;
      status: string;
      updatedAt: string;
      createdAt: string;
      progress: number;
    }[];
    /** example: 100 */
    total: number;
    /** example: true */
    success: boolean;
    /** example: 20 */
    pageSize: number;
    /** example: 1 */
    current: number;
  };

  /** POST /api/login/outLogin */
  export type POST_API_LOGIN_OUT_LOGIN_QUERY = {
    /** example:  123 */
    token: string;
  };

  export type POST_API_LOGIN_OUT_LOGIN_PAYLOAD = {};

  export type POST_API_LOGIN_OUT_LOGIN_RES = {
    /** example: {} */
    data: {};
    /** example: true */
    success: boolean;
  };

  /** POST /api/login/account */
  export type POST_API_LOGIN_ACCOUNT_QUERY = {};

  export type POST_API_LOGIN_ACCOUNT_PAYLOAD = {
    /** example: 123 */
    username: string;
    /** example: 123 */
    password: string;
    /** example: true */
    autoLogin: boolean;
    /** example: account */
    type: string;
  };

  export type POST_API_LOGIN_ACCOUNT_RES = {
    /** example: error */
    status: string;
    /** example: account */
    type: string;
    /** example: guest */
    currentAuthority: string;
  };
}
