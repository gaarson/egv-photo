import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';

class Types extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.type,
    };
  }

  setSelected(selected) {
    this.setState({ selected });
  }

  render() {
    const { type } = this.props;
    return (
      <div className="change">
        <Link
          onClick={() => this.setSelected(0)}
          className={type === 'categories' ? 'selected-type' : ''}
          to="/admin/categories"
          href="/admin/categories"
        >
          Категории
        </Link>
        <Link
          onClick={() => this.setSelected(1)}
          className={type === 'photos' ? 'selected-type' : ''}
          to="/admin/photos"
          href="/admin/photos"
        >
          Фото
        </Link>
        <Link
          onClick={() => this.setSelected(2)}
          className={type === 'news' ? 'selected-type' : ''}
          to="/admin/news"
          href="/admin/news"
        >
          Новости
        </Link>
        <Link
          onClick={() => this.setSelected(3)}
          className={type === 'reviews' ? 'selected-type' : ''}
          to="/admin/reviews"
          href="/admin/reviews"
        >
          Отзывы
        </Link>
      </div>
    );
  }
}

export default Types;
