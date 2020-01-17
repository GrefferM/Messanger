import {
    faUser,
    faEnvelope,
    faUsers,
    faMoneyBillWave,
    faCogs,
    faInfoCircle,
    faUserShield
} from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

export interface iMenu {
    isAdmin: boolean
    to: string
    value: string
    icon: IconDefinition
}

export const Menu: iMenu[] = [
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
    },
    {
        isAdmin: true,
        value: 'Панель администратора',
        icon: faUserShield,
        to: 'admin'
    }
]