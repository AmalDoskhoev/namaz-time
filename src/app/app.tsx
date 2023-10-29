import { HomePage } from '@/pages';

import { AppProvider } from './app-provider';

export function App() {
  return (
    <AppProvider>
      <HomePage />
    </AppProvider>
  );
}
