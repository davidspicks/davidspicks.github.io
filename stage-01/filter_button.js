'use strict';

var tempBadges = picksObj.Badges
//console.log(tempBadges.length)

function handleBadgeClick(badge) {
    console.log(badge.name)
//    console.log(filters.length)
//   const tempBadges = [...picksObj.Badges]
 //   const tempBadge = tempBadges.find(tempBadge => tempBadge.name === badge.name)
/*    var tempFilters = [...filters]
    var tempFilter = tempFilters.find(tempFilter => tempFilter.name === badge.name)
    if (tempfilter) {
        //toggle checked property of existing filter
        tempFilter.checked = !tempFilter.checked
    } else {
        //add new badge to filter list
        tempFilters = [...filters, {name: tempFilter.name, checked: tempFilter.checked}]
    }
    setFilters(tempFilters)
    */
}

//const e = React.createElement;
//returns a single badge filter checkbox
function badgeFilter(badge) {
    return e('label', { key: badge.id },
        e("input", {
        type: "checkbox",
        defaultChecked: false,
//        onChange: handleBadgeClick
//        onChange: () => console.log(badge.name)
            onChange: () => handleBadgeClick(badge)
        }), badge.name.split(' ')[0])
}

function handleDateRange() {
    //TODO: get selected value using React
    var sel = document.getElementById('select-date-range');
    console.log(sel.value)
}

//render a single event
var index = -1
function listEvents(event) {

    function badges(badge) {

        return e('img', {
            key: badge.id
            , src: badge.image
            , className: 'badge'
            , alt: badge.name
            , style: { width: '18px', height: '18px' }
        })
    }

    function listlinks(link) {
        return e("span", {
            key: link.id
        }, e("a", {
            className: "InfoLink",
            href: link.URL,
            target: "_blank",
            rel: "noopener noreferrer"
        }, link.name));
    }

    //TODO: implement surrounding () with pure React
    if (event.sponsor === "") {
        var strSponsorHtml = ""
    } else {
        var strSponsorHtml =
            "(<a href=\""
            + event.sponsorURL
            + "\" target=\"_blank\">"
            + event.sponsor
            + "</a>)"
    }

    function sponsor() {
        if (event.sponsor === "")
            return null
        return e('a', { href: event.sponsorURL }, '(', event.sponsor, ')')
    }

    var dow = new Array();
    dow[1] = "MON";
    dow[2] = "TUE";
    dow[3] = "WED";
    dow[4] = "THU";
    dow[5] = "FRI";
    dow[6] = "SAT";
    dow[0] = "SUN";

    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    index++

    // format event start/end dates
    var Smsec = Date.parse(event.startDate);
    var Sd = new Date(Smsec);
    var Emsec = Date.parse(event.endDate);
    var Ed = new Date(Emsec);
    if (event.startDate === event.endDate)
        var strDow = dow[Sd.getDay()] + ', ' + month[Sd.getMonth()] + ' ' + Sd.getDate()
    else
        var strDow = dow[Sd.getDay()] + ', ' + month[Sd.getMonth()] + ' ' + Sd.getDate()
            + ' to ' + dow[Ed.getDay()] + ', ' + month[Ed.getMonth()] + ' ' + Ed.getDate()

    return e('p', { className: 'event', id: 'event_' + index, key: event.id + index }, [
        e('strong', { className: 'title' }
            , e('a', { className: 'title_link', href: event.titleURL, target: '_blank' }, event.title)
        )
        , e('span', { className: 'badges' }, event.badges.map(badges))
        , e("br", null)
        , e("strong", { className: "dates" }, strDow)
        , e("br", null)
        , e("span", { className: "description", dangerouslySetInnerHTML: { __html: event.description } })
        , e('span', { className: 'info_links' }, event.links.map(listlinks))
        , e("br", null)
        , e("span", { className: "sponsor", dangerouslySetInnerHTML: { __html: strSponsorHtml } })
        //        , e("span", { className: "sponsor" }, [sponsor] )
    ]);
}

class FilterButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
        this.badges = picksObj.Badges
    }   
    render() {
        if (this.state.show) {
            return e('p', null,
                e('button',
                    { onClick: () => this.setState({ show: false }) },
                    'Hide Filters'),
                e("br", null),
                e('span', null, picksObj.Badges.map(badgeFilter)),
                e("br", null),
                e("label", null, "Show events for: ",
                    e("select", {
                        id: "select-date-range",
                        //value: optionsState,
                        onChange: handleDateRange
                    },
                        e("option", { value: "1" }, "Next Week"),
                        e("option", { value: "2" }, "2 Weeks"),
                        e("option", { value: "3" }, "3 Weeks"),
                        e("option", { value: "4" }, "Next Month")
                    )
                ),
                e('div', { id: 'post' }
                    , e('h2', { id: 'post_heading' }, (picksObj.Heading))
                    , (picksObj.Events.map(listEvents))
                )
            )
        }
        if (!this.state.show) { 
        return e('p', null,
            e('button',
                { onClick: () => this.setState({ show: true }) },
                'Show Filters'),
            e('div', { id: 'post' }
                , e('h2', { id: 'post_heading' }, (picksObj.Heading))
                , (picksObj.Events.map(listEvents)) //SCRIPT5009: SCRIPT5009: 'listEvents' is not defined - filter_button.js(75, 9)
            )
        )
        }
    }
}

const domContainer = document.querySelector('#filter_button_container');
ReactDOM.render(e(FilterButton), domContainer);

/* Sample HTML
 		<!-- Load React component. -->
		<div id="filter_button_container"></div>
		<script src="filter_button.js"></script>
 */