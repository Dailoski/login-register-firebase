import './App.css';
import Homepage from './Homepage';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAVgGfPWlYUQCHaIZhE-mLP_dwxsWfx_x8",
  authDomain: "daj-pivo.firebaseapp.com",
  databaseURL: "https://daj-pivo.firebaseio.com",
  projectId: "daj-pivo",
  storageBucket: "daj-pivo.appspot.com",
  messagingSenderId: "394721960944",
  appId: "1:394721960944:web:573483f68351325f"
};

initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
