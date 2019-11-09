const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var moment = require('moment');


const authorsSchema = Schema({
    regDate: {type: Date, default: new Date},
    books: [{ type: Schema.Types.ObjectId, ref: 'Books' }],
    fullname: String,
  });

  authorsSchema.virtual('timeOfReg').get(function(){
      const a = (Date.now() - this.regDate).toString();
    //   console.log(a);
      return a})
      .set((v)=>{
          console.log('v: ' + v);
          moment(v, 'ss').format('hh:mm');
      });

const Authors = mongoose.model('Authors', authorsSchema);
module.exports = Authors;