import {IWithCoordinates} from "./IWithCoordinates"

function degTorad(deg: number) {
  return deg * (Math.PI / 180)
}

export const kmFromCoordinates = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371 // Radius of the earth in km
  const dLat = degTorad(lat2 - lat1) // deg2rad below
  const dLon = degTorad(lon2 - lon1)
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
    + Math.cos(degTorad(lat1)) * Math.cos(degTorad(lat2))
    * Math.sin(dLon / 2) * Math.sin(dLon / 2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return Math.round(R * c)
}

export const distanceBetween = (a: IWithCoordinates, b: IWithCoordinates) => kmFromCoordinates(
  a.latitude,
  a.longitude,
  b.latitude,
  b.longitude,
)
