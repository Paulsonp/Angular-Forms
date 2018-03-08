export interface ListLoad {
    _id?: string;
    name?: string;
    location?: string;
    img?: string;
    description?: string;
}

export class Employee {
    $key : string;
    name : string;
    position : string;
    office : string;
    salary : number;
}