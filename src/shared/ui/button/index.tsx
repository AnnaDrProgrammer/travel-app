import cn from 'classnames';
import styles from './index.module.css';

type ButtonProps = {
  children: React.ReactNode;
  view: 'primary' | 'secondary' | 'secondaryDark' | 'secondaryLight';
  size: 'l' | 'm' | 's' | 'xs' | 'xxs' | 'smallest';
};

const Button = ({ children, view, size }: ButtonProps) => {
  return (
    <button
      className={cn(styles['button'], {
        [styles.viewPrimary]: view === 'primary',
        [styles.viewSecondaryDark]: view === 'secondaryDark',
        [styles.viewSecondaryLight]: view === 'secondaryLight',

        [styles.sizeLarge]: size === 'l',
        [styles.sizeMedium]: size === 'm',
        [styles.sizeS]: size === 's',
        [styles.sizeXS]: size === 'xs',
        [styles.sizeXXS]: size === 'xxs',
        [styles.sizeSmallest]: size === 'smallest',
      })}
    >
      {children}
    </button>
  );
};

export default Button;
