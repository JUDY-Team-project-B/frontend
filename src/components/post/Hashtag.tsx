import React, { useState } from 'react';
export interface HashTagProps {
  hashTags: string[];
  setHashTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const HashTag = ({ hashTags, setHashTags }: HashTagProps) => {
  const [hashTagInput, setHashInput] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const checkIsDuplicateHashTag = (hashtag: string) =>
    hashTags.reduce((acc, cur) => {
      if (cur.toLowerCase() === hashtag.toLowerCase()) {
        acc = true;
      }
      return acc;
    }, false);

  const handleSubmithashTagForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (hashTags.length === 5) {
      setErrorMsg('해시태그는 최대 5개까지 등록이 가능합니다');
      setHashInput('');
      return;
    }

    if (checkIsDuplicateHashTag(hashTagInput.trim())) {
      setErrorMsg('중복된 해시태그는 입력하실 수 없습니다');
      setHashInput('');
      return;
    }
    setHashTags([...hashTags, hashTagInput.trim()]);
    setErrorMsg('');
    setHashInput('');
  };

  const handleChangeHashTagInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHashInput(e.target.value);
  };

  const handleKeydownHashTagInput = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.code === 'Enter' && hashTags.length >= 1 && hashTagInput.length > 0) {
      setHashTags([...hashTags, hashTagInput.trim()]);
      setHashInput('');
    }
  };

  return (
    <div>
      <form
        aria-label="해시태그가 보여지고 입력하는 곳입니다"
        onSubmit={handleSubmithashTagForm}
      >
        <div>
          {hashTags.length >= 1 &&
            hashTags.map((item) => <div key={item}>{item}</div>)}
        </div>
        <input
          className="w-full bg-white border-b-2 py-2 px-4 placeholder-gray-4 focus:outline-none"
          minLength={2}
          maxLength={20}
          aria-label="해시태그를 입력하는 곳입니다"
          placeholder="해시태그를 입력 후 엔터를 눌러주세요"
          value={hashTagInput}
          onChange={handleChangeHashTagInput}
          onKeyDown={handleKeydownHashTagInput}
        />
      </form>
    </div>
  );
};

export default HashTag;
