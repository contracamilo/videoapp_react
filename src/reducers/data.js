export default function data(state, action) {
    switch(action.type) {
        case 'SEARCH_VIDEO' : {
            //action.datload.query
            let results = []
            
            if (action.datload.query) 
            {
            
                //const list = state.data.categories[2].playlist;
                //results = list.filter((item) => { 
                   // return item.author.includes(action.datload.query)
                //})


                const categories = state.data.categories
                categories.map(category => {
                    let tResult = category.playlist.filter(item =>{
                        return item.author.toLowerCase()
                        .includes(action.datload.query.toLowerCase())
                    })
                    results = results.concat(tResult)
                })

            }

            return {
                ...state,
                search: results

            }

            

        }
        default:
            return state
    }
}