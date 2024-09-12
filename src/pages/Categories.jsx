import CategoriesForm from '../components/CategoriesForm';
import CategoriesList from '../components/CategoriesList';
import './Categories.css'

export default function Categories() {
    return (
        <div className='categories'>
            <h2>Categories Page</h2>
            <CategoriesForm />
            <CategoriesList />
        </div>
    );
}