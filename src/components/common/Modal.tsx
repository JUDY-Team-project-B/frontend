import React, { useEffect, useState } from 'react';
import { Portal } from './Portal';
import Button from './Button';

type Props = {
  align?: 'left' | 'center' | 'right';
  type?: 'modal' | 'alert';
  setClose: (isClosed: boolean) => void;
  buttons?: React.ReactNode;
  title?: React.ReactNode;
  children: React.ReactNode;
};

const Modal: React.FC<Props> = ({
  align = 'left',
  type = 'modal',
  setClose,
  buttons,
  title,
  children,
}) => {
  const [beforeFocusedEl, setBeforeFocusedEl] = useState<HTMLElement | null>(
    null,
  );

  useEffect(() => {
    const escapeHandler = (event: KeyboardEvent) => {
      event.key === 'Escape' && setClose(false);
    };

    document.addEventListener('keydown', escapeHandler);
    document.body.classList.add('clipped');

    if (typeof window !== 'undefined') {
      setBeforeFocusedEl(document.activeElement as HTMLElement);
    }

    return () => {
      document.body.classList.remove('clipped');
      document.removeEventListener('keydown', escapeHandler);
      beforeFocusedEl?.focus();
    };
  }, [beforeFocusedEl, setClose]);

  return (
    <Portal target="#modal">
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 ${
          align === 'center'
            ? 'items-center'
            : align === 'right'
            ? 'items-end'
            : ''
        }`}
      >
        <div
          className={`bg-white rounded-lg overflow-hidden shadow-xl ${
            type === 'alert' ? 'max-w-sm' : type === 'modal' ? 'max-w-3xl' : ''
          }`}
        >
          <div className="p-6">
            {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
            <div className="mb-6">{children}</div>
            <div className="flex justify-end">
              {buttons ||
                (type === 'alert' && (
                  <Button onClick={() => setClose(false)} type={undefined}>
                    확인
                  </Button>
                ))}
              {type !== 'alert' && (
                <button className="ml-2" onClick={() => setClose(false)}>
                  {/* <ExitSVG className="w-6 h-6" /> */}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
