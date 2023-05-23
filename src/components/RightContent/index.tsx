import { MapContext } from '@/pages/Map/index';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { SelectLang as UmiSelectLang } from '@umijs/max';
import { Button, Select } from 'antd';
import { useContext } from 'react';
export type SiderTheme = 'light' | 'dark';

export const SelectLang = () => {
  return (
    <UmiSelectLang
      style={{
        padding: 4,
      }}
    />
  );
};
export const Question = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: 26,
      }}
      onClick={() => {
        // window.open('https://pro.ant.design/docs/getting-started');
      }}
    >
      <QuestionCircleOutlined />
    </div>
  );
};

export const SelectMap = () => {

  const { mapState, setMapState } = useContext(MapContext);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setMapState?.({ mapId: value, isOpenPOI: false, isOpenEditor: false });
  };

  return (
    <Select
      defaultValue={mapState.mapId ? mapState.mapId : '449174'}
      style={{ width: 120, margin: '0 10px' }}
      onChange={handleChange}
      options={[
        { value: '449174', label: '大同吾悦' },
        { value: '644214', label: '重庆广场' },
      ]}
    />
  );
};

export const EditPOI = () => {

  const { mapState, setMapState } = useContext(MapContext);

  const openPOIEdit = () => {
    console.log('openPOIEdit');
    setMapState?.({ ...mapState, isOpenPOI: true, isOpenEditor: false });
  };

  const btnStyle = useEmotionCss(() => {
    return {
      width: '120px',
      height: '32px',
      margin: '0 10px',
      '&:hover': {
        backgroundColor: '#EEF5FD',
      },
    };
  });

  return (
    <Button className={btnStyle} onClick={openPOIEdit}>POI属性编辑</Button>
  );
};

export const MapEditor = () => {

  const { mapState, setMapState } = useContext(MapContext);

  const openMapEditor = () => {
    console.log('openMapEditor');
    setMapState?.({ ...mapState, isOpenPOI: false, isOpenEditor: true });
  };

  const btnStyle = useEmotionCss(() => {
    return {
      width: '120px',
      height: '32px',
      margin: '0 10px',
      '&:hover': {
        backgroundColor: '#EEF5FD',
      },
    };
  });

  return (
    <Button className={btnStyle} onClick={openMapEditor}>地图编辑</Button>
  );
};
