export class snack_array{
    snacks: string[];

    constructor(){
        this.snacks = ['chips', 'juice', 'blackberries',
            'candy', 'popcorn', 'gummies',
            'cookies', 'brownies', 'popcorn'
        ]
    }
}

export function print_name(list: snack_array){
    console.log(list);
}

const snacks = new snack_array;


print_name(snacks);