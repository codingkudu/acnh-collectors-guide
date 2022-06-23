import { each, makeFactory } from "factory.ts";
import { Collectable } from "../types/Collectable";
import { faker } from '@faker-js/faker';


export const CollectableFactory = makeFactory<Collectable>({
    id: each(()=> faker.datatype.number(100)),
    'file-name': each(() => faker.animal.fish()),
    name: each(() => ({'name-EUen': faker.animal.fish()})),
    availability: {
        isAllDay: faker.datatype.boolean(),
        isAllYear: faker.datatype.boolean(),
        location: faker.helpers.arrayElement(['Tree', 'River', 'Sea']), 
        'month-array-northern': [0,1,2,3,4,5],
        'month-array-southern': [6,7,8,9,10,11],
        time: faker.helpers.arrayElement(['9am - 4pm', '4pm - 10pm', '5am - 4pm']), 
    },
    icon_uri: 'http://urlstring.com'
});