import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchCategories,
    deleteCategory,
    fetchCategoriesById,
    updateCategory,
} from '../redux/categories/categoryActions';

const CategoriesList = () => {
    const [wallet, setWallet] = useState('');
    const [name, setName] = useState('');
    const [showInput, setShowInput] = useState(false);
    const dispatch = useDispatch();
    const { items, loading, error, itemsDetail, loadingDetail, errorDetail } =
        useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {
        if (itemsDetail) {
            setWallet(itemsDetail.wallet?._id || itemsDetail.wallet || ''); // Handle wallet being undefined
            setName(itemsDetail.name || ''); // Handle name being undefined
        }
    }, [itemsDetail]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleUpdate = (categoryWallet, categoryName, id) => {
        if (categoryName.trim() && categoryWallet.trim()) {
            const payload = {
                wallet: categoryWallet,
                name: categoryName,
            };
            dispatch(updateCategory(payload, id));
            setShowInput(false); // Hide input after update
        }
    };

    return (
        <>
            <h6>Detail kategori yang dipilih</h6>
            {loadingDetail ? (
                <p>Loading...</p>
            ) : errorDetail ? (
                <p>Error: {errorDetail}</p>
            ) : (
                itemsDetail && (
                    <>
                        <p>ID: {itemsDetail._id}</p>
                        <p>Wallet: {itemsDetail.wallet?._id || itemsDetail.wallet || 'No Wallet'}</p>
                        <p>Nama: {itemsDetail.name || 'No Name'}</p>
                        <button onClick={() => setShowInput(true)}>Edit</button>
                        {showInput && (
                            <>
                                <input
                                    type="text"
                                    value={wallet}
                                    onChange={(e) => setWallet(e.target.value)}
                                    placeholder="Update Wallet ID"
                                />
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Update Categories Title"
                                />
                                <button
                                    onClick={() =>
                                        handleUpdate(wallet, name, itemsDetail._id)
                                    }
                                >
                                    Update
                                </button>
                            </>
                        )}
                    </>
                )
            )}
            <br />
            ====================================
            <br />
            <ul>
                {items.map((category) => (
                    <li key={category._id}>
                        {category.wallet?._id || category.wallet || 'No Wallet'} - {category.name}
                        <button
                            onClick={() => dispatch(fetchCategoriesById(category._id))}
                        >
                            Detail
                        </button>
                        <button
                            onClick={() => dispatch(deleteCategory(category._id))}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default CategoriesList;
