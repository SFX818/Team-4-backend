exports.allAccess = (req, res) => {
    res.status(200).send("Welcome to Petflix!")
}

exports.userBoard = (req, res) => {
    res.status(200).send('User content')
}

exports.adminBoard = (req, res) => {
    res.status(200).send('Admin content')
} 

exports.About = (req, res) => {
    res.status(200).send("About the app & developers!")
}
