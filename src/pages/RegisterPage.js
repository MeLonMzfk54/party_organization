import React from 'react';
import {Link} from 'react-router-dom'

const RegisterPage = () => {

  return (
    <div>
      <h1>Регистрация</h1>
      <p>Уже есть аккаунт? <Link to="/login">войдите</Link></p>
    </div>
  );
};

export default RegisterPage;