import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './index.module.css';

interface SidebarProps {
  isOpen: boolean;
  children: React.ReactNode;
  closeElement?: React.ReactNode;
  onClose?: () => void;
}

export const Sidebar = ({
  isOpen,
  children,
  closeElement,
  onClose,
}: SidebarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);

      setTimeout(() => {
        setIsAnimating(true);
      }, 10);
    }
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(styles.sidebar, {
        [styles.open]: isAnimating && isOpen,
        [styles.none]: !isAnimating && !isOpen,
      })}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className={styles.close}>
        {closeElement ? closeElement : <div onClick={onClose}>Х</div>}
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
};
