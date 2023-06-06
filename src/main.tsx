import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Show from './components/show';
import BookForm from './components/bookForm';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/show/:showId" element={<Show />}>
					<Route path="book" element={<BookForm />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
