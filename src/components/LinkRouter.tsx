import { NavLink } from 'react-router-dom';

interface Props {
	isButton?: boolean;
	linkText: string;
	linkTo: string;
	variant: 'primary' | 'secondary' | 'danger';
}

const LinkRouter = ({ isButton, linkText, linkTo, variant }: Props): JSX.Element => {
	const variants = {
		button_primary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded px-4 py-2',
		button_secondary: 'border-2 border-gray-600 text-gray-800 hover:bg-gray-600 hover:text-gray-100 rounded px-4 py-2',
		button_danger: 'border-2 border-red-600 text-red-800 hover:bg-red-600 hover:text-red-100 rounded px-4 py-2',
		link_primary: 'text-blue-600 hover:text-blue-500',
		link_secondary: 'text-gray-600 hover:text-gray-400',
		link_danger: 'text-red-600 hover:text-red-400',
	}

	const variantClass = isButton ? variants[`button_${ variant }`] : variants[`link_${ variant }`];

	return (
		<NavLink
			to={ linkTo }
			className={({ isActive }) => variantClass + (isActive ? ' font-semibold' : '') }
		>
			{ linkText }
		</NavLink>
	);
}

export default LinkRouter;
