export class snack_array{
    snacks: string[];

    constructor(){
        this.snacks = ['chips', 'juice', 'blackberries',
            'ice cream'
        ]
    }
}

export function print_name(list: snack_array){
    console.log(list);
}

const snacks = new snack_array;

print_name(snacks);