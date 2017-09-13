var toolbar = {
	css:"topbar", padding:1, view:"toolbar", height:40, cols:[
		{ view:"button", type:"icon", icon:"arrow-left", width: 40 },
		{ view:"button", type:"icon", icon:"dashboard", label:"Boards", width:100 },
		{ view:"search", width:300 },
		{ view:"label", label:"<a href='https://webix.com/kanban/'>Webix Boards</a>"},
		{ view:"button", type:"icon", icon:"plus", width: 40 },
		{ view:"button", type:"icon", icon:"question-circle-o", width: 40 },
		{ view:"button", type:"icon", icon:"bell-o", width: 40 }
	]
};
var subbar = {
	css:"subbar", padding:1, view:"toolbar", height:40, cols:[
		{ view:"label", label:"<h3>App Roadmap</h3>", width: 150 },
		{ view:"button", type:"icon", icon:"star-o", width: 28 },
		{ view:"button", type:"icon", icon:"briefcase", label:" Private", width:72 },
		{},
		{ view:"button", type:"icon", icon:"ellipsis-h", label:" Show menu", width:100 }
	]
};

function getList(id, header){
	return { 
		borderless:true, headerHeight:30, header:header,
		body:{
			view:"kanbanlist", width:300, status:id
		}
	};
}

var boards = {
	view:"scrollview", scroll:"x", body:{
		view:"kanban", css:"kanbanarea", type:"space", cols:[
			getList("new", "Backlog"),
			getList("work", "In Progress"),
			getList("test", "Testing"),
			getList("done", "Done")
		], url:"data.json"
	}
};

var menu = {
	css:"draft menuarea", template:"<span class='title'>Menu</span>", width: 340
};

webix.ready(function(){
	webix.CustomScroll.init();
	webix.ui({
		type:"clean", rows:[
		  toolbar,
		  { type:"clean", cols:[
		    { type:"clean", rows:[ subbar, boards]},
			menu
		  ]}
		]
	});
});