const e = React.createElement;
//render a single event
function listEvents(event) {

    function badges(badge) {
        return e('img', {
            src: badge.image
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

    return e('div', { id: 'events' }, [
        e('h3', null, e('a', { className: 'title', href: event.titleURL, target: '_blank' }, event.title))
        , e('span', { className: 'badges' }, event.badges.map(badges))
        , e("span", { className: "description", dangerouslySetInnerHTML: { __html: event.description } })
        , e('span', { className: 'info_links' }, event.links.map(listlinks))
        //		, e('span', { className: "info_links" }, event.links.map(listLinks))
        //		, e('span', { className: 'sponsor' }, sponsor(event))
        , e('a', { className: 'sponsor_link', href: event.sponsorURL, target: '_blank' }, event.sponsor)
    ]);
}

class Picks extends React.Component {
    render() {
        //        return React.createElement('div', null, `Hello ${this.props.toWhat}`);
        //return React.createElement('div', null, `Hello ${picksObj.Heading}`);
        return e('div', { id: 'post' }, [
            e('h2', { id: 'post_heading' }, (picksObj.Heading))
            , e('div', { id: 'post_events' }, (picksObj.Events.map(listEvents)))
        ]);
    }
}

ReactDOM.render(
    //React.createElement(Hello, { toWhat: 'World' }, null),
    React.createElement(Picks, null, null),
    document.getElementById('picks')
);
