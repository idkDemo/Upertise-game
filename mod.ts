import { World } from "becsy";


async function run() {
    const world = await World.create({
        maxEntities: 100_000,
    });

    let tick = 0;
    setInterval(async () => {
        tick += 1;
        await world.execute(1);
    }, 5000)
}
