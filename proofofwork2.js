crypto=require('crypto');

for (var i=0; true; i++) {
  var myhash=crypto.createHash('sha256').update(""+i+" hello").digest('hex');
  if (myhash[0]==0 && myhash[1]==0) {
    console.log(i);
    break;
  };
};
