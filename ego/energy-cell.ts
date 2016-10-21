/**
 * Created by Buzzer on 21.10.2016.
 */
import {Energy} from './energy';

export class EnergyCell {
    private _count: number;
    private max: number;

    public addEnergy(energy: Energy) {
        return new Energy(this.add(energy.count));
    }

    public getEnergy(count: number) {
        return new Energy(this.sub(count));
    }

    get count(): number {
        return this._count;
    }

    private sub(desire: number): number {
        let real: number;

        if (desire > this._count) {
            real = this._count;
            this._count = 0;
        } else {
            real = desire;
            this._count -= desire;
        }
        return real;
    }

    private add(have: number): number {
        let left: number;

        if (this._count + have > this.max) {
            left = this._count + have - this.max;
            this._count = this.max;
        } else {
            left = 0;
            this._count += have;
        }
        return left;
    }
}
