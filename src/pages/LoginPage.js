import React from 'react';
import {Link} from 'react-router-dom'

const LoginPage = () => {
  return (
    <div>
      <h1>Авторизация</h1>
      <p>Еще нет аккаунта? <Link to="/register">зарегистрируйтесь</Link></p>
    </div>
  );
};

export default LoginPage;