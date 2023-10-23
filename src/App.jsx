import { useState } from 'react'
import './App.css'
import {data} from './assets/datamahasiswa'
import { dataKelas } from './assets/datakelas'
import Logo from './assets/Logo1.png'

let x = ["", "", "", "", "", ""]
function App() {
  const [value, setValue] = useState('')
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
        
        <div className='filter-container'>
      {dataKelas.map(kelas => (
        <>
          {kelas.name}
          <select name="select-kelas" id={"filter-button"} key={kelas.id} onChange={(e) => {
            const selectedOption = e.target.value;
            setSearch(e.target.value)
            if (kelas.name == "DDP1"){
              x[0] = selectedOption
            }
            else if (kelas.name == "Calc1"){
              x[1] = selectedOption
            }
            else if (kelas.name == "MD1"){
              x[2] = selectedOption
            }
            else if (kelas.name == "PSD"){
              x[3] = selectedOption 
            }
            else if (kelas.name == "Manbis"){
              x[4] = selectedOption 
            }
            else if (kelas.name == "Kombis"){
              x[5] = selectedOption
            }
          }}>
            {kelas.value.map(option => (
              <option value={option}>{option} </option>
            ))}
          </select>
        </>
      ))}
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
        data.filter((item) => (item.Nama.toLowerCase().includes(search.toLowerCase()) || String(item.NPM).includes(search)) 
        && (item['DDP 1'].includes(x[0]) && item['Kalkulus 1'].includes(x[1]) && item['MD 1'].includes(x[2]) && item['PSD'].includes(x[3]) 
        && item['Manbis'].includes(x[4]) && item['Kombistek'].includes(x[5]))
        
        )
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

      <div className='question'>
        <button>Dev?</button>
      </div>
    </>
  )
}

export default App
