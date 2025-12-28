import { Calendar, ArrowRight, Share2, Tag } from "lucide-react";

const MOCK_NEWS = [
    {
        id: 1,
        headline: "Election Commission announces 7-phase polling schedule for 2029 General Elections",
        summary: "The ECI has finalized the dates for the upcoming Lok Sabha elections, spanning over 6 weeks to ensure adequate security deployment across all states.",
        source: "ECI Press Release",
        date: "2 hours ago",
        category: "Official",
        imageUrl: "https://images.unsplash.com/photo-1541560052-77ec1bbc60bb?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        headline: "Record 72% Voter Turnout recorded in Phase 1 across 102 constituencies",
        summary: "Voters braved the heat wave to cast their ballots in large numbers, with women outnumbering men in several key constituencies of Tamil Nadu and Rajasthan.",
        source: "DD News",
        date: "5 hours ago",
        category: "Updates",
        imageUrl: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        headline: "New 'Vote-from-Home' facility introduced for citizens above 85 years",
        summary: "In a historic move to make elections more inclusive, the Election Commission has deployed mobile polling teams to visit the homes of elderly and disabled voters.",
        source: "The Hindu",
        date: "1 day ago",
        category: "Policy",
        imageUrl: "https://images.unsplash.com/photo-1575320181282-9afab399332c?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        headline: "Supreme Court dismisses plea seeking 100% VVPAT slip verification",
        summary: "The Apex Court upheld the current practice of verifying 5 random EVMs per assembly segment, citing that the current system is robust and secure.",
        source: "Legal Bureau",
        date: "1 day ago",
        category: "Legal",
        imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 5,
        headline: "Deepfake Detection Centers set up in every district to curb misinformation",
        summary: "To tackle the rise of AI-generated fake news, dedicated monitoring cells equipped with S.A.T.Y.A. technology have been operationalized nationwide.",
        source: "Tech Policy",
        date: "2 days ago",
        category: "Technology",
        imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 6,
        headline: "Political parties agree on 'Green Elections' code to reduce plastic waste",
        summary: "All major national parties have signed a pledge to avoid single-use plastics in campaign materials and rallies, promoting eco-friendly democracy.",
        source: "Environment Watch",
        date: "2 days ago",
        category: "Environment",
        imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
    }
];

export function ElectionNews() {
    return (
        <div className="w-full max-w-6xl mx-auto space-y-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Election Newsroom</h2>
                <p className="text-slate-500">Latest updates, official announcements, and poll analysis.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_NEWS.map((news) => (
                    <div key={news.id} className="bg-white border text-card-foreground rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
                        <div className="h-48 relative overflow-hidden bg-slate-100">
                            {/* In a real app, use Next.js Image */}
                            <img
                                src={news.imageUrl}
                                alt="News Thumbnail"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 shadow-sm">
                                <Tag className="w-3 h-3 text-orange-500" />
                                {news.category}
                            </div>
                        </div>

                        <div className="p-5 flex flex-col flex-grow">
                            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                                <span className="font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">{news.source}</span>
                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {news.date}</span>
                            </div>

                            <h3 className="font-bold text-lg mb-3 leading-tight text-slate-800 group-hover:text-blue-700 transition-colors">
                                {news.headline}
                            </h3>

                            <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                                {news.summary}
                            </p>

                            <div className="pt-4 border-t flex justify-between items-center mt-auto">
                                <button className="text-sm font-bold text-blue-600 flex items-center gap-1 hover:gap-2 transition-all">
                                    Read Full Story <ArrowRight className="w-4 h-4" />
                                </button>
                                <button className="text-slate-400 hover:text-slate-600">
                                    <Share2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
