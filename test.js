var ops = [
    { "prop": "name", "value": "test" },
    { "prop": "when", "value": "2020-01-01" },
    { "prop": "college", "value": null },
    { "prop": "attendees", "value": [] },
    { "prop": "description", "value": "test" },
    { "prop": "imageurl", "value": "test" },
    { "prop": "tags", "value": [] },
    { "prop": "type", "value": "test" },
    { "prop": "coordinators", "value": [] },
    { "prop": "lastDate", "value": "2020-01-01" },
    { "prop": "where", "value": "" },
]
var res=[];
ops = ops.filter((op) => op.value === null || op.value.length > 0);
console.log(ops);