import cn from 'classnames';
import styles from './index.module.css';
import React from 'react';

type Color = 'primary' | 'secondary' | 'invert';
type Weight = 'semibold' | 'bold' | 'medium' | 'regular';
type Font = 'primary' | 'secondary';

type TitleProps = {
  variant: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  weight?: Weight;
  font?: Font;
  color?: Color;
};

type TextProps = {
  variant: 'p1' | 'p2' | 'p3' | 'p4' | 'p5';
  children: React.ReactNode;
  weight?: Weight;
  font?: Font;
  color?: Color;
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
  color = 'primary',
}: TitleProps) => {
  const Tag = variant;

  return (
    <Typography
      className={cn(
        styles[variant],
        styles[weight],
        styles[font],
        styles[`color--${color}`],
      )}
    >
      <Tag>{children}</Tag>
    </Typography>
  );
};

Typography.Text = ({
  variant,
  children,
  weight = 'regular',
  font = 'primary',
  color = 'secondary',
}: TextProps) => {
  return (
    <Typography
      className={cn(
        styles[variant],
        styles[weight],
        styles[font],
        styles[`color--${color}`],
      )}
    >
      <p>{children}</p>
    </Typography>
  );
};
