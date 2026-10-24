


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  for (const arr of args) {
    combinedObject.users = [...combinedObject.users, ...arr];
  }

  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  return combinedObject;
}
//test
// console.log(combineUsers(
//   ['alice', 'bob'],
//   ['carol', 'dave']
// ));