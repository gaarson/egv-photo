import React from 'react';
import { Editor } from 'react-draft-wysiwyg';

import './ArticleForm.css';

const ArticleForm = () => {
  return (
    <section className="download">
      <div className="download-form">
        <input
          type="text"
          id="name"
          placeholder="Заголовок"
          style={{ textAlign: 'center' }}
        />
        <div className="article-wrapper">
          <Editor
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            editorStyle={{ border: '1px solid', height: '400px' }}
          />
        </div>
        <div className="download-btn">
          <a className="btn-form">Загрузить</a>
        </div>
      </div>
    </section>
  );
};

export default ArticleForm;
