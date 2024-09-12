import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.jsx';
// import TodoApp from './pages/Todo.jsx';
// import Wallet from './pages/Wallet.jsx';
import Header from './pages/Header.jsx'
import Wallet from './pages/Wallet.jsx'
import Expenses from './pages/Expenses.jsx'
import Categories from './pages/Categories.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

console.log(import.meta.env.VITE_BASE_URL);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Expenses />}/>
          <Route path="/categories" element={<Categories />}/>
          <Route path="/wallet" element={<Wallet />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
