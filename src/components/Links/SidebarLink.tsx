import { Link } from 'react-router-dom';

interface Props {
	route: string;
	text: string;
	icon: string;
}

export const SidebarLink = ({ route, text, icon }: Props): JSX.Element => {
	const defaultClass: string = 'text-sm sm:text-lg uppercase font-medium ';
	const className: string = defaultClass + (
		window.location.href.indexOf(route) !== -1
		? 'text-emerald-500 hover:text-neutral-500'
		: 'text-neutral-500 hover:text-emerald-500'
	);

	return (
		// <li className='bg-orange-200 flex-row py-2'>
		<Link
			className={ className }
			to={ route }
		>
			<i
				className={ `fas ${ icon } mr-2 text-lg` +
					(window.location.href.indexOf(route) !== -1
					? 'opacity-75' : 'text-neutral-500')
				}
			></i>{" "}
			{ text }
		</Link>
		// </li>
	);
}
