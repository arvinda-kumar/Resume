import { Suspense, lazy } from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './portfolio/theme/ThemeContext';

const Portfolio = lazy(() => import('./portfolio/Portfolio'));
const ProjectsPage = lazy(() => import('./portfolio/pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./portfolio/pages/ProjectDetailPage'));

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="App">
          <Router>
            <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
              <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:slug" element={<ProjectDetailPage />} />
                <Route path="*" element={<Portfolio />} />
              </Routes>
            </Suspense>
          </Router>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
