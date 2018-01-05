import React from 'react';

const List = photos =>
  photos.map(item => (
    <li key={item.id}>
      <a>{item.title}</a>
      <a className="delete-photo" onClick={() => del(item)}>
        &times;
      </a>
    </li>
  ));

export default List;
