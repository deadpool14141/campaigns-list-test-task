'use strict';

angular
  .module('campaignList')
  .factory('CampaignList', ['$resource', CampaignListFactory]);

function CampaignListFactory($resource) {
  return $resource('data/campaign-list.json');
}
