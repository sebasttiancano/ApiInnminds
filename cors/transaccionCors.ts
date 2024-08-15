import cors from "cors";

const cors_transacicon = (_app : any) => {
    let whiteList = [
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:3005',
        undefined
    ];

    let corsOptions = {
        origin: function (origin: any, callback: any) {
            if (whiteList.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                console.log(origin);
                callback(new Error('Not allowed by CORS'));
            }
        }
    };

    return cors(corsOptions);
}

export default cors_transacicon
