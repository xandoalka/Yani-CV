export const AlbumCard = ({ Title , children, }) => {
	return (
		<div className="w-full bg-white py-10 px-6 lg:py-10 lg:px-12 shadow-[-12px_12px_25px_0_rgba(138,131,124,0.23)] flex flex-col items-center gap-4">
			<span className="flex items-center gap-2 self-start">
				<span className="h-4 w-4 bg-secondary"></span>
				<h2 className="capitalize text-xl font-bold">{Title}</h2>
			</span>
         <div className="flex gap-2 w-full items-center overflow-x-auto lg:gap-4 snap-x">
         {children}
         </div>
		</div>
	);
};
