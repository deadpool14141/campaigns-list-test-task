'use strict';

angular
  .module('campaignListApp.filters', [])
  .filter('shortNumber', ShortNumberFilter);

function ShortNumberFilter() {
  return function (input) {
    if (typeof input !== 'number') {
      return input;
    }

    const abs = Math.abs(input);

    if (abs >= Math.pow(10, 6)) {
      return roundDecimals2(input / Math.pow(10, 6)) + 'M';
    }
    if (abs >= Math.pow(10, 3)) {
      return roundDecimals2(input / Math.pow(10, 3)) + 'K';
    }

    return input;
  };
}

function roundDecimals2(number) {
  return Math.trunc(number * 100) / 100;
}
