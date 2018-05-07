/**
 * Feel free to explore, or check out the full documentation
 * https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/scripting-monitors/writing-scripted-browsers
 * for details.
 */

var assert = require('assert');

/* urlList is a simple array of Spring Music deployments to test. Each element is a string separated by a comma
*/

var urlList = ['https://ddarwinappaspring-proud-panther.apps.pcf.datanerd.us/',
'https://ddarwinappbspring-cheerful-bongo.apps.pcf.datanerd.us/',
'https://ddarwinappcspring-chatty-okapi.apps.pcf.datanerd.us/'
];

urlList.forEach(function(url,index,array){

$browser.get(url).then(function(){
  // Check the H1 title matches "Example Domain"
  return $browser.waitForAndFindElement($driver.By.css('h1')).then(function(element){
    return element.getText().then(function(text){
      assert.equal('Albums', text, 'Validation Header Missing');
    });
    }).then(function(){
  // Find and Click on the Titles link"
  return $browser.waitForAndFindElement($driver.By.xpath('//*[@id=\"albums\"]/div[1]/div/a[3]'));
  }).then(function(el){
  el.click();
  }).then(function(){
  // Click on the Artist Link"
  return $browser.waitForAndFindElement($driver.By.xpath('//*[@id=\"albums\"]/div[1]/div/a[4]'));
  }).then(function(el){
    el.click();
  }).then(function(){
  // Click on the Year Link"
  return $browser.waitForAndFindElement($driver.By.xpath('//*[@id=\"albums\"]/div[1]/div/a[5]'));
  }).then(function(el){
    el.click();
  }).then(function(){
  // Click on the Genre Link"
  return $browser.waitForAndFindElement($driver.By.xpath('//*[@id=\"albums\"]/div[1]/div/a[6]'));
  }).then(function(el){
    el.click();
  });
})
})
