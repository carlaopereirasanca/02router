
// Aula sobre router.

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Menu from "./componentes/Menu";

function AppRoutes() {

	return (

		<BrowserRouter>

      { /* Colocar o menu fora de todas as rotas,
           para aparecer em todas as páginas         */}
      
      <Menu />

			<Routes>

				<Route path="/" element={<Inicio />} />

				<Route path="/sobremim" element={<SobreMim />} />

				<Route path="*" element={<h1>Página não encontrada!</h1>} />

			</Routes>

		</BrowserRouter>
	)
}

export default AppRoutes;

