export type BerstaLoginHttp = {
  berstaUrl: string,
  username: string,
  password: string,
}
export type BerstaDetailsHttp = {
  product: {
    name: string,
    netWeight: number,
    producer: string,
    priceListPos: [],
  },
}

export type BerstaLoginState = {
  msgKey: string,
  token: string,
}
