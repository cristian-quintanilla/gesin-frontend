import { Link } from 'react-router-dom';

interface Props {
	route: string;
	text: string;
	icon: string;
}

const SidebarLink = ({ route, text, icon }: Props): JSX.Element => {
	const defaultClass: string = 'text-sm md:text-base uppercase font-medium px-4 py-2 rounded-md mb-2 ';
	const className: string = defaultClass + (
		window.location.pathname === route
		? 'text-gray-200 bg-gray-700 hover:text-gray-700 hover:bg-gray-200'
		: 'text-gray-700 bg-gray-200 hover:text-gray-200 hover:bg-gray-700'
	);

	return (
		<Link
			className={ className }
			to={ route }
		>
			<i
				className={ `fas ${ icon } mr-2 text-lg` +
					(window.location.pathname !== route
					? 'opacity-75' : 'text-gray-500')
				}
			></i>{" "}
			{ text }
		</Link>
	);
}

export default SidebarLink;
