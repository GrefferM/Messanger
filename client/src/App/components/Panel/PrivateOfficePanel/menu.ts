import {
    faUser,
    faEnvelope,
    faUsers,
    faMoneyBillWave,
    faCogs,
    faInfoCircle
} from '@fortawesome/free-solid-svg-icons'
import iMenu from '~interface/iMenu'

const Menu: iMenu[] = [
    {
        isAdmin: false,
        value: 'Ваш профиль',
        icon: faUser,
        to: 'profile'
    },
    {
        isAdmin: false,
        value: 'Сообщения',
        icon: faEnvelope,
        to: 'message'
    },
    {
        isAdmin: false,
        value: 'Группы',
        icon: faUsers,
        to: 'groups'
    },
    {
        isAdmin: false,
        value: 'Покупки',
        icon: faMoneyBillWave,
        to: 'buy'
    },
    {
        isAdmin: false,
        value: 'Настройки',
        icon: faCogs,
        to: 'settings'
    },
    {
        isAdmin: false,
        value: 'Помощь',
        icon: faInfoCircle,
        to: 'info'
    }
]

export default Menu