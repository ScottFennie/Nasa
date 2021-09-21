import axios from 'axios'
import { AppState } from '../AppState'
import { Pic } from '../models/Pic'
import { logger } from '../utils/Logger'

const apiKey = 'api_key=3scHB3cEb0lxY2XpPdRvoGgMC7iHXoSzOhxyVpSr'

const picsApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary'
})
class PicsService {
  async findPicsByQuery(query) {
    const res = await picsApi.get(`/apod?${apiKey}&date=${query}`)
    AppState.pics = new Pic(res.data)
    logger.log(AppState.pics)
  }
}
export const picsService = new PicsService()
