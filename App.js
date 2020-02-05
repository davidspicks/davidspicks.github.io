"use strict";

//helper
const e = React.createElement;

class PicksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: picksObj.Events.filter(event => 
      Date.parse(event.startDate) < (Date.parse(picksObj.fromDate) + (1000*60*60*24*7) ) )
      , wks: 1 };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      React.createElement("div", null
//        , React.createElement("h3", null, picksObj.Heading, '; ', this.state.wks)
        , React.createElement("form", null
          , React.createElement("label", null
            , "Show Picks for: ")
            , e("select", {
              id: "date-range",
              onChange: this.handleSubmit
          }
            ,  e("option", { value: "1" }, "Next Week")
            ,  e("option", { value: "2" }, "2 Weeks")
            ,  e("option", { value: "3" }, "3 Weeks")
            ,  e("option", { value: "4" }, "Next Month")
            ,  e("option", { value: "100" }, "All Available")
          )
          , React.createElement("span", null
            , "("
            , this.state.events.length
            , ' events)'
          )
        )
        , React.createElement(EventList, {
          events: this.state.events
          , wks: this.state.wks
        })
        
      )  
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log ('handleSubmit')
    const eventsDateFiltered = picksObj.Events.filter(event => 
        Date.parse(event.startDate) < (Date.parse(picksObj.fromDate) + (1000*60*60*24*7*e.target.value) ) );

    this.setState(state => ({
       events: eventsDateFiltered
    } ) );
    this.setState({ wks: e.target.value })

  }
}

//render a single event title
class EventTitleRow extends React.Component {
  render() {
    const event = this.props.event;
    //render a single badge image 
    function badges(badge) {
    return e('img', {
        key: badge.id
        , src: badge.image
        , className: 'badge'
        , alt: badge.name
        , style: { width: '25px', height: '25px' }
      })
    }

    //format event start/end dates for display
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

    var Smsec = Date.parse(event.startDate);
    var Sd = new Date(Smsec);
    var Emsec = Date.parse(event.endDate);
    var Ed = new Date(Emsec);
    if (event.startDate === event.endDate)
        var strDow = dow[Sd.getDay()] + ', ' + month[Sd.getMonth()] + ' ' + Sd.getDate()
    else
        var strDow = dow[Sd.getDay()] + ', ' + month[Sd.getMonth()] + ' ' + Sd.getDate()
            + ' to ' + dow[Ed.getDay()] + ', ' + month[Ed.getMonth()] + ' ' + Ed.getDate()

    return (
      e("tr", null
        , e("td", null
          , e('a', { className: 'title_link', href: event.titleURL, target: '_blank' }
            , e('strong', null, event.title))
          , e("br", null)
          , e("strong", { className: "dates" }, strDow)
          , e("br", null)
        )
        , e("td", {align: "right"}, event.badges.map(badges))
      )
    )
  }
}

class EventBodyRow extends React.Component {
  render() {
    const event = this.props.event;
    function listlinks(link) {
      //console.log(link.name)
      return e("span", {
        key: link.id
        }, e("a", {
          className: "InfoLink",
          href: link.URL,
          target: "_blank",
          rel: "noopener noreferrer"
          }, link.name
        )
      );
    } 
    function sponsor(event) {
      if (event.sponsor === "")
          return null
      return e('a', { href: event.sponsorURL }, '(', event.sponsor, ')')
    }

    return (
      e("tr", null
        , e("td", {colSpan: "2"}
          , e("span", { className: "description", dangerouslySetInnerHTML: { __html: event.description } })
          , e('span', { className: 'info_links' }, event.links.map(listlinks))
          , e("br", null)
          , e("span", { className: "sponsor", event: event }, sponsor(event) )
        )
      )
    )

  } 
}

class EventDividerRow extends React.Component {
  render() {
    const event = this.props.event;
    return (
      e("tr", null
        , e("td", {colSpan: "2", align: "center"}
          , e("span", null, e('img', { src: './images/divider-37709_1280_a.png',style: { width: '150px', height: '18px' } }))
        )
      )
    )

  }
}

class EventList extends React.Component {
  render() {
    //console.log('Event count: ', this.props.events.length)
    const rows = [];
    var eventsOrdered = []

    if (this.props.wks > 1)  {
      //order events by start date
      eventsOrdered = this.props.events.sort(function(a,b){
        if(a.startDate > b.startDate) return 1;
        if(a.startDate < b.startDate) return -1;
        return 0;
      })
      //console.log('after: '+eventsOrdered[0].title)
    } else {
      //order events by order property
      eventsOrdered = this.props.events.sort(function(a,b){
        if(a.order > b.order) return 1;
        if(a.order < b.order) return -1;
        return 0;
      })

    }

    //this.props.events.forEach((event) => {
    eventsOrdered.forEach((event) => {
      rows.push(
        e(EventTitleRow, {
          event: event,
          key: event.id
        })
      )
      rows.push(
        e(EventBodyRow, {
          event: event,
          key: event.id+'a'
        })
      )
      rows.push(
        e(EventDividerRow, {
          event: event,
          key: event.id+'b'
        })
      )
     
    });
    //format dates for main table heading
    const minDateMs = Date.parse(picksObj.fromDate);
    const maxDateMs = minDateMs + (1000*60*60*24*7* this.props.wks);
  //  const Sd = new Date(minDateMs)
    const maxDate = new Date(maxDateMs)
   // var dateH = dow[Sd.getDay()] + ', ' + month[Sd.getMonth()] + ' ' + Sd.getDate()
  // + ' to ' + dow[Ed.getDay()] + ', ' + month[Ed.getMonth()] + ' ' + Ed.getDate()
  var strHead = dateFormatted(picksObj.fromDate) + ' to ' + dateFormatted( maxDate.toDateString())
  if (this.props.wks > 4)
    strHead = dateFormatted(picksObj.fromDate) + ' to ' + dateFormatted(picksObj.toDate)

    return (
      e("table", null//{cellSpacing: "10"}
        , e("thead", null
          , e("tr", null
            , e("th", { colSpan: "2"  }
//            , e('h2', null, picksObj.Heading, '; ', this.props.wks)
            , e('h2', null, strHead)
            )
          )
        )
        , e("tbody", null, rows)
      ) 
    );
  }
}

function dateFormatted(strDate)
{
      //format event start/end dates for display
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
  
      const dateMs = Date.parse(strDate);
      const date = new Date(dateMs);
      return dow[date.getDay()] + ', ' + month[date.getMonth()] + ' ' + date.getDate()  
}

ReactDOM.render(
  React.createElement(PicksApp, null),
  document.getElementById('root')
);