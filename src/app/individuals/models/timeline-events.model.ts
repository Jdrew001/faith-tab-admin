export interface TimelineEvent {
    sectionId: number;
    action: string;
    detail: string;
    date: string;
    day: string;
    icon?: string;
    color?: string;
}

export interface TimelineSection {
    sectionId: number;
    sectionName: string;
}

export interface TimelineData {
    sections: Array<TimelineSection>;
    events: Array<TimelineEvent>
}