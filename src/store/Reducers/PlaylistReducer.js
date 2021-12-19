export const PlaylistReducer = (
  state = { selected: 0, playlist: [] },
  action
) => {
  switch (action.type) {
    case "ADD_SONG":
      return {
        playlist: action.payload,
        selected: action.selected,
      };
    case "REMOVE_SONG":
      return {
        playlist: action.payload,
        selected: action.selected,
      };
    case "PLAY_NOW":
      return {
        playlist: action.payload,
        selected: action.selected,
      };
    default:
      return state;
  }
};
