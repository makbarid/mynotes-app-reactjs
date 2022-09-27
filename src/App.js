import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";
import ArchivePage from "./pages/ArchivePage";
import DetailPage from "./pages/DetailPage";
import PageNotFound from "./pages/PageNotFound";


function App() {
	const route = [
		{
			path: "/",
			component: <HomePage />,
		},
		{
			path: "/new",
			component: <AddPage />,
		},
		{
			path: "/notes/detail/edit/:id",
			component: <EditPage />,
		},
		{
			path: "/notes/archive",
			component: <ArchivePage />,
		},
		{
			path: "/notes/detail/:id",
			component: <DetailPage />,
		},
		{
			path: "*",
			component: <PageNotFound />,
		},
	];


	return (
		<div className="App">
			<header className="header">
				<Navigation />
			</header>

			<main className="main">
				<Routes>
					{route.map(({ path, component }) => {
						return <Route key={path} path={path} element={component} />;
					})}
				</Routes>
			</main>
		</div>
	);
}


export default App;
