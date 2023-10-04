import { component, field, Entity } from "becsy";

@component export class EntityComponent {
    @field.dynamicString(64) declare name: string;
    @field.ref declare region: Entity;
}