import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { HomePage, AuthenPage, ArticlePage, ArticleByFilter } from './page';
function App() {
  return (
    <div className="w-full h-full flex flex-row">
      <Header />
      <div className='w-full h-full'>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/authen' element={<AuthenPage />} />
            <Route path='/article/:meta_name' element={<ArticlePage />} />
            <Route path='/:type/:name' element={<ArticleByFilter/>} />

          </Routes>
      </div>
    </div>
  );
}

export default App;
