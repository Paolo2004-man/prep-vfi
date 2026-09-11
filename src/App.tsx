import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { GuidaPage } from './pages/GuidaPage';
import { AllenamentiPage } from './pages/AllenamentiPage';
import { ProgrammaPage } from './pages/ProgrammaPage';
import { ProgressiPage } from './pages/ProgressiPage';
import { ConsigliPage } from './pages/ConsigliPage';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function App() {
  return (
    <BrowserRouter basename={basename || undefined}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="guida" element={<GuidaPage />} />
          <Route path="allenamenti" element={<AllenamentiPage />} />
          <Route path="programma" element={<ProgrammaPage />} />
          <Route path="progressi" element={<ProgressiPage />} />
          <Route path="consigli" element={<ConsigliPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
