import { component, field } from "becsy";

@component export class Health {
    @field.uint8 declare lifes: number;
    @field.uint8 declare mana: number;
}