import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import MainPage from './Loyout/Pages/MainPage/MainPage'
import SinglePage from './Loyout/Pages/SinglePage/SinglePage'
import { MAIN_PAGE, SINGLE_PAGE } from './routes'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path={MAIN_PAGE} element={<MainPage />} />

          <Route exact path={SINGLE_PAGE} element={<SinglePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
