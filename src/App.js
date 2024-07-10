import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import { Marines } from './Components/Marines';
import { Ussf } from './Components/Ussf';
import { Usaf } from './Components/Usaf';
import { Navy } from './Components/Usn';

const names = ['ussf', 'usaf', 'usn', 'usmc']
const components = [<Ussf />, <Usaf />, <Navy />, <Marines />]
let full = []
for (let i = 0; i < names.length; i++) {
  full.push({ name: names[i], component: [components[i]] })
}

function App() {
  const navigate = useNavigate();

  return (
    <>
      <button key='gohome' onClick={() => { navigate('/') }}>HOME</button>
      <h1>ROUTING DEMONSTARTION FOR DEMONSTRATING ROUTING IN REACT</h1>

      <ol>
        {full.map(link => <li key={`${link.name}link`}><Link to={`/${link.name}`}>{link.name.toUpperCase()}</Link></li>)}
      </ol>
      
      <Routes>
        <Route key='home' path='/' element={<h1>YOU ARE HOME</h1>} />
        {full.map(x => <Route key={x.name} path={`/${x.name}`} element={x.component} />)}
      </Routes>
      {/* <ul>
        <li>
          <Link to='/navy'>NAVY</Link>
        </li>
        <li>
          <Link to='/ussf'>USSF</Link>
        </li>
        <li>
          <Link to='/usaf'>USAF</Link>
        </li>
        <li>
          <Link to='/marines'>Marines</Link>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={<h1>YOU ARE HOME</h1>} />
        <Route path='/navy' element={<Navy />} />
        <Route path='/ussf' element={<Ussf />} />
        <Route path='/usaf' element={<Usaf />} />
        <Route path='/marines' element={<Marines />} />
      </Routes> */}

    </>
  );
}

export default App;


/*  */