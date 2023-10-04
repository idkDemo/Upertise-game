import { component, field } from "becsy";

@component export class TilePosition {
    @field.uint8 declare x: number;
    @field.uint8 declare y: number;
}