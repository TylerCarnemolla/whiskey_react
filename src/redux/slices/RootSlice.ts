import {createSlice} from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        brand:"brand",
        kind:"kind",
        proof:"proof",
        notes: "notes",
        origin:"origin"
    },
    reducers:{ 
        chooseBrand:(state,action) => {state.brand = action.payload}, //all we are doing is setting the intup to the state.name
        chooseKind:(state,action) => {state.kind = action.payload},
        chooseProof:(state,action) => {state.proof = action.payload},
        chooseNotes:(state,action) => {state.notes = action.payload},
        chooseOrigin:(state,action) => {state.origin = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const {chooseBrand, chooseKind, chooseProof, chooseNotes, chooseOrigin} = rootSlice.actions