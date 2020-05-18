import {Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { LoginService} from '../../../services/login.service';
import { RegisterModel} from './register/register.component';
import {Action, State, StateContext, Store} from '@ngxs/store';
import { RegisterAction} from './register.action';

export interface RegisterStateModel {
    username: string;
    profiles: RegisterModel[];
}

export function getDefaultState(): RegisterStateModel {
    return {
        username: 'User1',
        profiles: [],
    };
}

@State<RegisterStateModel>({
    name: 'registerState',
    defaults: getDefaultState(),
})


export class RegisterStore {
    @Action(RegisterAction) addTodo(context: StateContext<RegisterStateModel>, action: RegisterAction) {
        const state = context.getState();
        // TODO
        /*const model = new RegisterModel;
        model.username = state.username;

        context.patchState({
            profiles: [...state.profiles, model],
            username: state.username,
        });*/

    }
}
