$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            report: 12,
            hotspot: 30,
            tweet: 250
        }, {
            period: '2010 Q2',
            report: 10,
            hotspot: 24,
            tweet: 150
        }, {
            period: '2011 Q1',
            report: 25,
            hotspot: 35,
            tweet: 300
        }, {
            period: '2011 Q2',
            report: 10,
            hotspot: 25,
            tweet: 180
        },  {
            period: '2012 Q1',
            report: 35,
            hotspot: 30,
            tweet: 350
        }, {
            period: '2012 Q2',
            report: 37,
            hotspot: 40,
            tweet: 307
        }],
        xkey: 'period',
        ykeys: ['report', 'hotspot', 'tweet'],
        labels: ['report', 'hotspot', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Report",
            value: 37
        }, {
            label: "Hotspot",
            value: 40
        }, {
            label: "Verified Hotspot",
            value: 25
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
