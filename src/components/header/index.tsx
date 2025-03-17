import { Button, Logo } from '../../shared/ui';
import cn from 'classnames';
import styles from './index.module.css';
import { NavLink } from 'react-router-dom';
import { useIsMobile } from '../../shared/hooks/useIsMobile';
import { useState } from 'react';
import { Sidebar } from '../../shared/ui/sidebar';

export type Navigation = {
  title: string;
  link: string;
};

type HeaderProps = {
  navigation: Navigation[];
};

export const BurgerButton = ({
  onClick,
  view = 'burger',
}: {
  onClick(...arg: unknown[]): void;
  view?: 'burger' | 'close';
}) => {
  return (
    <div
      className={cn(styles.menuButton, styles[`menuButton--${view}`])}
      onClick={onClick}
    >
      <div className={styles.menuButtonItem}></div>
      <div className={styles.menuButtonItem}></div>
      <div className={styles.menuButtonItem}></div>
    </div>
  );
};
export const Header = ({ navigation }: HeaderProps) => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Состояние для управления сайдбаром

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Переключаем состояние
  };

  return (
    <header className={cn(styles.header, styles.container)}>
      <Logo />

      <div className={styles.navigation}>
        {navigation?.map(({ title, link }) => (
          <NavLink to={link} key={title}>
            {({ isActive }) => (
              <Button size="smallest" view={isActive ? 'textInverted' : 'text'}>
                {title}
              </Button>
            )}
          </NavLink>
        ))}
      </div>

      {!isMobile && (
        <Button view="secondaryDark" size="xxs">
          Contact Us
        </Button>
      )}

      {isMobile && <BurgerButton onClick={toggleSidebar} />}

      {isMobile && (
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
          closeElement={<BurgerButton onClick={toggleSidebar} view="close" />}
        >
          <div className={styles.mobileNav}>
            {navigation?.map(({ title, link }) => (
              <NavLink to={link} key={title}>
                {({ isActive }) => (
                  <Button
                    size="smallest"
                    view={isActive ? 'textInverted' : 'text'}
                  >
                    {title}
                  </Button>
                )}
              </NavLink>
            ))}
          </div>
        </Sidebar>
      )}
    </header>
  );
};
