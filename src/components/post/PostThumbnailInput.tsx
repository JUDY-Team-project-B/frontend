import React, { useState } from 'react';
import AWS from 'aws-sdk';

const PostThumbnailInput: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const onUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const fileExt = file.name.split('.').pop();

      // 확장자 제한
      if (!['jpeg', 'png', 'jpg'].includes(fileExt?.toLowerCase() ?? '')) {
        alert('jpg, png, jpg 파일만 업로드가 가능합니다.');
        return;
      }

      // 파일 리더
      const reader = new FileReader();
      reader.readAsDataURL(file);

      // 파일 업로드
      reader.onload = () => {
        // 이미지 경로 선언
        setImageSrc(reader.result as string);
        // 이미지 파일 선언
        setImageFile(file);
      };
    }
  };

  const uploadS3 = () => {
    // todo s3 설정 이후 작성
    const REGION = '';
    const ACCESS_KEY_ID = '';
    const SECRET_ACCESS_KEY = '';

    AWS.config.update({
      region: REGION,
      accessKeyId: ACCESS_KEY_ID,
      secretAccessKey: SECRET_ACCESS_KEY,
    });

    const upload = new AWS.S3.ManagedUpload({
      params: {
        ACL: 'public-read',
        Bucket: 'YOUR_BUCKET_NAME',
        Key: `upload/${imageFile?.name ?? ''}`,
        Body: imageFile,
      },
    });

    upload.promise().then(() => {
      console.log('업로드 완료');
    });
  };

  return (
    <>
      <input hidden accept="image/*" type="file" onChange={onUpload} />
      {imageSrc && (
        <div>
          <img
            src={imageSrc}
            alt="미리보기 이미지"
            style={{ maxWidth: '100%' }}
          />
        </div>
      )}
      {/* <button
        type="button"
        onClick={() => {
          if (!imageSrc) {
            alert('이미지를 등록해 주세요.');
            return;
          }

          uploadS3();
        }}
      >
        업로드!
      </button> */}
    </>
  );
};

export default PostThumbnailInput;
