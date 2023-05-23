import { PageContainer } from "@ant-design/pro-components"
import { useEffect, useState } from "react";

const Analysis: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const dom =document.getElementsByClassName('analysis_box')[0];
        if(dom.clientWidth<800)setIsMobile(true);
    })
    return (
        <PageContainer
            header={{
                title: '流量分析平台',
                breadcrumb: {},
            }}
        >
            <iframe
                className='analysis_box'
                width='100%'
                height={`${isMobile ? '2400px' : '2000px'}`}
                src='https://tool.centmap.com:8443/analysis/'
                style={{ border: '0' }}
            />
        </PageContainer>
    )
}

export default Analysis;