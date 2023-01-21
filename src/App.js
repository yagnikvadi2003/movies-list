import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Movie from './components/Movie';
import db from './json/db.json';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {
          db.map((element) => {
            return (
              <div key={element.DBImgID}>
                <Movie 
                  title={element.Title} 
                  year={element.Year} 
                  poster={element.Poster} 
                />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
