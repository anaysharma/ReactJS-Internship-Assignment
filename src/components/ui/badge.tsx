function Badge(props: { name: string }) {
	return (
		<div className="p-1 px-3 text-xs w-min rounded-full bg-blue-200">
			{props.name}
		</div>
	);
}

export default Badge;
