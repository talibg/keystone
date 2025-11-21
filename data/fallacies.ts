export type FallacyCategorySlug =
  | "relevance"
  | "ambiguity-language"
  | "presumption"
  | "statistical-scientific"
  | "formal"
  | "informal-dialogue"
  | "rhetorical-cognitive-bias"
  | "debate-tactics";

export type CategoryColorKey =
  | "sky"
  | "indigo"
  | "amber"
  | "emerald"
  | "purple"
  | "cyan"
  | "rose"
  | "slate";

export type FallacyCategory = {
  slug: FallacyCategorySlug;
  name: string;
  description: string;
  colorKey: CategoryColorKey;
};

export type Fallacy = {
  slug: string;
  name: string;
  category: FallacyCategory;
  alsoKnownAs: string[];
  shortDefinition: string;
  explanation: string;
  pattern: string[];
  everydayExample: {
    setup: string;
    dialogue: string[];
  };
  seriousExample: string;
  whyItIsFallacious: string;
  whyPeopleUseIt: string;
  recognitionPoints: string[];
  responseStrategies: string[];
  severity: "Low" | "Medium" | "High";
  typeLabel?: string;
  typicalContexts?: string[];
  relatedSlugs: string[];
  seoTitle: string;
  seoDescription: string;
};

const categoryMap: Record<FallacyCategorySlug, FallacyCategory> = {
  relevance: {
    slug: "relevance",
    name: "Relevance Fallacies",
    description:
      "Arguments that distract from the claim instead of addressing it directly.",
    colorKey: "rose",
  },
  "ambiguity-language": {
    slug: "ambiguity-language",
    name: "Ambiguity and Language",
    description:
      "Arguments that hinge on slippery wording, double meanings, or unclear definitions.",
    colorKey: "indigo",
  },
  presumption: {
    slug: "presumption",
    name: "Presumption",
    description:
      "Arguments that smuggle in assumptions or treat contested points as already proven.",
    colorKey: "amber",
  },
  "statistical-scientific": {
    slug: "statistical-scientific",
    name: "Statistical and Scientific",
    description:
      "Errors that misuse numbers, studies, or causal claims to overstate certainty.",
    colorKey: "emerald",
  },
  formal: {
    slug: "formal",
    name: "Formal Fallacies",
    description:
      "Breakdowns in logical structure that make a conclusion invalid regardless of content.",
    colorKey: "purple",
  },
  "informal-dialogue": {
    slug: "informal-dialogue",
    name: "Informal Dialogue Pitfalls",
    description:
      "Conversational traps that force unfair frames, assumptions, or defensive answers.",
    colorKey: "cyan",
  },
  "rhetorical-cognitive-bias": {
    slug: "rhetorical-cognitive-bias",
    name: "Rhetorical and Cognitive Biases",
    description:
      "Appeals to emotion or mental shortcuts instead of reasons and evidence.",
    colorKey: "sky",
  },
  "debate-tactics": {
    slug: "debate-tactics",
    name: "Debate Tactics and Evasions",
    description:
      "Strategies that flood, derail, or exhaust a discussion rather than test a claim.",
    colorKey: "slate",
  },
};

export const categories: FallacyCategory[] = Object.values(categoryMap);

export const fallacies: Fallacy[] = [
  {
    slug: "abusive-ad-hominem",
    name: "Abusive Ad Hominem",
    category: categoryMap.relevance,
    alsoKnownAs: ["Personal Abuse"],
    shortDefinition:
      "Dismisses a claim by insulting the speaker instead of addressing the argument.",
    explanation:
      "The abusive ad hominem tries to win by belittling or insulting the person making the claim. The attack creates the illusion of refutation but contributes nothing to evaluating the reasoning or evidence behind the claim.",
    pattern: [
      "Hear claim X.",
      "Attack the speaker’s character with insults.",
      "Treat the insult as if it disproves claim X.",
    ],
    everydayExample: {
      setup: "A teammate recommends improving tests.",
      dialogue: [
        "A: Our coverage is low; we should add integration tests.",
        "B: You’re just nitpicking again—nobody cares about your complaints.",
      ],
    },
    seriousExample:
      "During a hearing, a citizen cites data on water contamination. Officials respond by mocking the citizen’s education level instead of addressing the data.",
    whyItIsFallacious:
      "Personal insults do not address the truth or falsehood of a claim. The argument’s validity depends on reasons and evidence, not on the arguer’s traits.",
    whyPeopleUseIt:
      "It is quick, emotionally satisfying, and can rally supporters by turning the discussion into a contest of status or loyalty.",
    recognitionPoints: [
      "Insults replace engagement with evidence.",
      "The person is attacked even when the claim stands on its own data.",
      "No attempt is made to refute premises or logic.",
    ],
    responseStrategies: [
      "Restate the claim and ask for engagement with its reasons.",
      "Point out that personal remarks do not address the evidence.",
      "Redirect to verifiable facts or agreed evaluation criteria.",
    ],
    severity: "Medium",
    typeLabel: "Relevance fallacy",
    typicalContexts: ["Debate", "Politics", "Online forums"],
    relatedSlugs: ["ad-hominem", "guilt-by-association", "poisoning-the-well"],
    seoTitle: "Abusive Ad Hominem – Logical Fallacies Guide",
    seoDescription:
      "Abusive ad hominem attacks a speaker with insults instead of addressing the argument. Learn the pattern, examples, and counters.",
  },
  {
    slug: "accent-fallacy",
    name: "Accent Fallacy",
    category: categoryMap["ambiguity-language"],
    alsoKnownAs: ["Emphasis Fallacy"],
    shortDefinition:
      "Alters meaning by changing emphasis, stress, or selective quoting.",
    explanation:
      "In written or spoken language, shifting emphasis can change meaning. The accent fallacy manipulates tone or selective highlighting to suggest a conclusion the original statement does not support.",
    pattern: [
      "Quote or restate a phrase with altered emphasis or formatting.",
      "Imply a different meaning than the original context intended.",
      "Use that altered meaning as evidence for a conclusion.",
    ],
    everydayExample: {
      setup: "Discussing budget cuts.",
      dialogue: [
        "A: The manager said we ‘might’ delay hiring.",
        "B: The manager said we MIGHT delay hiring—so it’s basically confirmed.",
      ],
    },
    seriousExample:
      "A headline bolds part of a scientific statement to imply certainty (“could prevent deaths” becomes “prevent deaths”), misleading readers about the study’s caution.",
    whyItIsFallacious:
      "The conclusion depends on a shifted meaning created by emphasis, not on the original statement. The argument trades on ambiguity, not evidence.",
    whyPeopleUseIt:
      "It is subtle, allows deniability, and can generate persuasive but misleading headlines or soundbites.",
    recognitionPoints: [
      "Meaning changes when stress, bolding, or tone changes.",
      "Key qualifiers are downplayed or visually minimized.",
      "The cited source does not support the implied conclusion when read plainly.",
    ],
    responseStrategies: [
      "Read the statement without added emphasis and restate the original meaning.",
      "Highlight omitted qualifiers or formatting tricks.",
      "Request the full context or transcript to restore the intended meaning.",
    ],
    severity: "Low",
    typeLabel: "Ambiguity fallacy",
    typicalContexts: ["Media", "Advertising", "Debate"],
    relatedSlugs: ["equivocation", "quote-mining", "strawman"],
    seoTitle: "Accent Fallacy – Logical Fallacies Guide",
    seoDescription:
      "The accent fallacy changes meaning through emphasis or formatting. See how it misleads and how to counter it.",
  },
  {
    slug: "ad-hominem",
    name: "Ad Hominem",
    category: categoryMap.relevance,
    alsoKnownAs: ["Personal Attack"],
    shortDefinition:
      "Attacks the person making the argument instead of the argument.",
    explanation:
      "Rather than addressing a claim, an ad hominem shifts focus to the speaker's character, motives, or background. The criticism creates the illusion of refutation while leaving the actual reasoning untouched.",
    pattern: [
      "Target the speaker instead of the claim.",
      "Imply that a flawed person must have flawed arguments.",
      "Skip any engagement with the evidence or logic.",
    ],
    everydayExample: {
      setup: "A coworker raises a concern about launch quality.",
      dialogue: [
        "A: “The mobile build still crashes; we need to postpone launch.”",
        "B: “You always exaggerate problems. Remember when you overreacted last quarter?”",
      ],
    },
    seriousExample:
      "During a public hearing, a resident questions water safety. Officials reply by mocking the resident's education instead of addressing test results.",
    whyItIsFallacious:
      "The truth of a claim does not depend on who states it. Character flaws or motivations do not automatically invalidate evidence or logic.",
    whyPeopleUseIt:
      "It is quick, emotionally satisfying, and can rally an audience by creating an easy villain.",
    recognitionPoints: [
      "Personal traits or motives are attacked instead of premises.",
      "No attempt is made to rebut evidence or reasoning.",
      "The attack would not change the claim if it were voiced by someone else.",
    ],
    responseStrategies: [
      "Redirect: “Address the evidence, not me.”",
      "Separate person from claim and restate the argument clearly.",
      "If needed, concede irrelevant parts and ask for engagement with the point.",
    ],
    severity: "Medium",
    typeLabel: "Logical fallacy",
    typicalContexts: ["Debate", "Media", "Everyday conversation"],
    relatedSlugs: ["red-herring", "gish-gallop"],
    seoTitle: "Ad Hominem Fallacy – Logical Fallacies Guide",
    seoDescription:
      "Ad Hominem attacks the person instead of the argument. Learn the pattern, examples, and how to counter it.",
  },
  {
    slug: "amphiboly",
    name: "Amphiboly",
    category: categoryMap["ambiguity-language"],
    alsoKnownAs: ["Syntactic Ambiguity"],
    shortDefinition:
      "Exploits ambiguous grammar or structure to imply a misleading conclusion.",
    explanation:
      "Amphiboly relies on sentences that can be parsed in multiple ways because of grammar or punctuation. The argument leans on the unintended reading to make a point the original statement does not support.",
    pattern: [
      "Present an ambiguously structured statement.",
      "Select the interpretation that favors a desired conclusion.",
      "Use that interpretation as if it were the only meaning.",
    ],
    everydayExample: {
      setup: "Headline ambiguity.",
      dialogue: [
        "Headline: “Mayor says protestors can be arrested quickly.”",
        "Reader: “So the mayor wants quick arrests.”",
        "Clarification: The mayor said police can act quickly if arrests are necessary, not that arrests should happen.",
      ],
    },
    seriousExample:
      "A contract clause reads ‘Employees must notify managers of safety issues in writing quickly.’ One party claims ‘quickly’ modifies ‘in writing,’ another claims it modifies ‘notify.’ The dispute hinges on the ambiguous structure, not intent.",
    whyItIsFallacious:
      "The reasoning rides on an unintended grammatical reading rather than the actual intended meaning. It treats ambiguity as evidence.",
    whyPeopleUseIt:
      "Ambiguous phrasing can create sensational headlines, allow plausible deniability, or sway audiences who skim.",
    recognitionPoints: [
      "Multiple grammatical readings are possible.",
      "Punctuation or word order is unusually awkward.",
      "Clarifying the syntax collapses the supposed evidence.",
    ],
    responseStrategies: [
      "Rewrite the statement clearly and check whether the argument still holds.",
      "Ask which specific interpretation is intended and why.",
      "Seek original context or author clarification.",
    ],
    severity: "Low",
    typeLabel: "Ambiguity fallacy",
    typicalContexts: ["Media", "Legal writing", "Debate"],
    relatedSlugs: ["equivocation", "accent-fallacy", "strawman"],
    seoTitle: "Amphiboly – Logical Fallacies Guide",
    seoDescription:
      "Amphiboly uses grammatically ambiguous statements to mislead. Learn the pattern and how to clarify it.",
  },
  {
    slug: "appeal-to-authority",
    name: "Appeal to Authority (Argument from Authority)",
    category: categoryMap.relevance,
    alsoKnownAs: ["Argumentum ad verecundiam"],
    shortDefinition:
      "Treats a claim as true solely because an authority or expert said so.",
    explanation:
      "Appeals to authority can be informative, but become fallacious when the authority’s credibility, domain, or consensus is absent. The argument substitutes an expert’s word for evidence.",
    pattern: [
      "Cite an authority who states claim X.",
      "Provide little or no relevant evidence.",
      "Treat the authority’s word as sufficient proof that X is true.",
    ],
    everydayExample: {
      setup: "Choosing a diet.",
      dialogue: [
        "A: This influencer says this supplement fixes everything.",
        "B: Which studies back it? Fame isn’t evidence.",
      ],
    },
    seriousExample:
      "A corporation cites a paid consultant’s opinion as proof of safety, despite lack of peer-reviewed research or regulatory consensus.",
    whyItIsFallacious:
      "Expert opinion without supporting evidence or proper domain expertise does not establish truth. Even real experts can disagree or be biased.",
    whyPeopleUseIt:
      "Borrowing credibility is fast, feels authoritative, and can bypass the need to supply data.",
    recognitionPoints: [
      "Source is cited instead of evidence.",
      "Expert is outside their domain or lacks consensus support.",
      "No attempt is made to engage with data or counter-evidence.",
    ],
    responseStrategies: [
      "Ask for evidence and domain-relevant credentials.",
      "Check whether there is consensus or significant dispute.",
      "Separate opinion from data and request primary sources.",
    ],
    severity: "Medium",
    typeLabel: "Relevance fallacy",
    typicalContexts: ["Marketing", "Media", "Workplace decisions"],
    relatedSlugs: [
      "false-authority",
      "appeal-to-popularity",
      "appeal-to-common-practice",
    ],
    seoTitle: "Appeal to Authority – Logical Fallacies Guide",
    seoDescription:
      "Appeal to authority treats an expert’s word as proof without evidence. See when authority helps—and when it misleads.",
  },
  {
    slug: "appeal-to-common-practice",
    name: "Appeal to Common Practice",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: ["Argumentum ad populum (practice)"],
    shortDefinition:
      "Claims something is acceptable or correct because many people do it.",
    explanation:
      "The argument treats widespread behavior as justification for its correctness. Popularity of a practice does not guarantee it is rational, ethical, or effective.",
    pattern: [
      "Note that many people do or believe X.",
      "Infer that X is acceptable or correct because it is common.",
      "Ignore evidence about X’s merits or harms.",
    ],
    everydayExample: {
      setup: "Office policy debate.",
      dialogue: [
        "A: Everyone fudges hours a bit. It’s normal.",
        "B: Normal doesn’t make it right or productive.",
      ],
    },
    seriousExample:
      "A company defends a dangerous manufacturing shortcut because ‘the whole industry does it,’ without addressing safety data.",
    whyItIsFallacious:
      "Prevalence does not equal justification. Practices can be widespread due to habit, incentives, or misinformation, not because they are correct.",
    whyPeopleUseIt:
      "It leverages social proof and reduces the need to defend substance. It also reduces perceived risk by hiding in the crowd.",
    recognitionPoints: [
      "Justification rests on how common something is, not on evidence.",
      "Counter-evidence about harm or inefficacy is ignored.",
      "Mentions of “everyone does it” replace reasons.",
    ],
    responseStrategies: [
      "Ask for evidence of effectiveness or ethics, independent of popularity.",
      "Provide examples where common practices were wrong or harmful.",
      "Reframe to evaluation criteria: outcomes, safety, legality, fairness.",
    ],
    severity: "Medium",
    typeLabel: "Rhetorical appeal",
    typicalContexts: ["Workplace", "Marketing", "Policy debates"],
    relatedSlugs: [
      "appeal-to-popularity",
      "appeal-to-tradition",
      "appeal-to-authority",
    ],
    seoTitle: "Appeal to Common Practice – Logical Fallacies Guide",
    seoDescription:
      "Appeal to common practice claims something is right because it’s widespread. Learn why prevalence is not proof.",
  },
  {
    slug: "appeal-to-complexity",
    name: "Appeal to Complexity",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: ["Complexity Fallacy"],
    shortDefinition:
      "Dismisses critique by claiming the issue is too complex to resolve or understand.",
    explanation:
      "Instead of addressing evidence, the speaker claims the topic is uniquely complex, implying that analysis or judgment is futile. Complexity can be real, but using it to avoid scrutiny is evasive.",
    pattern: [
      "Raise or face a challenge about issue X.",
      "Assert X is too complex to judge or fix.",
      "Use that claim to avoid providing reasons or solutions.",
    ],
    everydayExample: {
      setup: "Team metrics review.",
      dialogue: [
        "A: Why are outages increasing?",
        "B: It’s complicated; no one can really say.",
      ],
    },
    seriousExample:
      "When questioned about biased outcomes, an organization responds, ‘The system is highly complex; it’s impossible to attribute causes,’ without presenting any analysis.",
    whyItIsFallacious:
      "Complexity alone does not negate the need for evidence or evaluation. The move dodges engagement with available data or potential improvements.",
    whyPeopleUseIt:
      "It provides a face-saving escape from accountability and can sound sophisticated while withholding substance.",
    recognitionPoints: [
      "Complexity is cited without attempts to analyze or provide partial answers.",
      "Used to shut down inquiry rather than propose measurement or testing.",
      "No follow-up to break the issue into tractable parts.",
    ],
    responseStrategies: [
      "Ask for specific unknowns and what data could reduce uncertainty.",
      "Break the problem into smaller questions and request evidence per part.",
      "Highlight examples where similarly complex systems were analyzed successfully.",
    ],
    severity: "Medium",
    typeLabel: "Rhetorical appeal",
    typicalContexts: ["Policy debates", "Corporate comms", "Technology"],
    relatedSlugs: ["appeal-to-ignorance", "red-herring", "smokescreen"],
    seoTitle: "Appeal to Complexity – Logical Fallacies Guide",
    seoDescription:
      "Appeal to complexity claims an issue is too complex to judge, sidestepping evidence. See how to spot and counter it.",
  },
  {
    slug: "appeal-to-consequences",
    name: "Appeal to Consequences",
    category: categoryMap.relevance,
    alsoKnownAs: ["Argumentum ad consequentiam"],
    shortDefinition:
      "Argues a claim is true or false based on desirable or undesirable outcomes.",
    explanation:
      "Instead of evaluating evidence for truth, the appeal to consequences treats the pleasantness or unpleasantness of a result as proof. It confuses what would be convenient with what is real.",
    pattern: [
      "Claim X would lead to a pleasing or frightening outcome.",
      "Conclude X must be true (or false) because of that outcome.",
      "Skip evidence about X itself.",
    ],
    everydayExample: {
      setup: "Diet discussion.",
      dialogue: [
        "A: If this supplement worked, losing weight would be easy. So it must work.",
        "B: Ease doesn’t prove effectiveness—show me the data.",
      ],
    },
    seriousExample:
      "Policy advocates claim a surveillance law must be effective because it would make people safer, without presenting evidence of actual efficacy.",
    whyItIsFallacious:
      "Desirability of an outcome does not determine truth. Evidence must show whether the claim holds, independent of how we feel about the consequences.",
    whyPeopleUseIt:
      "Appealing to hopes or fears is persuasive and shifts focus away from proof.",
    recognitionPoints: [
      "Conclusions rest on how good or bad an outcome would feel.",
      "Little to no evidence about the claim’s truth is provided.",
      "The argument swaps facts for wishes or alarms.",
    ],
    responseStrategies: [
      "Ask for evidence of truth separate from the outcome’s desirability.",
      "Clarify that wanting or fearing something does not make it real.",
      "Request data on actual effectiveness rather than hypothetical benefits.",
    ],
    severity: "Medium",
    typeLabel: "Relevance fallacy",
    typicalContexts: ["Debate", "Policy", "Marketing"],
    relatedSlugs: ["appeal-to-emotion", "appeal-to-fear", "appeal-to-nature"],
    seoTitle: "Appeal to Consequences – Logical Fallacies Guide",
    seoDescription:
      "Appeal to consequences claims a belief is true or false because of desirable or undesirable outcomes. Learn to separate truth from wishes.",
  },
  {
    slug: "appeal-to-emotion",
    name: "Appeal to Emotion",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: ["Emotional Appeal"],
    shortDefinition:
      "Leans on feelings like fear, pity, or pride instead of reasons.",
    explanation:
      "Emotion can be relevant, but appeals to emotion replace evidence with feelings. The tactic makes agreement feel virtuous or urgent while bypassing evaluation.",
    pattern: [
      "Present a vivid emotional trigger.",
      "Link accepting the claim with feeling better or avoiding guilt.",
      "Offer little or no supporting evidence.",
    ],
    everydayExample: {
      setup: "A subscription upsell.",
      dialogue: [
        "Sales page: “Imagine losing all your memories. Upgrade now to protect them forever.”",
      ],
    },
    seriousExample:
      "A politician argues for sweeping surveillance by invoking fear of rare attacks without presenting proportional risk data.",
    whyItIsFallacious:
      "Feelings alone cannot establish truth. They can be genuine yet unrelated to whether the claim is supported.",
    whyPeopleUseIt:
      "Emotion is fast, memorable, and can short-circuit scrutiny, especially under time pressure.",
    recognitionPoints: [
      "Strong emotional language with thin evidence.",
      "Fear, pride, or pity framed as the main reason to agree.",
      "Urgency or moral pressure replacing analysis.",
    ],
    responseStrategies: [
      "Acknowledge feelings, then request concrete evidence.",
      "Ask how the emotional point supports the claim's truth.",
      "Slow down the pace to separate facts from feelings.",
    ],
    severity: "Medium",
    typeLabel: "Rhetorical appeal",
    typicalContexts: ["Marketing", "Politics", "Fundraising"],
    relatedSlugs: ["appeal-to-popularity", "slippery-slope"],
    seoTitle: "Appeal to Emotion – Logical Fallacies Guide",
    seoDescription:
      "Appeal to emotion substitutes feelings for evidence. Learn the signs, dialogue examples, and ways to respond.",
  },
  {
    slug: "appeal-to-fear",
    name: "Appeal to Fear",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: ["Argumentum ad metum", "Scare Tactics"],
    shortDefinition:
      "Uses frightening scenarios to secure agreement instead of offering evidence.",
    explanation:
      "By emphasizing threats or dire outcomes, the argument pressures acceptance without showing that the fear is well-founded. It can exaggerate risks or skip likelihood entirely.",
    pattern: [
      "Present a threatening or alarming scenario.",
      "Claim the proposal will avoid the threat.",
      "Offer little evidence that the threat is real or that the proposal works.",
    ],
    everydayExample: {
      setup: "Selling home security.",
      dialogue: [
        "A: Break-ins are skyrocketing; without our system you’re unsafe.",
        "B: Do you have local stats or just scary anecdotes?",
      ],
    },
    seriousExample:
      "A policy pitch claims that without broad surveillance, catastrophic attacks are inevitable, without presenting proportional risk data or effectiveness studies.",
    whyItIsFallacious:
      "Fear can be relevant, but fear alone is not evidence. The argument replaces probability and evidence with emotional urgency.",
    whyPeopleUseIt:
      "Fear is a strong motivator; it can override careful thinking and speed decisions.",
    recognitionPoints: [
      "Emphasis on worst-case scenarios without likelihoods.",
      "Thin or absent evidence that the threat is real or mitigated by the proposal.",
      "Calls for urgent action because of fear, not data.",
    ],
    responseStrategies: [
      "Request likelihoods and evidence for both the threat and the remedy.",
      "Distinguish between possible and probable outcomes.",
      "Calibrate responses to proportional risk, not just vivid fears.",
    ],
    severity: "Medium",
    typeLabel: "Rhetorical appeal",
    typicalContexts: ["Politics", "Marketing", "Media"],
    relatedSlugs: [
      "appeal-to-emotion",
      "slippery-slope",
      "appeal-to-consequences",
    ],
    seoTitle: "Appeal to Fear – Logical Fallacies Guide",
    seoDescription:
      "Appeal to fear uses frightening scenarios to force agreement instead of evidence. Learn to calibrate risk and respond.",
  },
  {
    slug: "strawman",
    name: "Strawman",
    category: categoryMap.relevance,
    alsoKnownAs: ["Caricature"],
    shortDefinition: "Misrepresents an argument so it is easier to attack.",
    explanation:
      "A strawman replaces the real position with a weaker, exaggerated, or absurd version. The speaker then defeats this easier target and claims the original view has been rebutted.",
    pattern: [
      "Simplify or distort an opponent's claim.",
      "Attack the distorted version.",
      "Treat that victory as a refutation of the original claim.",
    ],
    everydayExample: {
      setup: "Someone suggests moderate budget trims.",
      dialogue: [
        "A: “Let’s trim 5% of travel spend.”",
        "B: “So you want to ban all conferences? That will kill learning.”",
      ],
    },
    seriousExample:
      "A researcher proposes cautious AI regulation; critics respond by claiming the researcher wants to “ban all innovation,” avoiding the actual proposal.",
    whyItIsFallacious:
      "Refuting an invented claim does not address the genuine argument. The apparent win is irrelevant to the real position.",
    whyPeopleUseIt:
      "It is easier to defeat a caricature than a nuanced view, and the audience may not notice the swap.",
    recognitionPoints: [
      "The rebuttal answers a claim nobody actually made.",
      "Key qualifiers or context are removed from the original statement.",
      "The opponent’s position is described in extreme terms before being attacked.",
    ],
    responseStrategies: [
      "Restate your position plainly and correct distortions.",
      "Ask critics to quote specific wording and respond to that.",
      "Invite engagement with your strongest version, not the weakest.",
    ],
    severity: "Medium",
    typeLabel: "Logical fallacy",
    typicalContexts: ["Debate", "Media", "Everyday conversation"],
    relatedSlugs: ["red-herring", "gish-gallop"],
    seoTitle: "Strawman Fallacy – Logical Fallacies Guide",
    seoDescription:
      "A strawman distorts an argument to knock it down. See the pattern, dialogue examples, and ways to respond.",
  },
  {
    slug: "red-herring",
    name: "Red Herring",
    category: categoryMap.relevance,
    alsoKnownAs: ["Distraction"],
    shortDefinition:
      "Introduces an irrelevant point to divert attention from the issue.",
    explanation:
      "Red herrings insert a side topic—often emotional or sensational—to pull attention away from the original claim. The conversation feels active but drifts off track.",
    pattern: [
      "A main claim is on the table.",
      "A new, tangential issue is raised.",
      "The discussion follows the tangent instead of the claim.",
    ],
    everydayExample: {
      setup: "A team reviews missed deadlines.",
      dialogue: [
        "A: “Why did we slip the release date?”",
        "B: “Other teams have worse delays. Let's talk about their processes.”",
      ],
    },
    seriousExample:
      "During a hearing on police accountability, a speaker pivots to rising street crime, avoiding questions about misconduct reports.",
    whyItIsFallacious:
      "The new topic does not provide evidence for or against the original claim. It only distracts from evaluating it.",
    whyPeopleUseIt:
      "Distractions are easier than defending a weak position and can steer the audience into friendlier territory.",
    recognitionPoints: [
      "A sudden topic shift that does not answer the question.",
      "Emotional anecdotes appear where evidence was requested.",
      "The original issue is left unresolved after the detour.",
    ],
    responseStrategies: [
      "Name the diversion and restate the original question.",
      "Promise to address the side topic later and return to the claim.",
      "Ask how the new point directly relates to the claim at hand.",
    ],
    severity: "Medium",
    typeLabel: "Logical fallacy",
    typicalContexts: ["Debate", "Media", "Everyday conversation"],
    relatedSlugs: ["ad-hominem", "gish-gallop"],
    seoTitle: "Red Herring Fallacy – Logical Fallacies Guide",
    seoDescription:
      "A red herring diverts attention with an irrelevant point. Learn how to spot the pattern and keep the discussion on track.",
  },
  {
    slug: "appeal-to-popularity",
    name: "Appeal to Popularity",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: ["Bandwagon"],
    shortDefinition:
      "Claims something is true or good because many people believe it.",
    explanation:
      "Consensus can suggest what people prefer, but it is not proof of truth. Appeals to popularity turn headcount into evidence and pressure agreement through social belonging.",
    pattern: [
      "State that many people believe or do X.",
      "Treat that popularity as sufficient evidence for X.",
      "Invite agreement to avoid being an outsider.",
    ],
    everydayExample: {
      setup: "Choosing a productivity tool at work.",
      dialogue: [
        "A: “We should evaluate options.”",
        "B: “Everyone uses Tool Y. It must be the best; let's just adopt it.”",
      ],
    },
    seriousExample:
      "A municipality justifies surveillance tech by noting that 'hundreds of cities use it,' without presenting privacy or efficacy data.",
    whyItIsFallacious:
      "Popularity does not guarantee truth or quality. People can widely accept harmful or false ideas.",
    whyPeopleUseIt:
      "Social proof feels persuasive and avoids the effort of providing evidence.",
    recognitionPoints: [
      "Headcounts or trends are treated as proof.",
      "The argument leans on fear of missing out or isolation.",
      "Little to no supporting evidence accompanies the popularity claim.",
    ],
    responseStrategies: [
      "Ask for evidence beyond how many people agree.",
      "Highlight cases where popular beliefs were wrong.",
      "Refocus on criteria relevant to the decision, not crowd size.",
    ],
    severity: "Medium",
    typeLabel: "Logical fallacy",
    typicalContexts: ["Debate", "Media", "Everyday conversation"],
    relatedSlugs: ["appeal-to-emotion", "false-dichotomy"],
    seoTitle: "Appeal to Popularity – Logical Fallacies Guide",
    seoDescription:
      "Appeal to popularity treats consensus as proof. See examples, the pattern, and quick counters.",
  },
  {
    slug: "appeal-to-flattery",
    name: "Appeal to Flattery",
    category: categoryMap.relevance,
    alsoKnownAs: ["Apple Polishing"],
    shortDefinition:
      "Flatters the audience or decision maker to win approval instead of providing reasons.",
    explanation:
      "By offering compliments or praise, the argument attempts to lower scrutiny and secure agreement. The positive feelings toward the audience are substituted for evidence about the claim.",
    pattern: [
      "Offer praise or compliments.",
      "Link agreement with maintaining that positive regard.",
      "Provide little to no supporting evidence.",
    ],
    everydayExample: {
      setup: "Workplace request.",
      dialogue: [
        "A: You’re the most visionary manager here—you’ll approve my budget, right?",
      ],
    },
    seriousExample:
      "A consultant flatters a board about their sophistication to gain approval for an unvetted project.",
    whyItIsFallacious:
      "Compliments do not bear on the truth or quality of the claim. They are irrelevant to whether the reasoning is sound.",
    whyPeopleUseIt:
      "Flattery lowers defenses, creates reciprocity pressure, and can distract from weak substance.",
    recognitionPoints: [
      "Unrelated compliments precede a request or claim.",
      "Little evidence accompanies the praise.",
      "Agreement seems tied to maintaining the flattering tone.",
    ],
    responseStrategies: [
      "Acknowledge the compliment and redirect to evidence.",
      "Ask for concrete reasons independent of personal praise.",
      "Separate feelings about the audience from evaluation of the claim.",
    ],
    severity: "Low",
    typeLabel: "Relevance fallacy",
    typicalContexts: ["Sales", "Workplace", "Politics"],
    relatedSlugs: ["appeal-to-emotion", "appeal-to-popularity"],
    seoTitle: "Appeal to Flattery – Logical Fallacies Guide",
    seoDescription:
      "Appeal to flattery swaps praise for proof. See how to spot it and keep the focus on evidence.",
  },
  {
    slug: "appeal-to-ignorance",
    name: "Appeal to Ignorance",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: ["Argument from Ignorance"],
    shortDefinition:
      "Claims something is true because it hasn’t been proven false, or false because it hasn’t been proven true.",
    explanation:
      "The argument treats lack of disconfirming evidence as evidence of truth. It shifts the burden of proof to skeptics rather than supplying support.",
    pattern: [
      "Note absence of disproof or proof.",
      "Use that absence as evidence for a conclusion.",
      "Avoid providing positive support.",
    ],
    everydayExample: {
      setup: "New product claim.",
      dialogue: [
        "A: No one has shown this supplement doesn’t work, so it probably does.",
      ],
    },
    seriousExample:
      "A policy is called safe because ‘no reports of harm have surfaced,’ despite limited monitoring and disclosure.",
    whyItIsFallacious:
      "Absence of evidence is not evidence of truth. Lack of disproof can stem from poor testing, hidden data, or genuine uncertainty.",
    whyPeopleUseIt:
      "It is easier to demand disproof than to present evidence, and uncertainty can be leveraged as implicit support.",
    recognitionPoints: [
      "Claims rest on what has not been shown.",
      "Burden of proof is shifted away from the claimant.",
      "No effort is made to gather affirmative evidence.",
    ],
    responseStrategies: [
      "Clarify who bears the burden of proof.",
      "Ask for positive evidence supporting the claim.",
      "Differentiate between unknown and proven.",
    ],
    severity: "Medium",
    typeLabel: "Rhetorical appeal",
    typicalContexts: ["Pseudoscience", "Conspiracy claims", "Marketing"],
    relatedSlugs: [
      "appeal-to-complexity",
      "begging-the-question",
      "appeal-to-consequences",
    ],
    seoTitle: "Appeal to Ignorance – Logical Fallacies Guide",
    seoDescription:
      "Appeal to ignorance claims a statement is true because it’s unproven false. Learn why missing evidence isn’t proof.",
  },
  {
    slug: "appeal-to-motive",
    name: "Appeal to Motive",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: ["Questioning Motives"],
    shortDefinition:
      "Dismisses a claim by attacking or speculating about the speaker’s motives instead of the evidence.",
    explanation:
      "Rather than address the reasoning, this move suggests the speaker’s hidden motive undermines the argument. Whether or not a motive exists, the claim still needs to be tested on its merits.",
    pattern: [
      "Claim X is presented.",
      "Accuse the speaker of having a suspect motive for X.",
      "Treat that motive as grounds to reject X without evaluating evidence.",
    ],
    everydayExample: {
      setup: "Team process change.",
      dialogue: [
        "A: We should add code reviews.",
        "B: You just want more control. That’s why you’re pushing this.",
      ],
    },
    seriousExample:
      "Data about pollution is dismissed because the presenter ‘probably hates industry,’ rather than addressing the data itself.",
    whyItIsFallacious:
      "Motives do not determine the truth of a claim. Even biased speakers can present accurate evidence.",
    whyPeopleUseIt:
      "It’s a shortcut to discredit arguments without engaging with substance and can sow distrust in the speaker.",
    recognitionPoints: [
      "Focus shifts to why the person might say it, not whether it is true.",
      "No engagement with premises, data, or logic.",
      "Speculation about intent substitutes for rebuttal.",
    ],
    responseStrategies: [
      "Acknowledge potential motives, then return to the evidence.",
      "Ask for critique of the claim’s content, not the claimant.",
      "Separate message evaluation from messenger speculation.",
    ],
    severity: "Medium",
    typeLabel: "Rhetorical appeal",
    typicalContexts: ["Debate", "Politics", "Workplace"],
    relatedSlugs: ["ad-hominem", "poisoning-the-well", "appeal-to-ignorance"],
    seoTitle: "Appeal to Motive – Logical Fallacies Guide",
    seoDescription:
      "Appeal to motive dismisses claims by attacking intentions instead of evidence. Learn to keep focus on substance.",
  },
  {
    slug: "appeal-to-nature",
    name: "Appeal to Nature",
    category: categoryMap.relevance,
    alsoKnownAs: ["Naturalistic Appeal"],
    shortDefinition:
      "Claims something is good or true because it is natural, or bad because it is unnatural.",
    explanation:
      "The argument equates ‘natural’ with ‘good’ and ‘unnatural’ with ‘bad’ without justification. Many natural things are harmful, and many synthetic things are beneficial.",
    pattern: [
      "Label X as natural or unnatural.",
      "Infer that X is therefore good or bad.",
      "Skip evidence about X’s actual effects.",
    ],
    everydayExample: {
      setup: "Product marketing.",
      dialogue: [
        "A: This remedy is all-natural, so it’s automatically safe.",
        "B: Natural doesn’t guarantee safety—what evidence do we have?",
      ],
    },
    seriousExample:
      "Policy arguments claim a practice is justified because it aligns with ‘nature,’ ignoring ethical and empirical considerations.",
    whyItIsFallacious:
      "Nature alone is not a reliable guide to value or truth. The argument commits an is–ought or ought–is leap without evidence.",
    whyPeopleUseIt:
      "It leverages intuitive bias toward the ‘natural’ and bypasses the need to demonstrate safety or effectiveness.",
    recognitionPoints: [
      "Value judgments tied to natural/unnatural labels.",
      "No supporting evidence about outcomes or risks.",
      "Language romanticizes nature rather than testing claims.",
    ],
    responseStrategies: [
      "Ask for data on safety, efficacy, or impacts.",
      "Offer examples of harmful natural things and beneficial synthetic ones.",
      "Separate marketing language from measurable outcomes.",
    ],
    severity: "Medium",
    typeLabel: "Relevance fallacy",
    typicalContexts: ["Marketing", "Diet/health claims", "Ethics debates"],
    relatedSlugs: [
      "appeal-to-consequences",
      "moralistic-fallacy",
      "naturalistic-fallacy",
    ],
    seoTitle: "Appeal to Nature – Logical Fallacies Guide",
    seoDescription:
      "Appeal to nature claims something is good because it’s natural. Learn why ‘natural’ isn’t proof and how to respond.",
  },
  {
    slug: "appeal-to-novelty",
    name: "Appeal to Novelty",
    category: categoryMap.relevance,
    alsoKnownAs: ["Argumentum ad novitatem"],
    shortDefinition:
      "Argues something is better or truer because it is new or innovative.",
    explanation:
      "Newness does not guarantee validity or quality. The fallacy assumes recent ideas or products are superior solely due to recency.",
    pattern: [
      "Introduce X as new or innovative.",
      "Infer that X is therefore superior or correct.",
      "Provide little evidence beyond recency.",
    ],
    everydayExample: {
      setup: "Tool selection.",
      dialogue: [
        "A: This is the latest framework, so it must be the best choice.",
        "B: What about stability, support, and suitability?",
      ],
    },
    seriousExample:
      "A policy is sold as ‘modern and forward-looking’ without data on efficacy or unintended consequences.",
    whyItIsFallacious:
      "Recency is not evidence of merit. New ideas can be better—or untested and risky.",
    whyPeopleUseIt:
      "It taps into a bias toward innovation and signals progressiveness, sidestepping the need for proof.",
    recognitionPoints: [
      "Superiority is tied to being ‘new’, ‘modern’, or ‘disruptive’.",
      "Evidence about performance is thin or absent.",
      "Older alternatives are dismissed without evaluation.",
    ],
    responseStrategies: [
      "Ask for comparative evidence on outcomes or performance.",
      "Consider stability, support, and trade-offs alongside innovation.",
      "Distinguish marketing buzz from tested benefits.",
    ],
    severity: "Low",
    typeLabel: "Relevance fallacy",
    typicalContexts: ["Marketing", "Tech adoption", "Policy pitches"],
    relatedSlugs: [
      "appeal-to-popularity",
      "appeal-to-tradition",
      "appeal-to-consequences",
    ],
    seoTitle: "Appeal to Novelty – Logical Fallacies Guide",
    seoDescription:
      "Appeal to novelty claims something is better because it’s new. See why recency isn’t proof and how to evaluate claims.",
  },
  {
    slug: "appeal-to-pity",
    name: "Appeal to Pity",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: ["Argumentum ad misericordiam"],
    shortDefinition:
      "Seeks agreement by invoking sympathy rather than offering relevant reasons.",
    explanation:
      "The argument leverages compassion to secure acceptance when evidence is lacking. While empathy can be relevant, it becomes fallacious when empathy replaces justification.",
    pattern: [
      "Present a situation designed to evoke pity.",
      "Link agreement with relieving that pity.",
      "Provide little evidence that the claim is true or action is justified.",
    ],
    everydayExample: {
      setup: "Excusing missed work.",
      dialogue: [
        "A: I know the report is late, but I’ve had a tough week—please approve it anyway.",
      ],
    },
    seriousExample:
      "A fundraising claim promises miracle cures for sick children without medical evidence, leaning entirely on emotional stories.",
    whyItIsFallacious:
      "Feeling sorry for someone does not establish the truth of a claim or the effectiveness of a proposal.",
    whyPeopleUseIt:
      "It leverages compassion to bypass scrutiny and create moral pressure to agree.",
    recognitionPoints: [
      "Emotional hardship is emphasized while evidence is sparse.",
      "Agreement is framed as the compassionate choice.",
      "Logical relevance of the pity appeal to the claim is weak.",
    ],
    responseStrategies: [
      "Acknowledge feelings, then ask for relevant evidence.",
      "Separate compassion from verification of claims.",
      "Suggest ways to help that do not bypass due diligence.",
    ],
    severity: "Medium",
    typeLabel: "Rhetorical appeal",
    typicalContexts: ["Fundraising", "Excuses", "Policy debates"],
    relatedSlugs: [
      "appeal-to-emotion",
      "appeal-to-consequences",
      "appeal-to-fear",
    ],
    seoTitle: "Appeal to Pity – Logical Fallacies Guide",
    seoDescription:
      "Appeal to pity uses sympathy in place of evidence. Learn to separate compassion from claim evaluation.",
  },
  {
    slug: "appeal-to-ridicule",
    name: "Appeal to Ridicule",
    category: categoryMap.relevance,
    alsoKnownAs: ["Mockery", "Horse Laugh"],
    shortDefinition:
      "Mocks a claim to make it seem absurd instead of addressing its merits.",
    explanation:
      "Ridicule can make an argument look silly without showing it is wrong. The tactic uses laughter or derision as a substitute for refutation.",
    pattern: [
      "Present or paraphrase a claim.",
      "Mock or deride the claim to provoke laughter.",
      "Treat the ridicule as if it disproves the claim.",
    ],
    everydayExample: {
      setup: "New process suggestion.",
      dialogue: [
        "A: Let’s add code reviews to improve quality.",
        "B: Oh sure, and let’s all hold hands and sing while we’re at it.",
      ],
    },
    seriousExample:
      "A public health recommendation is mocked on talk radio with jokes and sarcasm, replacing discussion of the underlying data.",
    whyItIsFallacious:
      "Humor and derision do not address whether premises support the conclusion. They can bias audiences without engaging evidence.",
    whyPeopleUseIt:
      "Mockery is fast, memorable, and can sway audiences emotionally, creating social pressure to reject the target claim.",
    recognitionPoints: [
      "Laughter or scorn substitutes for reasoning.",
      "No engagement with data or logic, just tone.",
      "Audience is nudged to feel foolish for considering the claim.",
    ],
    responseStrategies: [
      "Request a substantive reason beyond mockery.",
      "Restate the claim plainly and ask for engagement with its evidence.",
      "Note that tone doesn’t test truth.",
    ],
    severity: "Medium",
    typeLabel: "Relevance fallacy",
    typicalContexts: ["Debate", "Media commentary", "Online discourse"],
    relatedSlugs: ["appeal-to-emotion", "strawman", "appeal-to-spite"],
    seoTitle: "Appeal to Ridicule – Logical Fallacies Guide",
    seoDescription:
      "Appeal to ridicule mocks a claim instead of refuting it. Learn to separate jokes from justification.",
  },
  {
    slug: "appeal-to-spite",
    name: "Appeal to Spite",
    category: categoryMap.relevance,
    alsoKnownAs: [],
    shortDefinition:
      "Leverages resentment or bitterness to win agreement rather than reasoned support.",
    explanation:
      "The argument encourages rejection or acceptance of a claim because it feels satisfying to act against someone or something, not because evidence supports the stance.",
    pattern: [
      "Invoke feelings of resentment or bitterness.",
      "Tie agreement to indulging that spite.",
      "Provide little evidence for the claim itself.",
    ],
    everydayExample: {
      setup: "Office rivalry.",
      dialogue: [
        "A: Don’t support her proposal; remember how she criticized your work.",
      ],
    },
    seriousExample:
      "Policy support is rallied by focusing on disdain for an out-group, with minimal discussion of the policy’s merits.",
    whyItIsFallacious:
      "Resentment does not validate or invalidate claims. Decisions based on spite ignore whether the reasoning is sound.",
    whyPeopleUseIt:
      "Spite can be a strong motivator, especially in polarized settings, and can override careful evaluation.",
    recognitionPoints: [
      "Appeals to anger or bitterness replace evidence.",
      "Focus on punishing or getting back at someone rather than evaluating claims.",
      "Thin or absent reasoning apart from emotional payoff.",
    ],
    responseStrategies: [
      "Separate personal feelings from the claim’s merits.",
      "Ask for evidence or clear benefits independent of resentment.",
      "Reframe decisions around outcomes, not payback.",
    ],
    severity: "Medium",
    typeLabel: "Relevance fallacy",
    typicalContexts: ["Politics", "Workplace conflict", "Online feuds"],
    relatedSlugs: ["appeal-to-emotion", "appeal-to-ridicule", "ad-hominem"],
    seoTitle: "Appeal to Spite – Logical Fallacies Guide",
    seoDescription:
      "Appeal to spite uses resentment instead of reasons. Learn to spot the motive and ask for evidence.",
  },
  {
    slug: "appeal-to-tradition",
    name: "Appeal to Tradition",
    category: categoryMap.relevance,
    alsoKnownAs: ["Argumentum ad antiquitatem"],
    shortDefinition:
      "Claims something is correct or better because it has been done or believed for a long time.",
    explanation:
      "Longevity does not guarantee correctness. The fallacy assumes the status quo is justified simply by age, ignoring evidence of effectiveness or harm.",
    pattern: [
      "Note that practice/belief X is longstanding.",
      "Infer that X is correct or superior because of its age.",
      "Provide little evidence beyond tradition.",
    ],
    everydayExample: {
      setup: "Process change.",
      dialogue: [
        "A: We’ve always done it this way; no need to change.",
        "B: Tradition isn’t proof it’s the best approach.",
      ],
    },
    seriousExample:
      "A policy is defended solely because it is ‘heritage’ or ‘custom,’ despite evidence it underperforms alternatives.",
    whyItIsFallacious:
      "Time alone does not validate a claim. Many long-held beliefs have been overturned by evidence.",
    whyPeopleUseIt:
      "Tradition offers comfort, identity, and an easy heuristic, reducing the need to engage new evidence.",
    recognitionPoints: [
      "Age of a practice is cited as primary justification.",
      "Alternatives are dismissed because they are newer.",
      "Little data is offered about outcomes or performance.",
    ],
    responseStrategies: [
      "Ask for evidence of effectiveness beyond longevity.",
      "Provide historical cases where long traditions were wrong.",
      "Evaluate practices on criteria like outcomes, safety, and fairness.",
    ],
    severity: "Low",
    typeLabel: "Relevance fallacy",
    typicalContexts: ["Policy", "Workplace processes", "Cultural debates"],
    relatedSlugs: [
      "appeal-to-novelty",
      "appeal-to-popularity",
      "appeal-to-common-practice",
    ],
    seoTitle: "Appeal to Tradition – Logical Fallacies Guide",
    seoDescription:
      "Appeal to tradition claims something is right because it’s old. Learn why longevity isn’t proof and how to respond.",
  },
  {
    slug: "appeal-to-wealth",
    name: "Appeal to Wealth",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: ["Argumentum ad crumenam"],
    shortDefinition:
      "Claims a view is correct because wealthy or successful people hold it, or because it leads to wealth.",
    explanation:
      "Wealth is not evidence of truth. The fallacy treats money or status as proof that an argument is sound, ignoring whether the reasoning or evidence supports the claim.",
    pattern: [
      "Identify wealthy/successful people or outcomes.",
      "Treat wealth as proof that the belief or action is correct.",
      "Skip evaluation of the claim’s evidence.",
    ],
    everydayExample: {
      setup: "Investment advice.",
      dialogue: [
        "A: Billionaires invest in this coin, so it must be safe.",
        "B: Their wealth doesn’t prove the coin is low-risk—what are the fundamentals?",
      ],
    },
    seriousExample:
      "A policy is justified because affluent donors support it, rather than on evidence of effectiveness or fairness.",
    whyItIsFallacious:
      "Wealth can stem from luck, timing, or unrelated factors. Money does not validate argument quality.",
    whyPeopleUseIt:
      "Status signals are persuasive and can short-circuit scrutiny by implying success equals wisdom.",
    recognitionPoints: [
      "Cites wealth or status as primary justification.",
      "Little substantive evidence beyond who holds the view.",
      "Conflates financial success with truth or virtue.",
    ],
    responseStrategies: [
      "Ask for evidence independent of wealth or status.",
      "Highlight cases where wealthy people were wrong.",
      "Refocus on outcomes, data, and logic rather than status.",
    ],
    severity: "Low",
    typeLabel: "Rhetorical appeal",
    typicalContexts: ["Marketing", "Investing", "Policy advocacy"],
    relatedSlugs: [
      "appeal-to-authority",
      "appeal-to-popularity",
      "appeal-to-poverty",
    ],
    seoTitle: "Appeal to Wealth – Logical Fallacies Guide",
    seoDescription:
      "Appeal to wealth treats money or status as proof of correctness. Learn to separate status from evidence.",
  },
  {
    slug: "appeal-to-poverty",
    name: "Appeal to Poverty",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: ["Argumentum ad lazarum"],
    shortDefinition:
      "Claims a view is correct because it is held by the poor or disadvantaged, or because it rejects wealth.",
    explanation:
      "Poverty or lack of status does not validate a claim. The fallacy romanticizes hardship as proof of authenticity or truth.",
    pattern: [
      "Note that someone is poor or lacks status.",
      "Infer their belief or stance is correct because of that condition.",
      "Provide little evidence beyond perceived moral purity.",
    ],
    everydayExample: {
      setup: "Product endorsement.",
      dialogue: [
        "A: This grassroots group has no funding, so their claims must be honest.",
        "B: Low funding doesn’t prove accuracy—what’s their evidence?",
      ],
    },
    seriousExample:
      "A policy is defended as authentic because it comes from ‘the streets,’ without examining its actual impacts or supporting data.",
    whyItIsFallacious:
      "Material circumstances do not determine truth. Romanticizing poverty substitutes narrative for evidence.",
    whyPeopleUseIt:
      "It leverages sympathy, authenticity narratives, and distrust of elites to bypass scrutiny.",
    recognitionPoints: [
      "Hardship or low status is cited as proof.",
      "Evidence is thin beyond moral appeal to simplicity or authenticity.",
      "Opposing views are dismissed as tainted by wealth.",
    ],
    responseStrategies: [
      "Acknowledge context but request evidence for claims.",
      "Separate moral value judgments from factual accuracy.",
      "Evaluate arguments on merits, not socioeconomic status.",
    ],
    severity: "Low",
    typeLabel: "Rhetorical appeal",
    typicalContexts: ["Politics", "Activism", "Marketing"],
    relatedSlugs: [
      "appeal-to-wealth",
      "appeal-to-authority",
      "appeal-to-popularity",
    ],
    seoTitle: "Appeal to Poverty – Logical Fallacies Guide",
    seoDescription:
      "Appeal to poverty claims a view is true because it comes from the poor or rejects wealth. Learn why status doesn’t prove accuracy.",
  },
  {
    slug: "appeal-to-hypocrisy",
    name: "Appeal to Hypocrisy",
    category: categoryMap.relevance,
    alsoKnownAs: ["Tu quoque", "Whataboutism (near variant)"],
    shortDefinition:
      "Rejects a criticism or claim by accusing the speaker of behaving inconsistently, instead of addressing the argument.",
    explanation:
      "Pointing out hypocrisy can expose credibility issues, but it does not refute the claim itself. The fallacy dodges the substance by shifting focus to the speaker’s behavior.",
    pattern: [
      "Receive a claim or criticism.",
      "Accuse the speaker of acting inconsistently.",
      "Treat that accusation as a refutation of the claim.",
    ],
    everydayExample: {
      setup: "Health advice.",
      dialogue: [
        "A: We should exercise more.",
        "B: You never go to the gym, so your advice is worthless.",
      ],
    },
    seriousExample:
      "A government ignores evidence of rights violations by pointing to unrelated abuses elsewhere, implying its actions are justified.",
    whyItIsFallacious:
      "Inconsistency of the speaker does not invalidate the claim’s truth. Claims must be assessed on evidence, not on the claimant’s conduct.",
    whyPeopleUseIt:
      "It deflects blame, avoids self-scrutiny, and can rally supporters by highlighting perceived double standards.",
    recognitionPoints: [
      "Focus shifts to the speaker’s behavior, not the claim.",
      "No evidence is offered against the original argument.",
      "Accusations of hypocrisy stand in for refutation.",
    ],
    responseStrategies: [
      "Separate the claim from the claimant’s behavior.",
      "Acknowledge hypocrisy if present, then return to the evidence.",
      "Ask for direct engagement with the original argument.",
    ],
    severity: "Medium",
    typeLabel: "Relevance fallacy",
    typicalContexts: ["Politics", "Debate", "Workplace feedback"],
    relatedSlugs: ["ad-hominem", "whataboutism", "appeal-to-motive"],
    seoTitle: "Appeal to Hypocrisy – Logical Fallacies Guide",
    seoDescription:
      "Appeal to hypocrisy (tu quoque) dodges a claim by pointing out inconsistency. Learn to keep focus on evidence.",
  },
  {
    slug: "appeal-to-wealth-or-poverty",
    name: "Appeal to Wealth or Poverty",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: ["Status Appeal"],
    shortDefinition:
      "Treats being rich or poor as proof that a claim is right, combining appeals to wealth and poverty.",
    explanation:
      "Both wealth and poverty appeals substitute status for evidence. This entry highlights the combined pattern: status—high or low—is irrelevant to truth.",
    pattern: [
      "Identify someone as rich or poor.",
      "Use that status to argue their claim is true or false.",
      "Ignore evidence about the claim itself.",
    ],
    everydayExample: {
      setup: "Lifestyle advice.",
      dialogue: [
        "A: She’s wealthy, so her health advice must be right.",
        "B: Or he’s struggling; that makes his view pure. Either way, where’s the data?",
      ],
    },
    seriousExample:
      "Policy arguments cite either elite backers or grassroots poverty as proof, without supplying outcome data.",
    whyItIsFallacious:
      "Status—high or low—does not validate claims. Evidence, reasoning, and outcomes do.",
    whyPeopleUseIt:
      "Status cues persuade quickly and play to biases about authenticity or success.",
    recognitionPoints: [
      "Status invoked as proof of correctness.",
      "Little substance beyond who holds the view.",
      "Romanticizing poverty or valorizing wealth without evidence.",
    ],
    responseStrategies: [
      "Ask for evidence independent of status.",
      "Note examples where status misled about truth.",
      "Refocus on measurable outcomes.",
    ],
    severity: "Low",
    typeLabel: "Rhetorical appeal",
    typicalContexts: ["Marketing", "Politics", "Debate"],
    relatedSlugs: [
      "appeal-to-wealth",
      "appeal-to-poverty",
      "appeal-to-authority",
    ],
    seoTitle: "Appeal to Wealth or Poverty – Logical Fallacies Guide",
    seoDescription:
      "Combined appeal to wealth or poverty uses status as proof. Learn why status cues aren’t evidence.",
  },
  {
    slug: "authority-bias",
    name: "Authority Bias",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: [],
    shortDefinition:
      "Overweights the opinion of authority figures, even outside their expertise or without evidence.",
    explanation:
      "Authority bias is a cognitive shortcut: people give undue credence to perceived authorities. It can distort judgment when authority cues replace evaluation of evidence, especially outside the authority’s domain.",
    pattern: [
      "Encounter a claim from an authority figure.",
      "Accept it with little scrutiny because of their status.",
      "Apply this deference even when evidence is missing or domain is mismatched.",
    ],
    everydayExample: {
      setup: "Tech choice.",
      dialogue: [
        "A: The famous CEO said this tool is the future.",
        "B: Does the tool suit our needs? Status alone isn’t a fit test.",
      ],
    },
    seriousExample:
      "Medical guidance is accepted from a celebrity doctor on topics outside their specialty, leading to poor patient choices.",
    whyItIsFallacious:
      "Status cues can overshadow the need for domain relevance and evidence. Deference can be misplaced and lead to errors.",
    whyPeopleUseIt:
      "It simplifies decisions, feels safe, and leverages social hierarchies.",
    recognitionPoints: [
      "Claims are accepted because of who said them rather than what was said.",
      "Domain relevance of the authority is weak or absent.",
      "Counter-evidence is ignored in favor of status cues.",
    ],
    responseStrategies: [
      "Check domain expertise and evidence.",
      "Compare with consensus among qualified experts.",
      "Separate credibility cues from data evaluation.",
    ],
    severity: "Medium",
    typeLabel: "Cognitive bias",
    typicalContexts: ["Workplace decisions", "Health advice", "Media"],
    relatedSlugs: [
      "appeal-to-authority",
      "appeal-to-popularity",
      "appeal-to-common-practice",
    ],
    seoTitle: "Authority Bias – Logical Fallacies Guide",
    seoDescription:
      "Authority bias overvalues status over evidence. Learn to check domain relevance and data before deferring.",
  },
  {
    slug: "base-rate-fallacy",
    name: "Base Rate Fallacy",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: ["Base Rate Neglect"],
    shortDefinition:
      "Ignores prior probabilities when evaluating new evidence, leading to mistaken conclusions.",
    explanation:
      "When base rates are ignored, even accurate signals can be misinterpreted. Proper reasoning combines prior likelihoods with new data instead of focusing only on the latest evidence.",
    pattern: [
      "Consider a new piece of evidence (e.g., a positive test).",
      "Neglect the overall prevalence/base rate of the condition.",
      "Overestimate or underestimate the true probability.",
    ],
    everydayExample: {
      setup: "Medical screening.",
      dialogue: [
        "A: The test is 95% accurate; my positive result means I definitely have it.",
        "B: If prevalence is very low, many positives will be false—consider the base rate.",
      ],
    },
    seriousExample:
      "A rare-event detector triggers alarms; decision-makers assume most alarms are true, ignoring low base-rate and high false-positive risk.",
    whyItIsFallacious:
      "Evidence must be combined with prior likelihood. Ignoring base rates skews probability judgments.",
    whyPeopleUseIt:
      "Base rates feel abstract; salient evidence feels more tangible and urgent.",
    recognitionPoints: [
      "Probabilities are assessed without reference to prevalence.",
      "High confidence in results despite low base conditions.",
      "Confusion between test accuracy and actual probability.",
    ],
    responseStrategies: [
      "Quantify prevalence and incorporate it into probability estimates.",
      "Use Bayes-style reasoning: prior + likelihood = updated probability.",
      "Provide concrete examples illustrating false positives/negatives.",
    ],
    severity: "Medium",
    typeLabel: "Statistical fallacy",
    typicalContexts: ["Medical testing", "Risk analysis", "Forecasting"],
    relatedSlugs: [
      "prosecutors-fallacy",
      "masked-relationship-fallacy",
      "interpolation-extrapolation-fallacy",
    ],
    seoTitle: "Base Rate Fallacy – Logical Fallacies Guide",
    seoDescription:
      "Base rate fallacy ignores prior probabilities when reading evidence. Learn to combine prevalence with new data.",
  },
  {
    slug: "card-stacking",
    name: "Card Stacking",
    category: categoryMap["debate-tactics"],
    alsoKnownAs: ["Stacking the Deck"],
    shortDefinition:
      "Presents only favorable evidence while ignoring or hiding counter-evidence.",
    explanation:
      "By selectively presenting information, card stacking creates a biased impression. Audiences see only supporting data and miss the full picture needed for sound judgment.",
    pattern: [
      "List supporting points for a claim.",
      "Omit or downplay counter-evidence.",
      "Imply the presented set is complete and decisive.",
    ],
    everydayExample: {
      setup: "Product pitch.",
      dialogue: [
        "A: Look at these three glowing testimonials.",
        "B: Are there independent reviews or return rates? What’s missing?",
      ],
    },
    seriousExample:
      "A political ad highlights only positive metrics of an incumbent and omits recession data and ethics investigations.",
    whyItIsFallacious:
      "Selective evidence distorts reality and prevents balanced evaluation. Conclusions drawn from cherry-picked data can be unreliable.",
    whyPeopleUseIt:
      "It is persuasive, easy to execute, and hard to detect without access to omitted information.",
    recognitionPoints: [
      "Only positives are mentioned; negatives are absent or vaguely dismissed.",
      "Sources are tightly controlled by the advocate.",
      "Requests for contrary data are deflected.",
    ],
    responseStrategies: [
      "Ask for full datasets and opposing evidence.",
      "Cross-check claims with independent sources.",
      "Highlight omissions and present missing context.",
    ],
    severity: "High",
    typeLabel: "Propaganda tactic",
    typicalContexts: ["Politics", "Marketing", "Debate"],
    relatedSlugs: ["cherry-picking", "firehose-of-falsehood", "quote-mining"],
    seoTitle: "Card Stacking – Logical Fallacies Guide",
    seoDescription:
      "Card stacking presents only favorable evidence and hides the rest. Learn to spot omissions and restore balance.",
  },
  {
    slug: "cherry-picking",
    name: "Cherry-Picking",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: ["Texas Sharpshooter"],
    shortDefinition:
      "Selects only the data that support a claim while overlooking the full dataset.",
    explanation:
      "Cherry-picking focuses on convenient examples or subsets, creating a distorted picture. Conclusions drawn ignore contrary data and exaggerate support.",
    pattern: [
      "Identify a subset of data that fits the claim.",
      "Ignore data that challenge the claim.",
      "Present the selected subset as representative or decisive.",
    ],
    everydayExample: {
      setup: "Fitness results.",
      dialogue: [
        "A: I lost five pounds on this plan—proof it works.",
        "B: What about the rest of your month and overall health markers?",
      ],
    },
    seriousExample:
      "A company highlights a few successful quarters to tout growth while ignoring a multi-year downward trend.",
    whyItIsFallacious:
      "Partial evidence misleads about the true pattern. Without the full dataset, conclusions are unreliable.",
    whyPeopleUseIt:
      "It is tempting to showcase successes and hide failures; it simplifies persuasion at the cost of accuracy.",
    recognitionPoints: [
      "Only supportive examples are shown; contradictory cases are absent.",
      "Scope of data is narrow or selectively defined after the fact.",
      "Results are not contextualized against the whole dataset.",
    ],
    responseStrategies: [
      "Request full datasets and selection criteria.",
      "Look for patterns across all data, not just highlights.",
      "Compare claims against independent or larger samples.",
    ],
    severity: "High",
    typeLabel: "Statistical fallacy",
    typicalContexts: ["Marketing", "Policy reporting", "Scientific claims"],
    relatedSlugs: [
      "card-stacking",
      "texas-sharpshooter",
      "misleading-vividness",
    ],
    seoTitle: "Cherry-Picking – Logical Fallacies Guide",
    seoDescription:
      "Cherry-picking uses selective data to prove a point. Learn to ask for full context and balanced evidence.",
  },
  {
    slug: "confirmation-bias",
    name: "Confirmation Bias",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: [],
    shortDefinition:
      "Favors information that confirms existing beliefs while ignoring or discounting contrary evidence.",
    explanation:
      "Confirmation bias filters perception and memory. It can lead to skewed arguments when only supportive evidence is gathered, interpreted, or recalled.",
    pattern: [
      "Hold a belief or expectation.",
      "Seek or notice evidence that supports it.",
      "Downplay, forget, or discredit conflicting evidence.",
    ],
    everydayExample: {
      setup: "Product loyalty.",
      dialogue: [
        "A: See, this one good review proves our product is best.",
        "B: Have you read the critical reviews and return data?",
      ],
    },
    seriousExample:
      "In investigations, authorities focus on evidence that fits an early theory, overlooking exonerating facts and leading to wrongful conclusions.",
    whyItIsFallacious:
      "Biased evidence gathering and interpretation can make weak claims seem strong and block accurate assessments.",
    whyPeopleUseIt:
      "It is a natural cognitive shortcut; aligning new data with beliefs feels efficient and comfortable.",
    recognitionPoints: [
      "Evidence supporting the belief is overemphasized; counter-evidence is minimized.",
      "Information sources are filtered to align with expectations.",
      "New data is interpreted to preserve prior beliefs.",
    ],
    responseStrategies: [
      "Seek disconfirming evidence deliberately.",
      "Use structured checks (blind reviews, diverse sources).",
      "Quantify and compare all evidence, not just supporting pieces.",
    ],
    severity: "Medium",
    typeLabel: "Cognitive bias",
    typicalContexts: ["Research", "Hiring decisions", "Everyday judgments"],
    relatedSlugs: ["cherry-picking", "card-stacking", "appeal-to-ignorance"],
    seoTitle: "Confirmation Bias – Logical Fallacies Guide",
    seoDescription:
      "Confirmation bias favors supporting evidence and filters out conflict. Learn how to counter it with balanced data.",
  },
  {
    slug: "post-hoc",
    name: "Post Hoc Ergo Propter Hoc",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: ["Post Hoc", "After This, Therefore Because of This"],
    shortDefinition:
      "Assumes that because one event follows another, the first caused the second.",
    explanation:
      "Temporal order alone does not prove causation. Post hoc reasoning overlooks alternative causes, coincidence, and underlying variables.",
    pattern: [
      "Observe that Event A happened before Event B.",
      "Conclude A caused B because of the sequence.",
      "Ignore other causal explanations or evidence.",
    ],
    everydayExample: {
      setup: "Superstition.",
      dialogue: [
        "A: I wore my lucky socks and then we won. The socks caused the win.",
      ],
    },
    seriousExample:
      "A policy is declared effective because a metric improved afterward, without controlling for other factors or trends.",
    whyItIsFallacious:
      "Sequence is not sufficient to establish causality. Without controls or evidence, the conclusion is speculative.",
    whyPeopleUseIt:
      "Temporal proximity is salient; humans seek patterns and causes, sometimes too eagerly.",
    recognitionPoints: [
      "Causal claim rests mainly on chronology.",
      "No control for confounders or alternative explanations.",
      "Assumes inevitability without tests or comparisons.",
    ],
    responseStrategies: [
      "Ask for controlled comparisons or additional evidence.",
      "Identify other variables that could explain the outcome.",
      "Clarify that timing alone does not equal causation.",
    ],
    severity: "Medium",
    typeLabel: "Causal fallacy",
    typicalContexts: [
      "Policy evaluation",
      "Personal beliefs",
      "Marketing claims",
    ],
    relatedSlugs: [
      "correlation-is-not-causation",
      "cherry-picking",
      "slippery-slope",
    ],
    seoTitle: "Post Hoc Ergo Propter Hoc – Logical Fallacies Guide",
    seoDescription:
      "Post hoc assumes earlier events caused later ones just by sequence. Learn to demand evidence beyond timing.",
  },
  {
    slug: "faulty-analogy",
    name: "Faulty Analogy",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: ["Weak Analogy"],
    shortDefinition:
      "Draws a conclusion from a comparison between things that are not sufficiently alike in relevant aspects.",
    explanation:
      "Analogies can clarify, but they mislead when key differences outweigh similarities. A faulty analogy transfers conclusions without a strong basis that the cases are comparable.",
    pattern: [
      "Identify two situations or things as similar.",
      "Infer they share another property because of that similarity.",
      "Ignore important disanalogies that weaken the comparison.",
    ],
    everydayExample: {
      setup: "Policy comparison.",
      dialogue: [
        "A: Running a country is just like running a household budget.",
        "B: Nations control currency, have obligations, and manage macro factors households don’t.",
      ],
    },
    seriousExample:
      "A medical treatment is promoted because it ‘worked on plants’ in lab tests, implying it will work on humans despite huge biological differences.",
    whyItIsFallacious:
      "The analogy masks critical differences. Conclusions require evidence that the similarities are relevant to the property being inferred.",
    whyPeopleUseIt:
      "Analogies are vivid and memorable; they can simplify arguments but overextend if not examined.",
    recognitionPoints: [
      "Argument hinges on a comparison, but key differences are unaddressed.",
      "The shared features are superficial or not relevant to the conclusion.",
      "Counterexamples show the analogy breaks when details are considered.",
    ],
    responseStrategies: [
      "Identify relevant differences and ask how they affect the conclusion.",
      "Request evidence beyond the analogy.",
      "Offer a counter-analogy that highlights the mismatch.",
    ],
    severity: "Medium",
    typeLabel: "Weak induction",
    typicalContexts: ["Policy debates", "Marketing", "Everyday persuasion"],
    relatedSlugs: ["hasty-generalisation", "cherry-picking", "false-dichotomy"],
    seoTitle: "Faulty Analogy – Logical Fallacies Guide",
    seoDescription:
      "Faulty analogy relies on weak comparisons to reach conclusions. Learn to test similarities and surface critical differences.",
  },
  {
    slug: "firehose-of-falsehood",
    name: "Firehose of Falsehood",
    category: categoryMap["debate-tactics"],
    alsoKnownAs: ["Gish Gallop (propaganda scale)"],
    shortDefinition:
      "Rapidly floods the audience with many claims—true, half-true, or false—faster than they can be checked.",
    explanation:
      "This propaganda tactic relies on volume, speed, and repetition to overwhelm scrutiny. Even when claims are debunked, the sheer quantity leaves lasting impressions and exhausts responders.",
    pattern: [
      "Emit many assertions quickly across multiple channels.",
      "Provide little sourcing and move on before fact-checks land.",
      "Repeat often; rely on audience fatigue and informational overload.",
    ],
    everydayExample: {
      setup: "Online argument.",
      dialogue: [
        "A: Here are ten reasons in one post—stats, anecdotes, conspiracies—prove me wrong.",
      ],
    },
    seriousExample:
      "State media blitzes with dozens of contradictory narratives after a crisis, making it hard to fix on any single truth and sapping trust in verification.",
    whyItIsFallacious:
      "Quantity substitutes for quality. The structure sidesteps evidence and timing prevents meaningful evaluation.",
    whyPeopleUseIt:
      "Overwhelming opponents is effective; many audiences remember exposure more than corrections.",
    recognitionPoints: [
      "Many points, little sourcing, rapid shifts.",
      "Corrections lag and are drowned out.",
      "Claims vary or even contradict but are presented confidently.",
    ],
    responseStrategies: [
      "Group similar claims and address the most consequential.",
      "Call out the tactic and slow the pace; refuse to chase every point.",
      "Provide concise summaries of verified facts with sources.",
    ],
    severity: "High",
    typeLabel: "Propaganda tactic",
    typicalContexts: ["Politics", "Disinformation", "Online debates"],
    relatedSlugs: ["card-stacking", "gish-gallop", "smokescreen"],
    seoTitle: "Firehose of Falsehood – Logical Fallacies Guide",
    seoDescription:
      "Firehose of falsehood overwhelms with rapid claims to outrun fact-checking. Learn to spot and counter the tactic.",
  },
  {
    slug: "gambler-fallacy",
    name: "Gambler’s Fallacy",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: [],
    shortDefinition:
      "Believes past independent random events change the odds of future independent events.",
    explanation:
      "In independent events (like fair coin flips), past outcomes do not affect future probabilities. The gambler’s fallacy expects ‘balance’ to appear, leading to misjudged risks.",
    pattern: [
      "Observe a streak of outcomes.",
      "Assume the opposite outcome is now ‘due’.",
      "Adjust belief or bets based on the streak rather than true probability.",
    ],
    everydayExample: {
      setup: "Coin flips.",
      dialogue: ["A: It’s landed heads five times; tails is due next."],
    },
    seriousExample:
      "A casino bettor doubles after losses thinking a win is inevitable; in forecasting, analysts expect reversal just because a trend looks ‘too long.’",
    whyItIsFallacious:
      "Independent events have constant probabilities. Perceived ‘due’ outcomes are not more likely because of past randomness.",
    whyPeopleUseIt:
      "Humans expect patterns and balance, misapplying them to independent chance events.",
    recognitionPoints: [
      "Language of ‘due’ or ‘overdue’ in independent random processes.",
      "Bet sizing or decisions hinge on streak length alone.",
      "Confusion between sample balance and single-trial probability.",
    ],
    responseStrategies: [
      "Clarify independence and fixed probabilities.",
      "Use simple probability examples to show streaks happen.",
      "Separate budgeting/limits from imagined inevitability.",
    ],
    severity: "Medium",
    typeLabel: "Statistical fallacy",
    typicalContexts: ["Gambling", "Forecasting", "Everyday hunches"],
    relatedSlugs: ["hot-hand-fallacy", "base-rate-fallacy", "post-hoc"],
    seoTitle: "Gambler’s Fallacy – Logical Fallacies Guide",
    seoDescription:
      "Gambler’s fallacy expects random outcomes to ‘balance’ in the short term. Learn why independence keeps odds constant.",
  },
  {
    slug: "glittering-generalities",
    name: "Glittering Generalities",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: ["Empty Praise", "Virtue Words"],
    shortDefinition:
      "Uses vague, feel-good phrases that carry positive connotations but little concrete content.",
    explanation:
      "By invoking broad ideals (‘freedom’, ‘innovation’, ‘family values’) without specifics, arguments can sound appealing while avoiding testable claims.",
    pattern: [
      "Invoke a cherished value or vague positive phrase.",
      "Avoid details or definitions.",
      "Treat audience’s positive feelings as endorsement of the claim.",
    ],
    everydayExample: {
      setup: "Product marketing.",
      dialogue: [
        "A: Our app empowers community and innovation.",
        "B: What does it actually do?",
      ],
    },
    seriousExample:
      "A policy is sold as ‘defending freedom and prosperity’ without mechanisms, metrics, or trade-offs.",
    whyItIsFallacious:
      "Feel-good language is not evidence. Without specifics, claims cannot be evaluated.",
    whyPeopleUseIt:
      "It’s emotionally resonant, low-effort, and hard to attack without sounding opposed to the value named.",
    recognitionPoints: [
      "Vague virtues with no concrete definitions.",
      "Absence of mechanisms, trade-offs, or evidence.",
      "Critics are framed as opposing the named ideal.",
    ],
    responseStrategies: [
      "Ask for definitions, mechanisms, and metrics.",
      "Request examples or evidence that tie claims to outcomes.",
      "Reframe around specifics rather than labels.",
    ],
    severity: "Medium",
    typeLabel: "Rhetorical appeal",
    typicalContexts: ["Politics", "Branding", "Advocacy"],
    relatedSlugs: [
      "deepity",
      "thought-terminating-cliche",
      "virtue-signalling",
    ],
    seoTitle: "Glittering Generalities – Logical Fallacies Guide",
    seoDescription:
      "Glittering generalities use vague, positive phrases instead of evidence. Learn to ask for specifics and substance.",
  },
  {
    slug: "guilt-by-association",
    name: "Guilt by Association",
    category: categoryMap.relevance,
    alsoKnownAs: [],
    shortDefinition:
      "Discredits a claim or person by linking them to an unpopular group or individual, rather than addressing the argument.",
    explanation:
      "The fallacy tries to transfer negative feelings about one group to the target, skipping evaluation of the target’s actual ideas or actions.",
    pattern: [
      "Identify a disliked group or person.",
      "Associate the target with that group.",
      "Reject the target’s claim based on the association alone.",
    ],
    everydayExample: {
      setup: "Team dynamics.",
      dialogue: [
        "A: She agrees with that manager you dislike, so her proposal must be bad.",
      ],
    },
    seriousExample:
      "Policy suggestions are dismissed because a disfavored political faction voiced similar ideas, rather than analyzing the proposal itself.",
    whyItIsFallacious:
      "Association does not determine truth. It sidesteps evidence for or against the claim or the person’s own actions.",
    whyPeopleUseIt:
      "It’s efficient at stirring bias and discrediting without confronting substance.",
    recognitionPoints: [
      "Negative group labels are used as primary rebuttal.",
      "Little to no engagement with the claim’s content.",
      "Emotional associations replace argument analysis.",
    ],
    responseStrategies: [
      "Ask for evaluation of the claim on its merits.",
      "Separate the target’s argument from the associated group.",
      "Highlight that similarity in one view doesn’t imply identical motives or validity.",
    ],
    severity: "Medium",
    typeLabel: "Relevance fallacy",
    typicalContexts: ["Politics", "Workplace factions", "Online debates"],
    relatedSlugs: ["ad-hominem", "poisoning-the-well", "appeal-to-motive"],
    seoTitle: "Guilt by Association – Logical Fallacies Guide",
    seoDescription:
      "Guilt by association discredits by linking to disliked groups instead of addressing evidence. Learn to keep focus on merits.",
  },
  {
    slug: "half-truth",
    name: "Half-Truth",
    category: categoryMap["debate-tactics"],
    alsoKnownAs: ["Selective Truth"],
    shortDefinition:
      "Presents statements that are partially true but omit critical context, leading to a misleading conclusion.",
    explanation:
      "A half-truth leverages accurate fragments to create a false impression. By withholding key facts or qualifiers, it skews interpretation while maintaining plausible deniability.",
    pattern: [
      "Share a technically true statement.",
      "Omit context or key qualifiers.",
      "Let the audience infer an inaccurate conclusion.",
    ],
    everydayExample: {
      setup: "Resume boasting.",
      dialogue: [
        "A: I led a project that increased revenue 50%.",
        "B: Was that a tiny pilot? What about overall results and baseline?",
      ],
    },
    seriousExample:
      "A press release cites a study’s relative risk reduction but omits absolute risk, making benefits seem much larger.",
    whyItIsFallacious:
      "Leaving out crucial context distorts the truth. Conclusions drawn from half-truths are unreliable.",
    whyPeopleUseIt:
      "It sounds credible because parts are true; it’s harder to challenge without the missing context.",
    recognitionPoints: [
      "Claims are technically correct but feel incomplete or too rosy.",
      "Context (baseline, scope, limitations) is missing.",
      "Quantities may be relative without absolutes.",
    ],
    responseStrategies: [
      "Request full context and definitions.",
      "Ask for absolute numbers, baselines, and scope.",
      "Check original sources for omitted details.",
    ],
    severity: "High",
    typeLabel: "Propaganda tactic",
    typicalContexts: ["Media", "Politics", "Marketing"],
    relatedSlugs: ["card-stacking", "quote-mining", "cherry-picking"],
    seoTitle: "Half-Truth – Logical Fallacies Guide",
    seoDescription:
      "Half-truths omit key context to mislead. Learn to spot what’s missing and demand complete information.",
  },
  {
    slug: "hot-hand-fallacy",
    name: "Hot Hand Fallacy",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: [],
    shortDefinition:
      "Assumes a person with recent success has a higher chance of continued success in independent events.",
    explanation:
      "The fallacy treats streaks as evidence of changed odds, even when events are independent. In some domains (skill plus chance), streaks may reflect skill; misapplying it to independent chance events is erroneous.",
    pattern: [
      "Observe a streak of successes.",
      "Assume probability of success is now higher because of the streak.",
      "Ignore whether the events are skill-driven or independent.",
    ],
    everydayExample: {
      setup: "Sports betting.",
      dialogue: [
        "A: She’s hit three in a row; she won’t miss.",
        "B: Free throws are still subject to chance; the odds haven’t magically shifted.",
      ],
    },
    seriousExample:
      "Investors chase recent winning funds assuming the streak will continue, ignoring mean reversion and market conditions.",
    whyItIsFallacious:
      "In independent or largely chance-driven events, past streaks do not alter future probabilities. Misreading streaks can misallocate risk.",
    whyPeopleUseIt:
      "Humans see patterns and momentum; successes feel contagious, even when driven by randomness.",
    recognitionPoints: [
      "Belief that recent success changes odds without other evidence.",
      "Applies momentum thinking to chance-driven contexts.",
      "Confuses skill effects with random variability.",
    ],
    responseStrategies: [
      "Distinguish skill-driven from chance-driven events.",
      "Use data on baseline probabilities and variance.",
      "Highlight regression to the mean in similar streaks.",
    ],
    severity: "Medium",
    typeLabel: "Decision bias",
    typicalContexts: ["Sports", "Investing", "Gaming"],
    relatedSlugs: [
      "gambler-fallacy",
      "base-rate-fallacy",
      "appeal-to-probability",
    ],
    seoTitle: "Hot Hand Fallacy – Logical Fallacies Guide",
    seoDescription:
      "Hot hand fallacy assumes streaks guarantee continued success. Learn to separate skill from chance and temper momentum bias.",
  },
  {
    slug: "ignoring-the-question",
    name: "Ignoring the Question",
    category: categoryMap.relevance,
    alsoKnownAs: ["Missing the Point"],
    shortDefinition:
      "Responds to a different issue than the one raised, leaving the original question unanswered.",
    explanation:
      "Rather than addressing the central point, the argument wanders to a related or unrelated topic. This resembles a red herring but specifically fails to answer the posed question.",
    pattern: [
      "A clear question or issue is raised.",
      "Responder addresses a different question or tangent.",
      "Original issue remains unresolved but discussion moves on.",
    ],
    everydayExample: {
      setup: "Team accountability.",
      dialogue: [
        "A: Why did we miss the deadline?",
        "B: The design team is overworked—let’s talk about tools.",
      ],
    },
    seriousExample:
      "In a hearing about budget overruns, officials pivot to discussing past successes instead of the current overspend.",
    whyItIsFallacious:
      "The argument does not engage the issue at hand, so it provides no evidence for or against the original question.",
    whyPeopleUseIt:
      "It deflects difficult topics, buys time, or shifts to safer ground.",
    recognitionPoints: [
      "Direct question is left unanswered.",
      "Responder shifts to tangential or unrelated points.",
      "The new topic does not resolve the original issue.",
    ],
    responseStrategies: [
      "Restate the original question and note it wasn’t answered.",
      "Ask for a direct response before moving to secondary topics.",
      "If relevant, schedule separate attention for the tangent.",
    ],
    severity: "Low",
    typeLabel: "Relevance fallacy",
    typicalContexts: ["Meetings", "Debate", "Media interviews"],
    relatedSlugs: ["red-herring", "smokescreen", "strawman"],
    seoTitle: "Ignoring the Question – Logical Fallacies Guide",
    seoDescription:
      "Ignoring the question swaps in a different topic and leaves the real issue untouched. Learn to restate and refocus.",
  },
  {
    slug: "illusion-of-control",
    name: "Illusion of Control",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: [],
    shortDefinition:
      "Overestimates one’s influence over outcomes that are largely determined by chance or external factors.",
    explanation:
      "People often believe their actions can sway random or complex events. This bias can lead to overconfidence, risky decisions, and misattribution of success or failure.",
    pattern: [
      "Encounter an outcome with chance or many external factors.",
      "Assume personal actions have significant influence.",
      "Base decisions or emotions on that inflated sense of control.",
    ],
    everydayExample: {
      setup: "Lottery participation.",
      dialogue: ["A: I pick special numbers; that increases my odds."],
    },
    seriousExample:
      "Executives assume they can perfectly time markets or control macroeconomic shifts, leading to overleveraged strategies.",
    whyItIsFallacious:
      "Misjudging control distorts risk assessment and can cause poor planning or emotional reactions to random outcomes.",
    whyPeopleUseIt:
      "Feeling in control is comforting; taking credit for randomness is ego-rewarding.",
    recognitionPoints: [
      "Attributing random outcomes to personal skill.",
      "Confusing influence over small factors with control over the whole.",
      "Confidence persists despite low actual leverage.",
    ],
    responseStrategies: [
      "Identify controllable vs. uncontrollable factors explicitly.",
      "Use data to estimate actual impact and variance.",
      "Plan with margins for uncertainty instead of assuming mastery.",
    ],
    severity: "Medium",
    typeLabel: "Decision bias",
    typicalContexts: ["Investing", "Games of chance", "Project planning"],
    relatedSlugs: [
      "appeal-to-probability",
      "hot-hand-fallacy",
      "gambler-fallacy",
    ],
    seoTitle: "Illusion of Control – Logical Fallacies Guide",
    seoDescription:
      "Illusion of control overestimates personal influence on random or external outcomes. Learn to separate control from chance.",
  },
  {
    slug: "interpolation-extrapolation-fallacy",
    name: "Interpolation / Extrapolation Fallacy",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: [],
    shortDefinition:
      "Assumes trends within observed data automatically hold between or beyond the data points without justification.",
    explanation:
      "Fitting a line or noticing a pattern does not guarantee it continues smoothly in unobserved ranges. Interpolating between scarce points or extrapolating far beyond the data can misrepresent reality when relationships are non-linear or constrained.",
    pattern: [
      "Observe a trend in a limited range of data.",
      "Assume the same relationship holds between or beyond observed points.",
      "Draw conclusions without testing the new range or considering limits.",
    ],
    everydayExample: {
      setup: "Personal finance.",
      dialogue: [
        "A: My investments grew 10% last quarter, so I’ll keep getting 10% every quarter.",
        "B: Short-term growth doesn’t guarantee the same rate continues.",
      ],
    },
    seriousExample:
      "A health metric improves in a small trial; marketers project identical improvement to whole populations over years without long-term or larger studies.",
    whyItIsFallacious:
      "Patterns can change outside observed ranges. Without evidence, extending the trend is speculative and can ignore constraints or curve changes.",
    whyPeopleUseIt:
      "Simple straight-line thinking is easy and persuasive; it avoids dealing with uncertainty or complex models.",
    recognitionPoints: [
      "Linear projections beyond measured data.",
      "Confidence in predictions without testing new ranges.",
      "Omission of uncertainty or potential curve changes.",
    ],
    responseStrategies: [
      "Ask for data or models validated in the new range.",
      "Highlight possible non-linearities or limits.",
      "Request uncertainty bounds instead of single-line projections.",
    ],
    severity: "Medium",
    typeLabel: "Statistical fallacy",
    typicalContexts: ["Forecasting", "Business projections", "Health claims"],
    relatedSlugs: [
      "regression-fallacy",
      "masked-relationship-fallacy",
      "cherry-picking",
      "base-rate-fallacy",
    ],
    seoTitle: "Interpolation / Extrapolation Fallacy – Logical Fallacies Guide",
    seoDescription:
      "Interpolation/extrapolation fallacy assumes trends hold outside observed data. Learn to test ranges and add uncertainty.",
  },
  {
    slug: "ludic-fallacy",
    name: "Ludic Fallacy",
    category: categoryMap.presumption,
    alsoKnownAs: [],
    shortDefinition:
      "Applies neat, game-like models to messy reality without accounting for real-world uncertainty and complexity.",
    explanation:
      "The ludic fallacy assumes that simplified, rule-bound models capture real-world risk or behavior. It overlooks unknowns, feedback loops, and fat tails that break tidy assumptions.",
    pattern: [
      "Model a situation with simplified, game-like rules.",
      "Assume reality follows the model closely.",
      "Ignore or downplay real-world complexities and uncertainties.",
    ],
    everydayExample: {
      setup: "Project estimates.",
      dialogue: [
        "A: According to our perfect model, there can be no delays.",
        "B: Real-world dependencies and surprises aren’t in that model.",
      ],
    },
    seriousExample:
      "Risk models assume normal distributions and independent events, underestimating catastrophic correlated failures (e.g., financial crises).",
    whyItIsFallacious:
      "Over-simplified models can conceal critical risks. Real systems have unknowns and interactions that violate neat rules.",
    whyPeopleUseIt:
      "Models provide clarity and confidence; treating reality like a game feels controllable and precise.",
    recognitionPoints: [
      "Strong reliance on simplified assumptions without stress-testing.",
      "Dismissal of outliers or unknown unknowns.",
      "Confidence disproportionate to model realism.",
    ],
    responseStrategies: [
      "Identify assumptions and test sensitivity to violations.",
      "Include uncertainty ranges and scenario analysis.",
      "Compare model predictions with real-world observations.",
    ],
    severity: "High",
    typeLabel: "Presumption fallacy",
    typicalContexts: ["Risk modeling", "Project planning", "Finance"],
    relatedSlugs: [
      "planning-fallacy",
      "illusion-of-control",
      "regression-fallacy",
    ],
    seoTitle: "Ludic Fallacy – Logical Fallacies Guide",
    seoDescription:
      "Ludic fallacy treats reality like a tidy game, ignoring messy uncertainty. Learn to stress-test models against real risks.",
  },
  {
    slug: "masked-relationship-fallacy",
    name: "Masked Relationship Fallacy",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: [],
    shortDefinition:
      "Misses an underlying relationship because another variable hides or distorts it.",
    explanation:
      "When an effect is hidden by a confounding factor, simplistic analysis may conclude no relationship exists. Without accounting for the masking variable, the true pattern stays unseen.",
    pattern: [
      "Look for a relationship between A and B.",
      "Find weak or no correlation in aggregate data.",
      "Ignore a confounder that, when controlled, reveals the relationship.",
    ],
    everydayExample: {
      setup: "Training results.",
      dialogue: [
        "A: No link between practice time and performance across all employees.",
        "B: Split by role or tenure first—skills differ and can mask the effect.",
      ],
    },
    seriousExample:
      "A drug trial shows no effect overall, but when controlling for dosage timing or demographics, a strong effect appears that was previously masked.",
    whyItIsFallacious:
      "Failing to stratify or control for confounders can hide real effects. Conclusions about ‘no relationship’ may be premature.",
    whyPeopleUseIt:
      "Aggregated data is simpler; digging into confounders takes more effort and statistical care.",
    recognitionPoints: [
      "Aggregate analysis only; no stratification or control variables.",
      "Dismissal of effects without checking for masking factors.",
      "Complex systems reduced to single-variable views.",
    ],
    responseStrategies: [
      "Check for confounders and stratify data.",
      "Use multivariate analysis to reveal hidden relationships.",
      "Avoid blanket ‘no effect’ claims without sensitivity checks.",
    ],
    severity: "Medium",
    typeLabel: "Statistical fallacy",
    typicalContexts: [
      "Data analysis",
      "Scientific research",
      "Business metrics",
    ],
    relatedSlugs: [
      "ecological-fallacy",
      "simpsons-paradox",
      "base-rate-fallacy",
    ],
    seoTitle: "Masked Relationship Fallacy – Logical Fallacies Guide",
    seoDescription:
      "Masked relationship fallacy overlooks effects hidden by confounders. Learn to stratify data and uncover real patterns.",
  },
  {
    slug: "misleading-vividness",
    name: "Misleading Vividness",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: [],
    shortDefinition:
      "Uses a striking anecdote or vivid event to outweigh statistical evidence or broader trends.",
    explanation:
      "Vivid stories stick in memory and can dominate judgment, even when they are rare or unrepresentative. The fallacy treats the striking case as typical, sidelining solid data.",
    pattern: [
      "Present a dramatic anecdote.",
      "Let its emotional force substitute for representative evidence.",
      "Draw broad conclusions that conflict with larger data.",
    ],
    everydayExample: {
      setup: "Travel safety.",
      dialogue: [
        "A: I heard of one traveler scammed abroad, so travel there is unsafe.",
        "B: What do crime statistics show overall?",
      ],
    },
    seriousExample:
      "A single sensational side effect story leads people to ignore extensive trial data showing safety and efficacy.",
    whyItIsFallacious:
      "Anecdotes and vivid cases can be non-representative. They distort perception of risk and prevalence.",
    whyPeopleUseIt:
      "Stories are persuasive, memorable, and easy to communicate; they evoke emotion more than statistics.",
    recognitionPoints: [
      "A dramatic case is cited as proof against broader data.",
      "No discussion of frequency or representativeness.",
      "Risk perception is driven by emotion rather than prevalence.",
    ],
    responseStrategies: [
      "Ask for base rates and representative statistics.",
      "Frame anecdotes as possibilities, not proof of prevalence.",
      "Use comparative data to recalibrate risk perception.",
    ],
    severity: "Medium",
    typeLabel: "Statistical fallacy",
    typicalContexts: ["Media", "Health decisions", "Travel and safety"],
    relatedSlugs: ["anecdotal-fallacy", "cherry-picking", "appeal-to-emotion"],
    seoTitle: "Misleading Vividness – Logical Fallacies Guide",
    seoDescription:
      "Misleading vividness uses striking anecdotes to outweigh statistics. Learn to balance stories with representative data.",
  },
  {
    slug: "moralistic-fallacy",
    name: "Moralistic Fallacy",
    category: categoryMap.relevance,
    alsoKnownAs: [],
    shortDefinition:
      "Argues that because something ought to be a certain way, it therefore is that way.",
    explanation:
      "The moralistic fallacy confuses values with facts. It assumes reality conforms to what is morally desirable, skipping evidence about how things actually are.",
    pattern: [
      "State how something should be.",
      "Infer that reality matches that ideal because it ought to.",
      "Ignore evidence to the contrary.",
    ],
    everydayExample: {
      setup: "Health expectations.",
      dialogue: [
        "A: People should be rational about health, so misinformation can’t spread far.",
        "B: The desirability doesn’t guarantee reality—look at the data.",
      ],
    },
    seriousExample:
      "Policy assumes markets will self-correct harmful practices because it would be better if they did, neglecting evidence of persistent externalities.",
    whyItIsFallacious:
      "Normative claims do not establish descriptive truth. Confusing the two prevents accurate assessment and solutions.",
    whyPeopleUseIt:
      "It feels reassuring to assume the world aligns with moral ideals; it reduces cognitive dissonance.",
    recognitionPoints: [
      "‘Ought’ language used to infer ‘is’.",
      "Contrary evidence downplayed as anomalous.",
      "Moral preference presented as descriptive fact.",
    ],
    responseStrategies: [
      "Separate normative statements from empirical claims.",
      "Ask for evidence about real conditions.",
      "Acknowledge values while addressing reality as it is.",
    ],
    severity: "Medium",
    typeLabel: "Relevance fallacy",
    typicalContexts: ["Ethics debates", "Policy", "Social commentary"],
    relatedSlugs: [
      "naturalistic-fallacy",
      "appeal-to-consequences",
      "appeal-to-nature",
    ],
    seoTitle: "Moralistic Fallacy – Logical Fallacies Guide",
    seoDescription:
      "Moralistic fallacy assumes what should be is what is. Learn to separate values from facts.",
  },
  {
    slug: "naturalistic-fallacy",
    name: "Naturalistic Fallacy",
    category: categoryMap.relevance,
    alsoKnownAs: [],
    shortDefinition:
      "Infers an ‘ought’ directly from an ‘is’, assuming what is natural defines what is morally right.",
    explanation:
      "The naturalistic fallacy claims moral guidance from nature alone. Just because something occurs in nature doesn’t mean it is good or should be adopted as a norm.",
    pattern: [
      "Observe a natural state or behavior.",
      "Infer it is good or should be emulated because it is natural.",
      "Skip ethical reasoning or contextual evidence.",
    ],
    everydayExample: {
      setup: "Diet trends.",
      dialogue: [
        "A: Our ancestors ate this way, so it must be the healthiest diet.",
        "B: What do current health outcomes and studies show?",
      ],
    },
    seriousExample:
      "Social policies justified because a behavior occurs in animals, ignoring ethical considerations and human context.",
    whyItIsFallacious:
      "Nature includes harm and inefficiency. Deriving norms from mere existence conflates facts with values.",
    whyPeopleUseIt:
      "It simplifies moral questions by appealing to a romanticized ‘natural’ state and avoids deeper ethical analysis.",
    recognitionPoints: [
      "Moral claims rest on what is natural or original.",
      "Little evidence beyond the naturalness appeal.",
      "Ignores context, consequences, or ethical frameworks.",
    ],
    responseStrategies: [
      "Ask for ethical reasoning and outcome evidence.",
      "Provide counterexamples of harmful ‘natural’ phenomena.",
      "Distinguish description from prescription.",
    ],
    severity: "Medium",
    typeLabel: "Relevance fallacy",
    typicalContexts: ["Ethics", "Diet/health trends", "Social policy"],
    relatedSlugs: [
      "appeal-to-nature",
      "moralistic-fallacy",
      "appeal-to-consequences",
    ],
    seoTitle: "Naturalistic Fallacy – Logical Fallacies Guide",
    seoDescription:
      "Naturalistic fallacy derives ‘ought’ from ‘is’, treating natural as morally right. Learn to separate facts from values.",
  },
  {
    slug: "planning-fallacy",
    name: "Planning Fallacy",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: [],
    shortDefinition:
      "Underestimates time, costs, or risks of a task, even when past experiences suggest otherwise.",
    explanation:
      "People tend to be overly optimistic about plans, discounting delays, obstacles, and unknowns. This bias leads to missed deadlines and budget overruns despite historical evidence.",
    pattern: [
      "Create an optimistic estimate for a project.",
      "Ignore historical overruns or hidden tasks.",
      "Proceed with insufficient buffers, leading to delays or overruns.",
    ],
    everydayExample: {
      setup: "Home project.",
      dialogue: [
        "A: I’ll paint the house this weekend.",
        "B: It took you two weekends last time—plan for that.",
      ],
    },
    seriousExample:
      "Large infrastructure projects underestimate costs and timelines, leading to massive overruns and scope changes.",
    whyItIsFallacious:
      "Optimism bias and neglect of past data produce unreliable plans. Failing to account for uncertainty distorts expectations.",
    whyPeopleUseIt:
      "Optimism feels motivating; admitting uncertainty can seem pessimistic or politically risky.",
    recognitionPoints: [
      "Estimates ignore historical baselines.",
      "Buffers and contingencies are minimal or absent.",
      "Past overruns are dismissed as anomalies.",
    ],
    responseStrategies: [
      "Use reference class forecasting based on similar past projects.",
      "Add contingencies and stage gates.",
      "Break work into smaller, tested increments.",
    ],
    severity: "Medium",
    typeLabel: "Decision bias",
    typicalContexts: [
      "Project management",
      "Personal planning",
      "Policy programs",
    ],
    relatedSlugs: [
      "ludic-fallacy",
      "illusion-of-control",
      "appeal-to-probability",
    ],
    seoTitle: "Planning Fallacy – Logical Fallacies Guide",
    seoDescription:
      "Planning fallacy underestimates time and cost despite history. Learn to use reference classes and buffers to counter it.",
  },
  {
    slug: "poisoning-the-well",
    name: "Poisoning the Well",
    category: categoryMap.relevance,
    alsoKnownAs: [],
    shortDefinition:
      "Preemptively discredits a person or source so that their future claims are rejected without consideration.",
    explanation:
      "By attacking the speaker’s character or motives upfront, this tactic biases the audience against anything the speaker might say, avoiding engagement with actual arguments.",
    pattern: [
      "Introduce negative information about a speaker before they present their case.",
      "Encourage the audience to distrust anything the speaker says.",
      "Skip evaluation of the future claim’s content.",
    ],
    everydayExample: {
      setup: "Team meeting.",
      dialogue: [
        "A: Before he talks, remember he’s always negative—you can ignore his points.",
      ],
    },
    seriousExample:
      "A whistleblower’s reputation is smeared in advance of testimony so their evidence is dismissed out of hand.",
    whyItIsFallacious:
      "It biases listeners without addressing the merits of the forthcoming argument. Truth depends on evidence, not preloaded distrust.",
    whyPeopleUseIt:
      "It’s an effective pre-emptive strike: it inoculates audiences against contrary or inconvenient evidence.",
    recognitionPoints: [
      "Negative framing of a speaker before their argument is heard.",
      "Calls to distrust regardless of content.",
      "No engagement with the actual forthcoming claim.",
    ],
    responseStrategies: [
      "Separate claims from the claimant; ask to hear the evidence.",
      "Note the preemptive attack as a tactic.",
      "Assess arguments on their merits once presented.",
    ],
    severity: "High",
    typeLabel: "Relevance fallacy",
    typicalContexts: ["Politics", "Litigation", "Workplace disputes"],
    relatedSlugs: ["ad-hominem", "guilt-by-association", "appeal-to-motive"],
    seoTitle: "Poisoning the Well – Logical Fallacies Guide",
    seoDescription:
      "Poisoning the well discredits a speaker before they argue, biasing the audience. Learn to separate preloaded attacks from evidence.",
  },
  {
    slug: "prosecutors-fallacy",
    name: "Prosecutor’s Fallacy",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: [],
    shortDefinition:
      "Confuses the probability of observing the evidence if someone is innocent with the probability of innocence given the evidence.",
    explanation:
      "This fallacy swaps conditional probabilities, often in legal contexts. A low chance of seeing the evidence under innocence does not automatically mean a low chance of innocence; base rates matter.",
    pattern: [
      "Present a low probability of evidence under innocence.",
      "Conclude the defendant is almost certainly guilty.",
      "Neglect base rates, alternative explanations, or false positives.",
    ],
    everydayExample: {
      setup: "Security alarms.",
      dialogue: [
        "A: Only 1% of alarms are false, so this alarm means a burglary.",
        "B: What’s the base rate of burglaries and how many alarms go off overall?",
      ],
    },
    seriousExample:
      "DNA evidence with a 1-in-a-million random match rate is treated as near-certain guilt, ignoring population size and other evidence.",
    whyItIsFallacious:
      "P(Evidence|Innocent) ≠ P(Innocent|Evidence). Failing to incorporate base rates and alternative causes misstates the true probability.",
    whyPeopleUseIt:
      "Conditional probabilities are counterintuitive; presenting small numbers sounds persuasive in court or argument.",
    recognitionPoints: [
      "Conditional probabilities are flipped or treated as identical.",
      "Base rates and alternative causes are ignored.",
      "Small probability of evidence is equated to small probability of innocence.",
    ],
    responseStrategies: [
      "Clarify the difference between P(E|I) and P(I|E).",
      "Introduce base rates and alternative explanations into the calculation.",
      "Use concrete numbers to illustrate how probabilities shift with prevalence.",
    ],
    severity: "High",
    typeLabel: "Statistical fallacy",
    typicalContexts: ["Legal reasoning", "Risk communication", "Forensics"],
    relatedSlugs: [
      "base-rate-fallacy",
      "masked-relationship-fallacy",
      "correlation-is-not-causation",
    ],
    seoTitle: "Prosecutor’s Fallacy – Logical Fallacies Guide",
    seoDescription:
      "Prosecutor’s fallacy flips conditional probabilities, overstating guilt from evidence. Learn to apply base rates correctly.",
  },
  {
    slug: "regression-fallacy",
    name: "Regression Fallacy",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: [],
    shortDefinition:
      "Mistakenly attributes a change after an extreme event to a specific cause, ignoring regression to the mean.",
    explanation:
      "Extreme observations are often followed by more typical ones purely by chance. The regression fallacy credits or blames interventions for this natural drift toward the average.",
    pattern: [
      "Observe an extreme high or low outcome.",
      "See a move toward average afterward.",
      "Attribute the change to an intervention rather than statistical regression.",
    ],
    everydayExample: {
      setup: "Sports performance.",
      dialogue: [
        "A: After that slump we gave a pep talk, and performance improved—our talk fixed it.",
        "B: Slumps often revert on their own; we need data to show the talk mattered.",
      ],
    },
    seriousExample:
      "Policy effects are claimed because metrics improved after a very bad quarter, without accounting for natural variance around the mean.",
    whyItIsFallacious:
      "Regression to the mean can explain movement toward average without any intervention. Ignoring it overstates causal claims.",
    whyPeopleUseIt:
      "It feels intuitive to credit actions for improvements and to find causes for rebounds from extremes.",
    recognitionPoints: [
      "Interventions coincide with recovery from unusually good or bad results.",
      "No controls or baselines to separate intervention from natural variance.",
      "Attributing causation from a single before–after around an extreme point.",
    ],
    responseStrategies: [
      "Use control groups or comparisons across time.",
      "Note typical variability and expected regression.",
      "Avoid strong causal claims from extreme-to-average shifts alone.",
    ],
    severity: "Medium",
    typeLabel: "Statistical fallacy",
    typicalContexts: [
      "Performance reviews",
      "Policy evaluation",
      "Health outcomes",
    ],
    relatedSlugs: [
      "masked-relationship-fallacy",
      "base-rate-fallacy",
      "post-hoc",
    ],
    seoTitle: "Regression Fallacy – Logical Fallacies Guide",
    seoDescription:
      "Regression fallacy credits interventions for natural return to average. Learn to separate variance from causation.",
  },
  {
    slug: "reification",
    name: "Reification",
    category: categoryMap["ambiguity-language"],
    alsoKnownAs: ["Hypostatization"],
    shortDefinition:
      "Treats an abstraction as if it were a concrete, living, or causal thing.",
    explanation:
      "By turning abstract concepts into concrete actors, arguments can imply properties or causal power the abstraction does not literally have.",
    pattern: [
      "Refer to an abstract idea as if it acts or decides.",
      "Attribute agency or concrete properties to it.",
      "Draw conclusions based on that anthropomorphized view.",
    ],
    everydayExample: {
      setup: "Project blame.",
      dialogue: [
        "A: ‘The market decided to punish us.’",
        "B: Markets are people trading—let’s examine actual actions and causes.",
      ],
    },
    seriousExample:
      "Policy debates claim ‘history will judge’ or ‘capital demands,’ masking the actual agents and mechanisms that create outcomes.",
    whyItIsFallacious:
      "Abstract entities do not literally act. Reification hides the real causal factors and can mislead about responsibility or mechanism.",
    whyPeopleUseIt:
      "It simplifies complex systems and lends weight to arguments by invoking grand abstractions.",
    recognitionPoints: [
      "Abstract nouns given agency (e.g., ‘truth wants’, ‘policy hates’).",
      "Causal claims made about concepts rather than actors or mechanisms.",
      "Lack of specific agents or processes behind the claim.",
    ],
    responseStrategies: [
      "Ask who or what concretely causes the effect.",
      "Replace abstractions with specific actors or mechanisms.",
      "Clarify that metaphors do not establish evidence.",
    ],
    severity: "Low",
    typeLabel: "Ambiguity fallacy",
    typicalContexts: ["Philosophy talk", "Politics", "Economics commentary"],
    relatedSlugs: ["equivocation", "amphiboly", "glittering-generalities"],
    seoTitle: "Reification – Logical Fallacies Guide",
    seoDescription:
      "Reification treats abstractions as concrete actors. Learn to unpack who or what really causes effects.",
  },
  {
    slug: "scapegoating",
    name: "Scapegoating",
    category: categoryMap["debate-tactics"],
    alsoKnownAs: [],
    shortDefinition:
      "Unfairly blames a person or group for problems to deflect responsibility or simplify causes.",
    explanation:
      "Scapegoating assigns outsized blame to a target, ignoring complex or shared causes. It diverts scrutiny from real drivers and can inflame prejudice.",
    pattern: [
      "Identify a convenient person or group.",
      "Ascribe broad blame for issues to them.",
      "Downplay or ignore other contributing factors.",
    ],
    everydayExample: {
      setup: "Team miss.",
      dialogue: [
        "A: The project failed because of that one junior engineer.",
        "B: What about scope creep and unclear requirements?",
      ],
    },
    seriousExample:
      "Economic downturns are blamed on a minority group, diverting attention from policy, market cycles, and systemic issues.",
    whyItIsFallacious:
      "It oversimplifies causation and misattributes blame, preventing accurate diagnosis and solutions.",
    whyPeopleUseIt:
      "It provides a simple narrative, rallies group cohesion, and shields those truly responsible.",
    recognitionPoints: [
      "One group or person is blamed for broad, complex problems.",
      "Little evidence connects the target to the full scope of harm.",
      "Alternative causes are ignored or suppressed.",
    ],
    responseStrategies: [
      "Ask for evidence linking the target to the claimed effects.",
      "List and analyze other plausible causes.",
      "Highlight complexity to resist simplistic blame.",
    ],
    severity: "High",
    typeLabel: "Propaganda tactic",
    typicalContexts: ["Politics", "Crisis narratives", "Workplace blame games"],
    relatedSlugs: ["strawman", "poisoning-the-well", "card-stacking"],
    seoTitle: "Scapegoating – Logical Fallacies Guide",
    seoDescription:
      "Scapegoating blames a target for complex problems to deflect responsibility. Learn to restore nuance and evidence.",
  },
  {
    slug: "selection-bias",
    name: "Selection Bias",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: [],
    shortDefinition:
      "Distorts conclusions by using a non-random or non-representative selection of data or participants.",
    explanation:
      "When the sample is chosen in a way that over- or under-represents certain outcomes, results won’t generalize. Conclusions appear supported but hinge on skewed selection.",
    pattern: [
      "Select data or participants with hidden criteria.",
      "Analyze as if the sample were representative.",
      "Draw conclusions that don’t hold for the full population.",
    ],
    everydayExample: {
      setup: "Product feedback.",
      dialogue: [
        "A: All our users love us—look at these survey replies.",
        "B: Those are only from our most active fans. What about churned users?",
      ],
    },
    seriousExample:
      "Medical studies recruit healthier volunteers, leading to overstated treatment benefits compared to the general population.",
    whyItIsFallacious:
      "Biased selection skews measured effects, invalidating generalization.",
    whyPeopleUseIt:
      "Sometimes it’s unintentional convenience sampling; sometimes deliberate to present flattering results.",
    recognitionPoints: [
      "Sample source is narrow or self-selected.",
      "Exclusions or dropouts are high and unexamined.",
      "Claims of generality without demonstrating representativeness.",
    ],
    responseStrategies: [
      "Ask how the sample was chosen and who was excluded.",
      "Request replication with representative sampling.",
      "Weight or adjust for selection where possible.",
    ],
    severity: "High",
    typeLabel: "Statistical fallacy",
    typicalContexts: ["Surveys", "Clinical studies", "Business metrics"],
    relatedSlugs: ["sampling-bias", "publication-bias", "survivorship-bias"],
    seoTitle: "Selection Bias – Logical Fallacies Guide",
    seoDescription:
      "Selection bias skews conclusions with unrepresentative samples. Learn to check who’s included—and who isn’t.",
  },
  {
    slug: "simpsons-paradox",
    name: "Simpson’s Paradox",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: [],
    shortDefinition:
      "A trend appears in several groups of data but reverses or disappears when the groups are combined.",
    explanation:
      "Simpson’s paradox is often misunderstood as contradiction. It usually signals a lurking confounder that changes the interpretation when data are aggregated.",
    pattern: [
      "Identify a trend within subgroups.",
      "Aggregate the groups and find the opposite trend.",
      "Confounder distribution differs across subgroups, reversing the trend when combined.",
    ],
    everydayExample: {
      setup: "Customer ratings.",
      dialogue: [
        "A: Each region rates us higher this quarter, but combined ratings fell.",
        "B: Region sizes shifted; the weighted average changed.",
      ],
    },
    seriousExample:
      "Treatment A outperforms B in each demographic subgroup, but overall B looks better because more severe cases received A.",
    whyItIsFallacious:
      "Calling the aggregate reversal an error without examining confounders leads to misinterpretation. The paradox highlights the need for stratified analysis.",
    whyPeopleUseIt:
      "Paradox framing is catchy; misunderstanding can be exploited to cast doubt on solid subgroup results or vice versa.",
    recognitionPoints: [
      "Aggregate trend differs from subgroup trends.",
      "Confounders or group sizes shift between levels of analysis.",
      "Claims of contradiction without confounder analysis.",
    ],
    responseStrategies: [
      "Stratify data and examine confounder distribution.",
      "Clarify that aggregation can hide or flip trends.",
      "Explain the role of weighting and group sizes.",
    ],
    severity: "Medium",
    typeLabel: "Statistical paradox",
    typicalContexts: ["Data analysis", "Medical studies", "Business metrics"],
    relatedSlugs: [
      "masked-relationship-fallacy",
      "selection-bias",
      "ecological-fallacy",
    ],
    seoTitle: "Simpson’s Paradox – Logical Fallacies Guide",
    seoDescription:
      "Simpson’s paradox shows trends reversing when data are aggregated. Learn to check confounders and stratify before concluding.",
  },
  {
    slug: "smokescreen",
    name: "Smokescreen",
    category: categoryMap.relevance,
    alsoKnownAs: [],
    shortDefinition:
      "Overloads a discussion with tangents or detail to obscure weakness in the main argument.",
    explanation:
      "A smokescreen floods the conversation with side points, complexities, or trivia, making it hard to stay on the core issue. It differs from a simple red herring by volume and density of distraction.",
    pattern: [
      "Introduce many side issues or dense detail.",
      "Shift focus away from the main claim.",
      "Avoid returning to the central question or evidence.",
    ],
    everydayExample: {
      setup: "Performance review.",
      dialogue: [
        "A: Let’s discuss missed deadlines.",
        "B: First, consider tool choice, team history, market shifts, and this 10-point theory...",
      ],
    },
    seriousExample:
      "In debates, a speaker unleashes a barrage of semi-related facts to prevent focused scrutiny of a core policy failure.",
    whyItIsFallacious:
      "The tactic avoids engaging the central argument, instead exhausting attention on tangents.",
    whyPeopleUseIt:
      "It buys time, overwhelms critics, and creates an illusion of depth.",
    recognitionPoints: [
      "Sudden, dense detail tangential to the question.",
      "Main issue remains unaddressed after lengthy diversion.",
      "Difficult to pin down a clear, relevant answer.",
    ],
    responseStrategies: [
      "Name the smokescreen and restate the core question.",
      "Limit scope: address one issue at a time.",
      "Summarize and park tangents for later if needed.",
    ],
    severity: "Medium",
    typeLabel: "Relevance fallacy",
    typicalContexts: ["Debates", "Press briefings", "Meetings"],
    relatedSlugs: ["red-herring", "firehose-of-falsehood", "gish-gallop"],
    seoTitle: "Smokescreen – Logical Fallacies Guide",
    seoDescription:
      "Smokescreen floods discussion with tangents to hide weak arguments. Learn to refocus on the core issue.",
  },
  {
    slug: "sunk-cost-fallacy",
    name: "Sunk Cost Fallacy",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: [],
    shortDefinition:
      "Continues an endeavor because of past investment rather than future benefit.",
    explanation:
      "Sunk costs are unrecoverable. Decisions should weigh future costs and benefits, but this fallacy treats past spending as a reason to persist, even when prospects are poor.",
    pattern: [
      "Note time/money already invested.",
      "Use that investment as justification to continue.",
      "Ignore current evidence about expected future value.",
    ],
    everydayExample: {
      setup: "Subscription waste.",
      dialogue: [
        "A: I paid for a year; I have to keep using it even if it’s not helpful.",
      ],
    },
    seriousExample:
      "Organizations keep funding failing projects because of prior expenditures and political capital, compounding losses.",
    whyItIsFallacious:
      "Past costs are gone; only future returns matter. Clinging to sunk costs can increase losses and block pivoting.",
    whyPeopleUseIt:
      "Avoiding loss feels better than admitting waste; escalation can feel safer than writing off costs.",
    recognitionPoints: [
      "Justifications cite past investment, not future prospects.",
      "Hesitation to pivot despite negative forecasts.",
      "Emotional attachment to prior effort outweighs fresh evidence.",
    ],
    responseStrategies: [
      "Reframe decisions around expected future value.",
      "Acknowledge sunk costs and separate them from go/no-go choices.",
      "Set predefined exit criteria to prevent escalation.",
    ],
    severity: "Medium",
    typeLabel: "Decision bias",
    typicalContexts: [
      "Project management",
      "Investing",
      "Personal commitments",
    ],
    relatedSlugs: [
      "planning-fallacy",
      "illusion-of-control",
      "appeal-to-probability",
    ],
    seoTitle: "Sunk Cost Fallacy – Logical Fallacies Guide",
    seoDescription:
      "Sunk cost fallacy keeps investing because of past spend, not future value. Learn to pivot using forward-looking decisions.",
  },
  {
    slug: "survivorship-bias",
    name: "Survivorship Bias",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: [],
    shortDefinition:
      "Focuses on successes that survived a process while ignoring failures, leading to wrong conclusions.",
    explanation:
      "By looking only at surviving examples, we overestimate success and misjudge what works. The hidden failures often hold crucial information.",
    pattern: [
      "Observe surviving cases (e.g., successful companies, winners).",
      "Ignore failures that didn’t make it into the sample.",
      "Draw conclusions based only on survivors.",
    ],
    everydayExample: {
      setup: "Career advice.",
      dialogue: [
        "A: Drop out like that famous founder—you’ll make it big.",
        "B: We don’t hear from the many dropouts who didn’t succeed.",
      ],
    },
    seriousExample:
      "Warplane armor was first added where returning planes had fewest holes; analysts realized missing data were from planes that didn’t return.",
    whyItIsFallacious:
      "Ignoring failures skews understanding of risks and necessary conditions for success.",
    whyPeopleUseIt:
      "Success stories are available and appealing; failures are often hidden or forgotten.",
    recognitionPoints: [
      "Conclusions drawn from only visible successes.",
      "Absence of data on attempts that failed or disappeared.",
      "Advice based on exceptional cases presented as typical.",
    ],
    responseStrategies: [
      "Ask about the denominator: how many attempts failed?",
      "Seek data on non-survivors or missing cases.",
      "Temper conclusions with full distributions, not highlight reels.",
    ],
    severity: "High",
    typeLabel: "Statistical fallacy",
    typicalContexts: [
      "Entrepreneurship advice",
      "Investing",
      "Historical analysis",
    ],
    relatedSlugs: ["selection-bias", "publication-bias", "cherry-picking"],
    seoTitle: "Survivorship Bias – Logical Fallacies Guide",
    seoDescription:
      "Survivorship bias looks only at successes and ignores failures. Learn to ask about the missing data to avoid skewed conclusions.",
  },
  {
    slug: "genetic-fallacy",
    name: "Genetic Fallacy",
    category: categoryMap.relevance,
    alsoKnownAs: [],
    shortDefinition:
      "Judges a claim true or false based solely on its source or origin rather than its merits.",
    explanation:
      "The genetic fallacy accepts or rejects a claim because of where it came from—who said it, where it was published, or how it originated—instead of examining the evidence or reasoning. Origins can inform credibility but do not determine truth.",
    pattern: [
      "Note the source or origin of a claim.",
      "Accept or reject the claim because of that origin.",
      "Skip evaluating the actual evidence or logic.",
    ],
    everydayExample: {
      setup: "Product recommendation.",
      dialogue: [
        "A: That idea came from a competitor, so it must be bad.",
        "B: The source doesn’t decide quality—let’s check the facts.",
      ],
    },
    seriousExample:
      "Research is dismissed because it was funded by a disfavored institution, without examining the methodology or data.",
    whyItIsFallacious:
      "Truth depends on evidence and reasoning, not solely on origin. Good ideas can come from suspect sources and vice versa.",
    whyPeopleUseIt:
      "Source cues are fast heuristics; discrediting origins is an easy shortcut to avoid engagement with substance.",
    recognitionPoints: [
      "Focus on who/where a claim came from rather than what supports it.",
      "No discussion of data or logic.",
      "Positive or negative bias based purely on source.",
    ],
    responseStrategies: [
      "Acknowledge source context, then request evidence and methodology.",
      "Separate provenance from proof.",
      "Evaluate the claim on its merits after noting potential biases.",
    ],
    severity: "Medium",
    typeLabel: "Relevance fallacy",
    typicalContexts: ["Debate", "Media", "Workplace"],
    relatedSlugs: ["ad-hominem", "appeal-to-motive", "poisoning-the-well"],
    seoTitle: "Genetic Fallacy – Logical Fallacies Guide",
    seoDescription:
      "Genetic fallacy accepts or rejects claims because of their source. Learn to separate provenance from proof.",
  },
  {
    slug: "fallacy-of-composition",
    name: "Fallacy of Composition",
    category: categoryMap.relevance,
    alsoKnownAs: [],
    shortDefinition:
      "Assumes that what is true of parts must be true of the whole.",
    explanation:
      "The argument extends properties of individual components to the entire group or system without justification. Properties can change when parts combine.",
    pattern: [
      "Note a property of individual parts.",
      "Assume the whole shares that property.",
      "Ignore how combination could change the property.",
    ],
    everydayExample: {
      setup: "Team skills.",
      dialogue: [
        "A: Each engineer is talented; the team will automatically be high-performing.",
        "B: Coordination and processes matter—talent alone may not scale.",
      ],
    },
    seriousExample:
      "Economic argument claims that because each sector is efficient, the entire economy must be efficient, overlooking interdependencies and coordination failures.",
    whyItIsFallacious:
      "Aggregating parts can introduce new properties; the whole can behave differently from its components.",
    whyPeopleUseIt:
      "It feels intuitive to project part traits to the whole; it simplifies complex systems.",
    recognitionPoints: [
      "Whole is assumed to mirror parts without examining interactions.",
      "Ignores emergent properties or coordination effects.",
      "Sweeping conclusions drawn from component traits alone.",
    ],
    responseStrategies: [
      "Ask how interactions change properties at the whole level.",
      "Look for examples where combined parts behave differently.",
      "Request evidence specific to the whole system.",
    ],
    severity: "Medium",
    typeLabel: "Relevance fallacy",
    typicalContexts: ["Economics", "Team building", "Logic puzzles"],
    relatedSlugs: [
      "fallacy-of-division",
      "hasty-generalisation",
      "reification",
    ],
    seoTitle: "Fallacy of Composition – Logical Fallacies Guide",
    seoDescription:
      "Fallacy of composition assumes the whole shares the parts’ traits. Learn to check for interactions and emergent properties.",
  },
  {
    slug: "fallacy-of-division",
    name: "Fallacy of Division",
    category: categoryMap.relevance,
    alsoKnownAs: [],
    shortDefinition:
      "Assumes what is true of a whole must be true of each part.",
    explanation:
      "The argument projects properties of a group or system onto each member. It overlooks that parts can differ from the aggregate.",
    pattern: [
      "Note a property of the whole.",
      "Assume each part shares that property.",
      "Ignore differences among components.",
    ],
    everydayExample: {
      setup: "Company reputation.",
      dialogue: [
        "A: The company is innovative, so every team must be innovative.",
        "B: Some teams may be rigid despite the company’s overall reputation.",
      ],
    },
    seriousExample:
      "From a country’s average wealth, someone assumes every citizen is affluent, ignoring distribution and inequality.",
    whyItIsFallacious:
      "Aggregate properties do not automatically apply to individuals or subcomponents.",
    whyPeopleUseIt:
      "It simplifies reasoning by treating parts and whole identically.",
    recognitionPoints: [
      "Traits of a collective are projected onto individuals without evidence.",
      "Variation within the whole is ignored.",
      "Assumes uniformity where heterogeneity is likely.",
    ],
    responseStrategies: [
      "Ask for data at the individual/subcomponent level.",
      "Highlight variation within the group.",
      "Differentiate between aggregate metrics and individual cases.",
    ],
    severity: "Medium",
    typeLabel: "Relevance fallacy",
    typicalContexts: [
      "Statistics interpretation",
      "Stereotypes",
      "Economic summaries",
    ],
    relatedSlugs: [
      "fallacy-of-composition",
      "ecological-fallacy",
      "hasty-generalisation",
    ],
    seoTitle: "Fallacy of Division – Logical Fallacies Guide",
    seoDescription:
      "Fallacy of division assumes parts mirror the whole. Learn to account for variation and avoid overgeneralizing.",
  },
  {
    slug: "denying-the-antecedent",
    name: "Denying the Antecedent",
    category: categoryMap.formal,
    alsoKnownAs: [],
    shortDefinition:
      "Assumes that if ‘If A then B’ is true, then ‘Not A’ implies ‘Not B’, which is invalid.",
    explanation:
      "The form is: If A then B. Not A. Therefore, not B. The conclusion doesn’t follow—B could arise from other conditions.",
    pattern: ["If A then B.", "Not A.", "Therefore, not B (invalid)."],
    everydayExample: {
      setup: "Access rules.",
      dialogue: [
        "A: If you have a badge you can enter. You don’t have a badge, so you can’t enter.",
        "B: Guests can enter with escort—the conclusion doesn’t follow strictly.",
      ],
    },
    seriousExample:
      "A diagnostic: If disease D then marker M. Patient lacks M, so they can’t have D. This ignores other presentations or test errors.",
    whyItIsFallacious:
      "The conditional doesn’t claim A is the only way to get B. Negating A doesn’t negate all paths to B.",
    whyPeopleUseIt:
      "It feels symmetrical to flip a conditional, and it can seem tidy in quick reasoning.",
    recognitionPoints: [
      "Argument mirrors the structure If A then B; Not A; therefore Not B.",
      "Assumes the antecedent is necessary, not just sufficient.",
      "Ignores alternative routes to the consequent.",
    ],
    responseStrategies: [
      "Point out that other conditions may also produce B.",
      "Ask whether A is necessary or merely sufficient.",
      "Provide counterexamples where B occurs without A.",
    ],
    severity: "Medium",
    typeLabel: "Formal fallacy",
    typicalContexts: ["Logic", "Diagnostics", "Policy rules"],
    relatedSlugs: [
      "affirming-the-consequent",
      "undistributed-middle",
      "quantifier-shift",
    ],
    seoTitle: "Denying the Antecedent – Logical Fallacies Guide",
    seoDescription:
      "Denying the antecedent treats a sufficient condition as necessary. Learn why Not A doesn’t prove Not B.",
  },
  {
    slug: "undistributed-middle",
    name: "Undistributed Middle",
    category: categoryMap.formal,
    alsoKnownAs: [],
    shortDefinition:
      "A syllogism error where the middle term is not distributed, leaving the major and minor terms possibly unrelated.",
    explanation:
      "In categorical syllogisms, the middle term must refer to all of its category at least once. When it does not, the conclusion can falsely link two classes that share only part of the middle term.",
    pattern: [
      "All/Some M are P.",
      "All/Some S are M.",
      "Therefore, All/Some S are P (invalid when M is undistributed).",
    ],
    everydayExample: {
      setup: "Club membership.",
      dialogue: [
        "A: Some artists are coders. Some musicians are artists. Therefore, some musicians are coders.",
        "B: The shared middle ‘artists’ isn’t fully distributed—conclusion doesn’t follow.",
      ],
    },
    seriousExample:
      "Policy: Some countries with regulation X have low crime. Some countries with regulation Y have regulation X. Therefore, regulation Y causes low crime. The link is invalid without distribution.",
    whyItIsFallacious:
      "Failing to distribute the middle term means the premises don’t guarantee overlap between the major and minor terms.",
    whyPeopleUseIt:
      "Syllogistic forms can sound persuasive even when structurally invalid.",
    recognitionPoints: [
      "Middle term appears in both premises but doesn’t refer to all its members.",
      "Conclusion links groups without demonstrated overlap.",
      "Often uses ‘some’ with ambiguous scope.",
    ],
    responseStrategies: [
      "Check whether the middle term is distributed in at least one premise.",
      "Test with Venn diagrams or concrete counterexamples.",
      "Clarify quantities (all/some) to see if overlap is ensured.",
    ],
    severity: "Medium",
    typeLabel: "Formal fallacy",
    typicalContexts: [
      "Logic structures",
      "Policy arguments",
      "Everyday syllogisms",
    ],
    relatedSlugs: ["fallacy-of-four-terms", "illicit-major", "illicit-minor"],
    seoTitle: "Undistributed Middle – Logical Fallacies Guide",
    seoDescription:
      "Undistributed middle links categories without proper overlap. Learn to check distribution in syllogisms.",
  },
  {
    slug: "illicit-major",
    name: "Illicit Major",
    category: categoryMap.formal,
    alsoKnownAs: [],
    shortDefinition:
      "A syllogism error where the major term is undistributed in the premises but distributed in the conclusion.",
    explanation:
      "If the major term is not distributed in the premises, the conclusion cannot legitimately apply it to all members in its category. This invalidly extends scope.",
    pattern: [
      "Premises mention the major term without covering all of it.",
      "Conclusion asserts something about all of the major term.",
      "Scope expands without support.",
    ],
    everydayExample: {
      setup: "Hiring rule.",
      dialogue: [
        "A: Some engineers are managers. All managers attend training. Therefore, all engineers attend training.",
        "B: ‘Engineers’ were not distributed in premises; scope jumped in conclusion.",
      ],
    },
    seriousExample:
      "Legal argument: Some people in Group X are criminals. Therefore, all criminals (major term) are from Group X. The conclusion overreaches the premise.",
    whyItIsFallacious:
      "It distributes a term in the conclusion that was not distributed in the premises, overextending the category.",
    whyPeopleUseIt:
      "Quantifier shifts can be subtle; the form sounds plausible without close inspection.",
    recognitionPoints: [
      "Conclusion speaks about all members of the major term.",
      "Premises only address part of that term.",
      "Category scope expands in the conclusion.",
    ],
    responseStrategies: [
      "Check distribution of terms in premises versus conclusion.",
      "Restate with explicit quantifiers to expose the leap.",
      "Provide counterexamples showing the overreach.",
    ],
    severity: "Medium",
    typeLabel: "Formal fallacy",
    typicalContexts: ["Syllogisms", "Policy generalizations", "Stereotyping"],
    relatedSlugs: ["illicit-minor", "undistributed-middle", "quantifier-shift"],
    seoTitle: "Illicit Major – Logical Fallacies Guide",
    seoDescription:
      "Illicit major overextends a term’s scope in syllogisms. Learn to check distribution before accepting the conclusion.",
  },
  {
    slug: "illicit-minor",
    name: "Illicit Minor",
    category: categoryMap.formal,
    alsoKnownAs: [],
    shortDefinition:
      "A syllogism error where the minor term is undistributed in the premises but distributed in the conclusion.",
    explanation:
      "The conclusion applies the minor term to all members of its category without the premises supporting that distribution, making the inference invalid.",
    pattern: [
      "Premises mention the minor term without covering all of it.",
      "Conclusion applies the minor term universally.",
      "Scope jump is unsupported.",
    ],
    everydayExample: {
      setup: "Team policy.",
      dialogue: [
        "A: Some QA analysts are testers. All QA analysts must certify releases. Therefore, all testers must certify releases.",
        "B: ‘Testers’ weren’t distributed; the conclusion overreaches.",
      ],
    },
    seriousExample:
      "Argument: Some members of Group Y are experts. All experts should lead. Therefore, all of Group Y should lead. The minor term is overdistributed.",
    whyItIsFallacious:
      "It makes a universal claim about the minor term without sufficient premise coverage.",
    whyPeopleUseIt:
      "Similar to illicit major, quantifier shifts can slip by in conversation.",
    recognitionPoints: [
      "Conclusion universalizes the minor term.",
      "Premises only partially address that term.",
      "Distribution status changes from premises to conclusion.",
    ],
    responseStrategies: [
      "Track quantifiers for each term in premises and conclusion.",
      "Use examples to show not all members fit the conclusion.",
      "Highlight the unsupported scope expansion.",
    ],
    severity: "Medium",
    typeLabel: "Formal fallacy",
    typicalContexts: ["Syllogisms", "Policy extensions", "Generalizations"],
    relatedSlugs: ["illicit-major", "undistributed-middle", "quantifier-shift"],
    seoTitle: "Illicit Minor – Logical Fallacies Guide",
    seoDescription:
      "Illicit minor distributes the minor term in the conclusion without premise support. Learn to track quantifiers and avoid the leap.",
  },
  {
    slug: "fallacy-of-four-terms",
    name: "Fallacy of Four Terms",
    category: categoryMap.formal,
    alsoKnownAs: [],
    shortDefinition:
      "Introduces a fourth term in a syllogism, breaking the required three-term structure and invalidating the inference.",
    explanation:
      "A valid categorical syllogism must use exactly three terms (major, minor, middle). Adding a distinct fourth term, often via ambiguous wording, means premises don’t properly connect.",
    pattern: [
      "Two premises appear to share a middle term.",
      "Ambiguity or equivocation actually creates two different middle terms.",
      "Conclusion draws on disconnected terms, making inference invalid.",
    ],
    everydayExample: {
      setup: "Label confusion.",
      dialogue: [
        "A: All banks have vaults. River banks are natural wonders. Therefore, natural wonders have vaults.",
        "B: ‘Bank’ is used in two senses—this introduces a fourth term.",
      ],
    },
    seriousExample:
      "Policy uses ‘security’ to mean safety in one premise and economic security in another, then draws conclusions as if the same term connected them.",
    whyItIsFallacious:
      "With four terms, premises share no true middle, so the conclusion is unsupported.",
    whyPeopleUseIt:
      "Equivocation or careless wording can mask the addition of a distinct term, making the syllogism sound valid.",
    recognitionPoints: [
      "Key term shifts meaning between premises.",
      "More than three distinct concepts appear across premises and conclusion.",
      "Conclusion relies on an apparent shared term that is actually different.",
    ],
    responseStrategies: [
      "Clarify definitions of repeated terms.",
      "Check that only three distinct terms are used throughout.",
      "Expose the equivocation that created the extra term.",
    ],
    severity: "Medium",
    typeLabel: "Formal fallacy",
    typicalContexts: ["Logic puzzles", "Debate", "Policy rhetoric"],
    relatedSlugs: ["equivocation", "undistributed-middle", "illicit-major"],
    seoTitle: "Fallacy of Four Terms – Logical Fallacies Guide",
    seoDescription:
      "Fallacy of four terms uses an extra distinct term in a syllogism, breaking validity. Learn to spot hidden equivocations.",
  },
  {
    slug: "modal-fallacy",
    name: "Modal Fallacy",
    category: categoryMap.formal,
    alsoKnownAs: [],
    shortDefinition:
      "Confuses possibility, probability, and necessity, or shifts between them illegitimately in an argument.",
    explanation:
      "Modal fallacies move from ‘possible’ to ‘necessary’ or treat stochastic likelihoods as certainties. They misuse modal operators, overstating what the premises justify.",
    pattern: [
      "State something is possible.",
      "Conclude it is necessary or actual.",
      "Or treat probabilistic claims as certainties.",
    ],
    everydayExample: {
      setup: "Project risk.",
      dialogue: [
        "A: It’s possible the launch slips, so it’s inevitable we’ll miss.",
        "B: Possible isn’t certain—what’s the likelihood and mitigation?",
      ],
    },
    seriousExample:
      "Policy argues that because a breach could happen, it must happen, justifying extreme measures without assessing actual risk.",
    whyItIsFallacious:
      "Possibility does not imply necessity or actuality; probability must not be inflated to certainty.",
    whyPeopleUseIt:
      "It heightens urgency or certainty, simplifying decisions and rhetoric.",
    recognitionPoints: [
      "Language shifts from ‘could/might’ to ‘must/will’ without evidence.",
      "Probabilistic claims are treated as certainties.",
      "Modal terms used inconsistently between premises and conclusion.",
    ],
    responseStrategies: [
      "Keep modal scope explicit: distinguish possible, probable, and necessary.",
      "Ask for evidence supporting any shift in modality.",
      "Quantify risks instead of using vague modal escalation.",
    ],
    severity: "Medium",
    typeLabel: "Formal fallacy",
    typicalContexts: [
      "Risk arguments",
      "Policy rhetoric",
      "Everyday reasoning",
    ],
    relatedSlugs: [
      "appeal-to-probability",
      "slippery-slope",
      "quantifier-shift",
    ],
    seoTitle: "Modal Fallacy – Logical Fallacies Guide",
    seoDescription:
      "Modal fallacy confuses possible, probable, and necessary. Learn to keep modalities clear and avoid overstating certainty.",
  },
  {
    slug: "quantifier-shift",
    name: "Quantifier Shift",
    category: categoryMap.formal,
    alsoKnownAs: [],
    shortDefinition:
      "Illegitimately swaps universal and existential quantifiers, changing meaning and invalidating the inference.",
    explanation:
      "Statements like ‘everyone has someone who loves them’ vs. ‘there is someone who loves everyone’ differ. Shifting quantifiers alters scope; treating them as equivalent is invalid.",
    pattern: [
      "Premises use quantifiers (all/some/none) in one order.",
      "Conclusion swaps their order or scope.",
      "Inference assumes equivalence despite scope change.",
    ],
    everydayExample: {
      setup: "Support networks.",
      dialogue: [
        "A: Everyone has someone to talk to. Therefore, there’s someone who everyone talks to.",
        "B: That doesn’t follow; the quantifiers changed scope.",
      ],
    },
    seriousExample:
      "An argument claims that because each problem has some expert who can solve it, there exists an expert who can solve all problems—an invalid shift.",
    whyItIsFallacious:
      "Swapping quantifiers changes the claim’s meaning; the conclusion can assert far more than the premises justify.",
    whyPeopleUseIt:
      "Scope changes are subtle; language can hide the shift and make the argument sound plausible.",
    recognitionPoints: [
      "Quantifiers (‘all’, ‘some’, ‘any’, ‘every’) change order between premises and conclusion.",
      "Conclusion suddenly asserts a stronger or different scope.",
      "Natural language hides the shift.",
    ],
    responseStrategies: [
      "Rewrite statements with explicit quantifiers or formal logic.",
      "Check whether the same scope is preserved from premises to conclusion.",
      "Provide counterexamples showing the non-equivalence.",
    ],
    severity: "Medium",
    typeLabel: "Formal fallacy",
    typicalContexts: [
      "Philosophical arguments",
      "Set-based reasoning",
      "Everyday language",
    ],
    relatedSlugs: ["modal-fallacy", "illicit-major", "illicit-minor"],
    seoTitle: "Quantifier Shift – Logical Fallacies Guide",
    seoDescription:
      "Quantifier shift swaps ‘all’ and ‘some’ scopes, changing meaning. Learn to keep quantifiers aligned to preserve validity.",
  },
  {
    slug: "false-cause",
    name: "False Cause",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: [],
    shortDefinition:
      "Draws a causal conclusion without sufficient evidence, often from mere correlation or sequence.",
    explanation:
      "False cause is a parent label for causal missteps where relationships are asserted without ruling out confounders, coincidence, or reversed direction. Specific forms include post hoc, cum hoc, and spurious correlation.",
    pattern: [
      "Notice a relationship or sequence between A and B.",
      "Infer causation without testing alternatives.",
      "Ignore confounders, mechanisms, or control comparisons.",
    ],
    everydayExample: {
      setup: "Weather superstition.",
      dialogue: [
        "A: Every time I carry an umbrella it rains, so the umbrella causes rain.",
      ],
    },
    seriousExample:
      "A policy is credited for economic growth because growth followed its implementation, without controlling for global cycles.",
    whyItIsFallacious:
      "Correlation or sequence alone does not establish causation. Without evidence, the causal claim is speculative.",
    whyPeopleUseIt:
      "Humans seek patterns and explanations; quick causal stories are persuasive even when premature.",
    recognitionPoints: [
      "Causal language based only on timing or co-movement.",
      "No discussion of confounders or alternative causes.",
      "Mechanisms are absent or weak.",
    ],
    responseStrategies: [
      "Ask for evidence ruling out other causes.",
      "Request mechanism and controlled comparisons.",
      "Rephrase as a hypothesis pending validation.",
    ],
    severity: "Medium",
    typeLabel: "Causal fallacy",
    typicalContexts: ["Policy evaluation", "Everyday reasoning", "Marketing"],
    relatedSlugs: [
      "post-hoc",
      "cum-hoc",
      "third-variable-fallacy",
      "spurious-correlation",
      "reversed-causation",
    ],
    seoTitle: "False Cause – Logical Fallacies Guide",
    seoDescription:
      "False cause asserts causation without evidence. Learn to demand mechanisms, controls, and confounder checks.",
  },
  {
    slug: "cum-hoc",
    name: "Cum Hoc Ergo Propter Hoc",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: ["Cum Hoc"],
    shortDefinition:
      "Assumes that because two things occur together, one causes the other.",
    explanation:
      "Simultaneous correlation is treated as causation without considering hidden variables, coincidence, or bidirectional effects.",
    pattern: [
      "Observe A and B occur together.",
      "Conclude A causes B (or B causes A) because of co-occurrence.",
      "Ignore confounders or testing causality.",
    ],
    everydayExample: {
      setup: "Marketing metric.",
      dialogue: [
        "A: Sales rise when we post memes, so memes cause sales.",
        "B: Both might rise during campaigns—check other factors.",
      ],
    },
    seriousExample:
      "A health trend links diet and disease across regions and concludes causation without controlling for lifestyle, genetics, or environment.",
    whyItIsFallacious:
      "Correlation alone doesn’t establish direction or causality; hidden factors can drive both variables.",
    whyPeopleUseIt: "Co-occurrence is salient and tempting to explain quickly.",
    recognitionPoints: [
      "Causal claim rests solely on simultaneous movement.",
      "Confounders are unaddressed.",
      "No experimental or longitudinal evidence is offered.",
    ],
    responseStrategies: [
      "Ask for controls and tests that separate variables.",
      "Propose confounders that could drive both.",
      "Distinguish correlation from causal inference methods.",
    ],
    severity: "Medium",
    typeLabel: "Causal fallacy",
    typicalContexts: ["Data analysis", "Health claims", "Business metrics"],
    relatedSlugs: [
      "false-cause",
      "third-variable-fallacy",
      "spurious-correlation",
    ],
    seoTitle: "Cum Hoc Ergo Propter Hoc – Logical Fallacies Guide",
    seoDescription:
      "Cum hoc assumes co-occurring variables cause each other. Learn to separate correlation from causation.",
  },
  {
    slug: "third-variable-fallacy",
    name: "Third Variable Fallacy",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: ["Confounding"],
    shortDefinition:
      "Attributes a relationship between two variables to causation when both are driven by an unconsidered third factor.",
    explanation:
      "A hidden variable can create the illusion of a direct link. Without controlling for confounders, causal claims can be misleading.",
    pattern: [
      "Notice A and B move together.",
      "Assume A causes B (or vice versa).",
      "Ignore a third factor C that affects both A and B.",
    ],
    everydayExample: {
      setup: "Health anecdote.",
      dialogue: [
        "A: People who carry lighters get lung disease, so lighters cause it.",
        "B: Smoking is the third factor causing both.",
      ],
    },
    seriousExample:
      "Crime and ice cream sales rise together; climate/temperature is the third factor influencing both.",
    whyItIsFallacious:
      "Failing to consider confounders leads to wrong causal attributions and poor decisions.",
    whyPeopleUseIt:
      "Confounders are sometimes invisible or hard to measure; simple stories are appealing.",
    recognitionPoints: [
      "Causal claims from observational correlation without controls.",
      "Alternative common causes unaddressed.",
      "Interventions are proposed on the wrong variable.",
    ],
    responseStrategies: [
      "Identify plausible confounders and request controlled analysis.",
      "Use designs that can isolate effects (RCTs, matched samples).",
      "Be cautious with observational data before acting on causation.",
    ],
    severity: "High",
    typeLabel: "Causal fallacy",
    typicalContexts: ["Epidemiology", "Economics", "Business analytics"],
    relatedSlugs: [
      "false-cause",
      "spurious-correlation",
      "masked-relationship-fallacy",
    ],
    seoTitle: "Third Variable Fallacy – Logical Fallacies Guide",
    seoDescription:
      "Third variable fallacy ignores confounders and misreads correlation as causation. Learn to check hidden drivers.",
  },
  {
    slug: "reversed-causation",
    name: "Reversed Causation",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: ["Reverse Causality"],
    shortDefinition:
      "Mistakes the direction of cause and effect between two correlated variables.",
    explanation:
      "When A and B are linked, this fallacy assumes A causes B when B actually causes A (or influences it more). Direction matters for decisions and interventions.",
    pattern: [
      "Observe correlation between A and B.",
      "Assume A causes B.",
      "Ignore that B could cause or influence A.",
    ],
    everydayExample: {
      setup: "Productivity apps.",
      dialogue: [
        "A: Productive people use this app, so the app makes them productive.",
        "B: Productive people may choose the app; the direction is unclear.",
      ],
    },
    seriousExample:
      "Studies link stress and smartphone use; concluding phones cause stress overlooks that stressed people may use phones more.",
    whyItIsFallacious:
      "Policies and decisions based on the wrong causal direction can fail or backfire.",
    whyPeopleUseIt:
      "Directionality can be hard to see; intuitive stories bias people toward one-sided causation.",
    recognitionPoints: [
      "Causal claims without temporal or mechanistic justification.",
      "No exploration of whether B could precede or drive A.",
      "Interventions target the wrong direction.",
    ],
    responseStrategies: [
      "Check temporal order and plausible mechanisms.",
      "Consider bidirectional relationships and design studies to test direction.",
      "Avoid interventions until direction is clearer.",
    ],
    severity: "Medium",
    typeLabel: "Causal fallacy",
    typicalContexts: [
      "Health research",
      "Behavior studies",
      "Business metrics",
    ],
    relatedSlugs: [
      "false-cause",
      "third-variable-fallacy",
      "spurious-correlation",
    ],
    seoTitle: "Reversed Causation – Logical Fallacies Guide",
    seoDescription:
      "Reversed causation mistakes which variable drives the other. Learn to test direction before acting.",
  },
  {
    slug: "spurious-correlation",
    name: "Spurious Correlation",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: [],
    shortDefinition:
      "Two variables correlate by coincidence or external patterns, but no causal link exists.",
    explanation:
      "Spurious correlations happen in large datasets or over time when unrelated trends align. Treating them as causal misleads analysis and decisions.",
    pattern: [
      "Find correlation between A and B.",
      "Assume it is meaningful or causal.",
      "Ignore coincidence, seasonality, or hidden common drivers.",
    ],
    everydayExample: {
      setup: "Quirky stats.",
      dialogue: [
        "A: Ice cream sales and sunburns correlate; ice cream must cause sunburn.",
        "B: Warm weather drives both—correlation is spurious.",
      ],
    },
    seriousExample:
      "Stock returns correlate with unrelated indicators (e.g., lunar cycles); acting on it leads to poor strategies.",
    whyItIsFallacious:
      "Coincidental alignment is mistaken for substance, leading to false conclusions and bad decisions.",
    whyPeopleUseIt:
      "Patterns are tempting; large datasets produce coincidental correlations easily.",
    recognitionPoints: [
      "Odd or non-mechanistic correlations touted as meaningful.",
      "No plausible causal pathway.",
      "Seasonality or external cycles unexamined.",
    ],
    responseStrategies: [
      "Ask for causal mechanisms and robustness tests.",
      "Check if the correlation persists across controls and time.",
      "Beware of multiple comparisons and data mining artifacts.",
    ],
    severity: "Medium",
    typeLabel: "Causal fallacy",
    typicalContexts: ["Data mining", "Finance", "Pop statistics"],
    relatedSlugs: ["false-cause", "third-variable-fallacy", "cum-hoc"],
    seoTitle: "Spurious Correlation – Logical Fallacies Guide",
    seoDescription:
      "Spurious correlation confuses coincidence for causation. Learn to demand mechanisms and robustness before acting.",
  },
  {
    slug: "anecdotal-fallacy",
    name: "Anecdotal Fallacy",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: [],
    shortDefinition:
      "Relies on personal stories or isolated examples instead of representative evidence.",
    explanation:
      "Anecdotes can illustrate possibilities but are not proof of prevalence or causation. Basing conclusions on them ignores larger datasets and can mislead risk assessment.",
    pattern: [
      "Provide a personal or isolated story.",
      "Generalize from it to broad conclusions.",
      "Ignore wider data or representative samples.",
    ],
    everydayExample: {
      setup: "Health remedy.",
      dialogue: [
        "A: My friend used this and felt better; it works.",
        "B: One case isn’t evidence—what do controlled studies show?",
      ],
    },
    seriousExample:
      "Policy or medical advice based on a handful of testimonials while dismissing large-scale studies.",
    whyItIsFallacious:
      "Single cases are not representative. Conclusions need broader, controlled evidence.",
    whyPeopleUseIt:
      "Stories are vivid, easy to recall, and persuasive compared to abstract statistics.",
    recognitionPoints: [
      "One or few stories offered as proof.",
      "Lack of representative data or controls.",
      "Emphasis on personal experience over population evidence.",
    ],
    responseStrategies: [
      "Acknowledge the story but request larger, controlled evidence.",
      "Point to base rates and broader studies.",
      "Clarify that anecdotes show possibility, not prevalence.",
    ],
    severity: "Medium",
    typeLabel: "Weak induction",
    typicalContexts: ["Health claims", "Policy anecdotes", "Product reviews"],
    relatedSlugs: [
      "misleading-vividness",
      "cherry-picking",
      "appeal-to-emotion",
    ],
    seoTitle: "Anecdotal Fallacy – Logical Fallacies Guide",
    seoDescription:
      "Anecdotal fallacy uses personal stories as proof. Learn to balance anecdotes with representative evidence.",
  },
  {
    slug: "sampling-bias",
    name: "Sampling Bias",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: [],
    shortDefinition:
      "Draws conclusions from a sample that does not represent the population of interest.",
    explanation:
      "Sampling bias arises when the method of selecting participants or data skews results. It differs from selection bias by focusing on sampling design and representativeness for a target population.",
    pattern: [
      "Define a target population.",
      "Collect a sample in a way that over/under-represents groups.",
      "Generalize results to the whole population.",
    ],
    everydayExample: {
      setup: "User survey.",
      dialogue: [
        "A: We surveyed only power users online; all love the new UI.",
        "B: That sample excludes casual users—generalizing is risky.",
      ],
    },
    seriousExample:
      "Clinical trial recruits healthier volunteers, then claims broad efficacy and safety for the general population.",
    whyItIsFallacious:
      "A biased sample invalidates generalization; results may not apply to the population.",
    whyPeopleUseIt:
      "Convenience sampling is easy; representativeness is harder and costlier.",
    recognitionPoints: [
      "Sample source differs systematically from population.",
      "Undercoverage or overcoverage of groups.",
      "Claims of generality without sampling justification.",
    ],
    responseStrategies: [
      "Ask how the sample was drawn and who was excluded.",
      "Weight or stratify samples to match the population.",
      "Replicate with random or stratified sampling before broad claims.",
    ],
    severity: "High",
    typeLabel: "Statistical fallacy",
    typicalContexts: ["Surveys", "Clinical studies", "Market research"],
    relatedSlugs: ["selection-bias", "survivorship-bias", "publication-bias"],
    seoTitle: "Sampling Bias – Logical Fallacies Guide",
    seoDescription:
      "Sampling bias skews results with unrepresentative samples. Learn to check sample design before generalizing.",
  },
  {
    slug: "publication-bias",
    name: "Publication Bias",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: [],
    shortDefinition:
      "Evidence is distorted because studies with positive or exciting results are more likely to be published than null or negative ones.",
    explanation:
      "When only a subset of results is visible, meta-analyses and public understanding overestimate effects. The unseen null results create a biased evidence base.",
    pattern: [
      "Only certain kinds of results get published or promoted.",
      "Public/analyst view is based on this skewed set.",
      "Conclusions overstate effects because missing data are ignored.",
    ],
    everydayExample: {
      setup: "Product testimonials.",
      dialogue: [
        "A: All reviews we see are positive.",
        "B: Are negative ones filtered or unpublished?",
      ],
    },
    seriousExample:
      "Medical literature shows mainly positive trials; unpublished null trials mean the apparent efficacy is exaggerated.",
    whyItIsFallacious:
      "Missing data bias conclusions; visible evidence is not the whole evidence.",
    whyPeopleUseIt:
      "Journals and media prefer significant, novel findings; organizations spotlight successes.",
    recognitionPoints: [
      "Only positive/novel results are cited.",
      "Difficulty finding null or replication studies.",
      "Large effects shrink when full data sets emerge.",
    ],
    responseStrategies: [
      "Seek registries and pre-registered studies including null results.",
      "Consider funnel plots or bias assessments in meta-analyses.",
      "Discount hype when unseen data likely exist.",
    ],
    severity: "High",
    typeLabel: "Statistical bias",
    typicalContexts: [
      "Science publication",
      "Corporate reporting",
      "Marketing",
    ],
    relatedSlugs: ["survivorship-bias", "selection-bias", "cherry-picking"],
    seoTitle: "Publication Bias – Logical Fallacies Guide",
    seoDescription:
      "Publication bias hides null results, inflating apparent effects. Learn to look for missing data before trusting conclusions.",
  },
  {
    slug: "ecological-fallacy",
    name: "Ecological Fallacy",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: [],
    shortDefinition:
      "Infers individual-level conclusions from group-level data, ignoring within-group variation.",
    explanation:
      "Group averages or correlations don’t necessarily apply to individuals. The ecological fallacy assumes they do, leading to misinterpretation and stereotyping.",
    pattern: [
      "Observe group-level relationship or average.",
      "Apply it to individuals within the group.",
      "Ignore variability among individuals.",
    ],
    everydayExample: {
      setup: "Regional behavior.",
      dialogue: [
        "A: City X has high income, so everyone there must be wealthy.",
        "B: Averages hide inequality; individuals vary widely.",
      ],
    },
    seriousExample:
      "Policy derived from national-level correlations assumes the same effect on each person, misallocating resources.",
    whyItIsFallacious:
      "Aggregate data cannot be directly mapped to individual cases without additional assumptions.",
    whyPeopleUseIt:
      "Aggregates are easy to grasp; they tempt overgeneralization.",
    recognitionPoints: [
      "Group stats used to characterize individuals.",
      "No acknowledgment of variance or distribution.",
      "Stereotyping based on location or group averages.",
    ],
    responseStrategies: [
      "Ask for individual-level data or distributions.",
      "Differentiate aggregate trends from individual cases.",
      "Avoid stereotyping individuals from group metrics.",
    ],
    severity: "Medium",
    typeLabel: "Statistical fallacy",
    typicalContexts: ["Policy", "Epidemiology", "Sociology"],
    relatedSlugs: ["fallacy-of-division", "simpsons-paradox", "selection-bias"],
    seoTitle: "Ecological Fallacy – Logical Fallacies Guide",
    seoDescription:
      "Ecological fallacy maps group data onto individuals. Learn to separate aggregate trends from individual variation.",
  },
  {
    slug: "thought-terminating-cliche",
    name: "Thought-Terminating Cliché",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: [],
    shortDefinition:
      "Uses a trite phrase to end discussion and discourage further thought.",
    explanation:
      "Stock phrases like “it is what it is” or “that’s just how it’s done” halt inquiry. They provide no rebuttal but create social pressure to stop questioning.",
    pattern: [
      "A challenge or question is raised.",
      "A cliché is offered as a final word.",
      "Discussion stops without addressing substance.",
    ],
    everydayExample: {
      setup: "Process critique.",
      dialogue: [
        "A: Why do we deploy like this?",
        "B: It is what it is—move on.",
      ],
    },
    seriousExample:
      "In political or organizational settings, slogans shut down debate about controversial practices without providing reasons.",
    whyItIsFallacious:
      "Clichés replace reasoning with social closure. They end debate without engaging evidence or alternatives.",
    whyPeopleUseIt:
      "They save face, avoid conflict, and signal group loyalty while dodging scrutiny.",
    recognitionPoints: [
      "Conversation ends with a slogan or truism.",
      "No evidence or reasoning accompanies the closure.",
      "Questions are framed as illegitimate for asking.",
    ],
    responseStrategies: [
      "Ask for reasons beyond the slogan.",
      "Acknowledge the phrase and restate the unanswered question.",
      "Invite concrete evidence or alternatives.",
    ],
    severity: "Medium",
    typeLabel: "Rhetorical tactic",
    typicalContexts: ["Debate", "Workplace culture", "Politics"],
    relatedSlugs: [
      "glittering-generalities",
      "deepity",
      "appeal-to-common-practice",
    ],
    seoTitle: "Thought-Terminating Cliché – Logical Fallacies Guide",
    seoDescription:
      "Thought-terminating clichés shut down debate without reasons. Learn to move past slogans to substance.",
  },
  {
    slug: "deepity",
    name: "Deepity",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: [],
    shortDefinition:
      "A statement that seems profound but is either trivially true or meaningless upon scrutiny.",
    explanation:
      "Deepities rely on ambiguity and layered meanings to appear insightful. One reading is banal but true; another is exciting but false or nonsensical.",
    pattern: [
      "Present an ambiguous, lofty statement.",
      "Let the audience supply a profound-sounding interpretation.",
      "Avoid specific, testable content.",
    ],
    everydayExample: {
      setup: "Self-help slogan.",
      dialogue: ["“Love is just a word, but it’s also everything.”"],
    },
    seriousExample:
      "In debates, phrases like “reality is an illusion” are used to sidestep concrete discussion, sounding profound without actionable meaning.",
    whyItIsFallacious:
      "It trades on vagueness and emotional resonance instead of clear, testable claims, making critical evaluation hard.",
    whyPeopleUseIt:
      "It impresses or inspires without committing to specifics; it’s memorable and hard to criticize without seeming contrarian.",
    recognitionPoints: [
      "Ambiguous, poetic phrasing with no clear testable claim.",
      "Multiple readings: one trivial, one dubious.",
      "Pushback is framed as lacking insight.",
    ],
    responseStrategies: [
      "Ask for a clear, single meaning or concrete implications.",
      "Separate the trivial reading from the intended strong claim.",
      "Request evidence or examples tied to a specific interpretation.",
    ],
    severity: "Low",
    typeLabel: "Rhetorical flourish",
    typicalContexts: [
      "Philosophical chatter",
      "Marketing slogans",
      "Motivational talk",
    ],
    relatedSlugs: [
      "glittering-generalities",
      "thought-terminating-cliche",
      "equivocation",
    ],
    seoTitle: "Deepity – Logical Fallacies Guide",
    seoDescription:
      "A deepity sounds profound but is trivial or meaningless on inspection. Learn to unpack and ask for specific claims.",
  },
  {
    slug: "dogwhistles",
    name: "Dogwhistles",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: ["Coded Speech"],
    shortDefinition:
      "Uses coded language that seems innocuous to the general audience but carries targeted meanings for a specific group.",
    explanation:
      "Dogwhistles communicate dual messages: a surface-safe phrasing and a hidden signal to in-group listeners. This allows plausible deniability while mobilizing specific responses.",
    pattern: [
      "Use ambiguous or coded terms.",
      "Rely on shared context for hidden meaning to a subgroup.",
      "Deny intent if challenged, citing the surface meaning.",
    ],
    everydayExample: {
      setup: "Local politics.",
      dialogue: [
        "A: He keeps saying ‘neighborhood character’—to some, that’s code for excluding newcomers.",
      ],
    },
    seriousExample:
      "Speeches include historical phrases associated with extremist groups; supporters hear the signal while broader audiences miss it.",
    whyItIsFallacious:
      "It avoids open argument and accountability, manipulating audiences with covert messaging instead of transparent reasons.",
    whyPeopleUseIt:
      "Plausible deniability and targeted mobilization make it a strategic rhetorical tool.",
    recognitionPoints: [
      "Phrases with benign surface meaning but loaded subtext to certain groups.",
      "Patterns of usage aligning with specific ideological signals.",
      "Denial of intent paired with repeated coded terms.",
    ],
    responseStrategies: [
      "Ask for explicit definitions and policy specifics.",
      "Contextualize the phrase’s history and connotations.",
      "Expose dual meanings to reduce deniability.",
    ],
    severity: "Medium",
    typeLabel: "Rhetorical tactic",
    typicalContexts: ["Politics", "Culture wars", "Advocacy messaging"],
    relatedSlugs: [
      "glittering-generalities",
      "virtue-signalling",
      "gaslighting",
    ],
    seoTitle: "Dogwhistles – Logical Fallacies Guide",
    seoDescription:
      "Dogwhistles use coded language with hidden signals. Learn to surface meanings and press for plain speech.",
  },
  {
    slug: "virtue-signalling",
    name: "Virtue Signalling",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: [],
    shortDefinition:
      "Expresses moral stances mainly to display virtue or gain approval, not to argue substance.",
    explanation:
      "Virtue signalling highlights alignment with valued norms to gain social credit. It becomes a fallacy when posture replaces evidence or reasoning about the issue.",
    pattern: [
      "Declare a moral stance publicly.",
      "Offer little substance or action beyond the declaration.",
      "Use the stance to imply correctness or superiority.",
    ],
    everydayExample: {
      setup: "Online posting.",
      dialogue: [
        "A: Posting a hashtag proves we’re solving the issue.",
        "B: Support is fine, but what evidence or actions back the claim?",
      ],
    },
    seriousExample:
      "Organizations issue statements of solidarity without policy changes, using the statements as evidence of moral correctness.",
    whyItIsFallacious:
      "Signalling does not validate arguments or solutions. It can distract from evaluating actual impacts.",
    whyPeopleUseIt:
      "It’s low-cost, socially rewarded, and can deflect deeper scrutiny or action.",
    recognitionPoints: [
      "Declarations with minimal evidence or follow-through.",
      "Critique framed as moral failure rather than engaging substance.",
      "Focus on appearance of virtue over outcomes.",
    ],
    responseStrategies: [
      "Acknowledge values, then ask for evidence of impact.",
      "Distinguish signaling from substantive action.",
      "Evaluate proposals on outcomes, not declarations.",
    ],
    severity: "Low",
    typeLabel: "Rhetorical appeal",
    typicalContexts: ["Social media", "Corporate comms", "Politics"],
    relatedSlugs: [
      "glittering-generalities",
      "dogwhistles",
      "appeal-to-popularity",
    ],
    seoTitle: "Virtue Signalling – Logical Fallacies Guide",
    seoDescription:
      "Virtue signalling highlights moral stance without substance. Learn to separate signals from real arguments and actions.",
  },
  {
    slug: "false-balance",
    name: "False Balance",
    category: categoryMap["debate-tactics"],
    alsoKnownAs: ["Bothsidesism"],
    shortDefinition:
      "Presents two sides as equally valid despite a clear weight of evidence or expertise favoring one.",
    explanation:
      "False balance gives disproportionate airtime or credibility to fringe views to appear impartial. It distorts public understanding by implying parity where evidence is lopsided.",
    pattern: [
      "Identify a topic with strong evidence on one side.",
      "Present opposing fringe view as equal for ‘balance’.",
      "Audience infers controversy where little exists.",
    ],
    everydayExample: {
      setup: "Health debate.",
      dialogue: [
        "A: Inviting an anti-vax influencer to ‘balance’ a vaccine scientist.",
        "B: Balance misleads when evidence isn’t balanced.",
      ],
    },
    seriousExample:
      "Media panels put climate scientists against non-experts to simulate equal debate, understating consensus.",
    whyItIsFallacious:
      "It misrepresents evidence and expertise, creating false equivalence.",
    whyPeopleUseIt:
      "To appear fair or avoid accusations of bias; controversy can also boost engagement.",
    recognitionPoints: [
      "Equal platforming despite stark evidence asymmetry.",
      "Fringe views presented without disclosing their fringe status.",
      "Consensus or expertise is downplayed.",
    ],
    responseStrategies: [
      "Clarify consensus levels and evidence weight.",
      "Disclose fringe status and credentials differences.",
      "Frame coverage proportional to evidence, not optics.",
    ],
    severity: "High",
    typeLabel: "Propaganda/Media bias",
    typicalContexts: ["Journalism", "Public debates", "Policy forums"],
    relatedSlugs: ["quote-mining", "glittering-generalities", "selection-bias"],
    seoTitle: "False Balance – Logical Fallacies Guide",
    seoDescription:
      "False balance portrays fringe and evidence-backed views as equal. Learn to weigh claims by evidence, not optics.",
  },
  {
    slug: "quote-mining",
    name: "Quote Mining",
    category: categoryMap["debate-tactics"],
    alsoKnownAs: ["Contextomy"],
    shortDefinition:
      "Removes quotes from context to misrepresent the speaker’s intent or conclusion.",
    explanation:
      "By isolating fragments, quote mining can invert or distort meaning. It presents the fragment as representative proof while hiding surrounding clarifications or caveats.",
    pattern: [
      "Extract a quote fragment.",
      "Omit context that changes its meaning.",
      "Use the fragment to support a misleading conclusion.",
    ],
    everydayExample: {
      setup: "Performance review.",
      dialogue: [
        "A: You said ‘this project is a failure’—ignoring you were summarizing a risk scenario.",
      ],
    },
    seriousExample:
      "Scientific statements are clipped to suggest certainty or support for the opposite of the author’s conclusion.",
    whyItIsFallacious:
      "Context determines meaning. Stripping it creates a false impression and misleads the audience.",
    whyPeopleUseIt:
      "It’s persuasive and harder to spot quickly; it allows misrepresentation with plausible deniability.",
    recognitionPoints: [
      "Short fragments used as decisive proof.",
      "Lack of broader context or surrounding text.",
      "Claims seem at odds with the source’s known position.",
    ],
    responseStrategies: [
      "Consult the full source context.",
      "Highlight missing context that reverses/qualifies the meaning.",
      "Be wary of fragmented quotes used as primary evidence.",
    ],
    severity: "High",
    typeLabel: "Propaganda tactic",
    typicalContexts: ["Media clips", "Debates", "Online arguments"],
    relatedSlugs: ["half-truth", "card-stacking", "strawman"],
    seoTitle: "Quote Mining – Logical Fallacies Guide",
    seoDescription:
      "Quote mining strips context to mislead. Learn to check full sources before accepting clipped claims.",
  },
  {
    slug: "gaslighting",
    name: "Gaslighting",
    category: categoryMap["debate-tactics"],
    alsoKnownAs: [],
    shortDefinition:
      "Systematically makes someone doubt their perceptions or memory to gain advantage or control.",
    explanation:
      "Gaslighting denies or distorts reality, insisting the target’s recollections are wrong or irrational. Over time it erodes confidence and makes the target reliant on the gaslighter’s version of events.",
    pattern: [
      "Deny or reinterpret events the target experienced.",
      "Insist the target is misremembering or overreacting.",
      "Repeat until the target doubts their own perception.",
    ],
    everydayExample: {
      setup: "Workplace denial.",
      dialogue: [
        "A: You promised this deadline.",
        "B: I never said that; you must be imagining it.",
      ],
    },
    seriousExample:
      "In abusive relationships or authoritarian settings, records are altered or denied, making victims question their sanity and accept the imposed narrative.",
    whyItIsFallacious:
      "It is manipulative, not an argument; it evades evidence by attacking the target’s grasp of reality.",
    whyPeopleUseIt:
      "To avoid accountability and gain control by destabilizing the target’s confidence.",
    recognitionPoints: [
      "Consistent denial of documented events.",
      "Accusations that the target is irrational for recalling events.",
      "Contradictions with evidence paired with pressure to accept the denial.",
    ],
    responseStrategies: [
      "Keep written records and third-party confirmations.",
      "Check memories against external evidence.",
      "Name the tactic and seek support outside the manipulative dynamic.",
    ],
    severity: "High",
    typeLabel: "Manipulative tactic",
    typicalContexts: [
      "Abuse dynamics",
      "Authoritarian control",
      "Toxic workplaces",
    ],
    relatedSlugs: ["poisoning-the-well", "smokescreen", "appeal-to-motive"],
    seoTitle: "Gaslighting – Logical Fallacies Guide",
    seoDescription:
      "Gaslighting makes targets doubt their reality to gain control. Learn signs and how to anchor back to evidence.",
  },
  {
    slug: "oversimplification",
    name: "Oversimplification",
    category: categoryMap["debate-tactics"],
    alsoKnownAs: ["Reductionism (when excessive)"],
    shortDefinition:
      "Reduces a complex issue to a single cause or factor, ignoring important nuance.",
    explanation:
      "By stripping away contributing factors, oversimplification misrepresents problems and solutions. It can lead to ineffective or harmful decisions.",
    pattern: [
      "Present a complex issue.",
      "Reduce it to one cause or variable.",
      "Argue solutions based only on that simplified view.",
    ],
    everydayExample: {
      setup: "Project delays.",
      dialogue: [
        "A: Delays happen only because people don’t work hard enough.",
        "B: Scope, tooling, staffing, and requirements also matter.",
      ],
    },
    seriousExample:
      "Policy argues crime is solely due to individual morality, ignoring socio-economic factors, policing practices, and community resources.",
    whyItIsFallacious:
      "Complex systems rarely hinge on one factor. Ignoring nuance yields distorted explanations and poor interventions.",
    whyPeopleUseIt:
      "Simple stories are easy to communicate and rally around; nuance is harder to sell.",
    recognitionPoints: [
      "Single-cause explanations for multifaceted issues.",
      "Little acknowledgment of interacting factors.",
      "Sweeping prescriptions based on a narrow view.",
    ],
    responseStrategies: [
      "List other plausible factors and evidence for them.",
      "Show interactions and trade-offs.",
      "Seek multifactor data before endorsing single-cause fixes.",
    ],
    severity: "Medium",
    typeLabel: "Propaganda tactic",
    typicalContexts: ["Politics", "Media commentary", "Business narratives"],
    relatedSlugs: [
      "smokescreen",
      "fallacy-of-composition",
      "hasty-generalisation",
    ],
    seoTitle: "Oversimplification – Logical Fallacies Guide",
    seoDescription:
      "Oversimplification reduces complex issues to single causes. Learn to reintroduce nuance and multiple factors.",
  },
  {
    slug: "whataboutism",
    name: "Whataboutism",
    category: categoryMap["debate-tactics"],
    alsoKnownAs: ["Tu quoque variant"],
    shortDefinition:
      "Deflects criticism by pointing to another issue or wrongdoing instead of addressing the original point.",
    explanation:
      "Related to appeal to hypocrisy, whataboutism shifts focus to someone else’s faults. It avoids engaging with the criticism or claim at hand.",
    pattern: [
      "Receive a criticism or claim.",
      "Respond by citing another problem or opponent’s wrongdoing.",
      "Claim the original issue is thereby invalid or unimportant.",
    ],
    everydayExample: {
      setup: "Team feedback.",
      dialogue: [
        "A: We missed our deadline.",
        "B: What about the design team missing theirs last month?",
      ],
    },
    seriousExample:
      "A government confronted about rights violations deflects by highlighting other countries’ abuses instead of addressing the allegations.",
    whyItIsFallacious:
      "It doesn’t refute the original claim; it distracts with a different issue.",
    whyPeopleUseIt:
      "It’s an effective deflection and can rally supporters by shifting blame.",
    recognitionPoints: [
      "Criticism answered with “what about…” and a different issue.",
      "No engagement with the substance of the original point.",
      "Appeal to comparative wrongdoing as a shield.",
    ],
    responseStrategies: [
      "Acknowledge the deflection and return to the original issue.",
      "Address the new issue separately if relevant, but not as a substitute.",
      "Clarify that multiple wrongs can be considered without canceling each other out.",
    ],
    severity: "Medium",
    typeLabel: "Debate deflection",
    typicalContexts: [
      "Politics",
      "Online debates",
      "Accountability discussions",
    ],
    relatedSlugs: ["appeal-to-hypocrisy", "red-herring", "smokescreen"],
    seoTitle: "Whataboutism – Logical Fallacies Guide",
    seoDescription:
      "Whataboutism deflects criticism by pointing elsewhere. Learn to spot the diversion and refocus on the original point.",
  },
  {
    slug: "appeal-to-probability",
    name: "Appeal to Probability",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: [],
    shortDefinition:
      "Assumes that because something could happen, it will happen—or that probability alone justifies action.",
    explanation:
      "Possibility or nonzero probability is treated as inevitability. It overstates likelihood and skips proper risk assessment.",
    pattern: [
      "Note that an event is possible or has some probability.",
      "Treat that as evidence the event will occur (or must be acted on as if certain).",
      "Ignore magnitude of probability and mitigating factors.",
    ],
    everydayExample: {
      setup: "Project risk.",
      dialogue: [
        "A: This might fail, so it definitely will unless we cancel now.",
        "B: What’s the actual likelihood and impact? Let’s assess proportionally.",
      ],
    },
    seriousExample:
      "Policy argues for extreme measures because a threat is possible, without weighing its probability and cost-effectiveness.",
    whyItIsFallacious:
      "Turning possibility into certainty distorts decisions. Likelihood and impact must be evaluated, not assumed.",
    whyPeopleUseIt:
      "It heightens urgency and can justify actions without detailed analysis.",
    recognitionPoints: [
      "Language shifts from ‘could’ to ‘will’ without quantification.",
      "Nonzero risk treated as inevitable.",
      "Risk trade-offs and probabilities are absent.",
    ],
    responseStrategies: [
      "Quantify probability and impact.",
      "Consider mitigations and compare alternatives.",
      "Differentiate possible from probable and certain.",
    ],
    severity: "Medium",
    typeLabel: "Decision bias",
    typicalContexts: ["Risk arguments", "Policy justification", "Planning"],
    relatedSlugs: ["modal-fallacy", "planning-fallacy", "illusion-of-control"],
    seoTitle: "Appeal to Probability – Logical Fallacies Guide",
    seoDescription:
      "Appeal to probability turns ‘could’ into ‘will’. Learn to quantify risk instead of assuming inevitability.",
  },
  {
    slug: "appeal-to-normality",
    name: "Appeal to Normality",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: [],
    shortDefinition:
      "Claims something is acceptable or correct because it is common or normal.",
    explanation:
      "Normality is descriptive, not prescriptive. The fallacy treats common occurrence as justification, ignoring evidence or impacts.",
    pattern: [
      "Identify that many people do or experience X.",
      "Infer that X is acceptable or correct because it is normal.",
      "Skip evaluation of harm, benefit, or alternatives.",
    ],
    everydayExample: {
      setup: "Work habits.",
      dialogue: [
        "A: Everyone works late; it’s normal, so it’s fine.",
        "B: Prevalence doesn’t prove it’s healthy or effective.",
      ],
    },
    seriousExample:
      "A practice is defended because it is ‘industry standard,’ despite evidence of harm or inefficiency.",
    whyItIsFallacious:
      "Commonality is not proof of correctness. Harmful behaviors can be widespread.",
    whyPeopleUseIt:
      "It feels safe to conform and to justify actions by pointing to norms.",
    recognitionPoints: [
      "Normal/common cited as main justification.",
      "Little evidence of outcomes or ethics.",
      "Dismissal of change because status quo is prevalent.",
    ],
    responseStrategies: [
      "Ask for evidence of effectiveness or harm, beyond commonality.",
      "Provide examples where common practices were harmful.",
      "Distinguish descriptive norms from prescriptive justification.",
    ],
    severity: "Medium",
    typeLabel: "Decision bias",
    typicalContexts: ["Workplace culture", "Policy norms", "Social behavior"],
    relatedSlugs: [
      "appeal-to-common-practice",
      "appeal-to-popularity",
      "appeal-to-nature",
    ],
    seoTitle: "Appeal to Normality – Logical Fallacies Guide",
    seoDescription:
      "Appeal to normality says something is fine because it’s common. Learn to separate prevalence from proof.",
  },
  {
    slug: "appeal-to-emotion",
    name: "Appeal to Emotion",
    category: categoryMap["rhetorical-cognitive-bias"],
    alsoKnownAs: ["Emotional Appeal"],
    shortDefinition:
      "Leans on feelings like fear, pity, or pride instead of reasons.",
    explanation:
      "Emotion can be relevant, but appeals to emotion replace evidence with feelings. The tactic makes agreement feel virtuous or urgent while bypassing evaluation.",
    pattern: [
      "Present a vivid emotional trigger.",
      "Link accepting the claim with feeling better or avoiding guilt.",
      "Offer little or no supporting evidence.",
    ],
    everydayExample: {
      setup: "A subscription upsell.",
      dialogue: [
        "Sales page: “Imagine losing all your memories. Upgrade now to protect them forever.”",
      ],
    },
    seriousExample:
      "A politician argues for sweeping surveillance by invoking fear of rare attacks without presenting proportional risk data.",
    whyItIsFallacious:
      "Feelings alone cannot establish truth. They can be genuine yet unrelated to whether the claim is supported.",
    whyPeopleUseIt:
      "Emotion is fast, memorable, and can short-circuit scrutiny, especially under time pressure.",
    recognitionPoints: [
      "Strong emotional language with thin evidence.",
      "Fear, pride, or pity framed as the main reason to agree.",
      "Urgency or moral pressure replacing analysis.",
    ],
    responseStrategies: [
      "Acknowledge feelings, then request concrete evidence.",
      "Ask how the emotional point supports the claim's truth.",
      "Slow down the pace to separate facts from feelings.",
    ],
    severity: "Medium",
    typeLabel: "Logical fallacy",
    typicalContexts: ["Debate", "Media", "Everyday conversation"],
    relatedSlugs: ["appeal-to-popularity", "slippery-slope"],
    seoTitle: "Appeal to Emotion – Logical Fallacies Guide",
    seoDescription:
      "Appeal to emotion substitutes feelings for evidence. Learn the signs, dialogue examples, and ways to respond.",
  },
  {
    slug: "slippery-slope",
    name: "Slippery Slope",
    category: categoryMap.presumption,
    alsoKnownAs: ["Domino Fallacy"],
    shortDefinition:
      "Claims a small first step will inevitably lead to extreme outcomes.",
    explanation:
      "A slippery slope asserts that allowing X will trigger a chain of worsening events, without demonstrating that the chain is likely or unavoidable.",
    pattern: [
      "If X happens, then maybe Y will happen.",
      "Assume Y leads to Z, an extreme outcome.",
      "Treat Z as inevitable, not just possible.",
    ],
    everydayExample: {
      setup: "Discussing flexible work hours.",
      dialogue: [
        "A: “Could we allow one remote day per week?”",
        "B: “If we start that, soon nobody will come to the office at all.”",
      ],
    },
    seriousExample:
      "A city argues that permitting limited street vending will ‘inevitably’ destroy all brick-and-mortar businesses, without evidence for the cascade.",
    whyItIsFallacious:
      "It skips showing causal links between each step. Possibility is treated as certainty.",
    whyPeopleUseIt:
      "Predicting doom can sound cautious and can block change without evaluating real risks.",
    recognitionPoints: [
      "A chain of events is asserted with little evidence for each link.",
      "Language of inevitability (“will”, “inevitable”) is used for speculative steps.",
      "No consideration of safeguards that would break the chain.",
    ],
    responseStrategies: [
      "Ask for evidence connecting each step in the chain.",
      "Identify stopgaps or policies that prevent the extreme outcome.",
      "Distinguish between possibility and probability.",
    ],
    severity: "Medium",
    typeLabel: "Logical fallacy",
    typicalContexts: ["Debate", "Media", "Everyday conversation"],
    relatedSlugs: ["appeal-to-emotion", "false-dichotomy"],
    seoTitle: "Slippery Slope – Logical Fallacies Guide",
    seoDescription:
      "Slippery slope arguments predict extreme consequences from small changes. Learn the pattern and how to respond.",
  },
  {
    slug: "false-dichotomy",
    name: "False Dichotomy",
    category: categoryMap.presumption,
    alsoKnownAs: ["False Dilemma", "Excluded Middle"],
    shortDefinition:
      "Presents only two options when more reasonable alternatives exist.",
    explanation:
      "A false dichotomy frames an issue as either-or, pressuring acceptance of one option by ignoring middle ground or additional choices.",
    pattern: [
      "Offer two choices as if they are exhaustive.",
      "Ignore nuanced or combined options.",
      "Push acceptance of one extreme as the only alternative to the other.",
    ],
    everydayExample: {
      setup: "A team budget discussion.",
      dialogue: [
        "A: “We either cut all travel or keep spending recklessly.”",
        "B: “We could also set limits and prioritize essential trips.”",
      ],
    },
    seriousExample:
      "A national debate frames security as a choice between ‘total surveillance’ or ‘total chaos,’ excluding proportional approaches.",
    whyItIsFallacious:
      "Most decisions have multiple options. Hiding them distorts the decision landscape and pressures a choice that might be rejected if real options were shown.",
    whyPeopleUseIt:
      "It simplifies debate, creates urgency, and corners opponents into defending an extreme.",
    recognitionPoints: [
      "Only two options are presented for a complex issue.",
      "Middle ground or combinations are ignored.",
      "Agreement is demanded quickly because “there is no alternative.”",
    ],
    responseStrategies: [
      "Name the false choice and offer additional options.",
      "Ask why only those two choices are considered.",
      "Reframe the problem with broader criteria.",
    ],
    severity: "Medium",
    typeLabel: "Logical fallacy",
    typicalContexts: ["Debate", "Media", "Everyday conversation"],
    relatedSlugs: ["slippery-slope", "appeal-to-popularity"],
    seoTitle: "False Dichotomy – Logical Fallacies Guide",
    seoDescription:
      "False dichotomy forces a choice between two options when more exist. See patterns and counters.",
  },
  {
    slug: "appeal-to-ignorance",
    name: "Appeal to Ignorance",
    category: categoryMap.presumption,
    alsoKnownAs: ["Argument from Ignorance"],
    shortDefinition:
      "Claims something is true because it has not been proven false, or vice versa.",
    explanation:
      "A lack of disconfirming evidence is treated as proof. The burden of proof is flipped so that absence of evidence stands in for evidence of absence—or presence.",
    pattern: [
      "Note that a claim has not been disproven.",
      "Treat that absence as proof the claim is true (or false).",
      "Shift the burden to skeptics to disprove the claim.",
    ],
    everydayExample: {
      setup: "Chat about a new gadget.",
      dialogue: [
        "A: “This wearable boosts focus; no one has shown it doesn’t.”",
        "B: “Lack of disproof isn’t evidence it works. Where’s the data?”",
      ],
    },
    seriousExample:
      "Officials assert a program is safe because 'no complaints have been filed,' despite limited monitoring and reporting channels.",
    whyItIsFallacious:
      "Absence of evidence can mean many things: poor testing, hidden data, or true uncertainty. It is not automatic proof.",
    whyPeopleUseIt:
      "It is easier to demand disproof than to provide supporting evidence, and it leverages uncertainty to claim victory.",
    recognitionPoints: [
      "Assertions rest on what has not been found or reported.",
      "The burden of proof is shifted to skeptics unfairly.",
      "Little effort is made to gather positive evidence.",
    ],
    responseStrategies: [
      "Clarify who bears the burden of proof for the claim.",
      "Ask for positive evidence supporting the assertion.",
      "Highlight the difference between unknown and proven true/false.",
    ],
    severity: "Medium",
    typeLabel: "Logical fallacy",
    typicalContexts: ["Debate", "Media", "Everyday conversation"],
    relatedSlugs: ["begging-the-question", "false-dichotomy"],
    seoTitle: "Appeal to Ignorance – Logical Fallacies Guide",
    seoDescription:
      "Appeal to ignorance treats lack of disproof as proof. Learn the pattern and how to respond.",
  },
  {
    slug: "begging-the-question",
    name: "Begging the Question",
    category: categoryMap.presumption,
    alsoKnownAs: ["Circular Reasoning"],
    shortDefinition:
      "Uses its own conclusion as a premise instead of offering support.",
    explanation:
      "The argument assumes what it needs to prove. The claim is restated in different words within the premises, so the conclusion is already baked in.",
    pattern: [
      "State a claim.",
      "Use the claim (or a synonym) as a supporting premise.",
      "Conclude the claim is true because the premise repeats it.",
    ],
    everydayExample: {
      setup: "Discussing product quality.",
      dialogue: [
        "A: “This is the best app because it’s superior to every competitor.”",
        "B: “You just restated ‘best’ without evidence.”",
      ],
    },
    seriousExample:
      "An agency asserts a policy is legitimate because it is lawful, and claims it is lawful because the agency issued it.",
    whyItIsFallacious:
      "The conclusion does no work; it merely reappears as a premise. No independent support is offered.",
    whyPeopleUseIt:
      "It can sound confident and closed-loop, discouraging questions and hiding lack of evidence.",
    recognitionPoints: [
      "Key premise and conclusion say essentially the same thing.",
      "The argument fails if you strip out synonymous wording.",
      "No external evidence is provided beyond the claim itself.",
    ],
    responseStrategies: [
      "Ask for an independent reason to believe the premise.",
      "Point out where the conclusion reappears in the premises.",
      "Rephrase the claim and show the circular structure.",
    ],
    severity: "Medium",
    typeLabel: "Logical fallacy",
    typicalContexts: ["Debate", "Media", "Everyday conversation"],
    relatedSlugs: ["appeal-to-ignorance", "affirming-the-consequent"],
    seoTitle: "Begging the Question – Logical Fallacies Guide",
    seoDescription:
      "Begging the question uses the conclusion as a premise. Spot the circular pattern and learn quick counters.",
  },
  {
    slug: "hasty-generalisation",
    name: "Hasty Generalisation",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: ["Overgeneralisation"],
    shortDefinition:
      "Draws a broad conclusion from too little or unrepresentative evidence.",
    explanation:
      "A sweeping claim is made on the basis of a small sample, anecdotes, or non-random cases. The conclusion outstrips the data.",
    pattern: [
      "Observe a small or biased sample.",
      "Extend the observation to a broad population.",
      "Ignore sample size, randomness, or alternative explanations.",
    ],
    everydayExample: {
      setup: "After trying one café.",
      dialogue: [
        "A: “The coffee was bad in that town, so all cafés there must be terrible.”",
      ],
    },
    seriousExample:
      "A pilot study of 12 participants is used to claim a health supplement works for everyone, ignoring the need for larger, controlled trials.",
    whyItIsFallacious:
      "Conclusions require representative evidence. Small or biased samples cannot justify sweeping claims.",
    whyPeopleUseIt:
      "Early impressions are vivid, and broad claims sound decisive even when evidence is thin.",
    recognitionPoints: [
      "Strong, sweeping language based on a handful of cases.",
      "No mention of sample size, randomness, or controls.",
      "Anecdotes are treated as universal proof.",
    ],
    responseStrategies: [
      "Ask about sample size and selection.",
      "Request broader data or controlled studies.",
      "Show counterexamples or variability within the population.",
    ],
    severity: "Medium",
    typeLabel: "Logical fallacy",
    typicalContexts: ["Debate", "Media", "Everyday conversation"],
    relatedSlugs: ["correlation-is-not-causation", "appeal-to-popularity"],
    seoTitle: "Hasty Generalisation – Logical Fallacies Guide",
    seoDescription:
      "Hasty generalisation stretches small samples into big claims. Learn the warning signs and responses.",
  },
  {
    slug: "correlation-is-not-causation",
    name: "Correlation ≠ Causation",
    category: categoryMap["statistical-scientific"],
    alsoKnownAs: ["False Cause"],
    shortDefinition:
      "Assumes that because two things move together, one must cause the other.",
    explanation:
      "When two variables correlate, multiple explanations exist: coincidence, a hidden third factor, or reversed causality. Treating correlation as causation skips testing these alternatives.",
    pattern: [
      "Notice two trends occur together.",
      "Assume one trend causes the other.",
      "Ignore confounding variables or reverse causality.",
    ],
    everydayExample: {
      setup: "Comparing sales and social media.",
      dialogue: [
        "A: “Every time we post memes, sales rise. Memes cause revenue.”",
        "B: “Or maybe we post memes during campaigns that already boost sales.”",
      ],
    },
    seriousExample:
      "A city links higher bike-share use to rising rents and claims bike lanes cause gentrification, ignoring broader economic drivers.",
    whyItIsFallacious:
      "Correlation alone cannot establish direction or causality. Without ruling out other causes, the inference is premature.",
    whyPeopleUseIt:
      "Causal stories are compelling and simple, and correlations are easy to find in data-rich settings.",
    recognitionPoints: [
      "Causal language (“causes,” “leads to”) attached to mere co-movement.",
      "Little discussion of controls, confounders, or alternative explanations.",
      "Timing or mechanisms are vague or missing.",
    ],
    responseStrategies: [
      "Ask for evidence ruling out confounders or reversed causality.",
      "Request experimental or quasi-experimental support.",
      "Rephrase the claim as a hypothesis needing testing.",
    ],
    severity: "Medium",
    typeLabel: "Logical fallacy",
    typicalContexts: ["Debate", "Media", "Everyday conversation"],
    relatedSlugs: ["hasty-generalisation", "affirming-the-consequent"],
    seoTitle: "Correlation Is Not Causation – Logical Fallacies Guide",
    seoDescription:
      "Correlation alone cannot prove cause. See the pattern, examples, and questions that expose the gap.",
  },
  {
    slug: "affirming-the-consequent",
    name: "Affirming the Consequent",
    category: categoryMap.formal,
    alsoKnownAs: ["Reverse Conditional"],
    shortDefinition:
      "Assumes that if a result occurs, the only cause must be a specific prior condition.",
    explanation:
      "In the form: If A then B. B is true, therefore A must be true. This ignores that B could arise from other causes, making the inference invalid.",
    pattern: [
      "If A then B is asserted.",
      "B is observed.",
      "Conclude A is true because B is present.",
    ],
    everydayExample: {
      setup: "Troubleshooting a device.",
      dialogue: [
        "A: “If the battery is dead, the phone won’t turn on. It won’t turn on, so the battery is dead.”",
        "B: “Or the charger port or power button could be faulty.”",
      ],
    },
    seriousExample:
      "Investigators assume a suspect is guilty because a piece of evidence predicted for guilt is present, ignoring other explanations for the evidence.",
    whyItIsFallacious:
      "The conclusion overlooks alternative causes of the observed result. The logical form is invalid.",
    whyPeopleUseIt:
      "It feels deductive and tidy, especially when one cause is salient or emotionally charged.",
    recognitionPoints: [
      "A conditional statement is reversed without eliminating other causes.",
      "Presence of an outcome is treated as conclusive proof of a single cause.",
      "Other possible explanations are ignored or dismissed quickly.",
    ],
    responseStrategies: [
      "List other plausible causes for the observed result.",
      "Show that the original conditional does not claim exclusivity.",
      "Ask for evidence eliminating alternative explanations.",
    ],
    severity: "Medium",
    typeLabel: "Logical fallacy",
    typicalContexts: ["Debate", "Media", "Everyday conversation"],
    relatedSlugs: ["correlation-is-not-causation", "begging-the-question"],
    seoTitle: "Affirming the Consequent – Logical Fallacies Guide",
    seoDescription:
      "Affirming the consequent mistakes an effect for proof of a single cause. Learn the invalid form and counters.",
  },
  {
    slug: "equivocation",
    name: "Equivocation",
    category: categoryMap["ambiguity-language"],
    alsoKnownAs: ["Switching Meanings"],
    shortDefinition:
      "Shifts the meaning of a key term mid-argument to make a conclusion seem supported.",
    explanation:
      "A single word is used in multiple senses so that premises appear to support the conclusion. Once meanings are separated, the support often disappears.",
    pattern: [
      "Use a term with multiple meanings.",
      "Switch meanings mid-argument.",
      "Treat the conclusion as supported by the shifted premise.",
    ],
    everydayExample: {
      setup: "Playful wordplay.",
      dialogue: [
        "A: “Feathers are light. What is light cannot be dark. Therefore feathers cannot be dark.”",
      ],
    },
    seriousExample:
      "A policy document claims a rule is ‘fine’ (penalized) but later cites the same rule as ‘fine’ (acceptable) to justify enforcement decisions.",
    whyItIsFallacious:
      "Swapping meanings hides the gap between premises and conclusion. The argument relies on ambiguity, not evidence.",
    whyPeopleUseIt:
      "Ambiguity can make weak arguments appear clever or technical, and can slip past casual listeners.",
    recognitionPoints: [
      "Key terms with multiple meanings are reused without clarification.",
      "The argument seems to hinge on wordplay.",
      "Clarifying the definitions makes the conclusion no longer follow.",
    ],
    responseStrategies: [
      "Define the term explicitly and stick to one meaning.",
      "Re-evaluate the argument with clarified definitions.",
      "Ask which meaning is intended at each step.",
    ],
    severity: "Medium",
    typeLabel: "Logical fallacy",
    typicalContexts: ["Debate", "Media", "Everyday conversation"],
    relatedSlugs: ["no-true-scotsman", "loaded-question"],
    seoTitle: "Equivocation Fallacy – Logical Fallacies Guide",
    seoDescription:
      "Equivocation swaps meanings mid-argument. Learn how to spot shifting definitions and clarify them.",
  },
  {
    slug: "no-true-scotsman",
    name: "No True Scotsman",
    category: categoryMap["ambiguity-language"],
    alsoKnownAs: ["Appeal to Purity"],
    shortDefinition:
      "Redefines a group to exclude counterexamples and protect a generalisation.",
    explanation:
      "When presented with a counterexample, the speaker revises the definition of the group so the counter no longer counts, instead of updating the claim.",
    pattern: [
      "Make a broad claim about a group.",
      "Face a counterexample.",
      "Redefine the group to exclude the counterexample.",
    ],
    everydayExample: {
      setup: "Sports fandom debate.",
      dialogue: [
        "A: “No true fan ever criticises the team.”",
        "B: “I criticise the team and still support them.”",
        "A: “Then you’re not a true fan.”",
      ],
    },
    seriousExample:
      "A movement claims it is peaceful. When violence occurs by members, leaders insist those individuals were never “real” members, avoiding responsibility.",
    whyItIsFallacious:
      "Changing definitions to dodge counterexamples shields a claim from testing. The assertion becomes unfalsifiable.",
    whyPeopleUseIt:
      "It protects identity or ideology from uncomfortable evidence and keeps group narratives intact.",
    recognitionPoints: [
      "Definitions shift after counterexamples appear.",
      "Membership is retroactively revoked to salvage a claim.",
      "Standards for being “true” are vague or newly introduced.",
    ],
    responseStrategies: [
      "Fix the definition and ask whether the counterexample fits it.",
      "Point out the moving goalposts.",
      "Invite revising the generalisation instead of redefining membership.",
    ],
    severity: "Medium",
    typeLabel: "Logical fallacy",
    typicalContexts: ["Debate", "Media", "Everyday conversation"],
    relatedSlugs: ["equivocation", "loaded-question"],
    seoTitle: "No True Scotsman – Logical Fallacies Guide",
    seoDescription:
      "No True Scotsman protects a claim by redefining membership. Spot the moving goalposts and respond.",
  },
  {
    slug: "loaded-question",
    name: "Loaded Question",
    category: categoryMap["informal-dialogue"],
    alsoKnownAs: ["Complex Question"],
    shortDefinition:
      "Frames a question with a presupposition that forces an implicit agreement or admission.",
    explanation:
      "A loaded question embeds an assumption so that any direct answer seems to concede something contentious. It shifts the burden to the responder to challenge the premise.",
    pattern: [
      "Pose a question containing an embedded claim.",
      "Require a yes/no response that accepts the premise.",
      "Exploit the forced admission that comes with answering directly.",
    ],
    everydayExample: {
      setup: "Office politics.",
      dialogue: [
        "A: “When did you stop ignoring the security policy?”",
        "B: “I never ignored it. Let’s address the premise first.”",
      ],
    },
    seriousExample:
      "In a press conference, a reporter asks, “Why are you hiding the safety report?” implying concealment regardless of the answer.",
    whyItIsFallacious:
      "It presumes guilt or agreement without justification and traps the respondent into seeming to confirm the presupposition.",
    whyPeopleUseIt:
      "It puts opponents on the defensive while advancing a narrative, often under time pressure.",
    recognitionPoints: [
      "A question smuggles in an accusation or conclusion.",
      "A direct answer implies agreement with a hidden premise.",
      "Pushback on the premise is framed as evasive.",
    ],
    responseStrategies: [
      "Decline the premise and reframe: “I reject that assumption. Here’s what happened.”",
      "Separate the question into fair components before answering.",
      "Point out the trap to the audience explicitly.",
    ],
    severity: "Medium",
    typeLabel: "Logical fallacy",
    typicalContexts: ["Debate", "Media", "Everyday conversation"],
    relatedSlugs: ["no-true-scotsman", "ad-hominem"],
    seoTitle: "Loaded Question – Logical Fallacies Guide",
    seoDescription:
      "Loaded questions smuggle assumptions into a conversation. Learn to spot the trap and respond cleanly.",
  },
  {
    slug: "gish-gallop",
    name: "Gish Gallop",
    category: categoryMap["debate-tactics"],
    alsoKnownAs: ["Firehose of Falsehood"],
    shortDefinition:
      "Overwhelms with many rapid, weak points to exhaust responses.",
    explanation:
      "The Gish Gallop floods a discussion with numerous claims, half-truths, and tangents. Responding thoroughly would take far more time than making the claims, creating a false impression of strength.",
    pattern: [
      "Fire off many quick claims in succession.",
      "Avoid depth; move on before responses land.",
      "Rely on time asymmetry to make rebuttal impractical.",
    ],
    everydayExample: {
      setup: "A meeting about product strategy.",
      dialogue: [
        "A: Provides ten scattered objections in one minute—pricing, colors, hiring, market trends—then says, “See, the plan has too many problems.”",
      ],
    },
    seriousExample:
      "In a televised debate, a speaker rattles off a dozen questionable statistics and anecdotes, leaving opponents unable to address each within time limits.",
    whyItIsFallacious:
      "Quantity is mistaken for quality. The tactic avoids sustained scrutiny and relies on the audience equating unanswered points with valid points.",
    whyPeopleUseIt:
      "It feels dominant, creates momentum, and leverages the limited time or attention of listeners.",
    recognitionPoints: [
      "A rapid sequence of loosely related claims with minimal support.",
      "The speaker moves on quickly when challenged.",
      "Rebutting properly would take far longer than making the claims.",
    ],
    responseStrategies: [
      "Group claims by theme and address representative examples.",
      "Call out the tactic and reset the pace of discussion.",
      "Refuse to be rushed; prioritise the most consequential claims first.",
    ],
    severity: "Medium",
    typeLabel: "Logical fallacy",
    typicalContexts: ["Debate", "Media", "Everyday conversation"],
    relatedSlugs: ["red-herring", "strawman"],
    seoTitle: "Gish Gallop – Logical Fallacies Guide",
    seoDescription:
      "The Gish Gallop overwhelms with many weak claims. Learn to recognize the firehose pattern and respond effectively.",
  },
];
