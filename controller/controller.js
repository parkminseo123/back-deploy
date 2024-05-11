import User from "../schemas/user.js"

const main = (req, res) => {
    res.set({'Content-Type' : 'text/html; cahrset=utf-8'})
    res.send('<h1>Welcome Express!!</h1>')
}

const test = async () =>{
    //몽고db에 있는 유저정보
    const user = await User.fine()
    console.log(user)
    res.json(user)
}

export {main, test};

