'use strict';

let Conditions = {
  targetIsYou: (data, matches) => {
    return data.me == matches.target;
  },
  caresAboutAOE: (data) => {
    return data.role == 'tank' || data.role == 'healer' || data.CanAddle();
  },
  caresAboutBuster: (data) => {
    return data.role == 'tank' || data.role == 'healer';
  },
  caresAboutPhysicalBuster: (data) => {
    return data.role == 'tank' || data.role == 'healer' || data.CanFeint();
  },
};

if (typeof module !== 'undefined' && module.exports)
  module.exports = Conditions;