import React from 'react';
import {Layout} from "antd";
import {Link} from "react-router-dom";

const Header = () => {
  const {Header} = Layout;
  return (
    <Header className={'header'}>
      <Link className={'header__link'} to={'/'}>Главная</Link>
      <Link className={'header__link'} to={'/register'}>Регистрация</Link>
      <Link className={'header__link'} to={'/login'}>Авторизация</Link>
    </Header>
  );
};

export default Header;