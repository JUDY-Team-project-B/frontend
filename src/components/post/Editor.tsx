import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface IProps {
  placeholder: string;
  onChangeEditor: (content: string) => void;
}

const PostEditor = ({ placeholder, onChangeEditor }: IProps) => {
  const editorRef = useRef<any>(null);

  const handleEditorChange = (content: string) => {
    onChangeEditor(content);
  };

  return (
    <Editor
      apiKey={import.meta.env.VITE_EDITOR_API_KEY} // api key
      onInit={(editor) => (editorRef.current = editor)} // 현재 값 설정
      initialValue={placeholder}
      onEditorChange={handleEditorChange}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          'lists',
          'link',
          'image',
          'charmap',
          'preview',
          'searchreplace',
          'fullscreen',
          'media',
          'table',
          'code',
          'help',
          'emoticons',
          'codesample',
          'quickbars',
        ],
        toolbar:
          'undo redo | blocks | ' +
          'bold italic forecolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'lists table link charmap searchreplace | ' +
          'image media codesample emoticons fullscreen preview | ' +
          'removeformat | help ',

        // todo image upload handler
      }}
    />
  );
};

export default PostEditor;
