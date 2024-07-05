import InfoCard from '@/components/shared/info_card';
import { CustomButton } from '@/components/shared_customs';
import { Icon } from '@iconify/react/dist/iconify.js';

const LogisticsAndSupply = () => {
	return (
		<main className="container">
			<section className="text-center pb-10">
				<p className="text-sm text-secondary font-medium uppercase mb-5">
					Welcome to logistics & Supply chain
				</p>
				<h1 className="font-medium text-3xl md:text-4xl lg:text-5xl md:pr-10 mb-10 md:mb-0">
					Optimising resources, cutting <br /> costs, boosting competitiveness.
				</h1>
				<p className="text-secondary-black text-sm my-5">
					From seamless logistics to on-time deliveries, we navigate the roads
					to success with you
				</p>
				<CustomButton className="bg-primary text-white font-medium px-5 ">
					Explore <Icon icon="solar:arrow-right-outline" fontSize={20} />
				</CustomButton>
			</section>

			<section className="border-3 border-white rounded-xl py-20 relative ">
				<div className="absolute z-50 -bottom-32 md:-bottom-12 left-1/2 transform -translate-x-1/2 w-[85%] lg:w-[90%] mx-auto bg-white rounded-3xl p-4 grid md:grid-cols-auto-fill-220 lg:grid-cols-auto-fill-250 xl:grid-cols-auto-fill-300 gap-2">
					{[
						{
							title: 'Improved Efficiency',
							description:
								'Streamlined logistics speed up order fulfilment and ensure smooth operations.',
						},
						{
							title: 'Cost Savings',
							description:
								'Effective logistics cuts costs, reduces waste, and boosts profitability.',
						},
						{
							title: 'Enhanced Customer Satisfaction',
							description:
								'Efficient supply chains ensure satisfied customers with timely, accurate deliveries.',
						},
					].map((item, index) => (
						<div key={index}>
							<h2>{item.title}</h2>
							<div className="w-[20%] h-0.5 bg-black my-1" />
							<p className="text-xs text-secondary-black">{item.description}</p>
						</div>
					))}
				</div>
				<img
					src="/icons/Map_1.svg"
					alt="map_1"
					className="w-[20rem] md:w-[27rem] absolute right-0 top-0 -z-0"
				/>
				<img
					src="/images/LS_1.webp"
					alt="truck"
					className="md:w-[21rem] ml-auto mr-32 "
				/>
				<img
					src="/images/LS_2.webp"
					alt="card"
					className="w-[12rem] absolute md:top-2/3 top-1/2 -translate-y-1/2 right-0 md:right-10"
				/>
				<img
					src="/icons/Map_2.svg"
					alt="map_2"
					className="w-[18rem] hidden md:block absolute left-0 bottom-0"
				/>
			</section>

			<section className="py-10 pt-36 md:pt-20">
				<div className="flex justify-between">
					<h2 className="font-medium text-3xl md:text-4xl mb-5">
						More from Logistics & Supply Chain
					</h2>
				</div>
				<div className=" gap-5 space-y-5 md:space-y-0">
					{moreConstant.map((item, index) => (
						<InfoCard
							key={index}
							title={item.title}
							description={item.description}
						/>
					))}
				</div>
			</section>
		</main>
	);
};

export default LogisticsAndSupply;

const logistics = [
	{
		title: 'Booking Management',
		description:
			'Efficiently coordinate and manage bookings to streamline logistical operations.',
		subItems: [
			{
				title: 'Efficient Scheduling',
				description:
					'Streamline the allocation of resources and time slots, optimising bookings to minimise gaps and maximise utilisation',
			},
			{
				title: 'Real-time Updates',
				description:
					'Maintain accurate and up-to-date information on bookings, ensuring prompt communication and adaptability to changes or cancellations.',
			},
			{
				title: 'Resource Optimisation',
				description:
					'Utilise data analytics to forecast demand, allocate resources effectively, and identify opportunities for improving efficiency in logistics operations.',
			},
		],
	},
];

const moreConstant = [
	{
		title: 'HR & Payroll',
		description:
			'Simplify your  business operations by combining HR tasks into one system. This module manages employee records, payroll, benefits, and attendance, ensuring accurate calculations and compliance',
	},
	{
		title: 'Wholesale & Retail',
		description:
			'Access an integrated business management solution with financial tracking, operational control, pricing management, inventory oversight, and cash flow monitoring. Enhance efficiency, financial health, and focus on business growth.',
	},
	{
		title: 'Manufacturing',
		description:
			'Enhance your manufacturing operations with a unified manufacturing management solution covering production control, inventory management, quality assurance, and supply chain oversight, optimizing efficiency and supporting business expansion',
	},
	{
		title: 'Accounting',
		description:
			'Improve your financial oversight with this advanced tool providing real-time insights into budgeting, expense management, revenue tracking, and transaction reconciliation for informed decision-making.',
	},
	{
		title: 'CRM',
		description:
			'Organize and manage customer interactions and data, optimizing customer service, sales, and marketing efforts to enhance relationships and drive business growth.',
	},
	{
		title: 'Hospitality',
		description:
			'Manage your hospitality business with our comprehensive solution that integrates guest information, administrative tasks, financial management, and a special guest portal into one easy system.',
	},
];
