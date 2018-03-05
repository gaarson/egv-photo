import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { admin } from '../../../actions';

const mapStateToProps = ({ editCategory }) => ({ editCategory });

const mapDispatchToProps = dispatch => ({
  fillForm: e => dispatch(admin.fillCategoryForm(e.target)),
  addCategory: info => {
    const file = new FormData();
    Object.keys(info).forEach(key => file.append(key, info[key]));

    dispatch(admin.addCategory(file));
  },
});

const CategoryForm = ({ editCategory, fillForm, addCategory }) => (
  <section className="download">
    <div className="download-form">
      <img
        src={editCategory.file && URL.createObjectURL(editCategory.file)}
        alt=""
        className="download-photo"
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
        <a
          role="button"
          className="btn-form"
          onClick={() =>
            !editCategory.uploading || editCategory.id
              ? addCategory(editCategory)
              : console.log('cant upload')
          }
        >
          Загрузить
        </a>
      </div>
    </div>
  </section>
);

CategoryForm.propTypes = {
  addCategory: PropTypes.func.isRequired,
  fillForm: PropTypes.func.isRequired,
  editCategory: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);
