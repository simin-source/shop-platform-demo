import { useEmotionCss } from '@ant-design/use-emotion-css';
import { useModel } from '@umijs/max';
import React from 'react';
import { AvatarDropdown } from '../RightContent/AvatarDropdown';

export type DefinedHeader = {
  children?: React.ReactNode;
};

const Header: React.FC<DefinedHeader> = ({ children }) => {

  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const headerStyle = useEmotionCss(() => {
    return {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
      height: '58px',
      padding: '13px 20px',
      boxShadow: '2px 6px 5px rgba(0, 0, 0, 0.1)',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 2,
      background: '#fff',
    };
  });

  return (
    <div className={headerStyle}>
      {children}
      <AvatarDropdown menu={false}>
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', margin: '0 10px' }}>
          <img style={{ width: '22px', height: '22px', borderRadius: '50%', marginRight: '3px' }} src={currentUser?.avatar} alt="avatar" />
          <span className="anticon">{currentUser?.name}</span>
        </div>
      </AvatarDropdown>
    </div>
  );
};

export default Header;
