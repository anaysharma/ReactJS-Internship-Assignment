function RatingBar(props: { rating: number }) {
	const { rating } = props;
	return (
		<div className="h-1 w-20 rounded-full overflow-hidden bg-slate-400">
			<div
				className="w-full h-full bg-black origin-left"
				style={{
					transform: `scaleX(${rating / 10})`,
				}}
			></div>
		</div>
	);
}

export default RatingBar;
