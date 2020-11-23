import { Action } from '@ngrx/store';
import * as types from './action.types';

export class LoadBooksAction implements Action {
    readonly type = types.LOAD_BOOKS;
    constructor() { }
}

export class LoadBooksSuccessAction implements Action {
    readonly type = types.LOAD_BOOKS_SUCCESS;
    constructor(public payload: Book[]) { }
}

export type Actions = LoadBooksAction | LoadBooksSuccessAction;
