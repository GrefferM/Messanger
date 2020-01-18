import { IconDefinition } from '@fortawesome/fontawesome-common-types'

export default interface iMenu {
    isAdmin: boolean
    to: string
    value: string
    icon: IconDefinition
}