import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
    name:"genreOrCategory",
    initialState: {
        genreIdOrCategoryName: '',
        searchQuery:'',
    },
    reducers: {
        selectGenreOrCategory:(state,action) => {
            state.genreIdOrCategoryName = action.payload;
            state.searchQuery = ''
        },
        selectSearch:(state,action)=>{
            state.searchQuery=action.payload
        }
        ,
      
    }
})

export const {selectGenreOrCategory,selectSearch,movieInfo} = genreOrCategory.actions;
export default genreOrCategory.reducer;