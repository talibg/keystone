type MasterListEntry = {
  name: string;
  summary: string;
};

type MasterListCategory = {
  title: string;
  description: string;
  entries: MasterListEntry[];
};

export const masterList: MasterListCategory[] = [
  {
    title: "Fallacies of Relevance",
    description:
      "Arguments that distract with unrelated information or attacks.",
    entries: [
      {
        name: "Ad Hominem (Personal Attack)",
        summary: "Attacks the person instead of the claim.",
      },
      {
        name: "Abusive",
        summary: "Direct insults replace engagement with the argument.",
      },
      {
        name: "Circumstantial",
        summary:
          "Dismisses a claim by citing the speaker’s situation or incentives.",
      },
      {
        name: "Tu quoque",
        summary: "Accuses hypocrisy to dodge the argument.",
      },
      {
        name: "Guilt by association",
        summary: "Discredits a claim by linking it to an unpopular group.",
      },
      {
        name: "Poisoning the well",
        summary:
          "Preemptively discredits a speaker before they present a case.",
      },
      {
        name: "Appeal to Authority (Argument from Authority)",
        summary: "Treats an authority’s word as proof without evidence.",
      },
      {
        name: "Misleading appeal to expertise",
        summary: "Cites experts outside their domain or without consensus.",
      },
      {
        name: "False authority",
        summary: "Uses an unqualified figure as evidence.",
      },
      {
        name: "Appeal to Emotion",
        summary: "Relies on feelings instead of reasons.",
      },
      {
        name: "Appeal to fear",
        summary: "Uses threats or scary outcomes to force agreement.",
      },
      {
        name: "Appeal to pity",
        summary: "Invokes sympathy to win acceptance.",
      },
      {
        name: "Appeal to flattery",
        summary: "Flatters the audience to bypass scrutiny.",
      },
      {
        name: "Appeal to spite",
        summary: "Asks for agreement based on resentment.",
      },
      {
        name: "Appeal to ridicule",
        summary: "Mocks an argument instead of addressing it.",
      },
      {
        name: "Appeal to Popularity (Bandwagon)",
        summary: "Says a view is true because many believe it.",
      },
      {
        name: "Appeal to common belief",
        summary: "Uses majority acceptance as proof.",
      },
      {
        name: "Appeal to tradition",
        summary: "Claims correctness because it’s longstanding.",
      },
      {
        name: "Appeal to novelty",
        summary: "Claims correctness because it’s new or trendy.",
      },
      {
        name: "Red Herring",
        summary: "Introduces an irrelevant issue to distract.",
      },
      {
        name: "Ignoring the question",
        summary: "Avoids the real issue with unrelated points.",
      },
      {
        name: "Smokescreen",
        summary: "Overwhelms with tangents to hide weak evidence.",
      },
      {
        name: "Straw Man",
        summary: "Misrepresents a position to attack the weaker version.",
      },
      {
        name: "Weak man",
        summary: "Attacks the weakest example of an opposing view.",
      },
      {
        name: "Hollow man",
        summary: "Invents an opponent’s view to knock it down.",
      },
      {
        name: "Steel man (not a fallacy)",
        summary: "Strengthens an opponent’s view before addressing it.",
      },
      {
        name: "Genetic Fallacy",
        summary: "Judges a claim true or false based on its origin.",
      },
      {
        name: "Appeal to Consequences",
        summary: "Claims truth based on desirable or undesirable outcomes.",
      },
      {
        name: "Appeal to Nature",
        summary: "Asserts something is good because it’s natural.",
      },
      {
        name: "Moralistic Fallacy",
        summary: "Says something must be true because it ought to be.",
      },
      {
        name: "Naturalistic Fallacy",
        summary: "Derives an ought from an is without justification.",
      },
      {
        name: "Fallacy of Composition",
        summary: "Assumes parts’ traits apply to the whole.",
      },
      {
        name: "Fallacy of Division",
        summary: "Assumes whole’s traits apply to each part.",
      },
    ],
  },
  {
    title: "Fallacies of Weak Induction",
    description: "Arguments that lean on insufficient or skewed evidence.",
    entries: [
      {
        name: "Hasty Generalisation",
        summary: "Concludes broadly from too little evidence.",
      },
      {
        name: "Faulty Analogy",
        summary: "Bases a conclusion on a weak comparison.",
      },
      {
        name: "False Cause / Causal Fallacies",
        summary: "Claims causation without showing it.",
      },
      {
        name: "Correlation ≠ causation",
        summary: "Treats correlation as proof of cause.",
      },
      {
        name: "Post hoc ergo propter hoc",
        summary: "Assumes earlier event caused the later one.",
      },
      {
        name: "Cum hoc ergo propter hoc",
        summary: "Assumes simultaneous events cause each other.",
      },
      {
        name: "Third variable fallacy",
        summary: "Ignores a hidden factor causing both effects.",
      },
      {
        name: "Reversed causation",
        summary: "Mixes up cause and effect direction.",
      },
      {
        name: "Spurious correlation",
        summary: "Links unrelated trends as if caused.",
      },
      {
        name: "Slippery Slope",
        summary: "Predicts an extreme chain without evidence.",
      },
      {
        name: "Gambler’s Fallacy",
        summary: "Thinks past random events change future odds.",
      },
      {
        name: "Texas Sharpshooter (Cherry-picking)",
        summary: "Picks data after the fact to fit a claim.",
      },
      {
        name: "Anecdotal Fallacy",
        summary: "Relies on personal stories instead of data.",
      },
      {
        name: "Misleading Vividness",
        summary: "Uses a striking case to outweigh statistics.",
      },
    ],
  },
  {
    title: "Fallacies of Presumption",
    description: "Arguments that smuggle in assumptions or false frames.",
    entries: [
      {
        name: "Begging the Question (Circular Reasoning)",
        summary: "Uses the conclusion as a premise.",
      },
      {
        name: "False Dilemma (Black-or-White)",
        summary: "Presents two options when more exist.",
      },
      {
        name: "Excluded middle",
        summary: "Ignores middle-ground possibilities.",
      },
      {
        name: "False dichotomy",
        summary: "Forces a binary choice without basis.",
      },
      {
        name: "Loaded Question",
        summary: "Frames a question with a built-in accusation.",
      },
      {
        name: "Complex Question",
        summary: "Bundles multiple assumptions into one question.",
      },
      {
        name: "False Premise",
        summary: "Builds an argument on an untrue starting point.",
      },
      {
        name: "Oversimplification",
        summary: "Reduces a complex issue to a single cause.",
      },
      {
        name: "Suppressed Evidence",
        summary: "Omits key information that changes the case.",
      },
      {
        name: "No True Scotsman",
        summary: "Redefines a group to dismiss counterexamples.",
      },
      {
        name: "Biased Sample",
        summary: "Draws conclusions from an unrepresentative group.",
      },
      {
        name: "Ludic Fallacy",
        summary: "Applies neat models to messy reality without care.",
      },
    ],
  },
  {
    title: "Fallacies of Ambiguity",
    description: "Arguments that exploit unclear wording or syntax.",
    entries: [
      {
        name: "Equivocation",
        summary: "Shifts a word’s meaning mid-argument.",
      },
      {
        name: "Amphiboly",
        summary: "Leverages ambiguous grammar for a claim.",
      },
      {
        name: "Accent Fallacy",
        summary: "Changes meaning through emphasis or tone.",
      },
      {
        name: "Fallacy of Division",
        summary: "Assumes whole’s traits apply to each part.",
      },
      {
        name: "Reification",
        summary: "Treats abstractions as concrete things.",
      },
      {
        name: "Straw Man (linguistic aspect)",
        summary: "Misstates wording to attack a weaker reading.",
      },
    ],
  },
  {
    title: "Formal Fallacies",
    description: "Structural errors that invalidate deductive arguments.",
    entries: [
      {
        name: "Affirming the Consequent",
        summary: "If A then B; B, so A (invalid form).",
      },
      {
        name: "Denying the Antecedent",
        summary: "If A then B; not A, so not B (invalid).",
      },
      {
        name: "Undistributed Middle",
        summary: "Fails to link two categories properly.",
      },
      {
        name: "Illicit Major / Illicit Minor",
        summary: "Overextends a term’s scope in a syllogism.",
      },
      {
        name: "Fallacy of Four Terms",
        summary: "Introduces an extra term, breaking the syllogism.",
      },
      {
        name: "Modal Fallacy",
        summary: "Confuses possibility, necessity, or actuality.",
      },
      {
        name: "Quantifier Shift",
        summary: "Swaps scope of ‘all’ and ‘some’ incorrectly.",
      },
      {
        name: "Existential Fallacy",
        summary: "Assumes existence from universal premises.",
      },
    ],
  },
  {
    title: "Statistical & Scientific Fallacies",
    description: "Misuses of data, sampling, and inference.",
    entries: [
      {
        name: "Survivorship Bias",
        summary: "Focuses on successes and ignores failures.",
      },
      {
        name: "Selection Bias",
        summary: "Chooses cases in a way that skews results.",
      },
      {
        name: "Sampling Bias",
        summary: "Sample is not representative of the population.",
      },
      {
        name: "Publication Bias",
        summary: "Findings are skewed by what gets published.",
      },
      {
        name: "Ecological Fallacy",
        summary: "Applies group-level stats to individuals.",
      },
      {
        name: "Simpson’s Paradox (misread)",
        summary:
          "Trends reverse when groups combine; misread as contradiction.",
      },
      {
        name: "Base Rate Fallacy",
        summary: "Ignores base rates when judging probabilities.",
      },
      {
        name: "Prosecutor’s Fallacy",
        summary: "Mixes conditional probabilities in legal reasoning.",
      },
      {
        name: "Regression Fallacy",
        summary: "Ignores regression to the mean in outcomes.",
      },
      {
        name: "Masked Relationship Fallacy",
        summary: "Misses effects hidden by another variable.",
      },
      {
        name: "Interpolation / Extrapolation Fallacy",
        summary: "Assumes trends continue outside observed data.",
      },
    ],
  },
  {
    title: "Rhetorical Fallacies",
    description: "Persuasion tactics dressed as logic.",
    entries: [
      {
        name: "Whataboutism (Tu quoque variant)",
        summary: "Deflects criticism by pointing elsewhere.",
      },
      {
        name: "Thought-Terminating Cliché",
        summary: "Uses a stock phrase to end discussion.",
      },
      {
        name: "Deepity",
        summary: "Statement that sounds profound but is trivial or false.",
      },
      {
        name: "Glittering Generalities",
        summary: "Vague praise meant to provoke approval.",
      },
      {
        name: "Dogwhistles",
        summary: "Phrases with hidden messages to a subgroup.",
      },
      {
        name: "Virtue Signalling",
        summary: "Displays virtue to gain approval, not to argue.",
      },
      {
        name: "Appeal to Motive",
        summary: "Attacks or assumes motive instead of evidence.",
      },
      {
        name: "Appeal to Hypocrisy",
        summary: "Points out inconsistency to dismiss a claim.",
      },
      {
        name: "Appeal to Ignorance",
        summary: "Says a claim is true because unproven false (or vice versa).",
      },
      {
        name: "Appeal to Complexity",
        summary: "Claims an issue is too complex to assess well.",
      },
      {
        name: "Appeal to Common Practice",
        summary: "Says something is acceptable because ‘everyone does it.’",
      },
      {
        name: "Appeal to Wealth / Appeal to Poverty",
        summary: "Treats wealth or poverty as proof of correctness.",
      },
      {
        name: "Argumentum ad crumenam",
        summary: "Assumes the rich person is right.",
      },
      {
        name: "Argumentum ad lazarum",
        summary: "Assumes the poor person is right.",
      },
    ],
  },
  {
    title: "Strategic Misdirection & Propaganda",
    description: "Techniques to overwhelm, distort, or mislead audiences.",
    entries: [
      {
        name: "Gaslighting",
        summary: "Undermines someone’s grasp of reality to win control.",
      },
      {
        name: "Firehose of Falsehood",
        summary: "Rapid, continuous spread of many misleading claims.",
      },
      {
        name: "Card Stacking",
        summary: "Presents only the evidence that supports one side.",
      },
      {
        name: "False Balance",
        summary: "Gives unequal views equal weight to seem impartial.",
      },
      {
        name: "Half-Truth",
        summary: "Presents partly true statements to mislead.",
      },
      {
        name: "Quote Mining",
        summary: "Uses quotes out of context to misrepresent.",
      },
      {
        name: "Scapegoating",
        summary: "Blames a person or group to deflect responsibility.",
      },
      {
        name: "Oversimplification",
        summary: "Boils complex issues down to a single cause.",
      },
    ],
  },
  {
    title: "Decision-Making & Cognitive Fallacies",
    description: "Biases and shortcuts that warp judgment and choices.",
    entries: [
      {
        name: "Sunk Cost Fallacy",
        summary: "Continues a commitment because of past investment.",
      },
      {
        name: "Appeal to Probability",
        summary: "Assumes something will happen because it can happen.",
      },
      {
        name: "Appeal to Normality",
        summary: "Claims something is acceptable because it is common.",
      },
      {
        name: "Planning Fallacy",
        summary: "Underestimates time or resources needed.",
      },
      {
        name: "Hot Hand Fallacy",
        summary: "Assumes success streaks will continue.",
      },
      {
        name: "Authority Bias",
        summary: "Overweights authority figures in judgments.",
      },
      {
        name: "Confirmation Bias",
        summary: "Favors information that confirms preconceptions.",
      },
    ],
  },
];
