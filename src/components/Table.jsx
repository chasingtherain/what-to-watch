import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';


function Table() {
  const rows = [
    { id: 1, title: 'Hello', headerName: 'World' },
    { id: 2, title: 'DataGridPro', headerName: 'is Awesome' },
    { id: 3, title: 'MUI', headerName: 'is Amazing' },
  ];
  
  const columns = [
    { field: 'userId', headerName: 'ID', width: 300 },
    { field: 'id', headerName: 'Title', width: 300 },
    { field: 'title', headerName: 'Body', width: 600 }
  ]
  // const columns = [
  //   { field: 'id', headerName: 'ID' },
  //   { field: 'title', headerName: 'Title', width: 300 },
  //   { field: 'body', headerName: 'Body', width: 600 }
  // ]
  
  const [tableData, setTableData] = useState([])
  
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => {
        setTableData(resp.data)
        console.log(resp.data)
      })
  
  }, [])
  return (
      // tableData ? <DataGrid rows={rows} columns={columns}/> : <></>
      <div style={{ height: 800, width: 800 }}>
        <DataGrid rows={tableData} columns={columns}/>
      </div>
  )
}

export default Table