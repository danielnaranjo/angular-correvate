import { State, Action, StateContext, Selector } from '@ngxs/store';
import { PetStateModel } from './pet.model';
import { AddPet, RemovePet } from './pet.actions';

@State({
  name: 'pet',
  defaults: {
    pets: [],
  },
})
export class PetsState {
  @Selector()
  static getPets(state: PetStateModel) {
    return state.pets;
  }

  // Añade un nuevo pet al estado
  @Action(AddPet)
  add(
    { getState, patchState }: StateContext<PetStateModel>,
    { payload }: AddPet
  ) {
    const state = getState();
    patchState({
      // @ts-ignore
      pets: [state.pets, payload],
    });
  }

  // Elimina un pet del estado
  @Action(RemovePet)
  remove(
    { getState, patchState }: StateContext<PetStateModel>,
    { payload }: RemovePet
  ) {
    patchState({
      // @ts-ignore
      pets: getState().pets.filter((pet) => pet.id !== payload),
    });
  }
}
