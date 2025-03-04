import cn from 'classnames';
import styles from './index.module.css';
import React from 'react';

type TitleProps = {
  variant: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  weight?: 'semibold' | 'bold' | 'medium' | 'regular';
  font?: 'primary' | 'secondary';
  color?: 'primaryColor' | 'secondaryColor';
};

type TextProps = {
  variant: 'p1' | 'p2' | 'p3' | 'p4' | 'p5';
  children: React.ReactNode;
  weight?: 'semibold' | 'bold' | 'medium' | 'regular';
  font?: 'primary' | 'secondary';
  color?: 'primaryColor' | 'secondaryColor';
};

export const Typography = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn(styles.root, className)}>{children}</div>;
};


Typography.Title = ({
  variant,
  children,
  weight = 'regular',
  font = 'primary',
  color = 'primaryColor',
}: TitleProps) => {
  const Tag = variant;

  return (
    <Typography className={cn(styles[variant], styles[weight], styles[font], styles[color])}>
      <Tag>{children}</Tag>
    </Typography>
  );
};

Typography.Text = ({
  variant,
  children,
  weight = 'regular',
  font = 'primary',
  color = 'secondaryColor',
}: TextProps) => {
  return (
    <Typography className={cn(styles[variant], styles[weight], styles[font], styles[color])}>
      <p>{children}</p>
    </Typography>
  );
};
