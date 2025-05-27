export class EntidadDTO {
    id?: number;
    nit?: string;
    nombre?: string;

    constructor(init?: Partial<EntidadDTO>) {
        Object.assign(this, init);
    }
}