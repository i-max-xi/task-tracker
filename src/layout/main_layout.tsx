import LazyPageWrapper from './lazy.page.wrapper';
import Footer from '@/components/shared/footer';
import NavbarComponent from '@/components/shared/navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<main>
			<NavbarComponent />
			<div className="pt-7">
				<LazyPageWrapper component={<Outlet />} />
			</div>

			<Footer />
		</main>
	);
};

export default MainLayout;
