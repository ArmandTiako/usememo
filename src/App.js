import React , {useState , useEffect, useMemo}from 'react';
import Profile from './components/Profile';
import axios from 'axios';


function App() {

  const [count, setCount] = useState(1);

  const [profile, setProfile] = useState({});

  const [dark, setDark] = useState(false);

  useEffect(() => {
    axios
    .get(`http://jsonplaceholder.typicode.com/users/${count}`)
    .then((response) => {
      setProfile(response.data)
    })
    .catch((err) => {
      console.log(err)
    })

  // Rechargement uniquement si modification du count
  }, [count]);

  const memorizedValue = useMemo(() => {
    return count > 10
  }, [count])

  

  const changeToDark = () => {
    setDark(!dark)
    if(!dark) {
      document.body.classList.add("bg-secondary")
    } else {
      document.body.classList.remove("bg-secondary")
    }
  }

  const classBtnTheme = dark ? 'btn-light' : 'btn-dark';

  const textBtnTheme = dark ? 'Passer au thème blanc' : 'Passer au thème sombre';

  return (
    <div className="container">
      <div>
        <h1 className="text-center m-3">useMemo()</h1>
        {memorizedValue && <div className="alert alert-danger" role="alert">STOP !!!</div>}
        <button className="btn btn-info mb-4" onClick={() => setCount(count + 1)}>Incremente {count} </button>
        <button className={`btn ${classBtnTheme} mb-4 float-end`} onClick={changeToDark}>{`${textBtnTheme}`}</button>
      </div>
      <Profile count={count} profile={profile} />
    </div>
  );
}

export default App;
