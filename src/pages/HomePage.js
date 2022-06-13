import React from 'react';
import {Link, Navigate} from 'react-router-dom'
import {Button} from "antd";

const HomePage = () => {
  return (
    <div>
      <Button type={'primary'}><Link to="/login">Вход</Link></Button>
    </div>
  );
};

export default HomePage;