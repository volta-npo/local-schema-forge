export const config = {
    "number": 7,
    "slug": "local-schema-forge",
    "title": "Local Schema Forge",
    "category": "Digital Presence",
    "tagline": "Generate structured data blocks for common local business pages without making students memorize schema.org.",
    "persona": "Tech and marketing students improving local SEO.",
    "gap": "Structured data is high leverage but tedious, easy to get wrong, and rarely done for small businesses.",
    "niche": "Local SEO implementation for first websites and rebuilds.",
    "metric": "valid schema blocks deployed",
    "modules": [
        "Business type selector",
        "JSON-LD generator",
        "Validation checklist",
        "Page placement guide"
    ],
    "theme": {
        "accent": "#2563eb",
        "accent2": "#60a5fa",
        "emoji": "\ud83c\udf10",
        "metricLabel": "Presence readiness",
        "workflow": [
            "Capture public evidence",
            "Score the digital gap",
            "Prioritize owner-safe fixes",
            "Export handoff packet"
        ],
        "privacy": "Only public business information and project notes should be entered. Do not store passwords."
    },
    "statuses": [
        "not-started",
        "blocked",
        "in-progress",
        "ready",
        "approved"
    ],
    "criteria": [
        {
            "id": "business-type-selector",
            "label": "Business type selector",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify business type selector with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "json-ld-generator",
            "label": "JSON-LD generator",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify json-ld generator with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "validation-checklist",
            "label": "Validation checklist",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify validation checklist with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "page-placement-guide",
            "label": "Page placement guide",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify page placement guide with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-quality",
            "label": "Evidence quality",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
        },
        {
            "id": "owner-handoff",
            "label": "Owner handoff",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Make the output understandable and maintainable by a nontechnical owner."
        },
        {
            "id": "mission-alignment",
            "label": "Mission alignment",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Show how this advances digital equity, student growth, or pro bono delivery."
        },
        {
            "id": "qa-safety",
            "label": "QA and safety",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
        }
    ],
    "templates": {
        "actions": [
            "Run a real Volta scenario for Local Schema Forge and capture baseline evidence.",
            "Complete the business type selector workflow with owner-safe notes.",
            "Resolve all blocked rubric items and add evidence for every ready item.",
            "Export the handoff packet and review it with a mentor before client use."
        ]
    },
    "sample": {
        "clientName": "Riverside Community Bakery",
        "chapter": "Jacksonville",
        "studentLead": "Volta Student Lead",
        "notes": "Digital presence sprint for an under-digitized local storefront. Local Schema Forge sample.",
        "evidencePrefix": "Local Schema Forge",
        "evidence": [
            "Discovery call notes captured with owner confirmation.",
            "Public digital footprint reviewed and summarized.",
            "Mentor QA comments attached before handoff."
        ]
    }
};
//# sourceMappingURL=config.js.map