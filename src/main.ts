import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { FilterHtmlGenerator } from "./html-gererators/filter-html-generator";
import { FilterService } from "./services/filter-service";

//#region Load filters
const service = new FilterService();

service.getFilters('Muscles', 1, 12)
  .then(response => {
    const html = FilterHtmlGenerator.generateFiltersHtml(response.results);
    const container = document.querySelector('.filters-output');

    if (!container)
      throw new Error("Can't find filters-output");

    container.innerHTML = html;
  })
  .catch(error =>
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
      timeout: 5000
    })
  );
//#endregion