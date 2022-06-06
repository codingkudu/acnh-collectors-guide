export interface Collectable {
    id: number;
    'file-name': string;
    name: { 'name-EUen': string };
    availability: { 
        isAllDay: boolean, 
        isAllYear: boolean, 
        location: string, 
        'month-array-northern': number[], 
        'month-array-southern': number[], 
        time: string 
    };
    shadow?: string;
    icon_uri: string;
}
