
// Aula sobre router 2025.1

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Postagem from "./paginas/Postagem";
import NaoEncontrada from "./paginas/NaoEncontrada";

function AppRoutes() {

    return (

        <BrowserRouter>

            { /* Menu fora de todas as rotas, p/ aparecer em todas as páginas */ }
            <Menu />

            <Routes>

                <Route path="/" element={ <PaginaPadrao /> }>

                    <Route path="/" element={<Inicio />} />
                    <Route path="/sobremim" element={<SobreMim />} />
                    <Route path="/posts/:id" element={<Postagem />} />

                </Route>

                <Route path="*" element={<NaoEncontrada />} />

            </Routes>

            { /* Rodape fora de todas as rotas, p/ aparecer em todas as páginas */ }
            <Rodape />

        </BrowserRouter>
    );
}

export default AppRoutes;

