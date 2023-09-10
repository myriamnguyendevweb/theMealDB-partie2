import { config } from "../../config";

class categoryService {
    endpoint = 'filter.php?c=';
    basUrl = config.baseUrl;

    async getCategoriesByName(name) {
        const response = await fetch(`${this.baseUrl}/${this.endpoint}`);
        if (!response.ok) throw new Error(`${response.status}${response.statutText}`);
        const data = await response.json();
        return data.category;
    }

}

export default categoryService;