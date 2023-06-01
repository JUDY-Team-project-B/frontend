import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

type Props = {
  children: ReactNode;
  target: '#modal' | '#spinner';
};

export const Portal = ({ children, target }: Props) => {
  const [_document, set_Document] = useState<Element>();

  useEffect(() => {
    const element = document.querySelector(target);
    element !== null && set_Document(element);
  }, [target]);

  return _document ? ReactDOM.createPortal(children, _document) : null;
};
