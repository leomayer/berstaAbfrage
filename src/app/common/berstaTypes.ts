export type BerstaLoginHttp = {
	berstaUrl: string;
	username: string;
	password: string;
};
export type BerstaProductPriceDetail = {
	singleUnitPrice: number;
};
export type BerstaProductDetail = {
	sid: number;
	articleNr: string;
	name: string;
	netWeight: number;
	producer: string;
	priceListPos: BerstaProductPriceDetail[];
};
export const createEmptyBerstaProductDetail = (): BerstaProductDetail => {
	return {
		sid: 0,
		articleNr: '',
		name: '',
		netWeight: 0,
		producer: '',
		priceListPos: [{ singleUnitPrice: 0 }],
	};
};
export const createEmptyBerstaProduct = (): BerstaProductDetail[] => {
	return [createEmptyBerstaProductDetail()];
};
export type BerstaProductDetailHttp = {
	products: BerstaProductDetail[];
};

export type ExcelQuery = {
	searchText: string;
	articleNo: string;
};
export type BerstaRequestStates = {
	msgKey: string;
	token: string;
	productQueryResult: BerstaProductDetail[];
	currentProduct: BerstaProductDetail;
	excelQuery: ExcelQuery;
};
