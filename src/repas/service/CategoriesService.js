import { config } from "../../config";

class categoriesService {
    endpoint = 'categories.php';
    basUrl = config.baseUrl;

    async getAllCategories() {
        const response = await fetch(`${this.baseUrl}/${this.endpoint}`);
        if (!response.ok) throw new Error(`${response.status}${response.statutText}`);
        const data = await response.json();
        return data.categories;
    }

}

export default categoriesService;