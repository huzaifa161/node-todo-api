const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
        return console.log('Unable to connect to mongo database server');
    }
    console.log('Connected to mongo database server');
//     db.collection('Todos').insert({
//         text: 'Something to do',
//         completed : false
//
//     },(err,result)=>{
//         if(err){
//             return console.log('Unable to insert todo'+err);
//         }
//         console.log(JSON.stringify(result.ops,undefined,2));
//     });
//     db.close();
// });

    db.collection('Users').insertOne({
        name : 'Huzaifa Jameel',
        age : 21,
        location : 'Burns Road,Karachi.'
    },(err,results)=>{
        if(err){
            return console.log('Unable to insert user ' + err);
        }
        console.log(JSON.stringify(results.ops));
    });
    db.close();
});
