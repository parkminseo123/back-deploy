import mongoose from 'mongoose';

const connect_url = `mongodb+srv://app:1234@app.vk45tel.mongodb.net/`;

const connect = () => {
    if(process.env.NODE_ENV !== 'production'){
            mongoose.set('debug', true)
    }

    mongoose.connect(connect_url, {
        dbNmae: 'project',
    })
    .then(() => {
        console.log('Connected tp MongoDB')
    })
    .catch((err) => {
    
    })
}

export default connect;