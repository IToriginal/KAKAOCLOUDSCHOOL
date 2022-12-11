import { Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';
import Article from './Article';
import Articles from './Articles';
import Layout from './Layout';
import Login from './Login';
import MyPage from './MyPage';
import NotFound from './NotFound';


const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/mypage" element={<MyPage/>}/>

      <Route element={<Layout />}>
        <Route index element ={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path ='/colorbox' element={<colorBox/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

