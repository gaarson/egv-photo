import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { admin } from '../../../actions';

import './style.css';

const mapStateToProps = ({ editPhoto, adminCategories }) => ({
  editPhoto,
  adminCategories,
});

const mapDispatchToProps = dispatch => ({
  fillForm: e => dispatch(admin.fillForm(e.target)),
  addPhoto: info => {
    const file = new FormData();
    Object.keys(info).forEach(key => file.append(key, info[key]));

    dispatch(admin.uploadPhoto(file));
  },
});

const PhotoForm = ({ editPhoto, fillForm, addPhoto, adminCategories }) => (
  <section className="download">
    <div className="download-form">
      <div
        className="download-photo"
        style={{ background: `url("${editPhoto.src}") no-repeat` }}
      />
      <input
        type="file"
        name="file"
        id="file"
        onChange={fillForm}
        className="input-file"
        data-multiple-caption="{count} files selected"
        multiple
      />
      <label htmlFor="file">
        <span>Загрузить фото</span>
      </label>

      <input
        type="text"
        id="name"
        value={editPhoto.name}
        onChange={fillForm}
        placeholder="Заголовок"
      />
      <textarea
        name=""
        id="caption"
        onChange={fillForm}
        value={editPhoto.caption}
        rows="3"
        placeholder="Описание"
      />
      <select name="" id="category_id" onChange={fillForm}>
        {adminCategories.map(category => (
          <option key={category.id} value={category.id}>
            {category.title}
          </option>
        ))}
      </select>
      <label htmlFor="main" className="is-main-radio">
        Для главной
        <input
          type="checkbox"
          id="main"
          value={editPhoto.main}
          onChange={fillForm}
        />
      </label>
      <div className="download-btn">
        <a
          className="btn-form"
          onClick={() =>
            !editPhoto.uploading
              ? addPhoto(editPhoto)
              : console.log('cant upload')}
        >
          Загрузить
        </a>
      </div>
    </div>
  </section>
);

PhotoForm.propTypes = {
  addPhoto: PropTypes.func.isRequired,
  fillForm: PropTypes.func.isRequired,
  editPhoto: PropTypes.objectOf(PropTypes.any).isRequired,
  adminCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);
