import {lazy, Suspense} from 'react';
import './App.css';

const LogoImage = lazy(() => import('./component/LogoImage'));
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Suspense fallback={
              <div className="App-logo-placeholder"></div>
            } >
            <LogoImage />
          </Suspense>
        <p>
          Personal Bookshelf
        </p>
      </header>
    </div>
  );
}

export default App;
