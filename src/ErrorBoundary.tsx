import { Component, ErrorInfo, ReactNode } from 'react';

// Определяем интерфейс для пропсов
interface ErrorBoundaryProps {
  children: ReactNode; // children — это дочерние элементы, которые будут обёрнуты в ErrorBoundary
}

// Определяем интерфейс для состояния
interface ErrorBoundaryState {
  hasError: boolean; // Состояние, указывающее, произошла ли ошибка
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // Метод для обновления состояния при возникновении ошибки
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.log({ error });
    return { hasError: true };
  }

  // Метод для логирования ошибки
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Ошибка:', error, 'Информация:', errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Отображаем резервный UI, если произошла ошибка
      return <h1>Что-то пошло не так. Пожалуйста, перезагрузите страницу.</h1>;
    }

    // Отображаем дочерние компоненты, если ошибки нет
    return this.props.children;
  }
}

export default ErrorBoundary;
