/**
 * Ligne de catégorie de produit dans un tableau
 * 
 * @param {{ name: string }} param0
 * @returns
 */

export function ProductCategoryRow ({ name }) {
    return (
        <tr>
            <td colSpan="2">{name}</td>
        </tr>
    );
}
