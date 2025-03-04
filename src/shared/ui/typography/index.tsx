import cn from 'classnames';
import styles from './index.module.css';
import React from 'react';

type TitleProps = {
  variant: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
};

type TextProps = {
  variant:
    | 'p1'
    | 'p2'
    | 'p3'
    | 'p4'
    | 'p5'
    | 'p6'
    | 'p7'
    | 'p8'
    | 'p9'
    | 'p10'
    | 'p11'
    | 'p12'
    | 'p13';
  children: React.ReactNode;
};

export const Typography = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};

Typography.Title = ({ variant, children }: TitleProps) => {
  const Tag = variant;

  return (
    <Typography>
      <Tag>{children}</Tag>
    </Typography>
  );
};

Typography.Text = ({ variant, children }: TextProps) => {
  return (
    <Typography>
      <p>{children}</p>
    </Typography>
  );
};
