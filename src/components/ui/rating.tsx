function RatingBar(props: { rating: number }) {
	const { rating } = props;
	return (
		<div className="h-1 w-full rounded-full overflow-hidden bg-slate-200">
			<div
				className="w-full h-full bg-blue-600 origin-left"
				style={{
					transform: `scaleX(${rating / 10})`,
				}}
			></div>
		</div>
	);
}

export default RatingBar;
