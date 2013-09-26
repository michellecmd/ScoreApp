var APP = APP || {};

(function () { //Self involking function omdat je wil dat ze code zichzelf helemaal uitvoert
	
	APP.game = { //Code literal, omdat we dit object maar één keer gaan gebruiken
		//simulatie van data uit een database
		title:'Game',
		description:'Pool A - Score: Boomsquad vs. Burning Snow',
		latestGameResults : [ 
			{ score: "1", team1: "Boomsquad", team1Score: "1", team2: "Burning Snow", team2Score: "0"},
		    { score: "2", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "0"},
		    { score: "3", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "1"},
		    { score: "4", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "2"},
		    { score: "5", team1: "Boomsquad", team1Score: "3", team2: "Burning Snow", team2Score: "2"},
		    { score: "6", team1: "Boomsquad", team1Score: "4", team2: "Burning Snow", team2Score: "2"},
		    { score: "7", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "2"},
		    { score: "8", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "3"},
		    { score: "9", team1: "Boomsquad", team1Score: "6", team2: "Burning Snow", team2Score: "3"},
		    { score: "10", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "3"},
		    { score: "11", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "4"},
		    { score: "12", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "4"},
		    { score: "13", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "5"},
		    { score: "14", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "6"},
		    { score: "15", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "6"},
		    { score: "16", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "7"},
		    { score: "17", team1: "Boomsquad", team1Score: "10", team2: "Burning Snow", team2Score: "7"},
		    { score: "18", team1: "Boomsquad", team1Score: "11", team2: "Burning Snow", team2Score: "7"},
		    { score: "19", team1: "Boomsquad", team1Score: "12", team2: "Burning Snow", team2Score: "7"},
		    { score: "20", team1: "Boomsquad", team1Score: "13", team2: "Burning Snow", team2Score: "7"},
		    { score: "21", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "7"},
		    { score: "22", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "8"},
		    { score: "23", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"}
		    ]
	};

	APP.schedule = {
		title:'Schedule',
		description:'Pool A - Schedule',
		scoreResults: [
			{ date: "Monday, 9:00am", team1: "Chasing", team1Score: "13", team2: "Amsterdam Money Gang", team2Score: "9"},
		    { date: "Monday, 9:00am", team1: "Boomsquad", team1Score: "15", team2: "Beast Amsterdam", team2Score: "11"},
		    { date: "Monday, 10:00am", team1: "Beast Amsterdam", team1Score: "14", team2: "Amsterdam Money Gang", team2Score: "12"},
		    { date: "Monday, 10:00am", team1: "Chasing", team1Score: "5", team2: "Burning Snow", team2Score: "15"},
		    { date: "Monday, 11:00am", team1: "Boomsquad", team1Score: "11", team2: "Amsterdam Money Gang", team2Score: "15"},    
		    { date: "Monday, 11:00am", team1: "Burning Snow", team1Score: "15", team2: "Beast Amsterdam", team2Score: "6"},
		    { date: "Monday, 12:00pm", team1: "Chasing", team1Score: "8", team2: "Beast Amsterdam", team2Score: "15"},
		    { date: "Monday, 12:00pm", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"},
		    { date: "Monday, 1:00pm", team1: "Chasing", team1Score: "15", team2: "Boomsquad", team2Score: "14"},
		    { date: "Monday, 1:00pm", team1: "Burning Snow", team1Score: "15", team2: "Amsterdam Money Gang", team2Score: "11"}
    	]
	};

	APP.ranking = {
		title:'Ranking',
		description:'De ranking van de teams', 
		scoreRanking: [
			{ team: "Chasing", Win: "2", Lost: "2", Sw: "7", Sl: "9", Pw: "35", Pl: "39"},
		    { team: "Boomsquad", Win: "2", Lost: "2", Sw: "9", Sl: "8", Pw: "36", Pl: "34"},
		    { team: "Burning Snow", Win: "3", Lost: "1", Sw: "11", Sl: "4", Pw: "36", Pl: "23"},
		    { team: "Beast Amsterdam", Win: "2", Lost: "2", Sw: "6", Sl: "8", Pw: "30", Pl: "34"},
		    { team: "Amsterdam Money Gang", Win: "1", Lost: "3", Sw: "6", Sl: "10", Pw: "30", Pl: "37"}
		]
	};
	
	// Controller 
	APP.controller = {
		init: function () {
			// Hier wordt een init gebruikt omdat je wil dat je later in de code deze functie weer kan activeren
			APP.router.init();
			//nameSpace.object.methode
		}
	};

	// Router, spreekt de lib routie aan om te zorgen dat de juiste content van de juiste pagina getoond wordt aan de hand van user input
	// De user input is doormiddel van het klikken op een link naar een nieuwe pagina met een nieuwe url
	APP.router = {
		init: function () {
	  		/* routie({
			    '/game': function() {
			    	APP.page.render('game');
				},
			    '/schedule': function() {
			    	APP.page.render('schedule');
			    },

			    '/ranking': function() {
			    	APP.page.render('ranking');
			    },
			    '*': function() {
			    	APP.page.render('game');
			    }
			}); */
			routie('/:name', function(name) {
					APP.page.render(name);
			});
		}, 

		change: function () {
            var route = window.location.hash.slice(2),
                sections = qwery('section'),
                section = qwery('[data-route=' + route + ']')[0];

            // Toon alleen de actieve pagina, de rest niet
            if (section) {
            	for (var i=0; i < sections.length; i++){
            		sections[i].classList.remove('active');
            	}
            	section.classList.add('active');
            }

            // De standaard route, als een andere route niet herkend wordt
            if (!route) {
            	sections[0].classList.add('active');
            }

		}
	};

	// Aanmaken van de pagina, vullen van data
	// Met qwery spreekt Transparency de DOM aan, in dit geval de elementen met 'data-route'
	// Qwery geeft arrays terug
	APP.page = {
		render: function (route) {
			var data = APP[route];

			Transparency.render(qwery('[data-route=' + route + ']')[0], data);
			APP.router.change();
		}
	};

	// DOM ready, pas als de DOM (HTML) klaar is wordt de APP.controler gestart. Dit helpt voorkomen dat JavaScript al uitgevoerd wordt zonder dat deze geplaatst kan worden en dan wordt de content niet getoont.
	domready(function () { //Self involking function
		// Start de APP.controller.init als de DOM helemaal geladen is
		APP.controller.init();
	});
	
})();