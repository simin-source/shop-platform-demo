import { PageContainer } from "@ant-design/pro-components"
import { Select } from "antd";
import { useEffect, useState } from "react";
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const Heatmap: React.FC = () => {
    const [mapId, setMapId] = useState('449174');
    const [time, setTime] = useState();
    const [key, setKey] = useState(Date.now()); // 初始化 key 值
    const mapHeight = window.screen.availHeight - 370;

    const handleMapIdChange = (value: string) => {
        console.log(`mapId ${value}`);
        setMapId?.(value);
    };
    const handleTimeChange = (value: any) => {
        console.log(`time ${value}`);
        setTime?.(value);
    };
    useEffect(() => {
        console.log('监听地图状态');
        setKey(Date.now());
    }, [time])
    return (
        <PageContainer
            header={{
                title: "人流热力图",
                breadcrumb: {},
            }}
            key={key}
            extra={[
                <Select
                    defaultValue={mapId}
                    style={{ width: 120, margin: '0 10px' }}
                    onChange={handleMapIdChange}
                    options={[
                        { value: '449174', label: '大同吾悦' },
                        { value: '644214', label: '重庆广场' },
                    ]}
                />,
                <RangePicker onChange={handleTimeChange}/>,
            ]}
        >
            <iframe
                className='analysis_box'
                width='100%'
                height={`${mapHeight}px`}
                src={`http://192.168.31.198:52330/demo.html?mapid=${mapId}`}
                style={{ border: '0' }}
            />
        </PageContainer>
    )
}

export default Heatmap;