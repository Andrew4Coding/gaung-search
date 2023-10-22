import { useState } from 'react'
import './App.css'
import {data} from './assets/datamahasiswa'
import Logo from './assets/Logo1.png'

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className='container'>
        <img src={Logo} id='logo'></img>
        <p id='title'>Search Kelas Gaung 2023</p>
        <div name='input' className='searchbar'>
          Enter Keyword 
          <input type="text" placeholder="Search Something" id="search-field" 
          onChange={(e) => setSearch(e.target.value)}/>
        </div>
      </div>
      <div className='row' id='row-head'>
        <table>
          <tr>
            <th id='name'>Name</th>
            <th id='NPM'>NPM</th>
            <th id='jurusan'>Major</th>
            <th id='kelas'>DDP 1</th>
            <th id='kelas'>Calc. 1</th>
            <th id='kelas'>MD 1</th>
            <th id='kelas'>PSD</th>
            <th id='kelas'>Manbis</th>
            <th id='kelas'>Kombis</th>
          </tr>
        </table>
      </div>

      {
        data.filter((item) => item.Nama.toLowerCase().includes(search.toLowerCase()) || String(item.NPM).includes(search))
        .map((item) => {
          return (
          <div className='row' key={item.No}>
            <table >
              <tr>
                <td id='name'>{item.Nama}</td>
                <td id='NPM'>{item.NPM}</td>
                <td id='jurusan'>{item.Prodi}</td>
                <td id='kelas'>{item['DDP 1']}</td>
                <td id='kelas'>{item['Kalkulus 1']}</td>
                <td id='kelas'>{item['MD 1']}</td>
                <td id='kelas'>{item.PSD}</td>
                <td id='kelas'>{item.Manbis}</td>
                <td id='kelas'>{item.Kombistek}</td>
              </tr>
            </table>
          </div>
          )
        })
      }
    </>
  )
}

export default App
