export const padArticleNoWithZeros = (articleNo: string): string => {
	const num = Number(articleNo); // Use Number for more flexible parsing
	if (isNaN(num)) {
		return articleNo; // Handle cases where the string isn't a valid number.
	}
	const integerPart = Math.floor(num); // Ensure we only use the integer part.
	return integerPart.toString().padStart(6, '0');
};

export type BerstaLoginHttp = BerstaLoginCredentials & {
	berstaUrl: string;
};
export type BerstaProductPriceDetail = {
	singleUnitPrice: number;
	singleUnitPricePriceList: number;
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
		priceListPos: [{ singleUnitPrice: 0, singleUnitPricePriceList: 0 }],
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
export type BerstaLoginCredentials = {
	username: string;
	password: string;
};
export type BerstaUrls = {
	loginUrl: string;
	productQueryUrl: string;
};
export type BerstaRequestStates = {
	msgKey: string;
	token: string;
	productQueryResult: BerstaProductDetail[];
	currentProduct: BerstaProductDetail;
	excelQuery: ExcelQuery;
};
