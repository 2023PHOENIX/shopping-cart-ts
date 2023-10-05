import {Route, Routes} from "react-router-dom";
import {Container} from 'react-bootstrap';
import Home from "./pages/Home.tsx";
import Store from "./pages/Store.tsx";
import About from "./pages/About.tsx";
import NavBar from "./components/NavBar.tsx";
function App() {

    return (
        <Container className="mb-4">
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/store'} element={<Store/>}/>
            </Routes>
        </Container>
    )
}

export default App
