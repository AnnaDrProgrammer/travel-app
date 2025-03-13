import React from 'react';
import { Header, type Navigation } from '../components/header';

type PageLayoutsProps = {
  children: React.ReactNode;
  navigation: Navigation[];
};

export const PageLayout = ({ children, navigation }: PageLayoutsProps) => {
  return (
    <div>
      <Header navigation={navigation} />

      {children}

      <footer>FOOTER</footer>
    </div>
  );
};
