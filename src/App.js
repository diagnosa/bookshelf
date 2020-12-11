import { lazy, Suspense } from 'react';
import './App.css';

const Catalog = lazy(() => import('./component/Catalog'));
const Header = lazy(() => import('./component/Header'));
function App() {
    return (
        <div className="App">
            <Suspense fallback={<div className="App-logo-placeholder"></div>}>
                <Header />
                <Catalog />
            </Suspense>
        </div>
    );
}

export default App;
