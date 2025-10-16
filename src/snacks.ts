export class snack_list{
    snacks: string[];

    constructor(){
        this.snacks = ['chips', 'juice', 'blackberries',
            'candy', 'popcorn', 'gummies',
            'cookies', 'brownies', 'popcorn'
        ]
    }
}

export function print_name(list: snack_list){
    console.log(list);
}

export const snack = new snack_list;

print_name(snack);

export const snacks = ['chips', 'juice', 'blackberries',
            'candy', 'popcorn', 'gummies',
            'cookies', 'brownies', 'popcorn'
        ];
