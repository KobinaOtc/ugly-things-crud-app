let defaultState = {
  items: []
}

let mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        items: [...state.items, {
          heading: action.heading,
          imgUrl: action.imgUrl,
          description: action.description
        }]
      }
      case "REMOVE_ITEM":
        return {
          items: state.items.filter((item, index) => index != action.index)
        }
      case "UPDATE_ITEM":
        return {
          items: state.items.map((item, index) => {
            if (index === action.index) {
              return {
                heading: action.heading,
                imgUrl: action.imgUrl,
                description: action.description
              }
            } else {
              return item;
            }
          })
        }
    default:
      return state;
  }
}

export default mainReducer;
