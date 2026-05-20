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
  "modules": [
      {
          "name": "Business entity modeler",
          "description": "Captures LocalBusiness subtype, NAP, hours, geo/service area, sameAs links, offers, and proof fields.",
          "metrics": [
              "Required fields",
              "Subtype fit",
              "Evidence confidence"
          ],
          "deliverable": "Business schema model"
      },
      {
          "name": "JSON-LD generation workbench",
          "description": "Builds schema snippets, page placement guidance, validation status, and copy-ready exports.",
          "metrics": [
              "Schema completeness",
              "Validation readiness",
              "Placement clarity"
          ],
          "deliverable": "JSON-LD snippet pack"
      },
      {
          "name": "Rich result QA desk",
          "description": "Tracks required/recommended fields, Rich Results guidance, duplicate facts, and stale data risk.",
          "metrics": [
              "QA blockers",
              "Recommended fields",
              "Freshness risk"
          ],
          "deliverable": "Schema validation checklist"
      },
      {
          "name": "SEO handoff planner",
          "description": "Packages owner-safe schema instructions, update cadence, CMS placement notes, and rollback guidance.",
          "metrics": [
              "Handoff clarity",
              "Update cadence",
              "Owner approvals"
          ],
          "deliverable": "Schema implementation brief"
      }
  ],
  "plays": [
      {
          "name": "LocalBusiness schema build",
          "trigger": "Client has no structured data or only generic metadata.",
          "outcome": "A complete LocalBusiness JSON-LD plan and snippet pack."
      },
      {
          "name": "Service-area schema refinement",
          "trigger": "Business serves neighborhoods rather than a storefront.",
          "outcome": "Service area, offers, sameAs, and contact data modeled safely."
      },
      {
          "name": "Schema validation handoff",
          "trigger": "Snippet is drafted and needs owner/CMS handoff.",
          "outcome": "Validation checklist, placement instructions, and maintenance cadence."
      }
  ],
  "economics": {
      "buyer": "SEO student pod, local marketer, or small-business web operator",
      "valueMetric": "Validated schema snippets deployed",
      "priceHint": "$79 schema pack or $299 local SEO implementation sprint",
      "northStar": "Owner-approved snippets with validation-ready fields"
  },
  "exportSuite": [
      "JSON-LD snippet pack",
      "Schema field evidence map",
      "Rich result QA checklist",
      "CMS placement instructions",
      "Schema maintenance plan"
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
    "sampleRows": {"Business type selected": "Bakery subtype selected with local business fallback noted", "NAP and geo fields entered": "Name, address, phone, map URL, and service area entered from owner sources", "Opening hours modeled": "Regular hours and holiday-hours update procedure captured", "SameAs/social links verified": "Website, Maps, Instagram, and Facebook links verified for same entity", "Services/products mapped": "Cakes, pastries, catering, and classes mapped to offers/services", "JSON-LD preview generated": "Schema preview generated with @context, @type, NAP, hours, and sameAs", "Validation checklist completed": "Required and recommended fields checked before CMS handoff", "Implementation notes exported": "CMS placement, testing, update cadence, and rollback notes exported", "Image/logo metadata attached": "Logo and representative image URLs documented with source confidence", "Service area/neighborhoods mapped": "Neighborhoods and delivery/service boundaries documented", "Duplicate/stale facts checked": "Old phone/address references flagged for cleanup before publish", "Owner approval for structured data recorded": "Owner approved public facts used in schema snippet"}
  }
};
