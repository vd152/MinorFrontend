import api from '../../apis/api'

export const initplaylist = (list) => async (dispatch, getState) => {
        // api.get('/music/popular').then(res=>{
        //   this.setState({songs: res.data.songs.splice(0,5)})
        //   song.src = "http://localhost:5000/music/play/"+song.id

        // }).catch(err=>{
        //   console.log(err)
        // })

}

export const addSongToPlaylist = (song) => async (dispatch, getState) => {
    let songs = getState().playlist.playlist
    if(!songs.includes(song)){
        songs.push(song)
    }
    dispatch({
        type: "ADD_SONG",
        payload: songs,
        selected: getState().playlist.selected
    })
};

export const removeSongFromPlaylist = (song) => async (dispatch, getState) => {
    let songs = getState().playlist.playlist
    if(songs.includes(song)){
        songs.splice(songs.indexOf(song), 1)
    }
    dispatch({
        type: "REMOVE_SONG",
        payload: songs,
        selected: getState().playlist.selected
    })
};

export const playNow = (index) => async (dispatch, getState) => {
    dispatch({
        type: "REMOVE_SONG",
        payload: getState().playlist.playlist,
        selected: index
    })
};
