import classNames from 'classnames';
import { memo, ReactNode } from 'react';

interface IProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  type,
  children,
  disabled,
  className = '',
  onClick,
}: IProps) => {
  return (
    <button
      className={classNames(
        'text-white flex font-semibold justify-center items-center text-1 w-32 px-3 py-2 gap-4 bg-[#3DB9FF] rounded-full border-2  hover:opacity-75 active:scale-90 duration-300',
        className,
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(Button);
