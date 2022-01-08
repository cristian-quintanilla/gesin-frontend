import { NavLink } from 'react-router-dom';

interface Props {
	isButton?: boolean;
	icon?: string;
	linkText: string;
	linkTo: string;
	size: 'normal' | 'small' | 'large';
	variant: 'primary' | 'secondary' | 'danger';
}

const LinkRouter = ({ isButton, icon, linkText, linkTo, size, variant }: Props): JSX.Element => {
	const variants = {
		button_primary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded ',
		button_secondary: 'border-2 border-gray-600 text-gray-800 hover:bg-gray-600 hover:text-gray-100 rounded ',
		button_danger: 'border-2 border-red-600 text-red-800 hover:bg-red-600 hover:text-red-100 rounded ',
		link_primary: 'text-blue-600 hover:text-blue-500',
		link_secondary: 'text-gray-600 hover:text-gray-400',
		link_danger: 'text-red-600 hover:text-red-400',
	}

	const sizeVariants = {
		size_normal: 'text-sm md:text-lg px-4 py-1',
		size_small: 'text-sm px-2 py-1',
		size_large: 'text-lg md:text-xl px-5 py-3',
	}

	const variantClass = isButton ? variants[`button_${ variant }`] : variants[`link_${ variant }`];
	const styles = variantClass + sizeVariants[`size_${ size }`] + ' inline-flex items-center';

	return (
		<NavLink
			to={ linkTo }
			className={({ isActive }) => styles + (isActive ? ' font-semibold' : '') }
		>
			<div>
				{ icon && <i className={ `fas ${ icon } ${ linkText ? 'mr-2' : '' }` }></i> }
			</div>
			{ linkText && <div className='text-center'>{ linkText }</div> }
		</NavLink>
	);
}

export default LinkRouter;
