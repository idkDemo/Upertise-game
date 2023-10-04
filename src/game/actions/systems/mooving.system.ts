import { system, System } from "becsy"
import { Moove } from '/src/actions/components/moove.component.ts';
import { EntityComponent } from '/src/entity/components/entity.component.ts';

@system export class MoovingSystem extends System {
    private entities = this.query(q => q.current.with(Moove))

    execute(): void {
        for (const entity of this.entities.current) {
            const moovable = entity.write(Moove);

            if(moovable.endTick < this.time) break;

            entity.write(EntityComponent).region = moovable.toRegion;
            entity.remove(Moove);
        }
    }
}