import api from '../../apis/api'
import { toast } from "react-toastify";
import {url} from '../../utils/common'

export const initplaylist = () => async (dispatch, getState) => {
        api.get('/music/popular').then(res=>{
          let songs = res.data.songs.splice(0,5)
          songs.forEach(song =>{
              song.src = url+"/music/play/"+song.id
          })
          dispatch({
              type: "ADD_SONG",
              payload: songs,
              selected: getState().playlist.selected
          })
        }).catch(err=>{
          console.log(err)
        })
}

export const addSongToPlaylist = (song) => async (dispatch, getState) => {
    let songs = getState().playlist.playlist
    if(!songs.includes(song)){
        songs.push(song)
        dispatch({
            type: "ADD_SONG",
            payload: songs,
            selected: getState().playlist.selected
        })
        toast("Song added")
    }else{
        toast.error("song already in playlist")
    }
};

export const removeSongFromPlaylist = (song) => async (dispatch, getState) => {
    let songs = getState().playlist.playlist
    if(songs.includes(song)){
        songs.splice(songs.indexOf(song), 1)
        dispatch({
            type: "REMOVE_SONG",
            payload: songs,
            selected: getState().playlist.selected
        })
        toast("Song removed from playlist")
    }else{
        toast.error("Song not in playlist")
    }

};

export const playNow = (song) => async (dispatch, getState) => {
    let songs = getState().playlist.playlist
    if(songs.includes(song)){
        let index = songs.indexOf(song)
        songs.splice(0, index)
        //songs.unshift(songs.splice(index,1)[0])
    }else{
        let newSongs = [song, ...songs]
        songs = newSongs
    }
    dispatch({
        type: "PLAY_NOW",
        payload: songs,
        selected: 0
    })
    toast("Playing song now..")
};
export const previousSong = () => async (dispatch, getState) =>{
    if(getState().playlist.selected == 0){
        dispatch({
            type: "ADD_SONG",
            payload: getState().playlist.playlist,
            selected: getState().playlist.selected
        })
    }else{
        dispatch({
            type: "ADD_SONG",
            payload: getState().playlist.playlist,
            selected: getState().playlist.selected-1
        })
    }
}
export const addEmotionSong = (playlist)=> async(dispatch, getState)=>{
    let newPlaylist = getState().playlist.playlist.splice(0, getState().playlist.selected+1)
    playlist.forEach(song=>{
        newPlaylist.push(song)
    })
    dispatch({
        type: "ADD_SONG",
        payload: newPlaylist,
        selected: getState().playlist.selected
    })
}
export const nextSong = () => async (dispatch, getState) =>{
    if(getState().playlist.selected == getState().playlist.playlist.length-1){
        dispatch({
            type: "ADD_SONG",
            payload: getState().playlist.playlist,
            selected: getState().playlist.selected
        })
    }else{
        dispatch({
            type: "ADD_SONG",
            payload: getState().playlist.playlist,
            selected: getState().playlist.selected+1
        })
    }
}

export const onSongEnd = () => async (dispatch, getState) =>{
    
}

