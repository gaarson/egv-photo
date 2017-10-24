import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../../actions";

const mapStateToProps = ({ editPhoto }) => ({ editPhoto });

const mapDispatchToProps = dispatch => ({
  fillForm: e => dispatch(Actions.admin.fiilForm(e.target)),
  uploadImage: event => dispatch(Actions.admin.uploadPhoto(event.files[0])),
  addPhoto: () => dispatch(Actions.admin.updatePhoto())
});

const PhotoForm = ({ editPhoto, fillForm, addPhoto, uploadImage }) => (
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
        onChange={uploadImage}
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
      <select name="" id="" onChange={fillForm}>
        <option value="">Категория 1</option>
        <option value="">Категория 2</option>
        <option value="">Категория 3</option>
        <option value="">Категория 4</option>
      </select>
      <div className="download-btn">
        <a className="btn-form" onClick={addPhoto}>
          Загрузить
        </a>
      </div>
    </div>
  </section>
);

PhotoForm.propTypes = {
  addPhoto: PropTypes.func,
  fillForm: PropTypes.func,
  uploadImage: PropTypes.func,
  editPhoto: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);
