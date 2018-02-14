const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
        return console.log('Unable to connect to mongo database server');
    }
    console.log('Connected to mongo database server');
    // db.collection('Todos').find({
    //     _id : new ObjectID('5a8015c03bc10b13845caf81')
    // }).toArray().then((docs)=>{
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log(err);
    // });

    db.collection('Users').find({
        name : "Huzaifa Jameel"
    }).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log(err);
    });


    //db.close();
});
