import Logo from '../assets/logo.svg'

// icons
import {HiCode} from 'react-icons/hi';
import {MdOutlineDesignServices,MdOutlineRocketLaunch} from 'react-icons/md';

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