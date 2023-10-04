import { component, field } from "becsy";

@component export class Stats {
    @field.uint8 declare strengh: number;
    @field.uint8 declare speed: number;
    @field.uint8 declare endurance: number;
}