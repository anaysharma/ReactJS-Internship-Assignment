import { Outlet } from 'react-router-dom';

function Show() {
	return (
		<>
			<h2>show</h2>
			<Outlet />
		</>
	);
}

export default Show;
