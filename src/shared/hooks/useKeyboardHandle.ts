import { useEffect } from 'react';

export const useKeyBoardHandle = ({
  handle,
  eventKey,
}: {
  handle(...args: unknown[]): void;
  eventKey: string;
}) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === eventKey) {
        handle();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  }, [handle, eventKey]);
};
