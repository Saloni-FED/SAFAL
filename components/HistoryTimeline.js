const HistoryTimeline = () => {
    const events = [
        { year: '1919', description: 'Incorporated as Association of Person.' },
        { year: '1957', description: 'Recognized as Regional Stock Exchange.' },
        { year: '1988', description: 'Ministry of Finance granted permanent recognition.' },
        { year: '1992', description: 'MPSE records highest turnover.' },
        { year: '2006', description: 'MPSEL was corporatized into a limited company.' },
        { year: 'Aug 2007', description: 'MPSE demutualized at a premium of Rs. 30/- per share.' },
        { year: '2008', description: 'Strategic Investors have taken up 51% stake at the Exchange.' },
        { year: '2009', description: 'Auction of two trading membership rights at record price of Rs. 3.81 lacs and Rs. 3.51 lacs.' },
        { year: '10 Apr 2010', description: 'Agreement under section 13 with National Stock Exchange (NSE).' },
        { year: '31 Mar 2011', description: 'Approval of Securities and Exchange Board of India (SEBI) to NSE agreement.' },
        { year: '1 May 2012', description: 'Agreement under section 13 with Bombay Stock Exchange (BSE).' },
        { year: '9 June 2015', description: 'SEBI Exit Order in respect of Madhya Pradesh Stock Exchange Ltd (MPSE).' },
        { year: '2019 ', description: 'Company has completed its 100+ years.' },
    ];

    return (
        <div className="history-timeline">
            <h2 className="history_h2">Journey of Madhya Pradesh Stock Exchange to Madhya Pradesh Stock and Capital Market Limited</h2>
            {events.map((event, index) => (
                <div key={index} className="history-timeline-event">
                    <span className="history-timeline-year">{event.year}</span>
                    <span className="history-timeline-description">{event.description}</span>
                </div>
            ))}
        </div>
    );
};

export default HistoryTimeline;