/**
 * Ligne produit dans un tableau à 2 colones (nom /prix) 
 * 
 * @param {{ product: { name: string, price: string, stocked: boolean } }} param0 
 * @returns 
 */

export function ProductRow({ product }) {
    const style = product.stocked ? undefined : { color: 'red' };
    //throw new Error("Erreur de test"); // Simule une erreur pour tester ErrorBoundary
    return (
        <tr>
            <td style={style}>{product.name}</td>
            <td>{product.price}</td>
            {/* <td>{product.stocked ? "Yes" : "No"}</td> */}
        </tr>
    );
}
