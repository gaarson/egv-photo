import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../../actions";

const mapStateToProps = ({ editCategory }) => ({ editCategory });

const mapDispatchToProps = dispatch => ({
  fillForm: e => dispatch(Actions.admin.fillCategoryForm(e.target)),
  addCategory: () => dispatch(Actions.admin.addCategory()),
  uploadImage: () => dispatch(Actions.admin.uploadPhoto())
});

const CategoryForm = ({ editCategory, fillForm, addCategory, uploadImage }) => (
  <section className="download">
    <div className="download-form">
      <div
        className="download-photo"
        style={{ background: `url("${editCategory.src}") no-repeat` }}
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
        value={editCategory.name}
        onChange={fillForm}
        placeholder="Заголовок"
      />
      <textarea
        name=""
        id="caption"
        onChange={fillForm}
        value={editCategory.caption}
        rows="3"
        placeholder="Описание"
      />
      <div className="download-btn">
        <a className="btn-form" onClick={addCategory}>
          Загрузить
        </a>
      </div>
    </div>
  </section>
);

CategoryForm.propTypes = {
  addCategory: PropTypes.func,
  fillForm: PropTypes.func,
  uploadImage: PropTypes.func,
  editCategory: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);
