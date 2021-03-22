import { AnyAction } from "redux";

interface UserEvents{
    id: number;
    title: string;
    dateStart: string;
    dateEnd: string;
}

interface UserEventsState{
    byIds: Record<UserEvents['id'], UserEvents>;  //byIds means records going to save by id type UserEvents id as keys and value is equal to UserEvents
    allIds: UserEvents['id'][]; //it is use to get all elements by ids array
}
// now create the initial state to start with

const initialState: UserEventsState = {
    byIds: {},
    allIds:[]
}

const userEventsReducer = (state:UserEventsState = initialState, action: AnyAction) =>{
    switch (action.type){
        default:
           return state; 
    }
};

export default userEventsReducer;