import React from 'react';
import { connect } from 'react-redux';
import Actions from '../../../actions';

import './Sidebar.css';

const mapStateToProps = ({ adminPhotos }) => ({ adminPhotos });

const mapDispatchToProps = dispatch => ({
  deletePhoto: id => dispatch(Actions.admin.deletePhoto(id)),
});

const Sidebar = ({ adminPhotos, deletePhoto }) => {
  console.log(adminPhotos);
  return (
    <aside className="catalog catalog-js">
      <div className="close close-js">
        <i className="fa fa-times close-icon" aria-hidden="true" />
      </div>
      <div className="change">
        <ul>
          <li>
            <p>Упраление категориями</p>
          </li>
          <li>
            <p>Упраление фотографиями</p>
          </li>
        </ul>
      </div>
      <div className="catalog-content">
        <ul>
          {adminPhotos.map(item => (
            <li key={item.id}>
              <a>{item.title}</a>
              <a className="delete-photo" onClick={() => deletePhoto(item.id)}>
                &times;
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
