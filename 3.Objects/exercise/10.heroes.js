function solve() {
    function canCast(state) {
        {
            cast: (spell) => {
                console.log(`${state.name} cast ${spell}`);
                state.mana--;
            }
        }

    }
    console.log(typeof canCast);
    const canFight = (state) => ({
        fight: () => {
            console.log(`${state.name} slashes at the foe!`);
            state.stamina--;
        }
    })
    function mage(name) {
        let state = {
            name,
            mana: 100,
            health: 100
        };
        return Object.assign(state, canCast(state));
    }
    function fighter(name) {
        let state = {
            name,
            helth: 100,
            stamina: 100,
        }
        return Object.assign(state, canFight(state))
    }
    return { mage: mage, fighter: fighter }
}
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
