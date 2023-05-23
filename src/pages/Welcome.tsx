import MyUpload from '@/components/MyUpload';
import { ModalForm, PageContainer, ProFormItem, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, theme, } from 'antd';
import { UploadFile } from 'antd/es/upload';
import React, { useState } from 'react';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: string;
  index: number;
  desc: string;
  href: string;
  logo: UploadFile;
}> = ({ title, href, index, desc, logo }) => {
  const { useToken } = theme;

  const { token } = useToken();
  const [key, setKey] = useState(Date.now()); // 初始化 key 值
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
  const [currentShop, setCurrentShop] = useState<API.ShopListItem>();

  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 19px',
        minWidth: '220px',
        // flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: '16px',
            color: token.colorText,
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: token.colorTextSecondary,
          textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      <img style={{ height: '200px' }} src={logo.url} />
      <div >
        <a href={href} target="_blank" rel="noreferrer">
          了解更多 {'>'}
        </a>
        <a style={{ marginLeft: '20px' }}
          onClick={() => {
            handleUpdateModalOpen(true);
            setCurrentShop({
              name: title,
              desc,
              logo,
              key: 1
            });
          }}
        >
          编辑
        </a>
      </div>
      <ModalForm
        title='更新商场介绍'
        width="400px"
        layout='horizontal'
        labelAlign="left"
        style={{ display: `${updateModalOpen ? 'block' : 'none'}` }}
        open={updateModalOpen}
        key={key} //设置key，新的key值会触发React卸载并重新挂载组件
        onOpenChange={(value) => {
          if (!value) {
            handleUpdateModalOpen(false)
            setCurrentShop(undefined);
            setKey(Date.now());
          }
        }}
        initialValues={currentShop}
        onFinish={async (value) => {
          console.log(value);
          const params = {
            ...value,
            logo: value.logo.name
          }
          console.log(params);

          // const success = await handleUpdate(value);
          // if (success) {
          handleUpdateModalOpen(false);
          setCurrentShop(undefined);
          // roleRef.current?.reload();
          // }
        }}
      >
        <ProFormText
          name="name"
          label='商场名称'
          labelAlign="left"
          width="md"
          rules={[
            {
              required: true,
              message: ("请输入商场名称！"),
            },
          ]}
        />
        <ProFormTextArea
          width="md"
          name="desc"
          label='商场描述'
          rules={[
            {
              required: true,
              message: ("请输入商场描述！"),
            },
          ]}
        />
        <ProFormItem
          name="logo"
          label='商场图片'
          rules={[
            {
              required: true,
              message: ("请上传商场图片"),
            },
          ]}
        >
          <MyUpload isSingle={true}/>
        </ProFormItem>
      </ModalForm>
    </div>
  );
};

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');

  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            backgroundImage:
              "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: token.colorTextHeading,
            }}
          >
            欢迎使用 商场后台管理系统
          </div>
          <p
            style={{
              fontSize: '14px',
              color: token.colorTextSecondary,
              lineHeight: '22px',
              marginTop: 16,
              marginBottom: 32,
            }}
          >
            商家后台管理系统的目的是，通过商家手中掌握的资源，做到了资源整合的最大化。商家管理系统是在行业经验基础上,实现客户的实际需求，做到了线下消费与，线上消费的结合。
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <InfoCard
              index={1}
              href="https://www.cnpp.cn/pinpai/106814.html"
              title="吾悦广场"
              desc="成立于2012年，新城控股集团旗下的城市综合体项目品牌，从中国家庭真切的情感需求出发，致力于打造有情怀/不复制/具规模的中国体验式商业品牌。"
              logo={{
                uid: '1',
                name: '吾悦.webp',
                url: '/img/吾悦.webp'
              }}
            />
            <InfoCard
              index={2}
              href="https://www.cnpp.cn/pinpai/7464.html"
              title="万达广场"
              desc="创立于1988年，以现代服务业为主的大型企业集团，旗下有万达广场、万达影城、万达酒店、万达文化旅游城、万达宝贝王等知名品牌，是知名的不动产企业、影视企业、体育企业、儿童产业企业，万达广场集社交、娱乐、美食、零售功能于一体，具备形成独立大型商圈的属性，以“万达广场就是城市中心”的宣传语著称"
              logo={{
                uid: '2',
                name: '万达.webp',
                url: '/img/万达.webp'
              }}
            />
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
