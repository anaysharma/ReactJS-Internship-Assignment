import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.tsx';
import Show from './components/show.tsx';
import BookForm from './components/bookForm';

import './global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/show/:showId" Component={(props) => <Show {...props} />}>
					<Route path="book" element={<BookForm />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
