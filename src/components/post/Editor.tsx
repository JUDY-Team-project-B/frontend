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
        plugins: ['image'],
        toolbar:
          'undo redo | image | styles | styleselect  | fontsizeselect  | bold italic | alignleft aligncenter alignright alignjustify | outdent indent ',
        // todo image upload handler
      }}
    />
  );
};

export default PostEditor;
