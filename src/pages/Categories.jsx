import CategoriesForm from '../components/CategoriesForm';
import CategoriesList from '../components/CategoriesList';

export default function Categories() {
    return (
        <div>
            <h3>Categories Page</h3>
            <CategoriesForm />
            <CategoriesList />
        </div>
    );
}