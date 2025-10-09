class decor_array{
    decor: string[];

    constructor(){
        this.decor = ['tables', 'balloons', 'chairs']
    }
}

function print_name(list: decor_array){
    console.log(list);
}

const decor = new decor_array;

print_name(decor);