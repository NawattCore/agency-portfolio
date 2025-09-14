
import axios from 'axios'
const base = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

export const fetchServices = async (locale='en') => {
  const res = await axios.get(`${base}/api/services?locale=${locale}&populate=deep`)
  return res.data
}
export const fetchTeam = async (locale='en') => {
  const res = await axios.get(`${base}/api/team-members?locale=${locale}&populate=deep`)
  return res.data
}
export const postSubscriber = async (data) => {
  return axios.post(`${base}/api/subscribers`, { data })
}
