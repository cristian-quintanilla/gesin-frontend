import { Link } from 'react-router-dom';

interface Props {
	route: string;
	text: string;
	icon: string;
}

const SidebarLink = ({ route, text, icon }: Props): JSX.Element => {
	const defaultClass: string = 'text-sm sm:text-lg uppercase font-medium ';
	const className: string = defaultClass + (
		window.location.href.indexOf(route) !== -1
		? 'text-green-500 hover:text-gray-500'
		: 'text-gray-500 hover:text-green-500'
	);

	return (
		<Link
			className={ className }
			to={ route }
		>
			<i
				className={ `fas ${ icon } mr-2 text-lg` +
					(window.location.href.indexOf(route) !== -1
					? 'opacity-75' : 'text-gray-500')
				}
			></i>{" "}
			{ text }
		</Link>
	);
}

export default SidebarLink;
