export function addItem(heading, imgUrl, description) {
  return {
    type: "ADD_ITEM",
    heading,
    imgUrl,
    description
  }
}

export function removeItem(index) {
  return {
    type: "REMOVE_ITEM",
    index
  }
}
