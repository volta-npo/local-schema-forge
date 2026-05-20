export declare const domain: {
    kind: string;
    title: string;
    purpose: string;
    inputTitle: string;
    previewTitle: string;
    tableTitle: string;
    metricLabels: string[];
    fields: ({
        id: string;
        label: string;
        type: string;
        sample: string;
        placeholder: string;
    } | {
        id: string;
        label: string;
        type: string;
        sample: number;
        placeholder: string;
    })[];
    rows: string[];
    artifacts: string[];
    checks: string[];
    modules: {
        name: string;
        description: string;
        metrics: string[];
        deliverable: string;
    }[];
    plays: {
        name: string;
        trigger: string;
        outcome: string;
    }[];
    economics: {
        buyer: string;
        valueMetric: string;
        priceHint: string;
        northStar: string;
    };
    exportSuite: string[];
    sampleClient: string;
    saas: {
        personas: string[];
        stages: {
            name: string;
            goal: string;
            rowPatterns: string[];
        }[];
        sampleValues: {
            "primary-goal": string;
        };
        sampleRows: {
            "Business type selected": string;
            "NAP and geo fields entered": string;
            "Opening hours modeled": string;
            "SameAs/social links verified": string;
            "Services/products mapped": string;
            "JSON-LD preview generated": string;
            "Validation checklist completed": string;
            "Implementation notes exported": string;
            "Image/logo metadata attached": string;
            "Service area/neighborhoods mapped": string;
            "Duplicate/stale facts checked": string;
            "Owner approval for structured data recorded": string;
        };
    };
};
