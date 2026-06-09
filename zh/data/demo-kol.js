// Trill CreatorOS Demo - Mock KOL data
// Shared by all pages. Tweak here, refresh any page.

const DEMO_KOL = {
  handle: "@cryptodemo",
  displayName: "Cryptodemo",
  avatar: "C",
  bio: "Solana × MEV × Liquid Staking · Public thesis, public misses · Verified by Trill",
  joinedDate: "Sep 2024",
  followerCount: 142800,
  followingCount: 412,

  // Public-side
  starTier: 4,
  starDelta: 0,
  publicBadge: "Trill Verified · 4★",
  strongDimensions: ["Analytical Depth", "Accuracy Discipline"],
  weakDimensions: ["Community Confidence"],
  subVerticalBadges: [
    { label: "Strong on MEV", tone: "strong" },
    { label: "Strong on Solana", tone: "strong" },
    { label: "Mixed on Liquid Staking", tone: "mixed" },
  ],

  // Private composite (0-1)
  privateScore: 0.68,
  percentileInVertical: 87,
  distanceToNextTier: 0.07, // 5-star at 0.75

  // 7 维度 (Charles format 28042026 SSOT)
  dimensions: [
    { name: "Analytical Depth", short: "AD", score: 0.72, band: "Strong", delta: +0.04, color: "indigo", icon: "brain" },
    { name: "Accuracy Discipline", short: "Acc", score: 0.78, band: "Strong", delta: +0.02, color: "emerald", icon: "target" },
    { name: "Intellectual Honesty", short: "IH", score: 0.66, band: "Solid", delta: -0.01, color: "sky", icon: "shield-check" },
    { name: "Community Care", short: "Care", score: 0.55, band: "Average", delta: 0, color: "rose", icon: "heart-handshake" },
    { name: "Educational Value", short: "EV", score: 0.64, band: "Solid", delta: +0.06, color: "amber", icon: "book-open" },
    { name: "Entertainment & Engagement", short: "EE", score: 0.71, band: "Strong", delta: +0.01, color: "fuchsia", icon: "sparkles" },
    { name: "Community Confidence", short: "CC", score: 0.34, band: "Below Avg", delta: -0.08, color: "orange", icon: "users", flagged: true },
  ],

  // Pulse strip (Home top)
  pulse: {
    mentions1h: 12,
    mentions24h: 187,
    sentimentShift: +0.08,
    followerDelta24h: +428,
    replyVelocityVsBaseline: +0.34,
    recentStarChange: null,
  },

  // What changed since last visit
  digest: [
    { type: "score", text: "Educational Value moved +0.06 — your MEV explainer thread on May 17 contributed 3 evidence items", impact: "good" },
    { type: "score", text: "Community Confidence dropped −0.08 — Layer 2 hit rate fell below 50% after ENA call resolved as MISS", impact: "bad" },
    { type: "mentions", text: "@hsakatrades (4★) referenced your validator-queue thesis", impact: "good" },
    { type: "audience", text: "+428 followers in 24h — 67% are Trader archetype, 78% smart-follower ratio", impact: "neutral" },
  ],

  // Audience module
  audience: {
    smartRatio: 0.78,
    botRatio: 0.06,
    qualityWeightedReach: 89400,
    archetypes: [
      { name: "Trader", pct: 38, color: "emerald" },
      { name: "Analyst", pct: 24, color: "indigo" },
      { name: "Builder", pct: 18, color: "amber" },
      { name: "Retail", pct: 12, color: "slate" },
      { name: "Journalist", pct: 5, color: "rose" },
      { name: "Smart Money", pct: 3, color: "fuchsia" },
    ],
    growth: {
      delta24h: +428,
      delta7d: +3214,
      delta30d: +9870,
    },
    exclusivity: 0.31,
    overlap: [
      { name: "@blknoiz06", overlap: 0.18, stars: 3 },
      { name: "@hsakatrades", overlap: 0.14, stars: 4 },
      { name: "@cryptocred", overlap: 0.11, stars: 4 },
      { name: "@DeFi_Made_Here", overlap: 0.09, stars: 3 },
    ],
    geo: [
      { country: "United States", pct: 32 },
      { country: "China", pct: 14 },
      { country: "United Kingdom", pct: 9 },
      { country: "Singapore", pct: 8 },
      { country: "South Korea", pct: 6 },
      { country: "Brazil", pct: 5 },
    ],
    languages: [
      { lang: "English", pct: 71 },
      { lang: "Chinese", pct: 14 },
      { lang: "Korean", pct: 6 },
      { lang: "Spanish", pct: 4 },
    ],
    topEngagers: [
      { handle: "@validator_eth", followers: "82K", interactions: 47 },
      { handle: "@solana_sage", followers: "14K", interactions: 38 },
      { handle: "@mev_watcher", followers: "211K", interactions: 31 },
    ],
    multiPlatformOverlap: { youtube: 0.12, telegram: 0.08, substack: 0.04 }, // for the A/Coming-soon card
  },

  // Content module
  recentPosts: [
    {
      id: "t1",
      text: "$SOL on-chain data: validator queue at 1.2M — historically precedes a 15-25% rally within 60 days. Adding here. Invalidation: queue < 800K.",
      timestamp: "May 19, 2026 · 2:22 PM",
      likes: 1247, retweets: 184, replies: 92, quotes: 38,
      smartEngagement: 0.71, sentiment: 0.62, followerLift: +89,
      onchainImpact: { volumeLift: "+8%", walletsActivated: 124 },
      format: "Single", lengthBucket: "Medium", topic: "Solana / Validator economics",
    },
    {
      id: "t2",
      text: "I was wrong on FIL. Thesis was data demand → FIL utility. On-chain shows storage providers are net sellers. Updating view. Closing position publicly.",
      timestamp: "May 18, 2026 · 10:05 AM",
      likes: 892, retweets: 156, replies: 78, quotes: 42,
      smartEngagement: 0.84, sentiment: 0.45, followerLift: +24,
      format: "Single", lengthBucket: "Medium", topic: "Filecoin / Position update",
      flag: "Thesis revision logged (+IH evidence)",
    },
    {
      id: "t3",
      text: "$BTC just hit my $74k target from 3 weeks ago. Receipts in thread.",
      timestamp: "May 17, 2026 · 3:18 AM",
      likes: 3421, retweets: 612, replies: 224, quotes: 88,
      smartEngagement: 0.58, sentiment: 0.71, followerLift: +189,
      format: "Thread", lengthBucket: "Long", topic: "BTC / Verified call",
    },
    {
      id: "t4",
      text: "How MEV searchers actually find profitable bundles — a step-by-step walkthrough with real mempool data. 🧵",
      timestamp: "May 15, 2026 · 6:40 PM",
      likes: 2104, retweets: 489, replies: 167, quotes: 72,
      smartEngagement: 0.79, sentiment: 0.66, followerLift: +312,
      format: "Thread", lengthBucket: "Long", topic: "MEV / Educational",
      flag: "Top educational post · 3 EV evidence items added",
    },
  ],

  // Evidence per dimension (only filled for the ones we surface on score.html)
  evidence: {
    "Intellectual Honesty": [
      { sign: "+", weight: 0.22, field: "transparent_adjustment", tweetRef: "t2", desc: "Public thesis revision on FIL: explained reasoning, closed position openly. May 18, 2026." },
      { sign: "+", weight: 0.15, field: "thesis_revision_visibility", tweetRef: "t2", desc: "Old bullish FIL thesis (Feb 2026) explicitly linked and retracted in the new post." },
      { sign: "-", weight: 0.28, field: "miss_acknowledgement", tweetRef: null, desc: "Failed call on ENA (Apr 2026, -34% from entry) not publicly acknowledged. Layer 2 records show no follow-up tweet." },
      { sign: "+", weight: 0.20, field: "silent_reversal_penalty", tweetRef: null, desc: "No silent reversal pattern detected in last 90 days — failed calls either acknowledged or still ongoing." },
    ],
    "Community Confidence": [
      { sign: "-", weight: 0.20, field: "community_trust", tweetRef: null, desc: "Layer 2 hit rate = 41% (below 50% hard cap per methodology). Score capped at 0.45." },
      { sign: "-", weight: 0.20, field: "peer_endorsement", tweetRef: null, desc: "Trimmed-mean follower count of inbound replies = 8,400 (below 10K peer-band threshold)." },
      { sign: "+", weight: 0.20, field: "follower_confidence", tweetRef: null, desc: "Follower count 142.8K places you in the [100K, 500K) band → 0.80." },
      { sign: "-", weight: 0.15, field: "educational_impact", tweetRef: null, desc: "Learning-signal keywords in your comments at 4.2% — placed in 0.30 band." },
    ],
    "Educational Value": [
      { sign: "+", weight: 0.22, field: "framework_transfer", tweetRef: "t4", desc: "MEV walkthrough thread provides reusable mental model (step-by-step + real data). Claude assessment: 0.78." },
      { sign: "+", weight: 0.22, field: "explanatory_clarity", tweetRef: "t4", desc: "Same thread scored 0.74 on Claude clarity assessment." },
      { sign: "+", weight: 0.20, field: "teaching_pattern", tweetRef: null, desc: "Educational keyword ratio = 18% (above 15% threshold for Solid band)." },
    ],
  },

  // Vertical Intel
  vertical: "DeFi",
  subVerticals: ["MEV", "Liquid Staking", "Solana"],
  mindshare: [
    { topic: "MEV", current: 0.124, lastWeek: 0.098, delta: +0.026 },
    { topic: "Solana", current: 0.082, lastWeek: 0.061, delta: +0.021 },
    { topic: "Liquid Staking", current: 0.041, lastWeek: 0.052, delta: -0.011 },
    { topic: "DeFi (broad)", current: 0.018, lastWeek: 0.014, delta: +0.004 },
  ],
  trending: [
    { topic: "Restaking risk frameworks", relevance: 0.88, coverage: "low", note: "High follower interest in your audience, only 2 credible voices covering" },
    { topic: "Solana validator economics", relevance: 0.92, coverage: "medium", note: "You posted on this 2 days ago — peers @hsakatrades, @cryptocred catching up" },
    { topic: "MEV-Burn mechanics", relevance: 0.81, coverage: "low", note: "Hot rising topic, no 4★ voices yet" },
    { topic: "EigenLayer post-mortem", relevance: 0.72, coverage: "high", note: "Saturated — 12 credible voices covered in 7 days" },
  ],
  peerActivity: [
    { handle: "@hsakatrades", stars: 4, action: "Posted MEV searcher economics breakdown", time: "3h ago" },
    { handle: "@cryptocred", stars: 4, action: "Published weekly Solana mindshare summary", time: "8h ago" },
    { handle: "@blknoiz06", stars: 3, action: "Quote-tweeted your validator queue thesis", time: "12h ago" },
  ],

  // Peers
  peers: [
    { handle: "@blknoiz06", stars: 3, primaryDim: "Acc", trend: "rising", overlap: 0.18, smartAudience: "42K", cadence: "9/day", topicOverlap: 0.34 },
    { handle: "@hsakatrades", stars: 4, primaryDim: "AD", trend: "stable", overlap: 0.14, smartAudience: "118K", cadence: "5/day", topicOverlap: 0.41 },
    { handle: "@cryptocred", stars: 4, primaryDim: "EV", trend: "rising", overlap: 0.11, smartAudience: "94K", cadence: "3/day", topicOverlap: 0.28 },
    { handle: "@DeFi_Made_Here", stars: 3, primaryDim: "Care", trend: "stable", overlap: 0.09, smartAudience: "31K", cadence: "12/day", topicOverlap: 0.22 },
    { handle: "@cobie", stars: 4, primaryDim: "IH", trend: "stable", overlap: 0.08, smartAudience: "287K", cadence: "2/day", topicOverlap: 0.18 },
  ],
  rivalPin: "@hsakatrades", // who you're tracking closely

  // Collaboration network (Jackson C, Coming Soon)
  collaborationCandidates: [
    { handle: "@solana_sage", reason: "Your audience overlap 22%, sub-vertical complement (Restaking)", trustNote: "No payment history detected" },
    { handle: "@mev_watcher", reason: "Audience overlap 14%, topic overlap 41%", trustNote: "No payment history detected" },
    { handle: "@validator_eth", reason: "Audience overlap 11%, complementary EE strength", trustNote: "Pending" },
  ],

  // Settings / Profile
  connectedAccounts: [
    { platform: "X / Twitter", handle: "@cryptodemo", status: "connected", since: "Sep 2024" },
    { platform: "Wallet", handle: "0x7a3...8f2c", status: "connected (signed)", since: "Sep 2024" },
    { platform: "Telegram", handle: "@cryptodemo_public", status: "connected", since: "Nov 2024" },
    { platform: "YouTube", handle: "—", status: "not connected", since: null },
    { platform: "Substack", handle: "—", status: "not connected", since: null },
    { platform: "Farcaster", handle: "—", status: "not connected", since: null },
  ],
};
