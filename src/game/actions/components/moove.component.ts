import { component, field, Entity } from 'becsy';

@component export class Moove {
    @field.ref declare toRegion: Entity;
    @field.uint8 declare startTick: number;
    @field.uint8 declare endTick: number;
}