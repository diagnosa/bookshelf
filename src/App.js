import {lazy, Suspense} from 'react';
import './App.css';

const Catalog = lazy(() => import('./component/Catalog'));
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Suspense fallback={
          <div className="App-logo-placeholder"></div>
        } >
        <Catalog />
      </Suspense>
    </div>
  );
}

export default App;
