// file webqcode.js: WebQ main code
// Based on a script originally written by Rick Watson 
// (rwatson@uga.cc.uga.edu) Department of Management, University of Georgia
// January, 1997,
// and adapted by Peter.Schmolck@unibw-muenchen.de Dec-08-1997 
// and by Eshref Januzaj <januzaj@informatik.tu-muenchen.de>
//     http://www.informatik.tu-muenchen.de/~januzaj/  Dec-1998
// and Peter.Schmolck@unibw-muenchen.de again, July, August 1999, 
// August 2000, March 2001, August 2002
// 
// global variables that should not be changed

//help_url: page opened by clicking the help_button button 
//morehidden: may be used for cgi-script-evaluated form elements
var help_url;
if (! help_url) help_url="webqhelp.htm";
var help_button;
if (! help_button) help_button="Help";
var morehidden;
if (! morehidden) morehidden=" ";

var item;
var q_sort="";
var my_sort="";
var ipostq=0;
cfd=parent.controlframe.document;
rfd=parent.rankingframe.document; 

study_title = '<FONT  FACE="verdana, arial, helvetica"  SIZE=2 color = "##0000ff"><em>' + study_title + '</em></FONT>'; // Title
anchor_font = '<FONT  FACE="arial black, haettenschweiler, times, arial"  SIZE=2 color = "#AF0000">'; 
//anchor_font = '<FONT  FACE="verdana, arial, helvetica"  SIZE=2 color = "#AF0000">'; 
item_font = '<FONT FACE="verdana, arial, helvetica"  SIZE=1 COLOR="#666666">';

leftanchor =  ' (' + (1-categories)/2 + ') ' + leftanchor
rightanchor = rightanchor + ' (+'+(categories-1)/2 + ') '
catnumber = new Array(categories);
pileindx = new Array(numstatements);
stmntid = new Array(numstatements);
boxfilld = '<IMG SRC="boxfilld.gif" ALIGN=middle  HEIGHT=20>';
box2many= '<IMG SRC="box2many.gif" ALIGN=middle HEIGHT=20>';
boxempty = '<IMG SRC="boxempty.gif"  ALIGN=middle HEIGHT=20>';

//Aug-05-99 (SMK): variable browser4 not needed any more
// browser4: is Browser at least NN / IE version 4.0?
//var browser4 = new Boolean(false);
//if ( navigator.userAgent.charAt(8) >= 4 ) browser4 = true;
//alternatively: (navigator.userAgent.lastIndexOf('Mozilla/4') !=-1) ;

chkcode = new makearray2(numstatements,categories);
first = true;
catcode = new Array(categories);
for (count=categories; count > 0; count+=-1) {
	catcode[count] = count - (categories + 1)/2; 
	if (catcode[count] > 0) catcode[count]= '+' + catcode[count]; 
	}

// 27.11.1998 - Eshref Januzaj
cathead = '<TD></TD>';
for (count=1; count <= categories; count++) {
	cathead += '<td bgcolor=#CCFFFF align=center><FONT size = -2 color = "black">' + catcode[count] + '</font></td>';
	}


// end of global variables

// the main control function

function prepare() {
sum = 0;
for (count = 1; count <= categories; count++) {
sum = sum + cat[count];
}
if (sum != numstatements) alert('sum of categories not equal number of statements');

if (categories % 2 == 0) alert('number of categories is not uneven!');

sortstatements();
setTimeout('review()',100);

// Print WebQ Control Frame

cfd.writeln("<BODY BGCOLOR='#FFFFFF'>");
cfd.writeln("<FORM name='WebQCtrlForm'>");
cfd.writeln("<center><TABLE border=0 cellspacing=2>"); 
cfd.writeln("<TR><TD valign=top width=15%><TABLE  BORDER='0' CELLSPACING='2' CELLPADDING='0'>");
cfd.writeln("<TR><TD >" + boxempty + "</TD>");
cfd.writeln("<TD>&nbsp;</TD>");
cfd.writeln("<TD><B><FONT SIZE=1 FACE='Arial Narrow, helvetica'>Empty slot</FONT></B></TD></tr>");
cfd.writeln("<TR><TD >" + boxfilld + "</TD>");
cfd.writeln("<TD>&nbsp;</TD>");
cfd.writeln("<TD><B><FONT SIZE=1 FACE='Arial Narrow, helvetica'>Occupied slot</FONT></B></TD></tr>");
cfd.writeln("<tr><TD >" + box2many + "</TD>");
cfd.writeln("<TD>&nbsp;</TD>");
cfd.writeln("<TD><B><FONT SIZE=1 FACE='Arial Narrow, helvetica'>Too many in slot</FONT></B></TD></tr>");
cfd.writeln("</TABLE></TD>");

cfd.writeln("<TD valign=center width=70%><CENTER><FONT COLOR=\"#AF0000\" SIZE=+2>WebQ<hr noshade></FONT>" + study_title + "</CENTER>");
cfd.writeln("</TD>");

cfd.writeln("<TD valign=top align=right width=15%>");

//cfd.writeln("<blink>==&gt;</blink>") //uncomment line to get a blinking arrow
                                    //besides the Help button

cfd.writeln("<INPUT TYPE='button' NAME='Help' VALUE='"+help_button+"' onclick='parent.hiddenframe.help(parent.hiddenframe.help_url)'><br>");
cfd.writeln("<INPUT TYPE='button' NAME='Review' VALUE='Update' onclick='parent.hiddenframe.review()'><br>");
if (! recipient =="") cfd.writeln("<INPUT TYPE='button' VALUE='Submit' onclick='parent.hiddenframe.submitsort()'><br>");
cfd.writeln("</TD></TR></TABLE></center></FORM></BODY>");
cfd.close();


}

// 
function sortstatements() { 

var checker = new Array(numstatements);
mid = (categories+1)/2;
for (count1 = 1; count1 <= numstatements; count1++) {
	for (count2 = 1; count2 <= categories; count2++) { 
	checker[count1] = 0;
	if (count2 == mid)
		chkcode[count1][count2] = ' checked';
	else chkcode[count1][count2] = '';
	}
}

for (count=1; count<=numstatements; count++) {
	stmntid[count] = count;
	}
if (randomsort == true) {
	for (count=1; count<=numstatements; count++) {
		rnum=Math.floor(Math.random()*numstatements) + 1;
		hold=stmntid[count];
		stmntid[count]=stmntid[rnum];
		stmntid[rnum]=hold;
		}
	}
} 


function help(help_url) {
  if(help_url.indexOf('javascript:') != -1){
    parent.location.href=help_url;
    return;
  }
  helpwin = window.open(help_url,'helpwindow','menubar=yes, toolbar=no, location=no, directories=no,status=no,scrollbars=yes,resizable=yes,copyhistory=no,width=800,height=600');
  setTimeout('helpwin.focus()',100); //a simple helpwin.focus() does not work properly in IE
  return;
}


// Functions for displaying statements

function review() {
if (first == false) btnchk();
catcount();




// write the statements
// rfd.clear(); //seems not to be required!
rfd.writeln('<html><BODY BGCOLOR="#FFFFFF">');

rfd.writeln('<p align=right>', anchor_font, rightanchor, '</font></p>');
rfd.writeln('<form><center><table border=1 CELLSPACING=0 CELLPADDING=2>'); 

for (count1=categories; count1 > 0; count1+=-1) {
               symbol = '';

// match (green)
	if (cat[count1] == catnumber[count1]) 
		for (catcnt = 1; catcnt <= cat[count1]; catcnt++)
		  symbol = symbol  +  boxfilld;

// too many (red)
	if (cat[count1] < catnumber[count1]) {
		for (catcnt = 1; catcnt <= 2*cat[count1]-catnumber[count1]; catcnt++)
		  symbol = symbol  + boxfilld;
		for (catcnt_ = catcnt; catcnt_ <= cat[count1]; catcnt_++)
		  symbol = symbol  + box2many;
	} // IF

//	if (cat[count1] < catnumber[count1]) {
//		for (catcnt = 1; catcnt <= cat[count1]; catcnt++)
//		  symbol = symbol  + box2many;
//	} // IF

//too few (blue)
	if (cat[count1] > catnumber[count1]){
	  for (catcnt = 1; catcnt <= catnumber[count1]; catcnt++)
	  symbol = symbol  + boxfilld;

	  for (catcnt_ = catcnt; catcnt_ <= cat[count1]; catcnt_++){
	     symbol = symbol  + boxempty;
	  } // FOR
	} // IF
//add empty space before pile
	rfd.writeln('<tr><td height=5></td></tr>');
    	
//	rfd.writeln('<tr valign=middle><td bgcolor=#ff7f50 align=center><font color="#AF0000">',catcode[count1],'</font><td colspan=2 bgcolor=#ff7f50 valign=bottom>' + symbol + '</td></td>');
	rfd.writeln('<tr valign=middle><td bgcolor=#CCFFFF align=center>', anchor_font, catcode[count1],'</font><td colspan=2 bgcolor=#CCFFFF valign=bottom>', symbol, '</td>');
	rfd.writeln(cathead + '</tr>'); 
	
	for (count2 = 1; count2 <= numstatements; count2++) {
		item = stmntid[count2];
		
		for (count3 = 1; count3<= categories; count3++) {
		if ((chkcode[item][count3] == ' checked') && (count1 == count3)) {
			txt = '';
			for (catcnt = 1; catcnt<= categories; catcnt++) {
				if (catcnt==(categories+1)/2) 
					txt += '<td bgcolor=#CCFFFF ><input type=radio name="st'+item+'"'+chkcode[item][catcnt]  + '></td>';
				else txt +=  '<td><input type=radio name="st'+item+'"'+chkcode[item][catcnt]  + '></td>';
			}
		
			
			rfd.writeln('<tr valign=top><td></td><td align=right>',item_font ,item, '.</font></td><td >', item_font ,statement[item], '</font></td><td></td>', txt, '<td></td></tr>');


		}
	}
  }  // end of pile

}
rfd.writeln('</table></center></form>'); 
rfd.writeln('<p align=left>', anchor_font, leftanchor, '</font></p>');
rfd.writeln("</body></html>");
rfd.close();

first = false;
return false;
}


function submitsort() {
review();
var complete = new Boolean(true);
var respcat = new Array(numstatements);

for (i in cat) if (cat[i] != catnumber[i]) complete=false; 
if (complete == false) {
  if (forcedchoice == true) {
    alert('Q-sort is incomplete. Some categories have too few or too many statements')
    return false;
  }
  else {
    if (confirm('Q-sort is incomplete. Some categories have too few or too many statements' +
       '\nOK to submit anyway --  CANCEL to continue with sorting') == false) return false;
  }
}

for (count1 = 1; count1 <= numstatements; count1++) {
	item = stmntid[count1];
	for (count2 = 1; count2 <= categories; count2++) {
		if ((chkcode[item][count2] == ' checked')) {
			respcat[item] = count2 - (categories + 1)/2 
			if (respcat[item] >= 0) 
				respcat[item] = ' ' + respcat[item] ;
			break;
		}	
	}
}

for (count1 = 1; count1 <= numstatements; count1++) {
	q_sort += respcat[count1]; 
	}

getsortid ();
return true;

}

/* Checking the radio buttons -- using onClick does not work  :(
   smk: function btnchk greatly simplified (13-Jul-99)
*/
function btnchk() {
  for (i=1; i <= numstatements; i++) {
    radioI=eval("rfd.forms[0].st"+i)
    for (j=0; j < categories; j++) {
      if (radioI[j].checked == true)  chkcode[i][j+1] = ' checked';
      else chkcode[i][j+1] = '';
    }
  }
return false;
}

function catcount() {

for (count = 1; count <= categories; count++) 
	catnumber[count] = 0;
	
for (count2 = 1; count2 <= numstatements; count2++) {
	item = stmntid[count2];
		
	for (count3 = 1; count3<= categories; count3++) {
	if (chkcode[item][count3] == ' checked')  {
		catnumber[count3]++;		
		}
	}
}
}

// functions to create arrays
function makearray2 (x,y) {
var count;
this.length = x;
for (var count = 1; count <= x; count++)
	this[count] = new makearray(y);
}
function makearray(numelements) {
var count;
this.length = numelements;
for (count = 1; count <= numelements; count++)
	this[count] = 0;
return (this);
}

// function that replaces "'" by "`" in string 
function repapo(str) {
  l=str.length;
  i=str.indexOf("'");
  while(i>0) {
    str=str.substr(0,i) + "`"
      + str.substr(i+1,l);
    i=str.indexOf("'");
    }
  return(str);
}

//Here we start with post-sort queries, beginning with
//sortid ....
function getsortid () {
cfd.writeln("<BODY BGCOLOR='#FFFFFF'>");
cfd.writeln("<font face='Arial' size='-1'><p>" +
  "<b>Code Word: </b>For processing this project's data and for reporting " +
  "results, a unique code word is required for every participant. " + 
  "If you haven't received your personal code word from the investigator " +
  "already, just provide what you like (up to 8 characters). Be sure " +
  "to use the same code word for every part of the current project.</font></p>");
//the <form ... onsubmit ..> is required here, otherwise pressing <Enter>
//instead of clicking 'continue' would have a strange consequence...
cfd.writeln("<FORM name='GSIDForm' onsubmit='parent.hiddenframe.getpostq()'>");
cfd.writeln("<div align='center'><font face='Arial' size='-1'>My Code Word: ");
cfd.writeln("<input name='sortid' size=8 maxlength=8>");
cfd.writeln("<INPUT TYPE='button' VALUE='Continue' onclick='parent.hiddenframe.getpostq()'></font></div>");
cfd.writeln("</FORM></BODY>");
cfd.close();
}

//this function may be worked out some time, if, e.g. for
//standalone application, the q-sort data record would simply
//be printed on screen to be cut&pasted into a data file
function printsort () {
var sortid=repapo(cfd.forms[0].sortid.value) + "        ";
sortid= sortid.substring(0,8);
my_sort = sortid + "  " + q_sort ;
alert (">"+ my_sort + "<");
}

//function to get postq's 
//  in first run (ipostq = 0), no postq response to read yet, instead
//  get response from last form (GSIDForm)
function getpostq () {
if (ipostq > 0) {
  postansw[ipostq] = postq[ipostq] + "<br>" + cfd.forms[0].answ.value;
  }
else {
var sortid=repapo(cfd.forms[0].sortid.value) + "        ";
  sortid= sortid.substring(0,8);
  my_sort = sortid + "  " + q_sort ; 
  subject =  subject + ": " + sortid 
  }
ipostq = ipostq + 1;
if (ipostq <= numpostq) {
  cfd.writeln("<BODY BGCOLOR='#FFFFFF'><div align='center'>");
  cfd.writeln("<FORM name='postqForm'>");
  cfd.writeln("<font face='Arial' size='-1'>" + postq[ipostq] + "</font><br>");
  cfd.writeln("<font face='Arial' size='-1'><textarea name='answ' rows=3 cols=60 wrap=virtual></textarea></font>");
  cfd.writeln("<INPUT TYPE='button' VALUE='Continue' onclick='parent.hiddenframe.getpostq()'>");
  cfd.writeln("</FORM></div></BODY>");
  cfd.close(); 
  }
else lastform ();
}

function lastform () {
cfd.writeln("<BODY BGCOLOR='#FFFFFF'>");
cfd.writeln("<font face='Arial' size='-1'>" +
  "<p><b>Ready for sending your responses ...</b></p>" +
  "<p>You may provide your email address " +
  "- that's voluntary, though required in case you would like to " +
  "receive feedback. ");
cfd.writeln("<FORM method='POST' name='sendForm' enctype='text/plain'" +
  " action='mailto:" + recipient + "?subject=" + subject+"'>");
//cfd.writeln("<FORM method='POST' name='sendForm' " + 
//  "action='http://www.paed.unibw-muenchen.de/cgi-bin/FormMail.cgi'>");
cfd.writeln("<div align='center'><font face='Arial' size='-1'>My Email Address: ");
cfd.writeln("<input name='email' size=40 >");
cfd.writeln("<INPUT TYPE='submit' VALUE='Send'></font></div>");
cfd.writeln("<INPUT TYPE='hidden' NAME='my_sort', VALUE='"+my_sort+"'>");
cfd.writeln("<INPUT TYPE='hidden' NAME='subject', VALUE='"+subject+"'>");
cfd.writeln("<INPUT TYPE='hidden' NAME='recipient', VALUE='"+recipient+"'>");
cfd.writeln("<INPUT TYPE='hidden' NAME='browser' VALUE='"+navigator.userAgent+"'>");

for (ipostq=1; ipostq <= numpostq; ipostq++) {
  cfd.writeln("<INPUT TYPE='hidden' " + 
   "NAME='postansw" + ipostq + "', VALUE='"+repapo(postansw[ipostq])+"'>");
  }
cfd.writeln("</FORM></BODY>");
cfd.close();
}

/* 
*/
parent.hiddenframe.document.writeln("<BODY onload='prepare()'></body>");
