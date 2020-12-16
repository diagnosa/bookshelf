import { lazy, Suspense } from 'react';
import './App.css';

const Catalog = lazy(() => import('./component/Catalog'));
const Header = lazy(() => import('./component/Header'));
const headerPlaceholder = <div className="App-header-placeholder"></div>;
function App() {
    return (
        <div className="App">
            <Suspense
                    lazy
                    fallback={headerPlaceholder}
            >
                <Header />
            </Suspense>
            <Suspense fallback={<div className="Ap-body-placeholder"></div>}>
                <Catalog />
            </Suspense>
        </div>
    );
}

export default App;
