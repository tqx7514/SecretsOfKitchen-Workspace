import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import Layout from './Components/Layout';
import List from './Components/List';
import NotFound from './Components/NotFound';
import Notification from './Components/Notification';
import MyPage from './Components/MyPage';
import Location from './Components/Location';
import Magnifier from './Components/Magnifier';

function App() {
    return (
        <Router basename="/SecretsOfKitchen">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="notification" element={<Notification />} />
                    <Route path="magnifier" element={<Magnifier />} />
                    <Route path="list" element={<List />} />
                    <Route path="location" element={<Location />} />
                    <Route path="mypage" element={<MyPage />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
