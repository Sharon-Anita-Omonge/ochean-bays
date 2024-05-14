import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/ServiceInfo/Services";
import Commercial from "./Components/Projects/Commercial";
import Government from "./Components/Projects/Government";
import NoMatch from "./Components/PageNotFound/NoMatch";
import Cleaning from "./Components/Cleaning/Cleaning";
import Paint from "./Components/Paints/Paint";
import Borehole from "./Components/Borehole/Borehole";
import DreamHome from "./Components/Projects/DreamHome";
import OberBorehole from "./Components/Projects/OberBorehole";
import NationalHousing from "./Components/Projects/NationalHousing";
import KenyaGrace from "./Components/Projects/KenyaGrace";
import GetaPrimary from "./Components/Projects/GetaPrimary";
import Culvert from "./Components/Projects/Culvert";
import Mamboleo from "./Components/Projects/Mamboleo";
import JOCUST from "./Components/Projects/JOCUST";
import Construction from "./Components/Construction/Construction";
import Realestate from "./Components/Realestate/Realestate";
import About from "./Components/About/About";

const LazyProjects = React.lazy(() => import("./Components/Projects/Projects"));
const LazyContact = React.lazy(() => import("./Components/Contact/Contact"));
const LazyPlantHire = React.lazy(() =>
	import("./Components/PlantHire/PlantHire")
);

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />

				<Route
					path='/contact'
					element={
						<React.Suspense fallback='loading...'>
							<LazyContact />
						</React.Suspense>
					}
				/>
				<Route path='/services' element={<Services />} />
				<Route
					path='/projects'
					element={
						<React.Suspense fallback='loading...'>
							<LazyProjects />
						</React.Suspense>
					}
				/>
				<Route
					path='/planthire'
					element={
						<React.Suspense fallback='loading...'>
							<LazyPlantHire />
						</React.Suspense>
					}
				/>
				<Route path='/about' element={<About />} />
				<Route path='/commercial' element={<Commercial />} />
				<Route path='/government' element={<Government />} />
				<Route path='/cleaning' element={<Cleaning />} />
				<Route path='/paint' element={<Paint />} />
				<Route path='/borehole' element={<Borehole />} />
				<Route path='/dreamhome' element={<DreamHome />} />
				<Route path='/oberborehole' element={<OberBorehole />} />
				<Route path='/nationalhousing' element={<NationalHousing />} />
				<Route path='/kenyagrace' element={<KenyaGrace />} />
				<Route path='/geta' element={<GetaPrimary />} />
				<Route path='/culvert' element={<Culvert />} />
				<Route path='/mamboleo' element={<Mamboleo />} />
				<Route path='/jocust' element={<JOCUST />} />
				<Route path='/construction' element={<Construction />} />
				<Route path='/realestate' element={<Realestate />} />

				<Route path='*' element={<NoMatch />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
