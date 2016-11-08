/**
 * Created by Buzzer on 21.10.2016.
 */
import {EnergyCell} from './energy-cell';
import {DigestiveSystem} from './digestive-system';
import {Motivator} from './motivator';
import {Wishmaster} from './wishmaster';
import {Musculoskeletal} from './musculoskeletal';
import {BodyController} from './body-controller';

export class Creature {
    energy: EnergyCell;
    digestiveSystem: DigestiveSystem;
    motivator: Motivator;
    wishmaster: Wishmaster;
    musculoskeletal: Musculoskeletal;
    bodyController: BodyController;


    constructor() {
        this.energy = new EnergyCell();
        this.digestiveSystem = new DigestiveSystem();
        this.motivator = new Motivator();
        this.wishmaster = new Wishmaster();
        this.musculoskeletal = new Musculoskeletal();
        this.bodyController = new BodyController();
    }
}
