import React from 'react';

type Goal = {
	title: string;
	desc: string[];
};

interface InfoSectionWithGoalsProps {
	sectionTitle: string;
	sectionDescription: string;
	goalsTitle: string;
	solutionTitle: string;
	goals: Goal[];
}

const InfoSectionWithGoals: React.FC<InfoSectionWithGoalsProps> = ({
	sectionTitle,
	sectionDescription,
	goalsTitle,
	solutionTitle,
	goals,
}) => {
	return (
		<section className="md:mt-16 my-16">
			<div className="container">
				<div className="md:grid grid-cols-[0.5fr,1fr] gap-x-10 mb-5">
					<h2 className="font-medium text-3xl lg:text-4xl mb-5">
						{sectionTitle}
					</h2>
					<p className="text-sm max-w-xl">{sectionDescription}</p>
				</div>

				<div className="md:grid grid-cols-[0.5fr,1fr] gap-x-10 mb-5 text-sm text-secondary-black border-b pb-1 uppercase">
					<h5>{goalsTitle}</h5>
					<h5>{solutionTitle}</h5>
				</div>
				{goals.map((item, index) => (
					<div
						key={index}
						className="md:grid grid-cols-[0.5fr,1fr] gap-x-10 text-sm text-secondary-black border-b mt-3 pb-3">
						<div className="flex items-center gap-x-2 mb-1.5 md:mb-0 text-[#272727] text-base uppercase font-medium">
							<span className="p-1 px-2 rounded-md border border-black">
								{index + 1}
							</span>
							<p>{item.title}</p>
						</div>
						<div className="space-y-2">
							{item.desc.map((itx, idx) => (
								<h5 key={idx}>{itx}</h5>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default InfoSectionWithGoals;
