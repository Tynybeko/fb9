import { createSlice, configureStore } from '@reduxjs/toolkit'


const ListSlice = createSlice({
    name: 'list',
    initialState: [1],
    reducers: {
        update(state, action) {
            return state.map((item, index) => {
                if (index == action.payload) {
                    return item + 1
                }
                return item
            })
        }
    }
})

export default ListSlice

export const ListMethods = ListSlice.actions