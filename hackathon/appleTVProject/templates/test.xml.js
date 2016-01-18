//This file outlines the catalogTemplate.
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <catalogTemplate> 
      <banner> 
        <title>Politician Mashup</title>
      </banner>
      <list> 
        <section> 
	  <listItemLockup> 
	    <title>Romance</title>
	    <decorationLabel>5</decorationLabel>
	    <relatedContent> 
	      <grid>
	        <section> 
		  <lockup videoURL="http://stm.dam.digizuite.dk/dmm3bwsv3/372_10032_10001_1_2_0_a91f0be4-6ca7-45dd-97b9-873987e294ff.mp4?635885493452760000">
		    <img src="${this.BASEURL}images/dk-pol-1.jpg" width="500" height="308" />
		  </lockup>
		  <lockup videoURL="http://stm.dam.digizuite.dk/dmm3bwsv3/306_10032_10001_1_2_0_a91f0be4-6ca7-45dd-97b9-873987e294ff.mp4?635885491307190000">
		    <img src="${this.BASEURL}images/dk-pol-2.jpg" width="500" height="308" />
		  </lockup>									
	          <lockup videoURL="http://stm.dam.digizuite.dk/dmm3bwsv3/355_10032_10001_1_2_0_a91f0be4-6ca7-45dd-97b9-873987e294ff.mp4?635885492626700000">
		    <img src="${this.BASEURL}images/dk-pol-3.jpg" width="500" height="308" />
		  </lockup>									
		  <lockup videoURL="http://stm.dam.digizuite.dk/dmm3bwsv3/362_10032_10001_1_2_0_a91f0be4-6ca7-45dd-97b9-873987e294ff.mp4?635885493035970000">
		    <img src="${this.BASEURL}images/dk-pol-4.jpg" width="500" height="308" />
		  </lockup>
		  <lockup videoURL="http://www.byhoest.dk/tvos/test01.m3u">
		    <img src="${this.BASEURL}images/dk-pol-4.jpg" width="500" height="308" />
		  </lockup>
		</section>
	      </grid>
	    </relatedContent>
	  </listItemLockup>
        </section>
      </list>
    </catalogTemplate>
  </document>`
}