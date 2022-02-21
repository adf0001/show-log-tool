
//global variable, for html page, refer tpsvr @ npm.
show_log_tool = require("../show-log-tool.js");

module.exports = {

	"show_log_tool()": function (done) {
		show_log_tool('some log message');
		return 'log ui';
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('show_log_tool', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
