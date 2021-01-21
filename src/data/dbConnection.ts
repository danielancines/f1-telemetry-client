import mongoose from 'mongoose';

function connect() {
  mongoose
      .connect(
          'mongodb://sa:mongodb2018_sa@10.0.0.192:27017/telemetrydb?authSource=admin',
          {
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
          })
      .then(() => {
        console.log('Db connection sucessfuly!');
      })
      .catch((err: any) => {
        console.log(err);
      });
}

export {connect as connection};