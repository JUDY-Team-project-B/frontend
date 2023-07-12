export interface PostType {
    id:              number;
    title:           string;
    context:         string;
    tags:            string[];
    travelGender:    string;
    travelAt:        string;
    travelAge:       string;
    travelDateStart: Date;
    travelDateEnd:   Date;
    travelMember:    number;
}