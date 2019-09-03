import React, { useEffect } from 'react';
import Spinner from './layout/Spinner';

const Card = ({ data }) => {
	return typeof data === 'undefined' || data === 'null' ? (
		<Spinner />
	) : (
		data.map((card) => (
			<div key={card._id} className="flex md:flex-row  md:w-1/2 ">
				<div className="mx-auto my-10 rounded overflow-hidden shadow-lg ">
					<div className="px-6 py-4">
						<div className="py-4 font-bold">
							<span className="font-normal"> Released:</span>

							<text format="YYYY/MM/DD"> {card.releaseDate.slice(0, 10)}</text>
						</div>

						<div className="font-bold text-lg mb-2 md:text-xl">{card.name}</div>
						<div className="font-bold text-lg mb-2 md:text-xl">
							<span className="font-normal"> Tech:</span> {card.tech}
						</div>
						<div className="font-bold text-lg mb-2 md:text-xl">
							<span className="font-normal"> Retro:</span>
							{card.retro ? 'Yes' : 'No'}
						</div>

						<span className="font-normal"> Colorway:</span>

						{card.colorway.map((color) => (
							<div className="px-1 py-2 inline-flex flex-wrap">
								<span
									key={card.colorway.indexOf(color)}
									className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2"
								>
									#{color}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		))
	);
};

export default Card;
