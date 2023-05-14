interface IProps {
  hashtag: string;
  onChageHashtag: (content: string) => void;
}

const Hashtag = ({ hashtag, onChageHashtag }: IProps) => {
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === '#') {
      // Get the hashtag content
      const hashtagContent = event.currentTarget.value.slice(
        event.currentTarget.value.lastIndexOf('#') + 1,
      );
      // Call the onChageHashtag prop function with the hashtag content
      onChageHashtag(hashtagContent);
    }
  };

  return (
    <input
      type="text"
      value={hashtag}
      onChange={(event) => onChageHashtag(event.currentTarget.value)}
      onKeyUp={handleKeyUp}
      placeholder="Type your hashtags here"
    />
  );
};

export default Hashtag;
