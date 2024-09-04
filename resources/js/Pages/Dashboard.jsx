import BotonPrueba from "@/Components/ui/BotonPrueba";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Boton from "/public/storage/prueba/boton.png";
import TablaProductos from "@/Components/ui/TablaProductos";

export default function Dashboard({ auth, productos }) {
    console.log(productos);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="grid grid-cols-2">
                            <div className="border-r-2 my-4">
                                <img
                                    src={Boton}
                                    className="w-100 h-auto mx-auto"
                                />
                                <p className="text-xs text-center text-blue-400">
                                    Se muestra un botón sin y con hover
                                </p>
                                <p className="text-justify mx-8">
                                    Hacer que el componente Boton Prueba
                                    contenga los mismos estilo que la imagen{" "}
                                    <span className="text-xs text-red-500">
                                        (preferiblemente usando tailwind).
                                    </span>
                                </p>
                                <p className="text-justify mx-8 mt-2">
                                    Una vez realizado los estilos haz que el
                                    botón al darle click te redirija a la ruta
                                    que creaste{" "}
                                    <span className="text-xs text-green-500">
                                        /productos/disponibles
                                    </span>
                                </p>
                            </div>
                            <div className="border-l-2 flex justify-center items-center my-4">
                                <BotonPrueba />
                            </div>
                        </div>
                        <hr className="my-2 mx-8" />
                        <p className="text-justify font-bold mx-10">
                            Los datos se estan trayendo de la siguiente manera,
                            la idea es organizarlos tal y como esta en la tabla
                            de abajo, usa el componente TablaProductos y haz que
                            no reciba producto por producto, sino que recibiendo
                            el array de datos los acomode en la tabla, trata de
                            hacerlo de una manera optima y sin repetir codigo{" "}
                            <span className="text-xs font-thin">
                                no debe recibir dos parametros debe quedar con
                                solo el parametro productos (es decir, elimina
                                productos1)
                            </span>
                        </p>
                        <p className="text-center my-4 mx-10 text-xs">
                            {JSON.stringify(productos)}
                        </p>
                        <div className="mx-8 my-2">
                            <TablaProductos
                                productos={JSON.stringify(productos[0])}
                                productos1={JSON.stringify(productos[5])}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
