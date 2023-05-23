import { PageContainer } from '@ant-design/pro-components';
import React, { useContext, useEffect, useState } from 'react';

export interface mapStateType {
    mapId?: string;
    isOpenPOI?: boolean;
    isOpenEditor?: boolean;
}

export const MapContext = React.createContext({
    mapState: {} as mapStateType,
    setMapState: undefined as any
});


const Map: React.FC = () => {
    const { mapState } = useContext(MapContext);
    const [mapId, setMapId] = useState(mapState?.mapId);
    const mapHeight = window.screen.availHeight - 370;
    useEffect(() => {
        console.log('监听地图状态');
        if (mapState.mapId) setMapId(mapState.mapId);
    }, [mapState])

    return (
        <PageContainer>
            {!mapState?.isOpenPOI && !mapState?.isOpenEditor && mapState?.mapId === mapId && <iframe
                width='100%'
                height={`${mapHeight}px`}
                src={`https://tst-sdk.centmap.com:8443/v2/shopping/#/${mapId}M`}
                style={{border:'0'}}
            />}
            {mapState?.isOpenPOI && <div>打开POI编辑器</div>}
            {mapState?.isOpenEditor && <div>打开地图编辑器</div>}
        </PageContainer>
    );
};

export default Map;
