
import { print_name, snack_array } from "./snacks";
import { printMusic } from './music';

const snack_list = new snack_array;
print_name(snack_list);

function main() {
    console.log();
    printMusic();
}

main();
