import { Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Category from './repas/components/category';
import Categories from "./components/Categories/Categories";
import Meal from './repas/components/meal';
import Categories from './repas/components/categories';
import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={< Categories />} />
        <Route path='/category/:name' element={<Category />} />
        <Route path="/meal/:id" element={<Meal />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App;
