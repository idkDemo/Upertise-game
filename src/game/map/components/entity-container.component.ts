import { component, field, Entity } from "becsy";
import { EntityComponent } from '/src/game/entity/components/entity.component.ts';

@component export class EntityContainerComponent {
    @field.backrefs(EntityComponent) declare entities: Entity[];
}