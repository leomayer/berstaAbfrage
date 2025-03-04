import { signalStoreFeature, withMethods, withState } from '@ngrx/signals';
import { ExcelFoodsoftElement, templateData } from './bersta-excel-main/ExcelDefinitions';

type excelDataTypes = {
  template: ExcelFoodsoftElement,
}

const initExcelData: excelDataTypes = {
  template: templateData,
};

export function withExcelStatus() {
  return signalStoreFeature(
    withState(initExcelData),
    withMethods((state) => {
      return {
        setDefaultVerf(verf: boolean) {
          state.template().verf = verf;
        },
        setDefaultMWSt(mwst: number) {
          state.template().mwst = mwst;
          console.log('state:', state.template().mwst, mwst)
        },
        setDefaultNotiz(notiz: string) {
          state.template().notiz = notiz;
        },
        setDefaultKategorie(kategorie: string) {
          state.template().kategorie = kategorie;
        },
      };
    }),
  );
}
