import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/shared/scroll_to_top';
import { motion, useScroll } from 'framer-motion';
import MainLayout from './layout/main_layout';
const Home = lazy(() => import('./pages/home'));
const BusinessAutomation = lazy(() => import('./pages/business_automation'));
const FinancialServices = lazy(() => import('./pages/financial_services'));
const UseCases = lazy(() => import('./pages/use_cases'));
const LogisticsAndSupply = lazy(() => import('./pages/logistics_and_supply'));

function App() {
	const { scrollYProgress } = useScroll();

	return (
		<main className="bg-background h-full w-full text-base font-roboto">
			<div>
				<motion.div
					style={{ scaleX: scrollYProgress }}
					className="fixed top-0 left-0 right-0 "
				/>

				<ScrollToTop />
				<Routes>
					<Route path="/*" element={<MainLayout />}>
						<Route path="" element={<Home />} />
						<Route
							path="business-automation"
							element={<BusinessAutomation />}
						/>
						<Route path="financial-services" element={<FinancialServices />} />
						<Route path="use-cases" element={<UseCases />} />
						<Route
							path="logistics-supply-chain"
							element={<LogisticsAndSupply />}
						/>
					</Route>
				</Routes>
			</div>
			<Toaster position="top-right" />
		</main>
	);
}

export default App;
