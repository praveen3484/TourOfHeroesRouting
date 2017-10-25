import { Injectable } from "@angular/core";
import { HEROES } from "./heroes/mock-heroes";
import { Hero } from "./heroes/hero";

@Injectable()
export class HeroService
{
    getHeroes() : Promise<Hero[]> //stub
    {
        return Promise.resolve(HEROES);
    } 
   getHero(id : number): Promise<Hero>
   {
        return this.getHeroes()
                    .then(heroes => heroes.find(hero => hero.id === id))
   }
}
