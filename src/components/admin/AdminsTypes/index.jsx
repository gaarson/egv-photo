import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';

class Types extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
    };
  }

  setSelected(selected) {
    this.setState({ selected });
  }

  render() {
    return (
      <div className="change">
        <Link
          onClick={() => this.setSelected(0)}
          className={this.state.selected === 0 ? 'selected-type' : ''}
          to="/admin/categories"
          href="/admin/categories"
        >
          Категории
        </Link>
        <Link
          onClick={() => this.setSelected(1)}
          className={this.state.selected === 1 ? 'selected-type' : ''}
          to="/admin/photos"
          href="/admin/photos"
        >
          Фото
        </Link>
        <Link
          onClick={() => this.setSelected(2)}
          className={this.state.selected === 2 ? 'selected-type' : ''}
          to="/admin/news"
          href="/admin/news"
        >
          Новости
        </Link>
      </div>
    );
  }
}

export default Types;
