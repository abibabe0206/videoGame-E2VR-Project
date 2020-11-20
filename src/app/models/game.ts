export class Game {
    /**
     * The constructor.
     * @param id game id
     * @param slug game slug
     * @param name game name
     * @param added game added number
     */
    constructor(
        public id: string,
        public slug: string,
        public name: string,
        public added: number
    ) { }
}