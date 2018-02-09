import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { mainScreen } from '../../../actions';

const mapDispatchToProps = dispatch => ({
  fill: e => dispatch(mainScreen.setFeedback(e.target)),
  send: () => dispatch(mainScreen.sendFeedback()),
});

const Feedback = ({ fill, send }) => (
  <section id="four" className="contact">
    <div className="contact-content">
      <h2 className="contact-title">Оставьте заявку</h2>
      <form action="" className="form">
        <div className="input-col">
          <input type="text" placeholder="Имя" id="name" onChange={fill} />
        </div>
        <div className="input-col">
          <input type="email" placeholder="Email" id="email" onChange={fill} />
        </div>
        <textarea rows="5" placeholder="Сообщение" id="discription" onChange={fill} />
        <span href="#one" className="btn-form" onClick={send}>
          Отправить
        </span>
      </form>
    </div>
  </section>
);

Feedback.propTypes = {
  fill: PropTypes.func.isRequired,
  send: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Feedback);
