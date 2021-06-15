/* eslint-disable prettier/prettier */
import axios from 'axios'
//import places from "../data/places.json";
export class PlaceService {
    async getAllPlaces() {
        const places = await axios.get("/api/places/")
            //  console.log(places.data);
        return places.data;
    }
    async getPlaceById(id) {
        const place = await axios.get("/api/places/" + id)
            //console.log('service', place.data);
        return place.data || null;
    }
    async getCommentsForPlace(id) {
        const commentsForPlace = await axios.get("/api/comments/" + id)
        return commentsForPlace.data
    }
    async createCommentforPlace(id, params) {
        const addedComment = axios.post("/api/comments/" + id, params)
        return addedComment
    }
}

const placeService = new PlaceService();

export default placeService;