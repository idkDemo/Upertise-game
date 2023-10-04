import { system, System } from "becsy";
import { EntityContainerComponent } from '/src/game/map/components/entity-container.component.ts';
import { WorldPosition } from '/src/game/map/components/world-position.component.ts';

@system export class MapSystem extends System {
    
    private file = Deno.readFileSync("../../base-data/regions.json").toString();
    
    initialize(): void {
        for (const region of JSON.parse(this.file)) {
            this.createEntity(WorldPosition, {world: region.world, y: region.y, x: region.x}, EntityContainerComponent).hold();
        }    
    }
}