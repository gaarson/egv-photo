import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { admin } from '../../../actions';

const mapStateToProps = ({ editPhoto }) => ({ editPhoto });

const mapDispatchToProps = dispatch => ({
  fillForm: e => dispatch(admin.fillForm(e.target)),
  addPhoto: info => {
    const file = new FormData();
    Object.keys(info).forEach(key => file.append(key, info[key]));

    dispatch(admin.uploadPhoto(file));
  },
});

const PhotoForm = ({ editPhoto, fillForm, addPhoto }) => (
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
        <option value="1">Категория 1</option>
        <option value="2">Категория 2</option>
        <option value="3">Категория 3</option>
        <option value="4">Категория 4</option>
      </select>
      <div className="download-btn">
        <a className="btn-form" onClick={() => addPhoto(editPhoto)}>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);
