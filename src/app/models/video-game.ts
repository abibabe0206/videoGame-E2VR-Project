import { Game } from './game';

export class VideoGame {
    /**
     * The constructor.
     * @param id video game id
     * @param name video game name
     * @param slug video game slug
     * @param games_count video game count
     * @param image_background video game background image
     * @param image video game image
     * @param released video game released
     * @param year_start video game start year
     * @param year_end video game end year
     * @param games list of game of the video game
     */
    constructor(
    public id: string,
    public name: string,
    public slug: string,
    public games_count: number,
    public image_background: String,
    public image: string,
    public released: number,    
    public year_start: number,
    public year_end: number,
    public games : Game[]
    ) { }

}