import { component, field } from "becsy";

@component export class WorldPosition {
    @field.uint8 declare world: number;
    @field.uint8 declare x: number;
    @field.uint8 declare y: number;
}