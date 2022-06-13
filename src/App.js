import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Layout} from "antd";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./Components/Header";
function App() {
  const { Footer, Content } = Layout
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Header/>
        <Content style={{ paddingTop: '20px' }}>
          <div className={'container'}>
            <Routes>
              <Route path={'/'} element={<HomePage/>} />
              <Route path={'/login'} element={<LoginPage/>} />
              <Route path={'/register'} element={<RegisterPage/>} />
            </Routes>
          </div>
        </Content>
        <Footer/>
      </Layout>
    </>
  );
}

export default App;
