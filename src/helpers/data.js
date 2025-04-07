import Logo from '../assets/logo.svg'

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
}

export const nav=(t)=>[
	{name:t("Menu.Inicio"),to:'home'},
	{name:t("Menu.Sobre"),to:'about'},
	{name:t("Menu.Servicios"),to:'services'},
	{name:t("Menu.Proyectos"),to:'projects'},
	{name:t("Menu.Contacto"),to:'contact'},
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