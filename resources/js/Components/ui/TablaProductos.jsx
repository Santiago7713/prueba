export default function TablaProductos({ productos, productos1 }) {
    const productosParse = JSON.parse(productos);
    const productosParse1 = JSON.parse(productos1);
    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Nombre
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Precio
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Disponible?
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        {productosParse.id}
                    </th>
                    <td className="px-6 py-4">{productosParse.nombre}</td>
                    <td className="px-6 py-4">{productosParse.precio}</td>
                    <td className="px-6 py-4">
                        {productosParse.disponible ? (
                            <span className="bg-green-400 text-white rounded-xl p-2">
                                Disponible
                            </span>
                        ) : (
                            <span className="bg-red-400 text-white rounded-xl p-2">
                                No Disponible
                            </span>
                        )}
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        {productosParse1.id}
                    </th>
                    <td className="px-6 py-4">{productosParse1.nombre}</td>
                    <td className="px-6 py-4">{productosParse1.precio}</td>
                    <td className="px-6 py-4">
                        {productosParse1.disponible ? (
                            <span className="bg-green-400 text-white rounded-xl p-2">
                                Disponible
                            </span>
                        ) : (
                            <span className="bg-red-400 text-white rounded-xl p-2">
                                No Disponible
                            </span>
                        )}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
