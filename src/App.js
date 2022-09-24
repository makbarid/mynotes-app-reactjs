import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
	const route = [
		{
			path: "/",
			component: <HomePage />,
		},
		{
			path: "/archive",
			component: <ArchivePage />,
		},
		{
			path: "/add",
			component: <AddPage />,
		},
		{
			path: "/detail/:id",
			component: <DetailPage />,
		},
		{
			path: "*",
			component: <PageNotFound />,
		},
		{
			path: "/detail/*",
			component: <PageNotFound />,
		},
	];

	return (
		<div className="App">
			<header className="header">
				<Navigation />
			</header>

			<main className="main">
				{/* <Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/archive" element={<ArchivePage />} />
					<Route path="/add" element={<AddPage />} />
					<Route path="/detail/:id" element={<DetailPageWrapper />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes> */}
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
