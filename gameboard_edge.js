/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'puritan, sans-serif': '<script src=\"http://use.edgefonts.net/puritan:n4,i4,n7,i7:all.js\"></script>',
            'bree-serif, sans-serif': '<script src=\"http://use.edgefonts.net/bree-serif:n4:all.js\"></script>',
            'rancho, fantasy': '<script src=\"http://use.edgefonts.net/rancho:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'game_bg',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0%', '1028px', '672px', 'auto', 'auto'],
                            fill: ["rgba(81,110,114,1.00)",[50,50,true,'farthest-corner',[['rgba(221,221,221,1.00)',0],['rgba(56,56,56,1.00)',100]]]],
                            stroke: [3,"rgba(236,236,236,0.00)","none"]
                        },
                        {
                            id: 'divFarm',
                            type: 'group',
                            rect: ['-84px', '-5px', '1435px', '808px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'bg_farm',
                                type: 'image',
                                rect: ['84px', '0', '71.6%', '83.2%', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"bg_farm.jpg",'0%','0%','100%','auto', 'no-repeat']
                            },
                            {
                                id: 'pathmarkersCopy6',
                                display: 'none',
                                type: 'group',
                                rect: ['79px', '135px', '860', '449', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'marker1Copy6',
                                    type: 'image',
                                    rect: ['22px', '-22px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker2Copy6',
                                    type: 'image',
                                    rect: ['212px', '34px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker3Copy6',
                                    type: 'image',
                                    rect: ['454px', '-15px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker4Copy6',
                                    type: 'image',
                                    rect: ['666px', '38px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker5Copy6',
                                    type: 'image',
                                    rect: ['644px', '205px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker6Copy6',
                                    type: 'image',
                                    rect: ['371px', '171px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker7Copy6',
                                    type: 'image',
                                    rect: ['62px', '214px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                }]
                            },
                            {
                                id: 'avatar_farm',
                                type: 'group',
                                rect: ['-97px', '149px', '141', '133', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'bikeFarm',
                                    type: 'image',
                                    tag: 'img',
                                    rect: ['-61px', '-82px', '256px', '223px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"bike.png",'0px','0px'],
                                    transform: [[],[],[],['0.55','0.55']]
                                },
                                {
                                    id: 'charFarm',
                                    type: 'image',
                                    tag: 'img',
                                    rect: ['-15px', '-58px', '176px', '188px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"character.png",'0px','0px'],
                                    transform: [[],[],[],['0.61','0.61']]
                                }]
                            }]
                        },
                        {
                            id: 'divSchool',
                            type: 'group',
                            rect: ['-84px', '0px', '1435px', '808px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'bg_school',
                                type: 'image',
                                rect: ['84px', '0', '1028px', '672px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"bg_school.jpg",'0px','0px']
                            },
                            {
                                id: 'pathmarkersCopy5',
                                display: 'none',
                                type: 'group',
                                rect: ['79px', '135px', '860', '449', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'marker1Copy5',
                                    type: 'image',
                                    rect: ['16px', '34px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker2Copy5',
                                    type: 'image',
                                    rect: ['168px', '122px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker3Copy5',
                                    type: 'image',
                                    rect: ['350px', '215px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker4Copy5',
                                    type: 'image',
                                    rect: ['421px', '110px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker5Copy5',
                                    type: 'image',
                                    rect: ['572px', '30px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker6Copy5',
                                    type: 'image',
                                    rect: ['733px', '98px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker7Copy5',
                                    type: 'image',
                                    rect: ['860px', '191px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                }]
                            },
                            {
                                id: 'avatar_school',
                                type: 'group',
                                rect: ['-86px', '75px', '141', '133', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'bikeSchool',
                                    type: 'image',
                                    tag: 'img',
                                    rect: ['-61px', '-82px', '256px', '223px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"bike.png",'0px','0px'],
                                    transform: [[],[],[],['0.55','0.55']]
                                },
                                {
                                    id: 'charSchool',
                                    type: 'image',
                                    tag: 'img',
                                    rect: ['-15px', '-60px', '176px', '188px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"character.png",'0px','0px'],
                                    transform: [[],[],[],['0.61','0.61']]
                                }]
                            }]
                        },
                        {
                            id: 'divWater',
                            type: 'group',
                            rect: ['-84px', '0px', '1435px', '808px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'bg_water',
                                type: 'image',
                                rect: ['0', '0', '1028px', '672px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"bg_water.jpg",'0px','0px']
                            },
                            {
                                id: 'pathmarkersCopy4',
                                display: 'none',
                                type: 'group',
                                rect: ['79px', '135px', '860', '449', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'marker1Copy4',
                                    type: 'image',
                                    rect: ['-68px', '78px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker2Copy4',
                                    type: 'image',
                                    rect: ['296px', '16px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker3Copy4',
                                    type: 'image',
                                    rect: ['677px', '-22px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker4Copy4',
                                    type: 'image',
                                    rect: ['810px', '180px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker5Copy4',
                                    type: 'image',
                                    rect: ['519px', '126px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker6Copy4',
                                    type: 'image',
                                    rect: ['256px', '269px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker7Copy4',
                                    type: 'image',
                                    rect: ['-35px', '215px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                }]
                            },
                            {
                                id: 'avatar_water',
                                type: 'group',
                                rect: ['-97px', '149px', '141', '133', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'bikeWater',
                                    type: 'image',
                                    tag: 'img',
                                    rect: ['-61px', '-82px', '256px', '223px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"bike.png",'0px','0px'],
                                    transform: [[],[],[],['0.55','0.55']]
                                },
                                {
                                    id: 'charWater',
                                    type: 'image',
                                    tag: 'img',
                                    rect: ['-15px', '-58px', '176px', '188px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"character.png",'0px','0px'],
                                    transform: [[],[],[],['0.61','0.61']]
                                }]
                            }]
                        },
                        {
                            id: 'divToilet',
                            type: 'group',
                            rect: ['-84px', '0px', '1435px', '808px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'bg_toilet',
                                type: 'image',
                                rect: ['84px', '0', '1028px', '672px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"bg_toilet.jpg",'0px','0px']
                            },
                            {
                                id: 'pathmarkersCopy3',
                                display: 'none',
                                type: 'group',
                                rect: ['79px', '135px', '860', '449', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'marker1Copy3',
                                    type: 'image',
                                    rect: ['53px', '19px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker2Copy3',
                                    type: 'image',
                                    rect: ['276px', '-35px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker3Copy3',
                                    type: 'image',
                                    rect: ['544px', '7px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker4Copy3',
                                    type: 'image',
                                    rect: ['657px', '179px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker5Copy3',
                                    type: 'image',
                                    rect: ['429px', '270px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker6Copy3',
                                    type: 'image',
                                    rect: ['212px', '265px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker7Copy3',
                                    type: 'image',
                                    rect: ['5px', '175px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                }]
                            },
                            {
                                id: 'avatar_toilet',
                                type: 'group',
                                rect: ['-88px', '239px', '141', '133', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'bikeToilet',
                                    type: 'image',
                                    tag: 'img',
                                    rect: ['-61px', '-82px', '256px', '223px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"bike.png",'0px','0px'],
                                    transform: [[],[],[],['0.55','0.55']]
                                },
                                {
                                    id: 'charToilet',
                                    type: 'image',
                                    tag: 'img',
                                    rect: ['-15px', '-59px', '176px', '188px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"character.png",'0px','0px'],
                                    transform: [[],[],[],['0.61','0.61']]
                                }]
                            }]
                        },
                        {
                            id: 'divMarket',
                            type: 'group',
                            rect: ['-84px', '0px', '1435px', '808px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'bg_market',
                                type: 'image',
                                rect: ['84px', '0', '1028px', '672px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"bg_market.jpg",'0px','0px']
                            },
                            {
                                id: 'pathmarkersMarket',
                                display: 'none',
                                type: 'group',
                                rect: ['79px', '135px', '860', '449', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'marker1Copy2',
                                    type: 'image',
                                    rect: ['62px', '-22px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker2Copy2',
                                    type: 'image',
                                    rect: ['296px', '56px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker3Copy2',
                                    type: 'image',
                                    rect: ['537px', '-2px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker4Copy2',
                                    type: 'image',
                                    rect: ['790px', '30px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker5Copy2',
                                    type: 'image',
                                    rect: ['657px', '163px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker6Copy2',
                                    type: 'image',
                                    rect: ['396px', '199px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker7Copy2',
                                    type: 'image',
                                    rect: ['135px', '205px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                }]
                            },
                            {
                                id: 'avatar_market',
                                type: 'group',
                                rect: ['-97px', '149px', '141', '133', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'bikeMarket',
                                    type: 'image',
                                    tag: 'img',
                                    rect: ['-61px', '-82px', '256px', '223px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"bike.png",'0px','0px'],
                                    transform: [[],[],[],['0.55','0.55']]
                                },
                                {
                                    id: 'charMarket',
                                    type: 'image',
                                    tag: 'img',
                                    rect: ['-15px', '-59px', '176px', '188px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"character.png",'0px','0px'],
                                    transform: [[],[],[],['0.61','0.61']]
                                }]
                            }]
                        },
                        {
                            id: 'divMedical',
                            type: 'group',
                            rect: ['-84px', '0px', '1435px', '808px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'bg_hospital',
                                type: 'image',
                                rect: ['84px', '0', '1028px', '672px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"bg_hospital.jpg",'0px','0px']
                            },
                            {
                                id: 'pathmarkersMed',
                                display: 'none',
                                type: 'group',
                                rect: ['79px', '135px', '860', '449', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'marker1Copy',
                                    type: 'image',
                                    rect: ['-7px', '66px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker2Copy',
                                    type: 'image',
                                    rect: ['218px', '-21px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker3Copy',
                                    type: 'image',
                                    rect: ['469px', '17px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker4Copy',
                                    type: 'image',
                                    rect: ['385px', '155px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker5Copy',
                                    type: 'image',
                                    rect: ['218px', '224px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker6Copy',
                                    type: 'image',
                                    rect: ['572px', '259px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker7Copy',
                                    type: 'image',
                                    rect: ['853px', '145px', '196px', '158px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                }]
                            },
                            {
                                id: 'avatar_med',
                                type: 'group',
                                rect: ['-97px', '149px', '141', '133', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'bikeMed',
                                    type: 'image',
                                    tag: 'img',
                                    rect: ['-61px', '-82px', '256px', '223px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"bike.png",'0px','0px'],
                                    transform: [[],[],[],['0.55','0.55']]
                                },
                                {
                                    id: 'charMed',
                                    type: 'image',
                                    tag: 'img',
                                    rect: ['-16px', '-58px', '176px', '188px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"character.png",'0px','0px'],
                                    transform: [[],[],[],['0.61','0.61']]
                                }]
                            }]
                        },
                        {
                            id: 'divJob',
                            type: 'group',
                            rect: ['-84px', '1px', '1435px', '808px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'bg_job',
                                type: 'image',
                                rect: ['84px', '0', '1028px', '672px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"bg_job.jpg",'0px','0px']
                            },
                            {
                                id: 'pathmarkers',
                                display: 'none',
                                type: 'group',
                                rect: ['79px', '135px', '860', '449', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'marker1',
                                    type: 'image',
                                    rect: ['16px', '-7px', '196px', '158px', 'auto', 'auto'],
                                    opacity: '0.20020325203252',
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker2',
                                    type: 'image',
                                    rect: ['252px', '48px', '196px', '158px', 'auto', 'auto'],
                                    opacity: '0.20020325203252',
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker3',
                                    type: 'image',
                                    rect: ['597px', '18px', '196px', '158px', 'auto', 'auto'],
                                    opacity: '0.20020325203252',
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker4',
                                    type: 'image',
                                    rect: ['860px', '140px', '196px', '158px', 'auto', 'auto'],
                                    opacity: '0.20020325203252',
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker5',
                                    type: 'image',
                                    rect: ['639px', '256px', '196px', '158px', 'auto', 'auto'],
                                    opacity: '0.20020325203252',
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker6',
                                    type: 'image',
                                    rect: ['356px', '199px', '196px', '158px', 'auto', 'auto'],
                                    opacity: '0.20020325203252',
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                },
                                {
                                    id: 'marker7',
                                    type: 'image',
                                    rect: ['35px', '275px', '196px', '158px', 'auto', 'auto'],
                                    opacity: '0.20020325203252',
                                    fill: ["rgba(0,0,0,0)",im+"path3.png",'0px','0px']
                                }]
                            },
                            {
                                id: 'avatar_job',
                                type: 'group',
                                rect: ['-97px', '149px', '141', '133', 'auto', 'auto'],
                                transform: [[],[],[],['-1']],
                                c: [
                                {
                                    id: 'bikeJob',
                                    type: 'image',
                                    tag: 'img',
                                    rect: ['-61px', '-82px', '256px', '223px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"character_c_1.png",'0px','0px'],
                                    transform: [[],[],[],['0.55','0.55']]
                                },
                                {
                                    id: 'charJob',
                                    type: 'image',
                                    tag: 'img',
                                    rect: ['-15px', '-90px', '176px', '188px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"character.png",'0px','0px'],
                                    transform: [[],[],[],['0.61','0.61']]
                                }]
                            }]
                        },
                        {
                            id: 'dicePair',
                            symbolName: 'dicePair_1',
                            type: 'rect',
                            rect: ['17px', '17px', '543', '267', 'auto', 'auto'],
                            cursor: 'default',
                            boxShadow: ["", 0, 0, 0, 0, "rgba(0,0,0,0)"]
                        },
                        {
                            id: 'hudMarket',
                            symbolName: 'hudNextDest',
                            display: 'none',
                            type: 'rect',
                            rect: ['214px', '113px', '600', '405', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(67,67,67,1.00)", 0, 2, 2]
                        },
                        {
                            id: 'txtUsername',
                            type: 'text',
                            rect: ['24px', '17px', '968px', '96px', 'auto', 'auto'],
                            cursor: 'default',
                            opacity: '0.48107215477441',
                            text: "<p style=\"margin:0px\">the Global Life Game! &nbsp; &nbsp;&nbsp;</p>",
                            align: "center",
                            font: ['rancho, fantasy', [51, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'hudNextDest',
                            symbolName: 'hudNextDest_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['228px', '38px', '600', '405', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(67,67,67,1.00)", 0, 2, 2]
                        },
                        {
                            id: 'mcHUD',
                            symbolName: 'mcHUD',
                            type: 'rect',
                            rect: ['12.1%', '73.2%', '763', '248', 'auto', 'auto'],
                            transform: [[],[],[],['0.84693','0.84693']]
                        },
                        {
                            id: 'rountBtn',
                            symbolName: 'rountBtn',
                            type: 'rect',
                            rect: ['891px', '523px', '95', '94', 'auto', 'auto'],
                            transform: [[],[],[],['0.68','0.68']]
                        },
                        {
                            id: 'txtDestination',
                            type: 'text',
                            rect: ['779px', '-158px', '249px', '147px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">&nbsp;</span></p>",
                            align: "center",
                            font: ['rancho, fantasy', [56, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'mcUserMessage',
                            symbolName: 'mcUserMessage',
                            type: 'rect',
                            rect: ['453px', '526px', '211', '233', 'auto', 'auto'],
                            transform: [[],[],[],['0.96497','0.96497']]
                        },
                        {
                            id: 'mcPopup',
                            symbolName: 'popup',
                            display: 'none',
                            type: 'rect',
                            rect: ['344px', '13px', '1024', '672', 'auto', 'auto']
                        },
                        {
                            id: 'obit',
                            symbolName: 'obit',
                            display: 'none',
                            type: 'rect',
                            rect: ['-6px', '-4px', '279', '351', 'auto', 'auto']
                        },
                        {
                            id: 'clicker',
                            type: 'ellipse',
                            rect: ['666px', '487px', '230px', '75px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '660px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 8112,
                    autoPlay: true,
                    data: [
                        [
                            "eid6280",
                            "left",
                            0,
                            0,
                            "linear",
                            "${mcPopup}",
                            '344px',
                            '344px'
                        ],
                        [
                            "eid13064",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pathmarkersCopy5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12120",
                            "location",
                            0,
                            1000,
                            "linear",
                            "${avatar_market}",
                            [[184.5, 558.5, 0, 0, 0, 0,0],[324.18, 478.28, 0, 0, 0, 0,161.08]]
                        ],
                        [
                            "eid12121",
                            "location",
                            1000,
                            1000,
                            "linear",
                            "${avatar_market}",
                            [[324.18, 478.28, 0, 0, 0, 0,0],[386.4, 393.28, 0, 0, 0, 0,105.34]]
                        ],
                        [
                            "eid12122",
                            "location",
                            2000,
                            1000,
                            "linear",
                            "${avatar_market}",
                            [[386.4, 393.28, 0, 0, 0, 0,0],[402.96, 310.12, 0, 0, 0, 0,84.79]]
                        ],
                        [
                            "eid12123",
                            "location",
                            3000,
                            1000,
                            "linear",
                            "${avatar_market}",
                            [[402.96, 310.12, 0, 0, 0, 0,0],[425.12, 260.34, 0, 0, 0, 0,54.49]]
                        ],
                        [
                            "eid12124",
                            "location",
                            4000,
                            1000,
                            "linear",
                            "${avatar_market}",
                            [[425.12, 260.34, 0, 0, 0, 0,0],[677.63, 262.11, 0, 0, 0, 0,252.52]]
                        ],
                        [
                            "eid12125",
                            "location",
                            5000,
                            1000,
                            "linear",
                            "${avatar_market}",
                            [[677.63, 262.11, 0, 0, 0, 0,0],[694.16, 319.42, 0, 0, 0, 0,59.65]]
                        ],
                        [
                            "eid12126",
                            "location",
                            6000,
                            1000,
                            "linear",
                            "${avatar_market}",
                            [[694.16, 319.42, 0, 0, 0, 0,0],[772.81, 407.87, 0, 0, 0, 0,118.36]]
                        ],
                        [
                            "eid12127",
                            "location",
                            7000,
                            1000,
                            "linear",
                            "${avatar_market}",
                            [[772.81, 407.87, 0, 0, 0, 0,0],[910.72, 507.25, 0, 0, 0, 0,169.99]]
                        ],
                        [
                            "eid7116",
                            "left",
                            0,
                            0,
                            "easeOutQuad",
                            "${mcUserMessage}",
                            '453px',
                            '453px'
                        ],
                        [
                            "eid554",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${charJob}",
                            [53,90],
                            [53,90],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid14323",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${charJob}",
                            [53,90],
                            [53,90],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid14324",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${charJob}",
                            [53,90],
                            [53,90],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid14325",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${charJob}",
                            [53,90],
                            [53,90],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid14326",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${charJob}",
                            [53,90],
                            [53,90],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid14327",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${charJob}",
                            [53,90],
                            [53,90],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid539",
                            "left",
                            0,
                            0,
                            "linear",
                            "${hudNextDest}",
                            '228px',
                            '228px'
                        ],
                        [
                            "eid13021",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${avatar_market}",
                            '1',
                            '1'
                        ],
                        [
                            "eid13059",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pathmarkersMed}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13060",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pathmarkers}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14047",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '1024px',
                            '1024px'
                        ],
                        [
                            "eid309",
                            "left",
                            0,
                            0,
                            "linear",
                            "${obit}",
                            '-6px',
                            '-6px'
                        ],
                        [
                            "eid12155",
                            "location",
                            0,
                            1000,
                            "linear",
                            "${avatar_toilet}",
                            [[255.5, 568.51, 0, 0, 0, 0,0],[313.41, 326.05, 0, 0, 0, 0,249.28]]
                        ],
                        [
                            "eid12156",
                            "location",
                            1000,
                            1000,
                            "linear",
                            "${avatar_toilet}",
                            [[313.41, 326.05, 0, 0, 0, 0,0],[344.73, 209.41, 0, 0, 0, 0,120.77]]
                        ],
                        [
                            "eid12157",
                            "location",
                            2000,
                            1000,
                            "linear",
                            "${avatar_toilet}",
                            [[344.73, 209.41, 0, 0, 0, 0,0],[366.82, 131.14, 0, 0, 0, 0,81.33]]
                        ],
                        [
                            "eid12158",
                            "location",
                            3000,
                            1000,
                            "linear",
                            "${avatar_toilet}",
                            [[366.82, 131.14, 0, 0, 0, 0,0],[539.05, 88.23, 230.45, 2.69, 238.18, 2.78,178.7],[679.32, 134.79, 0, 0, 0, 0,328.42]]
                        ],
                        [
                            "eid12159",
                            "location",
                            4000,
                            1000,
                            "linear",
                            "${avatar_toilet}",
                            [[679.32, 134.79, 0, 0, 0, 0,0],[724.04, 215.76, 0, 0, 0, 0,92.5]]
                        ],
                        [
                            "eid12160",
                            "location",
                            5000,
                            1000,
                            "linear",
                            "${avatar_toilet}",
                            [[724.04, 215.76, 0, 0, 0, 0,0],[791.4, 337.28, 0, 0, 0, 0,138.94]]
                        ],
                        [
                            "eid12161",
                            "location",
                            6000,
                            1000,
                            "linear",
                            "${avatar_toilet}",
                            [[791.4, 337.28, 0, 0, 0, 0,0],[886.55, 485.29, 0, 0, 0, 0,175.96]]
                        ],
                        [
                            "eid12162",
                            "location",
                            7000,
                            1000,
                            "linear",
                            "${avatar_toilet}",
                            [[886.55, 485.29, 0, 0, 0, 0,0],[1032.96, 743.85, 0, 0, 0, 0,297.13]]
                        ],
                        [
                            "eid5912",
                            "top",
                            0,
                            0,
                            "linear",
                            "${hudNextDest}",
                            '38px',
                            '38px'
                        ],
                        [
                            "eid11929",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${charJob}",
                            '-15px',
                            '-15px'
                        ],
                        [
                            "eid12228",
                            "location",
                            0,
                            1000,
                            "linear",
                            "${avatar_farm}",
                            [[178.92, 585.64, 0, 0, 0, 0,0],[242.55, 442.69, 0, 0, 0, 0,156.47]]
                        ],
                        [
                            "eid12229",
                            "location",
                            1000,
                            1000,
                            "linear",
                            "${avatar_farm}",
                            [[242.55, 442.69, 0, 0, 0, 0,0],[335.82, 321.81, 0, 0, 0, 0,152.68]]
                        ],
                        [
                            "eid12230",
                            "location",
                            2000,
                            1000,
                            "linear",
                            "${avatar_farm}",
                            [[335.82, 321.81, 132.05, -106.82, 0, 0,0],[452.71, 252.95, 0, 0, 0, 0,135.91]]
                        ],
                        [
                            "eid12231",
                            "location",
                            3000,
                            1000,
                            "linear",
                            "${avatar_farm}",
                            [[452.71, 252.95, 148.72, -114.2, 0, 0,0],[569.52, 190.79, 0, 0, 0, 0,132.72]]
                        ],
                        [
                            "eid12232",
                            "location",
                            4000,
                            1000,
                            "linear",
                            "${avatar_farm}",
                            [[569.52, 190.79, 250.3, 29.89, 0, 0,0],[691.92, 284.47, 0, 0, 0, 0,160.2]]
                        ],
                        [
                            "eid12233",
                            "location",
                            5000,
                            1000,
                            "linear",
                            "${avatar_farm}",
                            [[691.92, 284.47, 268, -67.48, 0, 0,0],[871, 344.58, 0, 0, 0, 0,195.79]]
                        ],
                        [
                            "eid12234",
                            "location",
                            6000,
                            1000,
                            "linear",
                            "${avatar_farm}",
                            [[871, 344.58, 266.84, 16.04, 0, 0,0],[1046.24, 444.79, 0, 0, 0, 0,205.98]]
                        ],
                        [
                            "eid12235",
                            "location",
                            7000,
                            1000,
                            "linear",
                            "${avatar_farm}",
                            [[1046.24, 444.79, 199.22, -52.84, 0, 0,0],[1166.36, 492.77, 0, 0, 0, 0,135.98]]
                        ],
                        [
                            "eid5986",
                            "display",
                            0,
                            0,
                            "linear",
                            "${game_bg}",
                            'none',
                            'none'
                        ],
                        [
                            "eid374",
                            "width",
                            0,
                            0,
                            "linear",
                            "${charJob}",
                            '176px',
                            '176px'
                        ],
                        [
                            "eid330",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mcPopup}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12997",
                            "left",
                            0,
                            0,
                            "linear",
                            "${mcHUD}",
                            '12.12%',
                            '12.12%'
                        ],
                        [
                            "eid364",
                            "height",
                            0,
                            0,
                            "linear",
                            "${charJob}",
                            '188px',
                            '188px'
                        ],
                        [
                            "eid12081",
                            "location",
                            0,
                            1000,
                            "linear",
                            "${avatar_med}",
                            [[166.49, 529.5, 0, 0, 0, 0,0],[218.64, 373.97, 0, 0, 0, 0,164.04]]
                        ],
                        [
                            "eid12082",
                            "location",
                            1000,
                            1000,
                            "linear",
                            "${avatar_med}",
                            [[218.64, 373.97, 0, 0, 0, 0,0],[398.09, 319.94, 0, 0, 0, 0,187.41]]
                        ],
                        [
                            "eid12083",
                            "location",
                            2000,
                            1000,
                            "linear",
                            "${avatar_med}",
                            [[398.09, 319.94, 0, 0, 0, 0,0],[454.6, 213.95, 0, 0, 0, 0,120.11]]
                        ],
                        [
                            "eid12084",
                            "location",
                            3000,
                            1000,
                            "linear",
                            "${avatar_med}",
                            [[454.6, 213.95, 0, 0, 0, 0,0],[578.97, 141.79, 0, 0, 0, 0,143.79]]
                        ],
                        [
                            "eid12085",
                            "location",
                            4000,
                            1000,
                            "linear",
                            "${avatar_med}",
                            [[578.97, 141.79, 0, 0, 0, 0,0],[698.93, 189.39, 0, 0, 0, 0,129.06]]
                        ],
                        [
                            "eid12086",
                            "location",
                            5000,
                            1000,
                            "linear",
                            "${avatar_med}",
                            [[698.93, 189.39, 0, 0, 0, 0,0],[857.81, 255.12, 0, 0, 0, 0,171.94]]
                        ],
                        [
                            "eid12087",
                            "location",
                            6000,
                            1000,
                            "linear",
                            "${avatar_med}",
                            [[857.81, 255.12, 0, 0, 0, 0,0],[1023.54, 338.85, 0, 0, 0, 0,185.68]]
                        ],
                        [
                            "eid12088",
                            "location",
                            7000,
                            1000,
                            "linear",
                            "${avatar_med}",
                            [[1023.54, 338.85, 0, 0, 0, 0,0],[1224.45, 364.93, 0, 0, 0, 0,202.6]]
                        ],
                        [
                            "eid5867",
                            "left",
                            0,
                            0,
                            "linear",
                            "${rountBtn}",
                            '891px',
                            '891px'
                        ],
                        [
                            "eid13062",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pathmarkersCopy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid5869",
                            "top",
                            0,
                            0,
                            "linear",
                            "${rountBtn}",
                            '523px',
                            '523px'
                        ],
                        [
                            "eid311",
                            "display",
                            0,
                            0,
                            "linear",
                            "${obit}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13061",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pathmarkersMarket}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13040",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${avatar_school}",
                            '-1',
                            '-1'
                        ],
                        [
                            "eid13029",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${avatar_water}",
                            '1',
                            '1'
                        ],
                        [
                            "eid5434",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${mcHUD}",
                            '0.84693',
                            '0.84693'
                        ],
                        [
                            "eid6281",
                            "top",
                            0,
                            0,
                            "linear",
                            "${mcPopup}",
                            '13px',
                            '13px'
                        ],
                        [
                            "eid184",
                            "display",
                            0,
                            0,
                            "linear",
                            "${hudMarket}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12244",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${avatar_med}",
                            '1',
                            '1'
                        ],
                        [
                            "eid5433",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${mcHUD}",
                            '0.84693',
                            '0.84693'
                        ],
                        [
                            "eid183",
                            "display",
                            0,
                            0,
                            "linear",
                            "${hudNextDest}",
                            'none',
                            'none'
                        ],
                        [
                            "eid350",
                            "display",
                            8112,
                            0,
                            "linear",
                            "${hudNextDest}",
                            'none',
                            'block'
                        ],
                        [
                            "eid310",
                            "top",
                            0,
                            0,
                            "linear",
                            "${obit}",
                            '-4px',
                            '-4px'
                        ],
                        [
                            "eid12642",
                            "left",
                            0,
                            0,
                            "linear",
                            "${dicePair}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid12643",
                            "top",
                            0,
                            0,
                            "linear",
                            "${dicePair}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid12858",
                            "top",
                            0,
                            0,
                            "linear",
                            "${mcUserMessage}",
                            '526px',
                            '526px'
                        ],
                        [
                            "eid7115",
                            "scaleX",
                            0,
                            0,
                            "easeOutQuad",
                            "${mcUserMessage}",
                            '0.96497',
                            '0.96497'
                        ],
                        [
                            "eid12208",
                            "location",
                            0,
                            1000,
                            "linear",
                            "${avatar_school}",
                            [[1070.9, 615.73, 0, 0, 0, 0,0],[964.59, 617.42, 0, 0, 0, 0,106.32]]
                        ],
                        [
                            "eid12209",
                            "location",
                            1000,
                            1000,
                            "linear",
                            "${avatar_school}",
                            [[964.59, 617.42, 0, 0, 0, 0,0],[900.02, 572.4, -5.13, -4.48, -65.02, -56.83,78.78],[799.27, 459.94, 0, 0, 0, 0,229.77]]
                        ],
                        [
                            "eid12210",
                            "location",
                            2000,
                            1000,
                            "linear",
                            "${avatar_school}",
                            [[799.27, 459.94, 0, 0, 0, 0,0],[709.22, 354.99, -135.41, -65.65, -190.59, -92.4,141.26],[576.52, 339.24, 0, 0, 0, 0,275.98]]
                        ],
                        [
                            "eid12211",
                            "location",
                            3000,
                            1000,
                            "linear",
                            "${avatar_school}",
                            [[576.52, 339.24, 0, 0, 0, 0,0],[456.48, 361.04, -157.09, 47.02, -164.38, 49.2,122.16],[361.1, 415.64, 0, 0, 0, 0,232.76]]
                        ],
                        [
                            "eid12212",
                            "location",
                            4000,
                            1000,
                            "linear",
                            "${avatar_school}",
                            [[361.1, 415.64, 0, 0, 0, 0,0],[232.5, 463.31, 0, 0, 0, 0,137.15]]
                        ],
                        [
                            "eid12213",
                            "location",
                            5000,
                            1000,
                            "linear",
                            "${avatar_school}",
                            [[232.5, 463.31, 0, 0, 0, 0,0],[171.54, 549.38, 0, 0, 0, 0,105.47]]
                        ],
                        [
                            "eid12214",
                            "location",
                            6000,
                            1000,
                            "linear",
                            "${avatar_school}",
                            [[171.54, 549.38, 0, 0, 0, 0,0],[109.85, 627.64, 0, 0, 0, 0,99.65]]
                        ],
                        [
                            "eid12215",
                            "location",
                            7000,
                            1000,
                            "linear",
                            "${avatar_school}",
                            [[109.85, 627.64, 0, 0, 0, 0,0],[58.17, 711.76, 0, 0, 0, 0,98.73]]
                        ],
                        [
                            "eid363",
                            "scaleY",
                            4000,
                            0,
                            "linear",
                            "${charJob}",
                            '0.61',
                            '0.61'
                        ],
                        [
                            "eid11924",
                            "location",
                            0,
                            1000,
                            "linear",
                            "${avatar_job}",
                            [[178.5, 588.79, 0, 0, 0, 0,0],[208.17, 459.29, 0, 0, 0, 0,132.86]]
                        ],
                        [
                            "eid11925",
                            "location",
                            1000,
                            1000,
                            "linear",
                            "${avatar_job}",
                            [[207.78, 459, 0, 0, 0, 0,0],[325.14, 355.21, 0, 0, 0, 0,156.67]]
                        ],
                        [
                            "eid11930",
                            "location",
                            2000,
                            1000,
                            "linear",
                            "${avatar_job}",
                            [[325.25, 355.41, 0, 0, 0, 0,0],[403.57, 256.1, 0, 0, 0, 0,126.48]]
                        ],
                        [
                            "eid11932",
                            "location",
                            3000,
                            1000,
                            "linear",
                            "${avatar_job}",
                            [[403.68, 256.3, 0, 0, 0, 0,0],[516.8, 181.73, 0, 0, 0, 0,135.49]]
                        ],
                        [
                            "eid11933",
                            "location",
                            4000,
                            1000,
                            "linear",
                            "${avatar_job}",
                            [[516.91, 181.93, 0, 0, 0, 0,0],[652.33, 282.6, 0, 0, 0, 0,168.74]]
                        ],
                        [
                            "eid11934",
                            "location",
                            5000,
                            1000,
                            "linear",
                            "${avatar_job}",
                            [[652.44, 282.8, 0, 0, 0, 0,0],[834.92, 370.87, 0, 0, 0, 0,202.62]]
                        ],
                        [
                            "eid11935",
                            "location",
                            6000,
                            1000,
                            "linear",
                            "${avatar_job}",
                            [[835.03, 371.07, 0, 0, 0, 0,0],[1060.54, 475.73, 0, 0, 0, 0,248.61]]
                        ],
                        [
                            "eid11936",
                            "location",
                            7000,
                            1000,
                            "linear",
                            "${avatar_job}",
                            [[1060.65, 475.93, 0, 0, 0, 0,0],[1180.55, 502.02, 0, 0, 0, 0,122.71]]
                        ],
                        [
                            "eid12847",
                            "top",
                            0,
                            0,
                            "linear",
                            "${charJob}",
                            '-90px',
                            '-90px'
                        ],
                        [
                            "eid5682",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${rountBtn}",
                            '0.68',
                            '0.68'
                        ],
                        [
                            "eid13063",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pathmarkersCopy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid5681",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${rountBtn}",
                            '0.68',
                            '0.68'
                        ],
                        [
                            "eid12184",
                            "location",
                            0,
                            1000,
                            "linear",
                            "${avatar_water}",
                            [[123.22, 564.48, 0, 0, 0, 0,0],[310.49, 429.32, 0, 0, 0, 0,230.95]]
                        ],
                        [
                            "eid12185",
                            "location",
                            1000,
                            1000,
                            "linear",
                            "${avatar_water}",
                            [[310.49, 429.32, 0, 0, 0, 0,0],[444.95, 307.92, 0, 0, 0, 0,181.16]]
                        ],
                        [
                            "eid12186",
                            "location",
                            2000,
                            1000,
                            "linear",
                            "${avatar_water}",
                            [[444.95, 307.92, 0, 0, 0, 0,0],[403.39, 196.4, 0, 0, 0, 0,119.01]]
                        ],
                        [
                            "eid12187",
                            "location",
                            3000,
                            1000,
                            "linear",
                            "${avatar_water}",
                            [[403.39, 196.4, 0, 0, 0, 0,0],[475.54, 136.12, 0, 0, 0, 0,94.02]]
                        ],
                        [
                            "eid12188",
                            "location",
                            4000,
                            1000,
                            "linear",
                            "${avatar_water}",
                            [[475.54, 136.12, 0, 0, 0, 0,0],[658.34, 175.3, 0, 0, 0, 0,186.95]]
                        ],
                        [
                            "eid12189",
                            "location",
                            5000,
                            1000,
                            "linear",
                            "${avatar_water}",
                            [[658.34, 175.3, 0, 0, 0, 0,0],[712.71, 334.23, 0, 0, 0, 0,167.97]]
                        ],
                        [
                            "eid12190",
                            "location",
                            6000,
                            1000,
                            "linear",
                            "${avatar_water}",
                            [[712.71, 334.23, 0, 0, 0, 0,0],[989.94, 434.14, 0, 0, 0, 0,294.68]]
                        ],
                        [
                            "eid12191",
                            "location",
                            7000,
                            1000,
                            "linear",
                            "${avatar_water}",
                            [[989.94, 434.14, 0, 0, 0, 0,0],[1158.07, 445.74, 0, 0, 0, 0,168.53]]
                        ],
                        [
                            "eid13065",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pathmarkersCopy6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13081",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${avatar_job}",
                            '1',
                            '1'
                        ],
                        [
                            "eid13082",
                            "scaleX",
                            1048,
                            0,
                            "linear",
                            "${avatar_job}",
                            '1',
                            '1'
                        ],
                        [
                            "eid12998",
                            "top",
                            0,
                            0,
                            "linear",
                            "${mcHUD}",
                            '73.18%',
                            '73.18%'
                        ],
                        [
                            "eid5914",
                            "top",
                            0,
                            0,
                            "linear",
                            "${hudMarket}",
                            '113px',
                            '113px'
                        ]
                    ]
                }
            },
            "popChallenge": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1128px', '678px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Scrim',
                            opacity: '0.65637703252033',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['270px', '171px', '573px', '295px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(156,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: 'CHALLENGE:<br>Your village doesn\'t have an outhouse. People are going wherever they can. In public. It\'s embarrassing, dangerous and very unclean. <br><br>You come into contact with some nasty microbes and get life-threatening diahrrea, just like 1.5 million other kids every year.<br><br>You lose 6 health points. <br>And one pair of clean undies.',
                            rect: ['300px', '198px', '471px', '31px', 'auto', 'auto'],
                            font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '796px', '400px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "popPartnership": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1128px', '678px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Scrim',
                            opacity: '0.65637703252033',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['286px', '230px', '526px', '244px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(97,172,57,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin:0px\">​PARTNERSHIP:</p><p style=\"margin: 0px;\">You partner with T.S.O.P.W.D.T.D.I.F.** to bring clean toilets to your village.</p><p style=\"margin: 0px;\">You no longer get affected by any challenges involving toilets and sanitation. Good Job!</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">** The Society of People Who Dont Think Diahrreah Is Funny</p><p style=\"margin: 0px;\">​</p>',
                            rect: ['334px', '266px', '451px', '31px', 'auto', 'auto'],
                            font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '796px', '400px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "mcHome": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'div_home',
                            rect: ['0px', '0px', '1280', '800', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                                type: 'image',
                                id: 'gameboard_home',
                                opacity: '1',
                                display: 'block',
                                fill: ['rgba(0,0,0,0)', 'images/gameboard_home.jpg', '0px', '0px']
                            },
                            {
                                rect: ['566px', '208px', '145px', '154px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.61', '0.61']],
                                id: 'character_home',
                                type: 'image',
                                display: 'block',
                                fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '800px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid32",
                            "width",
                            0,
                            0,
                            "linear",
                            "${character_home}",
                            '145px',
                            '145px'
                        ],
                        [
                            "eid37",
                            "location",
                            0,
                            1500,
                            "linear",
                            "${character_home}",
                            [[638.22, 285.09, 0, 0, 0, 0,0],[1338.5, 285.09, 0, 0, 0, 0,700.28]]
                        ],
                        [
                            "eid41",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${character_home}",
                            'block',
                            'none'
                        ],
                        [
                            "eid31",
                            "height",
                            0,
                            0,
                            "linear",
                            "${character_home}",
                            '154px',
                            '154px'
                        ],
                        [
                            "eid22",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${character_home}",
                            '0.61',
                            '0.61'
                        ],
                        [
                            "eid42",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${gameboard_home}",
                            'block',
                            'none'
                        ],
                        [
                            "eid39",
                            "opacity",
                            1500,
                            500,
                            "linear",
                            "${gameboard_home}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "mcHUD": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'game_hud_v2',
                            rect: ['23px', '14px', '810px', '145px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/game_hud_v2.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['202px', '148px', '225px', '29px', 'auto', 'auto'],
                            align: 'right',
                            id: 'tPlayerName',
                            text: '<p style=\"margin: 0px;\">​tPlayerName</p>',
                            textShadow: ['rgba(0,0,0,0.65098)', 0, 2, 1],
                            font: ['bree-serif, sans-serif', [14, 'px'], 'rgba(255,210,10,1.00)', '400', 'none', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['438px', '146px', '107px', '29px', 'auto', 'auto'],
                            align: 'left',
                            id: 'tPlayerStatus',
                            text: '<p style=\"margin: 0px;\">​IS ALIVE!</p>',
                            textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 2],
                            font: ['bree-serif, sans-serif', [16, 'px'], 'rgba(60,136,0,1.00)', '400', 'none', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            align: 'center',
                            text: '<p style=\"margin: 0px;\">​00</p>',
                            rect: ['238px', '79px', '47px', '31px', 'auto', 'auto'],
                            opacity: '1',
                            font: ['Verdana, Geneva, sans-serif', [26, 'px'], 'rgba(0,0,0,0.99)', 'normal', 'none', '', 'break-word', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 0, 2, 1],
                            id: 'labelEducation'
                        },
                        {
                            type: 'text',
                            align: 'center',
                            text: '<p style=\"margin: 0px;\">​00</p>',
                            rect: ['108px', '79px', '47px', '31px', 'auto', 'auto'],
                            opacity: '1',
                            font: ['Verdana, Geneva, sans-serif', [26, 'px'], 'rgba(0,0,0,0.99)', 'normal', 'none', '', 'break-word', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 0, 2, 1],
                            id: 'labelGlobal'
                        },
                        {
                            type: 'text',
                            rect: ['56px', '-66px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'center',
                            id: 'headerGlobal',
                            text: '<p style=\"margin: 0px;\">​BUCKS</p>',
                            display: 'none',
                            font: ['bree-serif, sans-serif', [16, 'px'], 'rgba(39,39,39,0.99)', 'normal', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            align: 'center',
                            text: '<p style=\"margin: 0px;\">00</p>',
                            rect: ['173px', '79px', '47px', '31px', 'auto', 'auto'],
                            opacity: '1',
                            font: ['Verdana, Geneva, sans-serif', [26, 'px'], 'rgba(0,0,0,0.99)', 'normal', 'none', '', 'break-word', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 0, 2, 1],
                            id: 'labelWater'
                        },
                        {
                            type: 'text',
                            rect: ['141px', '-56px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'center',
                            id: 'headerEducation',
                            text: '<p style=\"margin: 0px;\">​EDUCATION</p>',
                            display: 'none',
                            font: ['bree-serif, sans-serif', [16, 'px'], 'rgba(39,39,39,0.99)', 'normal', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['158px', '-126px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'center',
                            id: 'headerWater',
                            text: '<p style=\"margin: 0px;\">​WATER</p>',
                            display: 'none',
                            font: ['bree-serif, sans-serif', [16, 'px'], 'rgba(39,39,39,0.99)', 'normal', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            align: 'center',
                            text: '<p style=\"margin: 0px;\">​00</p>',
                            rect: ['42px', '78px', '47px', '31px', 'auto', 'auto'],
                            opacity: '1',
                            font: ['Verdana, Geneva, sans-serif', [26, 'px'], 'rgba(0,0,0,0.99)', 'normal', 'none', '', 'break-word', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 0, 2, 1],
                            id: 'labelLife'
                        },
                        {
                            type: 'text',
                            rect: ['43px', '-127px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'center',
                            id: 'headerLife',
                            text: '<p style=\"margin: 0px;\">​HEALTH</p>',
                            display: 'none',
                            font: ['bree-serif, sans-serif', [16, 'px'], 'rgba(39,39,39,0.99)', 'normal', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['42px', '75px', '45px', '29px', 'auto', 'auto'],
                            stroke: [0, 'rgb(255, 255, 255)', 'none'],
                            id: 'gloss',
                            opacity: '0.49428353658537',
                            type: 'rect',
                            fill: ['rgba(0,0,0,0)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,255,255,0.00)', 85]]]]
                        },
                        {
                            rect: ['108px', '75px', '45px', '29px', 'auto', 'auto'],
                            stroke: [0, 'rgb(255, 255, 255)', 'none'],
                            id: 'glossCopy',
                            opacity: '0.49428353658537',
                            type: 'rect',
                            fill: ['rgba(0,0,0,0)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,255,255,0.00)', 85]]]]
                        },
                        {
                            rect: ['174px', '75px', '46px', '29px', 'auto', 'auto'],
                            stroke: [0, 'rgb(255, 255, 255)', 'none'],
                            id: 'glossCopy2',
                            opacity: '0.49428353658537',
                            type: 'rect',
                            fill: ['rgba(0,0,0,0)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,255,255,0.00)', 85]]]]
                        },
                        {
                            rect: ['240px', '75px', '45px', '29px', 'auto', 'auto'],
                            stroke: [0, 'rgb(255, 255, 255)', 'none'],
                            id: 'glossCopy3',
                            opacity: '0.49428353658537',
                            type: 'rect',
                            fill: ['rgba(0,0,0,0)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,255,255,0.00)', 85]]]]
                        },
                        {
                            rect: ['321px', '34px', '244px', '58px', 'auto', 'auto'],
                            stroke: [0, 'rgb(255, 255, 255)', 'none'],
                            id: 'glossCopy4',
                            opacity: '0.49428353658537',
                            type: 'rect',
                            fill: ['rgba(0,0,0,0)', [270, [['rgba(255,255,255,1.00)', 0], ['rgba(255,255,255,0.00)', 85]]]]
                        },
                        {
                            type: 'rect',
                            id: 'rectButton',
                            symbolName: 'rectButton',
                            rect: ['575px', '35px', '237', '90', 'auto', 'auto']
                        },
                        {
                            rect: ['564', '20', '259', '110', 'auto', 'auto'],
                            id: 'buttonflash',
                            symbolName: 'buttonflash',
                            type: 'rect',
                            display: 'none'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '840px', '180px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid5474",
                            "display",
                            0,
                            0,
                            "linear",
                            "${headerWater}",
                            'none',
                            'none'
                        ],
                        [
                            "eid5824",
                            "left",
                            0,
                            0,
                            "linear",
                            "${rectButton}",
                            '575px',
                            '575px'
                        ],
                        [
                            "eid5473",
                            "display",
                            0,
                            0,
                            "linear",
                            "${headerEducation}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8055",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${buttonflash}",
                            'none',
                            'none'
                        ],
                        [
                            "eid5472",
                            "display",
                            0,
                            0,
                            "linear",
                            "${headerGlobal}",
                            'none',
                            'none'
                        ],
                        [
                            "eid5475",
                            "display",
                            0,
                            0,
                            "linear",
                            "${headerLife}",
                            'none',
                            'none'
                        ],
                        [
                            "eid5674",
                            "top",
                            0,
                            0,
                            "linear",
                            "${rectButton}",
                            '35px',
                            '35px'
                        ]
                    ]
                }
            },
            "button_close": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '90px', '49px', 'auto', 'auto'],
                            id: 'button_red',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', '_images/button_red.png', '0px', '0px']
                        },
                        {
                            font: ['bree-serif, sans-serif', [19, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            rect: ['15px', '7px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, -1, 0],
                            id: 'button_text',
                            text: '<p style=\"margin: 0px;\">​CLOSE</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['1px', '0px', '90px', '49px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'clickstate',
                            opacity: '0.25886051829268',
                            type: 'rect',
                            fill: ['rgba(29,29,29,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '49px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "popup": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'mcRed',
                            rect: ['0', '0', '384', '480', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'bgRed',
                                rect: ['0', '0', '384px', '480px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/newRedCard.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'mcGreen',
                            rect: ['0', '0', '384', '480', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                id: 'flare_animation',
                                symbolName: 'flare_animation',
                                transform: [[], [], [], ['1.44508', '1.44508']],
                                rect: ['-46px', '-43px', '132', '131', 'auto', 'auto']
                            },
                            {
                                type: 'image',
                                id: 'bgGreen',
                                rect: ['0', '0', '384px', '480px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/newGreenCard.png', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'flare_animationCopy',
                                symbolName: 'flare_animation',
                                transform: [[], [], [], ['0.69208', '0.69208']],
                                rect: ['-46px', '-47px', '132', '131', 'auto', 'auto']
                            }]
                        },
                        {
                            rect: ['48px', '181px', '306px', '331px', 'auto', 'auto'],
                            font: ['bree-serif, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​</p>',
                            id: 'txtBody',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'text',
                            align: 'center',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['bree-serif, sans-serif', [24, 'px'], 'rgba(148,135,34,1.00)', '900', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\"><span style=\"font-size: 30px; text-transform: uppercase;\">asdf</span><span style=\"font-size: 24px; text-transform: uppercase;\">​</span></p>',
                            rect: ['-44px', '129px', '471px', '49px', 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.40)', 0, 2, 2],
                            id: 'txtHeading'
                        },
                        {
                            type: 'rect',
                            title: 'CLOSE',
                            id: 'simpleButton2',
                            symbolName: 'simpleButton_2',
                            rect: ['122px', '419px', '139px', '36px', 'auto', 'auto'],
                            sizeRange: ['100px', null, null, null]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '672px']
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid7164",
                            "height",
                            0,
                            0,
                            "easeOutQuad",
                            "${simpleButton2}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid7158",
                            "scaleY",
                            0,
                            0,
                            "easeOutQuad",
                            "${flare_animation}",
                            '1.44508',
                            '1.44508'
                        ],
                        [
                            "eid7169",
                            "top",
                            0,
                            0,
                            "easeOutQuad",
                            "${simpleButton2}",
                            '419px',
                            '419px'
                        ],
                        [
                            "eid6382",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${flare_animationCopy}",
                            '0.69208',
                            '0.69208'
                        ],
                        [
                            "eid7162",
                            "top",
                            0,
                            0,
                            "easeOutQuad",
                            "${flare_animation}",
                            '-43px',
                            '-43px'
                        ],
                        [
                            "eid7161",
                            "left",
                            0,
                            0,
                            "easeOutQuad",
                            "${flare_animation}",
                            '-46px',
                            '-46px'
                        ],
                        [
                            "eid7155",
                            "top",
                            0,
                            0,
                            "easeOutQuad",
                            "${flare_animationCopy}",
                            '-47px',
                            '-47px'
                        ],
                        [
                            "eid7154",
                            "left",
                            0,
                            0,
                            "easeOutQuad",
                            "${flare_animationCopy}",
                            '-46px',
                            '-46px'
                        ],
                        [
                            "eid7157",
                            "scaleX",
                            0,
                            0,
                            "easeOutQuad",
                            "${flare_animation}",
                            '1.44508',
                            '1.44508'
                        ],
                        [
                            "eid6381",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${flare_animationCopy}",
                            '0.69208',
                            '0.69208'
                        ],
                        [
                            "eid7168",
                            "left",
                            0,
                            0,
                            "easeOutQuad",
                            "${simpleButton2}",
                            '122px',
                            '122px'
                        ],
                        [
                            "eid7166",
                            "width",
                            0,
                            0,
                            "easeOutQuad",
                            "${simpleButton2}",
                            '139px',
                            '139px'
                        ]
                    ]
                }
            },
            "simpleButton": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '100%', '40', 'auto', 'auto'],
                            borderRadius: ['6px 6px', '6px 6px', '6px 6px', '6px 6px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(127,127,127,1.00)', 0], ['rgba(255,255,255,1.00)', 100]]]],
                            id: 'base_a',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            boxShadow: ['', 2, 2, 8, 0, 'rgba(0,0,0,0.40625)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['6px 6px', '6px 6px', '6px 6px', '6px 6px'],
                            id: 'base_b',
                            stroke: [2, 'rgba(255,255,255,1.00)', 'solid'],
                            rect: ['0', '0', '98%', '36', 'auto', 'auto'],
                            title: 'CLOSE',
                            fill: ['rgba(192,192,192,0.00)', [270, [['rgba(253,0,0,0.77)', 22], ['rgba(255,0,0,0.59)', 51], ['rgba(146,23,33,1.00)', 51]]]],
                            boxShadow: ['inset', 0, 0, 43, 2, 'rgba(124,156,172,0.60)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                text: '<p style=\"margin:0px\">​CLOSE</p>',
                                rect: ['-2', '6px', '102%', '27', 'auto', 'auto'],
                                title: 'CLOSE',
                                font: ['bree-serif, sans-serif', [19, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', ''],
                                textShadow: ['rgba(33,33,33,1.00)', 0, -2, 1],
                                id: 'label'
                            }]
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0', '100%', '40px', 'auto', 'auto'],
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200', '40']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "enter": 1000,
                        "down": 2000
                    },
                    data: [
                        [
                            "eid32",
                            "top",
                            1000,
                            0,
                            "null",
                            "${base_a}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid27",
                            "top",
                            2000,
                            0,
                            "null",
                            "${base_a}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid97",
                            "textShadow.offsetV",
                            0,
                            0,
                            "linear",
                            "${label}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid101",
                            "top",
                            0,
                            2000,
                            "linear",
                            "${label}",
                            '6px',
                            '11px'
                        ],
                        [
                            "eid25",
                            "left",
                            2000,
                            0,
                            "null",
                            "${label}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid29",
                            "left",
                            1000,
                            0,
                            "null",
                            "${base_b}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid23",
                            "left",
                            2000,
                            0,
                            "null",
                            "${base_b}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid18",
                            "boxShadow.offsetV",
                            1000,
                            0,
                            "null",
                            "${base_a}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid21",
                            "boxShadow.offsetV",
                            2000,
                            0,
                            "null",
                            "${base_a}",
                            '2px',
                            '0px'
                        ],
                        [
                            "eid99",
                            "color",
                            0,
                            1000,
                            "linear",
                            "${label}",
                            'rgba(255,255,255,1.00)',
                            'rgba(2,2,2,1.00)'
                        ],
                        [
                            "eid14",
                            "color",
                            2000,
                            0,
                            "null",
                            "${label}",
                            'rgba(2,2,2,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid30",
                            "top",
                            1000,
                            0,
                            "null",
                            "${base_b}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid26",
                            "top",
                            2000,
                            0,
                            "null",
                            "${base_b}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid98",
                            "textShadow.color",
                            0,
                            0,
                            "linear",
                            "${label}",
                            'rgba(33,33,33,1.00)',
                            'rgba(33,33,33,1.00)'
                        ],
                        [
                            "eid31",
                            "left",
                            1000,
                            0,
                            "null",
                            "${base_a}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid24",
                            "left",
                            2000,
                            0,
                            "null",
                            "${base_a}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid96",
                            "textShadow.offsetH",
                            0,
                            0,
                            "linear",
                            "${label}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid17",
                            "boxShadow.offsetH",
                            1000,
                            0,
                            "null",
                            "${base_a}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid20",
                            "boxShadow.offsetH",
                            2000,
                            0,
                            "null",
                            "${base_a}",
                            '2px',
                            '0px'
                        ],
                        [
                            "eid19",
                            "boxShadow.blur",
                            1000,
                            0,
                            "null",
                            "${base_a}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid22",
                            "boxShadow.blur",
                            2000,
                            0,
                            "null",
                            "${base_a}",
                            '8px',
                            '0px'
                        ],
                        [
                            "eid42",
                            "border-color",
                            0,
                            0,
                            "null",
                            "${base_b}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid100",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${label}",
                            '19px',
                            '19px'
                        ]
                    ]
                }
            },
            "simpleButton_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '100%', 40, 'auto', 'auto'],
                            borderRadius: ['6px 6px', '6px 6px', '6px 6px', '6px 6px'],
                            boxShadow: ['', '2px', '2px', '8px', 0, 'rgba(0,0,0,0.40625)'],
                            id: 'base_a',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(127,127,127,1.00)', 0], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            type: 'rect',
                            borderRadius: ['6px 6px', '6px 6px', '6px 6px', '6px 6px'],
                            id: 'base_b',
                            stroke: ['2px', 'rgba(255,255,255,1.00)', 'solid'],
                            rect: [0, 0, '98%', 36, 'auto', 'auto'],
                            boxShadow: ['inset', '0px', '0px', '43px', '2px', 'rgba(124,156,172,0.60)'],
                            fill: ['rgba(192,192,192,0.00)', [270, [['rgba(165,255,0,0.59)', 51], ['rgba(221,255,99,1.00)', 51]]]],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(89,89,89,1.00)', 'normal', 'none', '', '', ''],
                                type: 'text',
                                align: 'center',
                                id: 'label',
                                text: 'LABEL',
                                textShadow: ['rgba(255,255,255,1.00)', '1px', '1px', '1px'],
                                rect: [-2, 11, '102.04%', 27, 'auto', 'auto']
                            }]
                        },
                        {
                            rect: ['0px', 0, '100%', '40px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            sizeRange: '1{:}{{:}:{:}}',
                            rect: [null, null, 200, 40]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "enter": 1000,
                        "down": 2000
                    },
                    data: [
                        [
                            "eid32",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${base_a}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid27",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${base_a}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid36",
                            "textShadow.offsetV",
                            0,
                            0,
                            "linear",
                            "${label}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid28",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${label}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid25",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${label}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid29",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${base_b}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid23",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${base_b}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid12",
                            "color",
                            0,
                            0,
                            "linear",
                            "${label}",
                            'rgba(89,89,89,1.00)',
                            'rgba(89,89,89,1.00)'
                        ],
                        [
                            "eid13",
                            "color",
                            1000,
                            0,
                            "linear",
                            "${label}",
                            'rgba(89,89,89,1.00)',
                            'rgba(2,2,2,1.00)'
                        ],
                        [
                            "eid14",
                            "color",
                            2000,
                            0,
                            "linear",
                            "${label}",
                            'rgba(2,2,2,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid30",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${base_b}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid26",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${base_b}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid31",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${base_a}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid24",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${base_a}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid40",
                            "background-image",
                            0,
                            1000,
                            "linear",
                            "${base_b}",
                            [270,[['rgba(165,255,0,0.59)',51],['rgba(221,255,99,1.00)',51]]],
                            [270,[['rgba(140,140,140,0.50)',51],['rgba(173,173,173,1.00)',51]]]
                        ],
                        [
                            "eid33",
                            "textShadow.offsetH",
                            0,
                            0,
                            "linear",
                            "${label}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid42",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${base_b}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid19",
                            "boxShadow.blur",
                            1000,
                            0,
                            "linear",
                            "${base_a}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid22",
                            "boxShadow.blur",
                            2000,
                            0,
                            "linear",
                            "${base_a}",
                            '8px',
                            '0px'
                        ],
                        [
                            "eid17",
                            "boxShadow.offsetH",
                            1000,
                            0,
                            "linear",
                            "${base_a}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid20",
                            "boxShadow.offsetH",
                            2000,
                            0,
                            "linear",
                            "${base_a}",
                            '2px',
                            '0px'
                        ],
                        [
                            "eid18",
                            "boxShadow.offsetV",
                            1000,
                            0,
                            "linear",
                            "${base_a}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid21",
                            "boxShadow.offsetV",
                            2000,
                            0,
                            "linear",
                            "${base_a}",
                            '2px',
                            '0px'
                        ]
                    ]
                }
            },
            "simpleButton_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '100%', '40', 'auto', 'auto'],
                            borderRadius: ['6px 6px', '6px 6px', '6px 6px', '6px 6px'],
                            boxShadow: ['', 2, 2, 8, 0, 'rgba(0,0,0,0.40625)'],
                            id: 'base_a',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(127,127,127,1.00)', 0], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            type: 'rect',
                            borderRadius: ['6px 6px', '6px 6px', '6px 6px', '6px 6px'],
                            id: 'base_b',
                            stroke: [2, 'rgba(255,255,255,1.00)', 'solid'],
                            rect: ['0', '0', '98%', '36', 'auto', 'auto'],
                            boxShadow: ['inset', 0, 0, 43, 2, 'rgba(124,156,172,0.60)'],
                            fill: ['rgba(192,192,192,0.00)', [270, [['rgba(254,200,19,0.73)', 51], ['rgba(204,152,0,1.00)', 51]]]],
                            c: [
                            {
                                rect: ['-2', '11', '102%', '27', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(89,89,89,1.00)', 'normal', 'none', '', 'break-word', ''],
                                align: 'center',
                                id: 'label',
                                text: 'LABEL',
                                textShadow: ['rgba(255,255,255,1.00)', 1, 1, 1],
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['0px', '0', '100%', '40px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200', '40']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "enter": 1000,
                        "down": 2000
                    },
                    data: [
                        [
                            "eid32",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${base_a}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid27",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${base_a}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid36",
                            "textShadow.offsetV",
                            0,
                            0,
                            "linear",
                            "${label}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid28",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${label}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid25",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${label}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid29",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${base_b}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid23",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${base_b}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid12",
                            "color",
                            0,
                            0,
                            "linear",
                            "${label}",
                            'rgba(89,89,89,1.00)',
                            'rgba(89,89,89,1.00)'
                        ],
                        [
                            "eid13",
                            "color",
                            1000,
                            0,
                            "linear",
                            "${label}",
                            'rgba(89,89,89,1.00)',
                            'rgba(2,2,2,1.00)'
                        ],
                        [
                            "eid14",
                            "color",
                            2000,
                            0,
                            "linear",
                            "${label}",
                            'rgba(2,2,2,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid30",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${base_b}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid26",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${base_b}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid31",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${base_a}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid24",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${base_a}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid40",
                            "background-image",
                            0,
                            1000,
                            "linear",
                            "${base_b}",
                            [270,[['rgba(255,85,85,0.73)',45],['rgba(255,0,0,0.59)',51],['rgba(254,9,9,1.00)',51]]],
                            [270,[['rgba(254,200,19,0.73)',51],['rgba(204,152,0,1.00)',51]]]
                        ],
                        [
                            "eid33",
                            "textShadow.offsetH",
                            0,
                            0,
                            "linear",
                            "${label}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid42",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${base_b}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid19",
                            "boxShadow.blur",
                            1000,
                            0,
                            "linear",
                            "${base_a}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid22",
                            "boxShadow.blur",
                            2000,
                            0,
                            "linear",
                            "${base_a}",
                            '8px',
                            '0px'
                        ],
                        [
                            "eid17",
                            "boxShadow.offsetH",
                            1000,
                            0,
                            "linear",
                            "${base_a}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid20",
                            "boxShadow.offsetH",
                            2000,
                            0,
                            "linear",
                            "${base_a}",
                            '2px',
                            '0px'
                        ],
                        [
                            "eid18",
                            "boxShadow.offsetV",
                            1000,
                            0,
                            "linear",
                            "${base_a}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid21",
                            "boxShadow.offsetV",
                            2000,
                            0,
                            "linear",
                            "${base_a}",
                            '2px',
                            '0px'
                        ]
                    ]
                }
            },
            "buttonGameTips": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200', '40']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "enter": 1000,
                        "down": 2000
                    },
                    data: [
                        [
                            "eid32",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${base_a}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid27",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${base_a}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid36",
                            "textShadow.offsetV",
                            0,
                            0,
                            "linear",
                            "${label}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid28",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${label}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid25",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${label}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid29",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${base_b}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid23",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${base_b}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid12",
                            "color",
                            0,
                            0,
                            "linear",
                            "${label}",
                            'rgba(89,89,89,1.00)',
                            'rgba(89,89,89,1.00)'
                        ],
                        [
                            "eid13",
                            "color",
                            1000,
                            0,
                            "linear",
                            "${label}",
                            'rgba(89,89,89,1.00)',
                            'rgba(2,2,2,1.00)'
                        ],
                        [
                            "eid14",
                            "color",
                            2000,
                            0,
                            "linear",
                            "${label}",
                            'rgba(2,2,2,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid30",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${base_b}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid26",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${base_b}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid18",
                            "boxShadow.offsetV",
                            1000,
                            0,
                            "linear",
                            "${base_a}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid21",
                            "boxShadow.offsetV",
                            2000,
                            0,
                            "linear",
                            "${base_a}",
                            '2px',
                            '0px'
                        ],
                        [
                            "eid31",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${base_a}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid24",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${base_a}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid33",
                            "textShadow.offsetH",
                            0,
                            0,
                            "linear",
                            "${label}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid17",
                            "boxShadow.offsetH",
                            1000,
                            0,
                            "linear",
                            "${base_a}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid20",
                            "boxShadow.offsetH",
                            2000,
                            0,
                            "linear",
                            "${base_a}",
                            '2px',
                            '0px'
                        ],
                        [
                            "eid19",
                            "boxShadow.blur",
                            1000,
                            0,
                            "linear",
                            "${base_a}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid22",
                            "boxShadow.blur",
                            2000,
                            0,
                            "linear",
                            "${base_a}",
                            '8px',
                            '0px'
                        ],
                        [
                            "eid42",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${base_b}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid40",
                            "background-image",
                            0,
                            1000,
                            "linear",
                            "${base_b}",
                            [270,[['rgba(255,85,85,0.73)',45],['rgba(255,0,0,0.59)',51],['rgba(254,9,9,1.00)',51]]],
                            [270,[['rgba(254,200,19,0.73)',51],['rgba(204,152,0,1.00)',51]]]
                        ]
                    ]
                }
            },
            "simpleButton_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '100%', '40', 'auto', 'auto'],
                            borderRadius: ['90.1%', '90.1%', '90.1%', '90.1% 90.1%'],
                            id: 'base_a',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(127,127,127,1.00)', 0], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            type: 'rect',
                            borderRadius: ['6px 6px', '6px 6px', '6px 6px', '6px 6px'],
                            id: 'base_b',
                            stroke: [2, 'rgba(255,255,255,1.00)', 'solid'],
                            rect: ['0', '0', '98%', '36', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0.00)', [270, [['rgba(92,254,109,0.76)', 51], ['rgba(0,255,3,1.00)', 51]]]],
                            boxShadow: ['inset', 0, 0, 43, 2, 'rgba(124,156,172,0.60)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['-2', '8px', '102%', '27', 'auto', 'auto'],
                                align: 'center',
                                id: 'label',
                                text: 'LABEL',
                                textShadow: ['rgba(255,255,255,1.00)', 1, 1, 1],
                                font: ['bree-serif, sans-serif', [16, 'px'], 'rgba(89,89,89,1.00)', '700', 'none', '', 'break-word', '']
                            }]
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '-4px', '100%', '40px', 'auto', 'auto'],
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200', '40']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "enter": 1000,
                        "down": 2000
                    },
                    data: [
                        [
                            "eid42",
                            "border-color",
                            0,
                            0,
                            "null",
                            "${base_b}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid245",
                            "border-bottom-right-radius",
                            8000,
                            0,
                            "linear",
                            "${base_a}",
                            [90.1,90.1],
                            [90.1,90.1],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid341",
                            "top",
                            0,
                            2000,
                            "linear",
                            "${label}",
                            '8px',
                            '11px'
                        ],
                        [
                            "eid25",
                            "left",
                            2000,
                            0,
                            "null",
                            "${label}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid29",
                            "left",
                            1000,
                            0,
                            "null",
                            "${base_b}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid23",
                            "left",
                            2000,
                            0,
                            "null",
                            "${base_b}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid32",
                            "top",
                            1000,
                            0,
                            "null",
                            "${base_a}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid27",
                            "top",
                            2000,
                            0,
                            "null",
                            "${base_a}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid12",
                            "color",
                            0,
                            0,
                            "null",
                            "${label}",
                            'rgba(89,89,89,1.00)',
                            'rgba(89,89,89,1.00)'
                        ],
                        [
                            "eid13",
                            "color",
                            1000,
                            0,
                            "null",
                            "${label}",
                            'rgba(89,89,89,1.00)',
                            'rgba(2,2,2,1.00)'
                        ],
                        [
                            "eid14",
                            "color",
                            2000,
                            0,
                            "null",
                            "${label}",
                            'rgba(2,2,2,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid30",
                            "top",
                            1000,
                            0,
                            "null",
                            "${base_b}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid26",
                            "top",
                            2000,
                            0,
                            "null",
                            "${base_b}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid243",
                            "border-top-left-radius",
                            8000,
                            0,
                            "linear",
                            "${base_a}",
                            [90.1,90.1],
                            [90.1,90.1],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid40",
                            "background-image",
                            0,
                            1000,
                            "null",
                            "${base_b}",
                            [270,[['rgba(165,255,0,0.59)',51],['rgba(221,255,99,1.00)',51]]],
                            [270,[['rgba(92,254,109,0.76)',51],['rgba(0,255,3,1.00)',51]]]
                        ],
                        [
                            "eid33",
                            "textShadow.offsetH",
                            0,
                            0,
                            "null",
                            "${label}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid244",
                            "border-top-right-radius",
                            8000,
                            0,
                            "linear",
                            "${base_a}",
                            [90.1,90.1],
                            [90.1,90.1],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid31",
                            "left",
                            1000,
                            0,
                            "null",
                            "${base_a}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid24",
                            "left",
                            2000,
                            0,
                            "null",
                            "${base_a}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid36",
                            "textShadow.offsetV",
                            0,
                            0,
                            "null",
                            "${label}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid242",
                            "border-bottom-left-radius",
                            8000,
                            0,
                            "linear",
                            "${base_a}",
                            [90.1,90.1],
                            [90.1,90.1],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "hudNextDest": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-260px', '-164px', '1094px', '710px', 'auto', 'auto'],
                            stroke: [3, 'rgb(236, 236, 236)', 'solid'],
                            id: 'Rectangle',
                            opacity: '0.8063617653963',
                            type: 'rect',
                            fill: ['rgba(255,201,0,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'hudMarket2',
                            rect: ['0', '0', '600px', '405px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/hudMarket.png', '0px', '0px']
                        },
                        {
                            rect: ['424px', '231px', '112px', '142px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'btnPlumbing',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['309px', '231px', '112px', '142px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'btnBike',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['190px', '229px', '112px', '142px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'btnFilter',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['71px', '226px', '112px', '142px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'btnKit',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['424px', '84px', '112px', '142px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'btnFood',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['307px', '84px', '112px', '142px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'btnBucket',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['183px', '84px', '112px', '142px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'btnTablet',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['71px', '84px', '112px', '142px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'btnSoap',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600px', '405px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "hud_MARKET": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-260px', '-164px', '1094px', '710px', 'auto', 'auto'],
                            opacity: '0.8063617653963',
                            id: 'Rectangle',
                            stroke: [3, 'rgb(236, 236, 236)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,201,0,1.00)']
                        },
                        {
                            id: 'hudMarket2',
                            type: 'image',
                            rect: ['0', '0', '600px', '405px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/hudMarket.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['424px', '231px', '112px', '142px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'btnPlumbing',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            rect: ['309px', '231px', '112px', '142px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'btnBike',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            rect: ['190px', '229px', '112px', '142px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'btnFilter',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            rect: ['71px', '226px', '112px', '142px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'btnKit',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            rect: ['424px', '84px', '112px', '142px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'btnFood',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            rect: ['307px', '84px', '112px', '142px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'btnBucket',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            rect: ['183px', '84px', '112px', '142px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'btnTablet',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            rect: ['71px', '84px', '112px', '142px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'btnSoap',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['-50px', '-43px', '261px', '250px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(215,0,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600px', '405px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "hudNextDest_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-260px', '-164px', '1094px', '710px', 'auto', 'auto'],
                            stroke: [3, 'rgb(236, 236, 236)', 'solid'],
                            id: 'Rectangle',
                            opacity: '0.87807158119658',
                            type: 'rect',
                            fill: ['rgba(122,171,4,1)']
                        },
                        {
                            id: 'hudNextDestination',
                            rect: ['0px', '0px', '600px', '405px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hudNextDestination2.png', '0px', '0px']
                        },
                        {
                            rect: ['71px', '84px', '112px', '142px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'btnHospital',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['183px', '84px', '112px', '142px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'btnEmployment',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['307px', '84px', '112px', '142px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'btnMarket',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['424px', '84px', '112px', '142px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'btnBathroom',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['424px', '231px', '112px', '142px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'btnWater',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['190px', '229px', '112px', '142px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'btnSchool',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['71px', '226px', '112px', '142px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'btnFarm',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600px', '405px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "hudNextDest_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-44.2%', '-50%', '399%', '398.5%', 'auto', 'auto'],
                            stroke: [3, 'rgb(236, 236, 236)', 'solid'],
                            id: 'Rectangle',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.74)']
                        },
                        {
                            id: 'hudNextDestination3',
                            type: 'image',
                            rect: ['0', '0', '600px', '405px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/hudNextDestination.png', '0px', '0px']
                        },
                        {
                            id: 'gameboard_2016',
                            type: 'image',
                            rect: ['-207px', '-33px', '960px', '640px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/gameboard_2016.jpg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['1.34577', '1.46201']],
                            id: 'btnFarm',
                            symbolName: 'btnInvisible',
                            cursor: 'pointer',
                            rect: ['-86px', '261px', '128', '128', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['1.34577', '1.46201']],
                            id: 'btnHospital',
                            symbolName: 'btnInvisible',
                            cursor: 'pointer',
                            rect: ['-88px', '52px', '128', '128', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['1.34577', '1.45919']],
                            id: 'btnJob',
                            symbolName: 'btnInvisible',
                            cursor: 'pointer',
                            rect: ['109px', '53px', '128', '128', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['1.34577', '1.45919']],
                            id: 'btnMarket',
                            symbolName: 'btnInvisible',
                            cursor: 'pointer',
                            rect: ['302px', '53px', '128', '128', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['1.34577', '1.45919']],
                            id: 'btnToilet',
                            symbolName: 'btnInvisible',
                            cursor: 'pointer',
                            rect: ['499px', '53px', '128', '128', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['1.34577', '1.46201']],
                            id: 'btnSchool',
                            symbolName: 'btnInvisible',
                            cursor: 'pointer',
                            rect: ['108px', '261px', '128', '128', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['1.34577', '1.46201']],
                            id: 'btnWater',
                            symbolName: 'btnInvisible',
                            cursor: 'pointer',
                            rect: ['304px', '261px', '128', '128', 'auto', 'auto']
                        },
                        {
                            rect: ['469px', '239px', '161px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['-1']],
                            id: 'character',
                            fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            align: 'center',
                            rect: ['76px', '-39px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['rancho, fantasy', [51, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: bree-serif, sans-serif; font-size: 34px;\">CHOOSE A DESTINATION</span></p>',
                            textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 3],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '600px', '405px']
                        }
                    }
                },
                timeline: {
                    duration: 712,
                    autoPlay: true,
                    data: [
                        [
                            "eid513",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btnMarket}",
                            '302px',
                            '302px'
                        ],
                        [
                            "eid478",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${btnFarm}",
                            '1.46201',
                            '1.46201'
                        ],
                        [
                            "eid511",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${btnMarket}",
                            '1.45919',
                            '1.45919'
                        ],
                        [
                            "eid498",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btnSchool}",
                            '108px',
                            '108px'
                        ],
                        [
                            "eid503",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btnHospital}",
                            '52px',
                            '52px'
                        ],
                        [
                            "eid501",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${btnHospital}",
                            '1.46201',
                            '1.46201'
                        ],
                        [
                            "eid449",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(0,0,0,0.74)',
                            'rgba(0,0,0,0.74)'
                        ],
                        [
                            "eid494",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${btnWater}",
                            '1.46201',
                            '1.46201'
                        ],
                        [
                            "eid506",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${btnJob}",
                            '1.45919',
                            '1.45919'
                        ],
                        [
                            "eid453",
                            "left",
                            0,
                            712,
                            "linear",
                            "${Rectangle}",
                            '-44.83%',
                            '-50%'
                        ],
                        [
                            "eid500",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btnHospital}",
                            '-88px',
                            '-88px'
                        ],
                        [
                            "eid515",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${btnToilet}",
                            '1.34577',
                            '1.34577'
                        ],
                        [
                            "eid508",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btnJob}",
                            '109px',
                            '109px'
                        ],
                        [
                            "eid518",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btnToilet}",
                            '499px',
                            '499px'
                        ],
                        [
                            "eid514",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btnToilet}",
                            '53px',
                            '53px'
                        ],
                        [
                            "eid456",
                            "top",
                            712,
                            0,
                            "linear",
                            "${Rectangle}",
                            '-50%',
                            '-50%'
                        ],
                        [
                            "eid489",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${btnSchool}",
                            '1.46201',
                            '1.46201'
                        ],
                        [
                            "eid487",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btnSchool}",
                            '261px',
                            '261px'
                        ],
                        [
                            "eid313",
                            "opacity",
                            0,
                            712,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid499",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${btnHospital}",
                            '1.34577',
                            '1.34577'
                        ],
                        [
                            "eid509",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${btnMarket}",
                            '1.34577',
                            '1.34577'
                        ],
                        [
                            "eid492",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${btnWater}",
                            '1.34577',
                            '1.34577'
                        ],
                        [
                            "eid507",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${btnJob}",
                            '1.34577',
                            '1.34577'
                        ],
                        [
                            "eid495",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btnWater}",
                            '261px',
                            '261px'
                        ],
                        [
                            "eid504",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btnJob}",
                            '53px',
                            '53px'
                        ],
                        [
                            "eid496",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btnWater}",
                            '304px',
                            '304px'
                        ],
                        [
                            "eid479",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btnFarm}",
                            '261px',
                            '261px'
                        ],
                        [
                            "eid510",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btnMarket}",
                            '53px',
                            '53px'
                        ],
                        [
                            "eid484",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${btnFarm}",
                            '1.34577',
                            '1.34577'
                        ],
                        [
                            "eid517",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${btnToilet}",
                            '1.45919',
                            '1.45919'
                        ],
                        [
                            "eid497",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btnFarm}",
                            '-86px',
                            '-86px'
                        ],
                        [
                            "eid490",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${btnSchool}",
                            '1.34577',
                            '1.34577'
                        ]
                    ]
                }
            },
            "mcUserMessage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '67px', '194px', '192px', 'auto', 'auto'],
                            font: ['bree-serif, sans-serif', [12, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'txtScoreMessage',
                            opacity: '0',
                            text: '<p style=\"margin: 0px; text-align: left;\">​</p>',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '258px', '177px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    data: [
                        [
                            "eid7310",
                            "width",
                            0,
                            0,
                            "easeOutQuad",
                            "${txtScoreMessage}",
                            '194px',
                            '194px'
                        ],
                        [
                            "eid216",
                            "top",
                            0,
                            500,
                            "easeOutQuad",
                            "${txtScoreMessage}",
                            '67px',
                            '0px'
                        ],
                        [
                            "eid6094",
                            "color",
                            0,
                            567,
                            "easeOutQuad",
                            "${txtScoreMessage}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid186",
                            "opacity",
                            0,
                            500,
                            "easeOutQuad",
                            "${txtScoreMessage}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6138",
                            "opacity",
                            5000,
                            3000,
                            "easeOutQuad",
                            "${txtScoreMessage}",
                            '1',
                            '0'
                        ],
                        [
                            "eid7118",
                            "font-size",
                            0,
                            0,
                            "easeOutQuad",
                            "${txtScoreMessage}",
                            '12px',
                            '12px'
                        ]
                    ]
                }
            },
            "dice-resized-v2_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: ['-9px', '-28px', '219px', '191px', 'auto', 'auto'],
                            id: 'bg',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(181,181,181,1.00)', 0], ['rgba(89,89,89,1.00)', 100]]]]
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['0px', '0px', '1024px', '2048px', 'auto', 'auto'],
                            id: 'dice-resized-v2',
                            fill: ['rgba(0,0,0,0)', 'images/dice-resized-v2.png', '0px', '0px', '1024px', '2048px', 'no-repeat']
                        },
                        {
                            rect: ['19px', '-31px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['bree-serif, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '900', 'none', '', 'break-word', 'nowrap'],
                            id: 'rollagain',
                            text: '<p style=\"margin: 0px;\">ROLL THE DICE</p>',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '150px']
                        }
                    }
                },
                timeline: {
                    duration: 1053,
                    autoPlay: true,
                    labels: {
                        "one": 7,
                        "two": 222,
                        "three": 385,
                        "four": 632,
                        "five": 858,
                        "six": 999
                    },
                    data: [
                        [
                            "eid342",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${bg}",
                            [270,[['rgba(181,181,181,1.00)',0],['rgba(89,89,89,1.00)',100]]],
                            [270,[['rgba(181,181,181,1.00)',0],['rgba(89,89,89,1.00)',100]]]
                        ],
                        [
                            "eid2",
                            "width",
                            0,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            '0px',
                            '200px'
                        ],
                        [
                            "eid339",
                            "display",
                            1053,
                            0,
                            "linear",
                            "${bg}",
                            'block',
                            'none'
                        ],
                        [
                            "eid340",
                            "display",
                            1053,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "height",
                            0,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            '0px',
                            '150px'
                        ],
                        [
                            "eid3",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid4",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [0,0],
                            [-200,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid5",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [-200,0],
                            [-400,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid6",
                            "background-position",
                            124,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [-400,0],
                            [-600,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid7",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [-600,0],
                            [-800,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid8",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [-800,0],
                            [0,-150],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid9",
                            "background-position",
                            249,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [0,-150],
                            [-200,-150],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid10",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [-200,-150],
                            [-400,-150],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid11",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [-400,-150],
                            [-600,-150],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12",
                            "background-position",
                            374,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [-600,-150],
                            [-800,-150],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid13",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [-800,-150],
                            [0,-300],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid14",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [0,-300],
                            [-200,-300],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid15",
                            "background-position",
                            499,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [-200,-300],
                            [-400,-300],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid16",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [-400,-300],
                            [-600,-300],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid17",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [-600,-300],
                            [-800,-300],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid18",
                            "background-position",
                            624,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [-800,-300],
                            [0,-450],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid19",
                            "background-position",
                            666,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [0,-450],
                            [-200,-450],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid20",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [-200,-450],
                            [-400,-450],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid21",
                            "background-position",
                            749,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [-400,-450],
                            [-600,-450],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid22",
                            "background-position",
                            791,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [-600,-450],
                            [-800,-450],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid23",
                            "background-position",
                            833,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [-800,-450],
                            [0,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid24",
                            "background-position",
                            874,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [0,-600],
                            [-200,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid25",
                            "background-position",
                            916,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [-200,-600],
                            [-400,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid26",
                            "background-position",
                            958,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [-400,-600],
                            [-600,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid27",
                            "background-position",
                            999,
                            0,
                            "linear",
                            "${dice-resized-v2}",
                            [-600,-600],
                            [-800,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "obit": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-26px', '-20px', '1072px', '692px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(99,99,231,1.00)', 0], ['rgba(0,0,0,1.00)', 100]]]]
                        },
                        {
                            rect: ['271px', '-527px', '377px', '474px', 'auto', 'auto'],
                            id: 'tombstone',
                            transform: [[], [], [], ['1.14999', '1.14999']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tombstone.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'txtNom',
                            text: '<p style=\"margin: 0px;\">nom</p>',
                            font: ['puritan, sans-serif', [20, 'px'], 'rgba(113,113,113,1.00)', '900', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['329px', '166px', '313px', '70px', 'auto', 'auto'],
                            opacity: '0',
                            align: 'center'
                        },
                        {
                            type: 'text',
                            id: 'txtObit',
                            text: '<p style=\"margin: 0px;\">obit</p>',
                            font: ['puritan, sans-serif', [16, 'px'], 'rgba(88,88,88,1.00)', '100', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['381px', '238px', '195px', '333px', 'auto', 'auto'],
                            opacity: '0',
                            align: 'left'
                        },
                        {
                            type: 'image',
                            id: 'invisible_button',
                            rect: ['-26px', '-11px', '1088px', '707px', 'auto', 'auto'],
                            cursor: 'default',
                            fill: ['rgba(0,0,0,0)', 'images/invisible_button.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            title: 'TRY AGAIN?',
                            id: 'simpleButton',
                            symbolName: 'simpleButton',
                            rect: ['376px', '720px', null, null, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '279px', '351px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid12462",
                            "opacity",
                            2250,
                            500,
                            "easeOutBounce",
                            "${txtObit}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12493",
                            "location",
                            2750,
                            250,
                            "easeOutElastic",
                            "${simpleButton}",
                            [[476, 739.69, 0, 0, 0, 0,0],[476, 623, 0, 0, 0, 0,116.69]]
                        ],
                        [
                            "eid12459",
                            "scaleY",
                            2750,
                            0,
                            "easeOutBounce",
                            "${tombstone}",
                            '1.14999',
                            '1.14999'
                        ],
                        [
                            "eid12291",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12430",
                            "opacity",
                            172,
                            2578,
                            "easeOutBounce",
                            "${Rectangle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12463",
                            "opacity",
                            2250,
                            500,
                            "easeOutBounce",
                            "${txtNom}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12295",
                            "location",
                            1500,
                            750,
                            "easeOutBounce",
                            "${tombstone}",
                            [[459.5, -290, 0, 0, 0, 0,0],[459.5, 331, 0, 0, 0, 0,621]]
                        ],
                        [
                            "eid12485",
                            "location",
                            2250,
                            500,
                            "easeOutBounce",
                            "${tombstone}",
                            [[459.5, 331, 0, 0, 0, 0,0],[459.5, 301, 0, 0, 0, 0,30]]
                        ],
                        [
                            "eid12458",
                            "scaleX",
                            2750,
                            0,
                            "easeOutBounce",
                            "${tombstone}",
                            '1.14999',
                            '1.14999'
                        ]
                    ]
                }
            },
            "destinationGlow": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '153px', '155px', 'auto', 'auto'],
                            id: 'destination_glow',
                            opacity: '0.3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/destination_glow.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '153px', '155px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid425",
                            "opacity",
                            0,
                            1500,
                            "linear",
                            "${destination_glow}",
                            '0.3',
                            '0.5'
                        ],
                        [
                            "eid426",
                            "opacity",
                            1500,
                            1250,
                            "linear",
                            "${destination_glow}",
                            '0.5',
                            '0.12'
                        ],
                        [
                            "eid8385",
                            "opacity",
                            2750,
                            1250,
                            "linear",
                            "${destination_glow}",
                            '0.12',
                            '0.3'
                        ]
                    ]
                }
            },
            "btnInvisible": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'invisible_button',
                            opacity: '0',
                            rect: ['0px', '0px', '128px', '128px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/invisible_button.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '128px', '128px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "over": 16,
                        "out": 260
                    },
                    data: [
                        [
                            "eid464",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${invisible_button}",
                            '0',
                            '1'
                        ],
                        [
                            "eid460",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${invisible_button}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "dicePair": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['2.18', '2.18']],
                            id: 'dice_symbol_1',
                            symbolName: 'dice_symbol_1_1',
                            rect: ['931px', '-65px', '90px', '90px', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['2.71', '2.71']],
                            id: 'dice_symbol_2',
                            symbolName: 'dice_symbol_1_1',
                            rect: ['931px', '-65px', '90px', '90px', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '543px', '267px']
                        }
                    }
                },
                timeline: {
                    duration: 1346,
                    autoPlay: true,
                    data: [
                        [
                            "eid172",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${dice_symbol_2}",
                            '2.71',
                            '1'
                        ],
                        [
                            "eid154",
                            "location",
                            0,
                            821,
                            "linear",
                            "${dice_symbol_2}",
                            [[600.02, 0.04, 0, 0, 0, 0,0],[227.02, 390.14, 0, 0, 0, 0,539.73]]
                        ],
                        [
                            "eid157",
                            "location",
                            821,
                            525,
                            "easeOutQuad",
                            "${dice_symbol_2}",
                            [[227.02, 390.14, 0, 0, 0, 0,0],[227.01, 232.57, 0, 0, 0, 0,157.57]]
                        ],
                        [
                            "eid171",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${dice_symbol_2}",
                            '2.71',
                            '1'
                        ],
                        [
                            "eid168",
                            "scaleY",
                            0,
                            821,
                            "linear",
                            "${dice_symbol_1}",
                            '2.18',
                            '1'
                        ],
                        [
                            "eid167",
                            "scaleX",
                            0,
                            821,
                            "linear",
                            "${dice_symbol_1}",
                            '2.18',
                            '1'
                        ],
                        [
                            "eid144",
                            "location",
                            0,
                            821,
                            "linear",
                            "${dice_symbol_1}",
                            [[616.75, 23.95, 0, 0, 0, 0,0],[39.5, 179.02, 0, 0, 0, 0,597.72]]
                        ],
                        [
                            "eid147",
                            "location",
                            821,
                            525,
                            "easeOutQuad",
                            "${dice_symbol_1}",
                            [[39.5, 179.02, 0, 0, 0, 0,0],[317.01, 194.25, 0, 0, 0, 0,277.93]]
                        ]
                    ]
                }
            },
            "dice_symbol_1_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            id: 'dice',
                            fill: ['rgba(0,0,0,0)', 'images/dice2.png', '0px', '0px', '512px', '1024px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 1208,
                    autoPlay: true,
                    labels: {
                        "blank": 0,
                        "one": 41,
                        "two": 250,
                        "three": 458,
                        "four": 666,
                        "five": 875,
                        "six": 1083
                    },
                    data: [
                        [
                            "eid12628",
                            "height",
                            0,
                            0,
                            "linear",
                            "${dice}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid12629",
                            "height",
                            41,
                            0,
                            "linear",
                            "${dice}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid12659",
                            "display",
                            0,
                            0,
                            "linear",
                            "${dice}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12660",
                            "display",
                            41,
                            0,
                            "linear",
                            "${dice}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${dice}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid8",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${dice}",
                            [0,0],
                            [-90,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid9",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${dice}",
                            [-90,0],
                            [-180,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid10",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${dice}",
                            [-180,0],
                            [-270,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid11",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${dice}",
                            [-270,0],
                            [-360,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${dice}",
                            [-360,0],
                            [0,-90],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid13",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${dice}",
                            [0,-90],
                            [-90,-90],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid14",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${dice}",
                            [-90,-90],
                            [-180,-90],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid15",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${dice}",
                            [-180,-90],
                            [-270,-90],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid16",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${dice}",
                            [-270,-90],
                            [-360,-90],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid17",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${dice}",
                            [-360,-90],
                            [0,-180],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid18",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${dice}",
                            [0,-180],
                            [-90,-180],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid19",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${dice}",
                            [-90,-180],
                            [-180,-180],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid20",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${dice}",
                            [-180,-180],
                            [-270,-180],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid21",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${dice}",
                            [-270,-180],
                            [-360,-180],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid22",
                            "background-position",
                            666,
                            0,
                            "linear",
                            "${dice}",
                            [-360,-180],
                            [0,-270],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid23",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${dice}",
                            [0,-270],
                            [-90,-270],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid24",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${dice}",
                            [-90,-270],
                            [-180,-270],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid25",
                            "background-position",
                            791,
                            0,
                            "linear",
                            "${dice}",
                            [-180,-270],
                            [-270,-270],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid26",
                            "background-position",
                            833,
                            0,
                            "linear",
                            "${dice}",
                            [-270,-270],
                            [-360,-270],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid27",
                            "background-position",
                            875,
                            0,
                            "linear",
                            "${dice}",
                            [-360,-270],
                            [0,-360],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid28",
                            "background-position",
                            916,
                            0,
                            "linear",
                            "${dice}",
                            [0,-360],
                            [-90,-360],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid29",
                            "background-position",
                            958,
                            0,
                            "linear",
                            "${dice}",
                            [-90,-360],
                            [-180,-360],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid30",
                            "background-position",
                            1000,
                            0,
                            "linear",
                            "${dice}",
                            [-180,-360],
                            [-270,-360],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid31",
                            "background-position",
                            1041,
                            0,
                            "linear",
                            "${dice}",
                            [-270,-360],
                            [-360,-360],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid32",
                            "background-position",
                            1083,
                            0,
                            "linear",
                            "${dice}",
                            [-360,-360],
                            [0,-450],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid33",
                            "background-position",
                            1125,
                            0,
                            "linear",
                            "${dice}",
                            [0,-450],
                            [-90,-450],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid34",
                            "background-position",
                            1166,
                            0,
                            "linear",
                            "${dice}",
                            [-90,-450],
                            [-180,-450],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid35",
                            "background-position",
                            1208,
                            0,
                            "linear",
                            "${dice}",
                            [-180,-450],
                            [-270,-450],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1",
                            "left",
                            0,
                            0,
                            "linear",
                            "${dice}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid4",
                            "left",
                            41,
                            0,
                            "linear",
                            "${dice}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid2",
                            "top",
                            0,
                            0,
                            "linear",
                            "${dice}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid5",
                            "top",
                            41,
                            0,
                            "linear",
                            "${dice}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid12625",
                            "width",
                            0,
                            0,
                            "linear",
                            "${dice}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid12626",
                            "width",
                            41,
                            0,
                            "linear",
                            "${dice}",
                            '90px',
                            '90px'
                        ]
                    ]
                }
            },
            "shadow": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'shadow_dice',
                            rect: ['-5px', '-22px', '118px', '100px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/shadow_dice2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '136px', '56px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "dicePair_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'shadow1',
                            symbolName: 'shadow',
                            opacity: '0',
                            rect: ['385px', '64px', '136', '56', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'shadow2',
                            symbolName: 'shadow',
                            opacity: '0',
                            rect: ['182px', '8px', '136', '56', 'auto', 'auto']
                        },
                        {
                            rect: ['931px', '-65px', '90px', '90px', 'auto', 'auto'],
                            id: 'dice_symbol_1',
                            symbolName: 'dice_symbol_1_1',
                            type: 'rect',
                            transform: [[], ['26'], [], ['2.18', '2.18']]
                        },
                        {
                            rect: ['931px', '-65px', '90px', '90px', 'auto', 'auto'],
                            id: 'dice_symbol_2',
                            symbolName: 'dice_symbol_1_1',
                            type: 'rect',
                            transform: [[], [], [], ['2.71', '2.71']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 5500,
                    autoPlay: true,
                    data: [
                        [
                            "eid6963",
                            "opacity",
                            0,
                            821,
                            "linear",
                            "${shadow1}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid6964",
                            "opacity",
                            821,
                            110,
                            "linear",
                            "${shadow1}",
                            '0.5',
                            '0.25'
                        ],
                        [
                            "eid8976",
                            "opacity",
                            931,
                            415,
                            "linear",
                            "${shadow1}",
                            '0.25',
                            '0.2'
                        ],
                        [
                            "eid8202",
                            "opacity",
                            5000,
                            0,
                            "easeOutQuad",
                            "${shadow1}",
                            '0.2',
                            '0'
                        ],
                        [
                            "eid6962",
                            "opacity",
                            0,
                            821,
                            "linear",
                            "${shadow2}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid8977",
                            "opacity",
                            821,
                            525,
                            "linear",
                            "${shadow2}",
                            '0.5',
                            '0.19'
                        ],
                        [
                            "eid8203",
                            "opacity",
                            5000,
                            0,
                            "easeOutQuad",
                            "${shadow2}",
                            '0.19',
                            '0'
                        ],
                        [
                            "eid8207",
                            "rotateZ",
                            5500,
                            0,
                            "easeInQuad",
                            "${dice_symbol_1}",
                            '26deg',
                            '26deg'
                        ],
                        [
                            "eid8208",
                            "rotateZ",
                            5000,
                            500,
                            "easeInQuad",
                            "${dice_symbol_2}",
                            '0deg',
                            '-29deg'
                        ],
                        [
                            "eid167",
                            "scaleX",
                            0,
                            821,
                            "linear",
                            "${dice_symbol_1}",
                            '2.18',
                            '1'
                        ],
                        [
                            "eid144",
                            "location",
                            0,
                            821,
                            "linear",
                            "${dice_symbol_1}",
                            [[618.73, 52.17, 0, 0, 0, 0,0],[28.33, 44.1, 0, 0, 0, 0,590.46]]
                        ],
                        [
                            "eid147",
                            "location",
                            821,
                            110,
                            "linear",
                            "${dice_symbol_1}",
                            [[28.33, 44.1, 0, 0, 0, 0,0],[220.71, 57.33, 0, 0, 0, 0,192.83]]
                        ],
                        [
                            "eid174",
                            "location",
                            931,
                            415,
                            "easeOutQuad",
                            "${dice_symbol_1}",
                            [[220.71, 57.33, 236.48, 12.98, 0, 0,0],[432, 73, 0, 0, 0, 0,211.88]]
                        ],
                        [
                            "eid12553",
                            "location",
                            5000,
                            500,
                            "easeInQuad",
                            "${dice_symbol_1}",
                            [[432, 73, 0, 0, 0, 0,0],[432.67, 769.57, 0, 0, 0, 0,696.57]]
                        ],
                        [
                            "eid197",
                            "left",
                            0,
                            500,
                            "linear",
                            "${shadow2}",
                            '543px',
                            '459px'
                        ],
                        [
                            "eid12564",
                            "left",
                            500,
                            321,
                            "linear",
                            "${shadow2}",
                            '459px',
                            '345px'
                        ],
                        [
                            "eid198",
                            "left",
                            821,
                            258,
                            "linear",
                            "${shadow2}",
                            '345px',
                            '265px'
                        ],
                        [
                            "eid12567",
                            "left",
                            1079,
                            267,
                            "easeOutQuad",
                            "${shadow2}",
                            '265px',
                            '182px'
                        ],
                        [
                            "eid154",
                            "location",
                            0,
                            821,
                            "linear",
                            "${dice_symbol_2}",
                            [[609.95, 61.04, 0, 0, 0, 0,0],[392.15, 51, 0, 0, 0, 0,218.03]]
                        ],
                        [
                            "eid157",
                            "location",
                            821,
                            258,
                            "linear",
                            "${dice_symbol_2}",
                            [[392.15, 51, 0, 0, 0, 0,0],[331.02, 46.16, -21.2, -2.22, -124.71, -13.07,61.33],[308.53, 43.87, 0, 0, 0, 0,83.94]]
                        ],
                        [
                            "eid12558",
                            "location",
                            1079,
                            267,
                            "easeOutQuad",
                            "${dice_symbol_2}",
                            [[308.53, 43.87, -123.05, -12.24, 0, 0,0],[221.23, 35.62, 0, 0, 0, 0,87.69]]
                        ],
                        [
                            "eid12541",
                            "location",
                            5000,
                            500,
                            "easeInQuad",
                            "${dice_symbol_2}",
                            [[219.06, 125.85, 0, 0, 0, 0,0],[221, 810.55, 0, 0, 0, 0,684.7]]
                        ],
                        [
                            "eid172",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${dice_symbol_2}",
                            '2.71',
                            '1'
                        ],
                        [
                            "eid12555",
                            "scaleY",
                            500,
                            321,
                            "linear",
                            "${dice_symbol_2}",
                            '1',
                            '1.25'
                        ],
                        [
                            "eid12569",
                            "scaleY",
                            821,
                            258,
                            "linear",
                            "${dice_symbol_2}",
                            '1.25',
                            '1.18'
                        ],
                        [
                            "eid12557",
                            "scaleY",
                            1079,
                            267,
                            "linear",
                            "${dice_symbol_2}",
                            '1.18',
                            '1'
                        ],
                        [
                            "eid180",
                            "top",
                            0,
                            821,
                            "linear",
                            "${shadow1}",
                            '-4px',
                            '30px'
                        ],
                        [
                            "eid182",
                            "top",
                            821,
                            110,
                            "linear",
                            "${shadow1}",
                            '30px',
                            '76px'
                        ],
                        [
                            "eid184",
                            "top",
                            931,
                            148,
                            "linear",
                            "${shadow1}",
                            '76px',
                            '69px'
                        ],
                        [
                            "eid12600",
                            "top",
                            1079,
                            267,
                            "easeOutQuad",
                            "${shadow1}",
                            '69px',
                            '64px'
                        ],
                        [
                            "eid179",
                            "left",
                            0,
                            821,
                            "linear",
                            "${shadow1}",
                            '586px',
                            '0px'
                        ],
                        [
                            "eid181",
                            "left",
                            821,
                            110,
                            "linear",
                            "${shadow1}",
                            '0px',
                            '175px'
                        ],
                        [
                            "eid183",
                            "left",
                            931,
                            148,
                            "linear",
                            "${shadow1}",
                            '175px',
                            '285px'
                        ],
                        [
                            "eid12599",
                            "left",
                            1079,
                            267,
                            "easeOutQuad",
                            "${shadow1}",
                            '285px',
                            '385px'
                        ],
                        [
                            "eid171",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${dice_symbol_2}",
                            '2.71',
                            '1'
                        ],
                        [
                            "eid12554",
                            "scaleX",
                            500,
                            321,
                            "linear",
                            "${dice_symbol_2}",
                            '1',
                            '1.25'
                        ],
                        [
                            "eid12568",
                            "scaleX",
                            821,
                            258,
                            "linear",
                            "${dice_symbol_2}",
                            '1.25',
                            '1.18'
                        ],
                        [
                            "eid12556",
                            "scaleX",
                            1079,
                            267,
                            "linear",
                            "${dice_symbol_2}",
                            '1.18',
                            '1'
                        ],
                        [
                            "eid190",
                            "top",
                            0,
                            500,
                            "linear",
                            "${shadow2}",
                            '-4px',
                            '10px'
                        ],
                        [
                            "eid12565",
                            "top",
                            500,
                            321,
                            "linear",
                            "${shadow2}",
                            '10px',
                            '58px'
                        ],
                        [
                            "eid191",
                            "top",
                            821,
                            258,
                            "linear",
                            "${shadow2}",
                            '58px',
                            '35px'
                        ],
                        [
                            "eid12566",
                            "top",
                            1079,
                            267,
                            "easeOutQuad",
                            "${shadow2}",
                            '35px',
                            '8px'
                        ],
                        [
                            "eid168",
                            "scaleY",
                            0,
                            821,
                            "linear",
                            "${dice_symbol_1}",
                            '2.18',
                            '1'
                        ]
                    ]
                }
            },
            "rectButton": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'button_rect',
                            rect: ['0px', '0px', '237px', '90px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', '_images/button_rect.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            opacity: '0.5145769715309143',
                            rect: ['10px', '5px', '218px', '70px', 'auto', 'auto'],
                            display: 'block',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(53,53,53,1.00)']
                        },
                        {
                            rect: ['62px', '23px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['bree-serif, sans-serif', [24, ''], 'rgba(191,191,191,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​ROLL DICE</p>',
                            textShadow: ['rgba(0,0,0,0.65098)', 0, 2, 1],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '237px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: false,
                    labels: {
                        "out": 0,
                        "over": 1000,
                        "loop": 2000
                    },
                    data: [
                        [
                            "eid5630",
                            "top",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid5634",
                            "height",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '70px',
                            '70px'
                        ],
                        [
                            "eid7349",
                            "opacity",
                            2000,
                            107,
                            "easeOutQuad",
                            "${RoundRect}",
                            '0.5145769715309143',
                            '0'
                        ],
                        [
                            "eid7350",
                            "opacity",
                            2107,
                            143,
                            "easeOutQuad",
                            "${RoundRect}",
                            '0',
                            '0.5145769715309143'
                        ],
                        [
                            "eid5633",
                            "width",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '218px',
                            '218px'
                        ],
                        [
                            "eid5632",
                            "left",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid5593",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Text}",
                            '23px',
                            '21px'
                        ],
                        [
                            "eid5591",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            'block',
                            'block'
                        ],
                        [
                            "eid5590",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${RoundRect}",
                            'block',
                            'none'
                        ],
                        [
                            "eid7346",
                            "display",
                            2000,
                            0,
                            "easeOutQuad",
                            "${RoundRect}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "rountBtn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '95px', '94px', 'auto', 'auto'],
                            id: 'button_round',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', '_images/button_round.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            opacity: '0.41688897357724',
                            rect: ['10px', '3px', '76px', '76px', 'auto', 'auto'],
                            display: 'block',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(53,53,53,1)']
                        },
                        {
                            rect: ['24px', '24px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['bree-serif, sans-serif', [24, ''], 'rgba(191,191,191,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">TIPS</p>',
                            textShadow: ['rgba(0,0,0,0.65098)', 0, 2, 1],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '95px', '94px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "out": 0,
                        "over": 1000
                    },
                    data: [
                        [
                            "eid5635",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Ellipse}",
                            'block',
                            'none'
                        ],
                        [
                            "eid5672",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Text}",
                            '24px',
                            '22px'
                        ]
                    ]
                }
            },
            "flare_animation": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '132px', '131px', 'auto', 'auto'],
                            id: 'flare',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/_0007_flare%20spiky%20circle.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '132px', '131px']
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid6361",
                            "scaleY",
                            0,
                            3000,
                            "linear",
                            "${flare}",
                            '1',
                            '0.73'
                        ],
                        [
                            "eid6362",
                            "scaleY",
                            3000,
                            3000,
                            "linear",
                            "${flare}",
                            '0.73',
                            '1'
                        ],
                        [
                            "eid6359",
                            "scaleX",
                            0,
                            3000,
                            "linear",
                            "${flare}",
                            '1',
                            '0.73'
                        ],
                        [
                            "eid6360",
                            "scaleX",
                            3000,
                            3000,
                            "linear",
                            "${flare}",
                            '0.73',
                            '1'
                        ],
                        [
                            "eid6353",
                            "opacity",
                            0,
                            3000,
                            "linear",
                            "${flare}",
                            '1',
                            '0.92'
                        ],
                        [
                            "eid6354",
                            "opacity",
                            3000,
                            3000,
                            "linear",
                            "${flare}",
                            '0.92',
                            '1'
                        ]
                    ]
                }
            },
            "buttonflash": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '259px', '110px', 'auto', 'auto'],
                            id: 'button_rect_hilite',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', '_images/button_rect_hilite.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '259px', '110px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid8053",
                            "opacity",
                            0,
                            500,
                            "easeOutQuad",
                            "${button_rect_hilite}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8054",
                            "opacity",
                            500,
                            500,
                            "easeOutQuad",
                            "${button_rect_hilite}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("gameboard_edgeActions.js");
})("EDGE-581531069");
