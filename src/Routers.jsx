import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './startPage';

const Routers = () => {
            return (
                        <BrowserRouter>
                                    <Routes>
                                                <Route path="/" exact element={<StartPage />} />
                                    </Routes>
                        </BrowserRouter>)
}

export default Routers;