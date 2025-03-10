import { BoxModels } from "./BoxModels"


export const Models = () => {
    return (
        <main className="contenedor modelos" id="android">
            <h2 className="text-center degradado">Elige tu modelo Top</h2>
            <div className="content-modelos">
        
                <BoxModels
                    className="box-modelos samsung-z"
                    title="Samsung Z Flip"
                    price="$1500"
                />
                <BoxModels
                    className="box-modelos apple-14"
                    title="iPhone 14 Pro"
                    price="$1200"
                />
                <BoxModels
                    className="box-modelos xiomi-11"
                    title="Xiaomi Note 11"
                    price="$1000"
                />
                <BoxModels
                    className="box-modelos galaxy-53"
                    title="Samsung A53"
                    price="$800"
                />
               
            </div>
        </main>
    )
}
