import { config } from "../../config";

class mealService {
  endpoint = 'lookup.php?i=';
  basUrl = config.baseUrl;

  async getAllMealById(id) {
    const response = await fetch(`${this.baseUrl}/${this.endpoint}`);
    if (!response.ok) throw new Error(`${response.status}${response.statutText}`);
    const data = await response.json();
    return data.repas;
  }

}

export default mealService;