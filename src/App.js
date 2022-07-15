import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import movieApi from './common/api/movieApi';
import { APIKey } from './common/api/movieApiKey';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { addMovies } from './features/movies/movieSlice';

function App() {
  const [movieText, setMovieText] = useState('titan')
  const dispath = useDispatch();
  useEffect(() => {
    const getMovies = async () => {
      const res = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch(err => {
          console.log(err);
        })

      dispath(addMovies(res.data))
    }
    getMovies()
  }, [movieText])

  const handleSearch = (text) => {
    setMovieText(() => text)
  }

  return (
    <div className="app">
      <BrowserRouter>
        {/* Header */}
        <Header onSearch={handleSearch} />

        {/* Container */}
        <div className='container'>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/movie/:imdbID' element={<h1>Movie Detail</h1>} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
