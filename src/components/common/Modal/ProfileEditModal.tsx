import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Hidden,
} from '@mui/material';

interface ProfileEditModalProps {
  open: boolean;
  onClose: () => void;
}

const ProfileEditModal: React.FC<ProfileEditModalProps> = ({
  open,
  onClose,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleThumbnailUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target?.files?.[0];
    console.log('Uploaded file:', file);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      PaperProps={{
        style: { borderRadius: 40, height: '30rem', padding: '1rem' },
      }}
    >
      <DialogTitle style={{ fontSize: '1.5rem', height: '8rem' }}>
        프로필 편집
      </DialogTitle>
      <DialogContent style={{ overflowX: 'hidden' }}>
        <Caption>
          <CaptionText>프로필 사진 닉네임 변경</CaptionText>
          <ThumbnailUploadButton htmlFor="thumbnailUpload">
            이미지 업로드
            <ThumbnailUploadInput
              id="thumbnailUpload"
              type="file"
              onChange={handleThumbnailUpload}
            />
            {selectedFile && <FileName>{selectedFile.name}</FileName>}
          </ThumbnailUploadButton>
        </Caption>
        <Divider />
        <Caption>닉네임 변경</Caption>
        <NicknameBox>
          <NicknameInput placeholder="닉네임을 입력하세요" />
          <NicknameChangeButton>변경</NicknameChangeButton>
        </NicknameBox>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          닫기
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProfileEditModal;

const ThumbnailUploadButton = styled.label`
  display: inline-block;
  padding: 10px 16px;
  background-color: #518ccc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Caption = styled.div`
  font-size: 1rem;
  color: #c4c8cb;
  justify-content: space-between;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const CaptionText = styled.span`
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const ThumbnailUploadInput = styled.input`
  display: none;
`;
const FileName = styled.span`
  margin-left: 1rem;
`;
const Divider = styled.div`
  height: 1px;
  background-color: #e5e5e5;
  margin: 3rem 0;
`;

const NicknameBox = styled.div`
  width: 500px;
  height: 50px;
  border-radius: 3px;
  background-color: #f0f0f7;
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

const NicknameInput = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  outline: none;
`;

const NicknameChangeButton = styled.button`
  background-color: #7ab0f1;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
`;
