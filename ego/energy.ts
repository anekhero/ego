/**
 * Created by Buzzer on 21.10.2016.
 */

export class Energy {
    private _count: number;

    constructor(count: number) {
        this._count = count;
    }

    get count(): number {
        return this._count;
    }

}
