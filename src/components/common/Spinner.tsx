import React from 'react';

type Props = {
  alwaysWhite?: boolean;
  alwaysDark?: boolean;
};

const Spinner: React.FC<Props> = () => {
  return (
    <div
      className={
        'inline-block h-5 w-5 animate-spin rounded-full border-[3px] border-current border-t-transparent'
      }
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
