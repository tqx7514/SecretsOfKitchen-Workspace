import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import Layout from './Components/Layout';
import List from './Components/List';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="/list" element={<List />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
