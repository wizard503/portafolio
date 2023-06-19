import Logo from '../assets/logo.svg'

// icons
import {HiCode} from 'react-icons/hi';
import {MdOutlineDesignServices,MdOutlineRocketLaunch} from 'react-icons/md';

//images
import Img1 from '../assets/img/work/portfolio-img1.png'
import Img2 from '../assets/img/work/portfolio-img2.png'
import Img3 from '../assets/img/work/portfolio-img3.png'

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
		title:'Development',
		icon:HiCode,
		desciption:'Sitios web creados para fortalecer la marca de su empresa al tiempo que garantiza la facilidad de uso y la simplicidad para su audiencia brindando una experiencia optima que logre sus objetivos comerciales.'
	},
	{
		title:'Diseño Creativo',
		icon:MdOutlineDesignServices,
		desciption:'Conozco la importancia del diseño web y puedo ayudarte a crear un sitio web que te encantará.'
	},
	{
		title:'Design Research',
		icon:MdOutlineRocketLaunch,
		desciption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis numquam, alias laborum eaque natus dolor totam perspiciatis adipisci ipsum rem amet nobis commodi placeat!'
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