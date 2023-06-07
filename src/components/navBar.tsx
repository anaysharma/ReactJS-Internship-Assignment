import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div className="fixed top-0 w-full z-10 bg-white shadow-md">
			<div className="container py-4 px-6">
				<Link className="rounded border px-4 py-1" to="/">
					Home
				</Link>
				<Link className="rounded border px-4 py-1 ml-4" to="/bookings">
					bookings
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
