import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import user from '../../../assets/image/user.png';
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
  const [nickname, setNickname] = useState('');
  const [data, setData] = useState('');

  const handleThumbnailUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target?.files?.[0];
    console.log('Uploaded file:', file);
    setSelectedFile(file.name);
  };

  useEffect(() => {
    const UserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/user/me`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Access-Control-Allow-Origin': '*',
            },
          },
        );

        const responseData = response.data.data;
        console.log(responseData);
        setData(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    if (open) {
      UserData();
    }
  }, [open]);
  //닉네임 값
  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    const Characters = /[!@#$%^&*(),.?":{}|<>]/;

    if (value.length <= 10) {
      if (Characters.test(value)) {
        alert('닉네임에는 특수문자를 사용할 수 없습니다!');
      } else {
        setNickname(value);
      }
    } else {
      alert('닉네임은 10자를 넘을 수 없습니다!');
    }
  };

  const handleNicknameSubmit = async (nickname: string) => {
    try {
      await axios.put(
        `http://localhost:8080/api/v1/user/me`,
        {
          nickname: nickname,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Access-Control-Allow-Origin': '*',
          },
        },
      );
      alert('닉네임이 변경되었습니다');
      window.location.reload();
      console.log('성공');
    } catch (error) {
      console.error('실패 오류 : ', error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      PaperProps={{
        style: { borderRadius: 40, height: '40rem', padding: '1rem' },
      }}
    >
      <DialogTitle style={{ fontSize: '1.5rem', height: '8rem' }}>
        프로필 편집
      </DialogTitle>
      <DialogContent style={{ overflowX: 'hidden' }}>
        <CaptionText>프로필 사진 변경</CaptionText>
        <ProfileImg bgImg={user} />
        <Caption>
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
        <ImageChangeButton>변경</ImageChangeButton>
        <Divider />
        <Caption>닉네임 변경</Caption>
        <NicknameBox>
          <NicknameInput
            placeholder="닉네임을 입력하세요"
            value={nickname}
            onChange={handleNicknameChange}
          />
          <NicknameChangeButton onClick={() => handleNicknameSubmit(nickname)}>
            변경
          </NicknameChangeButton>
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
  padding: 9px 10px;
  background-color: #518ccc;
  color: white;
  border: none;
  width: 6.8rem;
  border-radius: 7px;
  cursor: pointer;
  margin-left: 12.3rem;
  margin-top: 1rem;

  &:hover {
    position: center;
    opacity: 0.9;
  }
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
const ProfileImg = styled.div<{ bgImg: string }>`
  background-image: ${(props) => `url(${props.bgImg})`};
  height: 7rem;
  background-size: 7rem 7rem;
  background-repeat: no-repeat;
  background-position: center;
  /* margin-top: 20rem; */
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

const ImageChangeButton = styled.button`
  background-color: #7ab0f1;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-left: 27.1rem;
`;
