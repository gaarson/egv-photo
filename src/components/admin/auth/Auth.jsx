import React from 'react';
import { connect } from 'react-redux';
import './Auth.css';

import { admin } from '../../../actions';

const mapDispatchToProps = dispatch => ({
  isAuth: user => dispatch(admin.auth(user)),
});

const Auth = () => (
  <div className="auth">
    <p>Войдите</p>
    <div className="input-col">
      <input type="text" placeholder="Имя" />
    </div>
    <div className="input-col">
      <input type="password" placeholder="Пароль" />
    </div>
  </div>
);

export default connect(null, mapDispatchToProps)(Auth);
