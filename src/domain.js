export const domain = {
    "kind": "code-generator",
    "title": "Local Schema Forge Code Generator",
    "purpose": "A purpose-built code generator interface for generate structured data blocks for common local business pages without making students memorize schema.org.",
    "inputTitle": "Product-specific inputs",
    "previewTitle": "Generated working outputs",
    "tableTitle": "Structured data fields",
    "metricLabels": [
        "Schema Completeness",
        "JSON Validity",
        "Local SEO Coverage"
    ],
    "fields": [
        {
            "id": "organization-client",
            "label": "Organization / client",
            "type": "text",
            "sample": "Riverside Community Bakery",
            "placeholder": "Enter organization / client"
        },
        {
            "id": "primary-goal",
            "label": "Primary goal",
            "type": "text",
            "sample": "valid schema blocks deployed",
            "placeholder": "Enter primary goal"
        },
        {
            "id": "owner-reviewer",
            "label": "Owner / reviewer",
            "type": "text",
            "sample": "Volta project lead",
            "placeholder": "Enter owner / reviewer"
        },
        {
            "id": "evidence-source",
            "label": "Evidence source",
            "type": "text",
            "sample": "Owner interview + public audit",
            "placeholder": "Enter evidence source"
        },
        {
            "id": "input-asset",
            "label": "Input asset",
            "type": "text",
            "sample": "Business type selected",
            "placeholder": "Enter input asset"
        },
        {
            "id": "output-format",
            "label": "Output format",
            "type": "text",
            "sample": "JSON-LD block",
            "placeholder": "Enter output format"
        },
        {
            "id": "review-threshold",
            "label": "Review threshold",
            "type": "number",
            "sample": 85,
            "placeholder": "Enter review threshold"
        },
        {
            "id": "approved-channel",
            "label": "Approved channel",
            "type": "text",
            "sample": "Owner handoff packet",
            "placeholder": "Enter approved channel"
        }
    ],
    "rows": [
        "Business type selected",
        "Name/address/phone entered",
        "Hours encoded",
        "Services/menu/FAQ mapped",
        "URLs validated",
        "@id uniqueness checked",
        "JSON-LD generated",
        "Validation checklist complete",
        "Business subtype requirements mapped",
        "SameAs/social links added",
        "FAQ schema generated",
        "Rich Results test notes captured"
    ],
    "artifacts": [
        "JSON-LD block",
        "HTML script tag",
        "Schema validation checklist",
        "Business subtype field map",
        "FAQ schema block",
        "Rich Results QA notes"
    ],
    "checks": [
        "Generated JSON must parse",
        "Required fields by type",
        "Opening hours format enforced",
        "sameAs links must be valid URLs",
        "FAQ schema requires question and answer pairs",
        "Rich Results notes required before handoff"
    ],
    "sampleClient": "Riverside Community Bakery",
    "saas": {
        "personas": ["Schema implementer", "Local business owner", "SEO QA reviewer"],
        "stages": [
            { "name": "Business modeling", "goal": "Collect the business subtype, contact fields, hours, IDs, and social profiles.", "rowPatterns": ["Business type|Name/address|Hours|sameAs|subtype"] },
            { "name": "Schema generation", "goal": "Generate JSON-LD, FAQ blocks, service/menu references, and script tags.", "rowPatterns": ["JSON-LD|FAQ|Services|script"] },
            { "name": "Validation handoff", "goal": "Package validation notes and placement instructions for launch.", "rowPatterns": ["Validation|Rich Results|checklist|URLs"] }
        ],
        "sampleValues": { "primary-goal": "ship valid local business JSON-LD for owner handoff" },
        "sampleRows": { "Business subtype requirements mapped": "Mapped Bakery subtype fields plus price range and opening hours", "Rich Results test notes captured": "Recorded parser status and follow-up warnings for owner handoff" }
    }
};
//# sourceMappingURL=domain.js.map