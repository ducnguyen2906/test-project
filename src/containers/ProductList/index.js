import React, { useEffect } from 'react';
import { Table, Modal, Button } from 'antd';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';

function ProductList() {
  const { fetching, data, error } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'API_CALL_REQUEST' });
  }, []);

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Tile',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Created Date',
      dataIndex: 'created_date',
      key: 'created_date',
    },
    {
      title: 'Image',
      dataIndex: 'img_url',
      key: 'img_url',
    },
  ];

  return (
    <div className="container">
      <h1>Product List</h1>
      <Table dataSource={data} columns={columns} bordered />
    </div>
  );
}

export default ProductList;
