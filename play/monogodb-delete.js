const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
        return console.log('Unable to connect to mongo database server');
    }
    console.log('Connected to mongo database server');

    // deleteMany
    // db.collection('Todos').deleteMany({text : 'What to do'}).then((result)=>{
    //     console.log(result);
    // });


    //deleteOne
    // db.collection('Todos').deleteOne({text : 'What to do'}).then((result)=>{
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // });



    // db.collection('Users').deleteMany({name : 'Huzaifa Jameel'}).then((result)=>{
    //     console.log(result);
    // });


    db.collection('Users').findOneAndDelete({ _id : new ObjectID("5a8017ddc8169a039c280ebe")}).then((result)=>{
        console.log(JSON.stringify(result,undefined,2));
    });

    //db.close();
});
