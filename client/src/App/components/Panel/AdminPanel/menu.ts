import {
    faMoneyCheck,
    faAlignLeft,
    faUsers,
    faList,
    faInfoCircle
} from '@fortawesome/free-solid-svg-icons'
import iMenu from '~interface/iMenu'

const Menu: iMenu[] = [
    {
        isAdmin: true,
        value: 'Добавить товар',
        icon: faMoneyCheck,
        to: 'addproduct'
    },
    {
        isAdmin: true,
        value: 'Добавить категорию товара',
        icon: faAlignLeft,
        to: 'addproductcategory'
    },
    {
        isAdmin: true,
        value: 'Добавить основную категорию',
        icon: faAlignLeft,
        to: 'addbasecategory'
    },
    {
        isAdmin: true,
        value: 'Список пользователей',
        icon: faUsers,
        to: 'listusers'
    },
    {
        isAdmin: true,
        value: 'Список товаров',
        icon: faList,
        to: 'listproducts'
    },
    {
        isAdmin: true,
        value: 'Список категорий',
        icon: faList,
        to: 'listcategorys'
    },
    {
        isAdmin: true,
        value: 'Помощь',
        icon: faInfoCircle,
        to: 'info'
    }
]

export default Menu