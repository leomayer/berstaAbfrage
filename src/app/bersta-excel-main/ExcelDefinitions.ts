export type ExcelFoodsoftElement = {
	verf: boolean;
	bestellnummer: string;
	name: string;
	notiz: string;
	produzent: string;
	herkunft: string;
	einheit: string;
	nettopreis: number;
	mwst: number;
	pfand: number;
	gebindegr: string;
	geschuetzt1: string;
	geschuetzt2: string;
	kategorie: string;
};
export const templateData: ExcelFoodsoftElement = {
	verf: true,
	bestellnummer: '{{Bersta-nummer}}',
	name: '{{name}}',
	notiz: 'Seit ' + new Date().toLocaleDateString('de'),
	produzent: '{{producer}}',
	herkunft: '{{Herkunft}}',
	einheit: '{{Einheit}}',
	nettopreis: 0,
	mwst: 11,
	pfand: 0,
	gebindegr: '1kg',
	geschuetzt1: '',
	geschuetzt2: '',
	kategorie: 'Obst',
};
