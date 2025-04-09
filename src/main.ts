import { FilterService } from "./services/filter-service";

const service = new FilterService();

service.getFilters('Muscles', 1, 12)
  .then(fr => {
    console.log('Filters:', fr);
    fr.results.forEach(f => console.log(f.name, f.imgUrl));
  })
  .catch(err => {
    console.error('Error loading filters:', err);
  });
