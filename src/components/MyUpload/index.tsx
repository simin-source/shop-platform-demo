import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload, UploadFile, UploadProps } from "antd";
import { RcFile } from "antd/es/upload";
import { useState } from "react";

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

interface LogoUploadProps {
    value?: UploadFile;
    isSingle?: boolean;
    onChange?: (value: UploadFile) => void;
}

const MyUpload: React.FC<LogoUploadProps> = ({ value, isSingle, onChange }) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>(value ? [value]:[]);

    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }
        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    };
    const triggerChange = (changedValue: UploadFile) => {
        onChange?.(changedValue);
    };

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        triggerChange(newFileList[0])
    }

    return (
        <>
            <Upload
                name="logo"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                {fileList && fileList?.length >= (isSingle ? 1 : fileList?.length + 1) ? null : <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                </div>}
            </Upload>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </>
    );
}

export default MyUpload;
