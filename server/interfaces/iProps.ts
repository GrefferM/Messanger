export interface iProps {
    success: boolean
    message: string
}

export class Props implements iProps {
    constructor(
        public success: boolean,
        public message: string) { }
}