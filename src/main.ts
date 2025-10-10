
import { displayFeatureAnimation } from "./animation";
import { print_name, snack_list } from "./snacks";
import { printMusic } from './music';

function main() {
    console.log();
    printMusic();
}

main();

displayFeatureAnimation('snacks');
const snackp = new snack_list;
print_name(snackp);
