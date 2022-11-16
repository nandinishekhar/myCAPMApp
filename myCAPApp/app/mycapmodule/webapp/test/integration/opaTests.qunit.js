sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'mycapmodule/test/integration/FirstJourney',
		'mycapmodule/test/integration/pages/Interactions_ItemsList',
		'mycapmodule/test/integration/pages/Interactions_ItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, Interactions_ItemsList, Interactions_ItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('mycapmodule') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheInteractions_ItemsList: Interactions_ItemsList,
					onTheInteractions_ItemsObjectPage: Interactions_ItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);