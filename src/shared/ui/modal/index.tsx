import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';

import styles from './index.module.css';
import { useKeyBoardHandle } from '../../hooks/useKeyboardHandle';

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const modalRoot = document.getElementById('modal-root');
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  useKeyBoardHandle({ handle: onClose, eventKey: 'Escape' });

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsVisible(false);
    }
  };

  if (!isVisible || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div
      className={cn(styles.wrapper, {
        [styles.wrapperAnimateOpen]: isAnimating && isOpen,
        [styles.wrapperAnimateClose]: !isAnimating && !isOpen,
      })}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.content}>
        <button className={styles.close} onClick={onClose}>
          CLOSE
        </button>

        {children}
      </div>
    </div>,
    modalRoot,
  );
};
