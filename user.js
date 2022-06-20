const { json } = require('express/lib/response');
const User = require('./models/userModel');
const hash = require('./hashing.js');
const dehash = require('./dehashing.js');



exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            status: 'success',
            user
        });
        console.log('added a user.')
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.getUser = async (req, res) => {
    User.findOne({ email: req.body.email }, (error, foundUser) => {
        if (!error) {
            if (foundUser !== null) {
                console.log(foundUser)
                res.status(201).json({
                    status: 'success',
                    foundUser
                })
            } else {
                console.log('required parameters has not been passed.')
                res.status(400).json({
                    status: 'failed'
                })
            }
        }
    })
};

exports.deleteUser = async (req, res) => {
    User.findOneAndRemove({ email: req.body.email }, (error, deletedUser) => {
        if (!error) {
            console.log(deletedUser)
            res.status(201).json({
                status: 'success',
                deletedUser
            });
        }
    })
    console.log('user is deleted.');
};

exports.inactivateUser = async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate({ email: req.body.email }, { isActive: false })
        console.log(`This user has been set to inactive >>> ${updatedUser.name} `)
        res.status(201).json({
            status: 'success',
            updatedUser
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        })
    }
};

exports.showALLUsers = async (req, res) => {
    try {
        const foundUser = await User.find()
        console.log(foundUser)
        res.status(200).json({
            status: 'success',
            foundUser
        })
    } catch (error) {
        console.log("hata")
        res.status(400).json({
            status: 'failed',
            error,
        });
    }
};


///// deneme hashing

exports.hashAll = async (req, res) => {
    try {
        const foundUser = await User.find();//.sort ve .limit ile sınırlandırıp kademe kademe alabiliriz
        console.log(foundUser);
        for (let i = 0; i < foundUser.length; i++) {
            console.log(foundUser[i])
            hashedUserPassword = await hash.hash(foundUser[i].password);
            const updatedUser = await User.findOneAndUpdate({ email: foundUser[i].email }, { password: hashedUserPassword })
            console.log(updatedUser);
        }//for ends here
        res.status(201).json({
            status: 'passwords have been successfully hashed',
            foundUser
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
}

exports.dehashAll = async (req, res) => {
    try {
        var foundUser = await User.find(); //.sort ve .limit ile sınırlandırıp kademe kademe alabiliriz
        console.log(foundUser);
        for (var i = 0; i < foundUser.length; i++) {
            console.log(foundUser[i])
            dehashedUserPassword = await dehash.dehash(foundUser[i].password);
            const updatedUser = await User.findOneAndUpdate({ email: foundUser[i].email }, { password: dehashedUserPassword })
            console.log(updatedUser);
        }//for ends here
        res.status(201).json({
            status: 'dehashed all the passwords',
            foundUser
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        })
    }
}




/* exports.dehashAll = async (req, res) => {
    try {
        User.updateMany({ "email": { "$ne": null } }, { "$set": { "password": dehash(password) } });
        res.status(201).json({
            status: 'success'
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 'failed',
            error
        })
    }
}; */


///// deneme



/* exports.deleteUser = async (req, res) => {
    const deletedUser = await User.findOneAndRemove({mail: req.body.mail },
    function (err, deletedUser) {
        if (err){
        console.log(err)
        }
        else{
        console.log("Removed User : ", deletedUser);
        res.status(201).json({
            status: 'success',
            deletedUser,
        })
}
});
}; */


/* exports.deleteUser = async (req, res) => {
        try {
            const deletedUser = await User.findByIdAndRemove({ email: req.body.email })
            console.log('deleted a user.')
            res.status(201).json({
                status: 'success',
                deletedUser,
            });
        } catch (error) {
            res.status(400).json({
               status: 'failed',
               error,
           });
    }
} */
