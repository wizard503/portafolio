import Logo from '../assets/logo.svg'

// icons
import {HiCode} from 'react-icons/hi';
import {MdOutlineDesignServices,MdOutlineRocketLaunch} from 'react-icons/md';

//images
import Img1 from '../assets/img/work/portfolio-img1.png';
import Img2 from '../assets/img/work/portfolio-img2.png';
import Img3 from '../assets/img/work/portfolio-img3.png';

//social icons
import {SlSocialLinkedin} from 'react-icons/sl';
import {VscGithub} from 'react-icons/vsc';
import {RiTwitterXFill} from 'react-icons/ri';

export const header={
	logo:Logo,
	btnWorkWme:'Work with me'
}

export const nav=[
	{name:'Inicio',to:'home'},
	{name:'Sobre mi',to:'about'},
	{name:'Servicios',to:'services'},
	{name:'Proyectos',to:'projects'},
	{name:'Contacto',to:'contact'},
]

export const services=[
	{
		title:'Desarrollo',
		icon:HiCode,
		desciption:'Sitios web creados para fortalecer la marca de su empresa al tiempo que garantiza la facilidad de uso y la simplicidad para su audiencia brindando una experiencia optima que logre sus objetivos comerciales.'
	},
	{
		title:'Mantenimiento y optimizacion',
		icon:MdOutlineRocketLaunch,
		desciption:'Porque un buen sitio no basta, se debe optimizar el tiempo de carga, la eficiencia del código y la experiencia del usuario. Ademas se debe mantener sus sitios web y aplicaciones actualizados'
	},
	{
		title:'Diseño Creativo',
		icon:MdOutlineDesignServices,
		desciption:'Conozco la importancia del diseño web y puedo ayudarte a crear un sitio web que te encantará, capaz de adaptarse a todos tus dispositivos.'
	},
]

export const workfirst=[
	{
		img: Img1,
		title:'Atras Va Solo Website',
		desciption:'UI/UX Design'
	}
]

export const worksecond=[
	{
		img: Img2,
		title:'Atras Va Solo App',
		desciption:'UI/UX Design'
	},
	{
		img: Img3,
		title:'Dielecpro Website',
		desciption:'UI/UX Design'
	}
]

export const social=[
	{
		name: 'GitHub',
		icon: VscGithub,
		href: 'https://github.com/wizard503'
	},
	{
		name: 'LinkedIn',
		icon: SlSocialLinkedin,
		href: 'https://www.linkedin.com/in/jose-duran-dev/'
	},
	{
		name: 'GitHub',
		icon: RiTwitterXFill,
		href: 'https://twitter.com/josemdg12'
	}

]