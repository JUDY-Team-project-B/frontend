import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface IProps {
  onChangeEditor: (content: string) => void;
}

const PostEditor = ({ onChangeEditor }: IProps) => {
  const editorRef = useRef<any>(null);

  const handleEditorChange = (content: string) => {
    onChangeEditor(content);
  };

  return (
    <Editor
      apiKey={import.meta.env.VITE_EDITOR_API_KEY} // api key
      onInit={(editor) => (editorRef.current = editor)} // 현재 값 설정
      onEditorChange={handleEditorChange}
      init={{
        placeholder: '게시글을 작성해주세요.',
        height: 500,
        menubar: false,
        language: 'ko_KR',
        plugins: [
          'lists',
          'advlist',
          'autolink',
          'link',
          'image',
          'preview',
          'searchreplace',
          'visualblocks',
          'fullscreen',
          'importcss',
          'insertdatetime',
          'table',
          'help',
          'wordcount',
        ],
        toolbar: [
          `undo redo | bold italic underline | image link | forecolor backcolor removeformat | alignleft aligncentre alignright alignjustify | indent outdent | bullist numlist | preview`,
        ],
      }}
    />
  );
};

export default PostEditor;
