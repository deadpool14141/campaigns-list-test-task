'use strict';

angular.module('campaignList').component('campaignList', {
  templateUrl: 'components/campaign-list/campaign-list.html',
  controller: ['CampaignList', CampaignListController],
});

function CampaignListController(CampaignList) {
  this.campaigns = CampaignList.query();
}
