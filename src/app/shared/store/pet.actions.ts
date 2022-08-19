import { PetStateModel } from './pet.model';

export class AddPet {
  static readonly type = '[PETS] Add';
  constructor( public payload: PetStateModel ) {}
}

export class RemovePet {
  static readonly type = '[PETS] Remove';
  constructor( public payload: string ) {}
}