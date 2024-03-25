const fieldTypes = {
    text: 'textField',
    fieldSet: 'fieldSet',
};

const formData = [
    {
        fieldName: "First name",
        required: true,
        type: fieldTypes.text,
    },
    {
        fieldName: "Last name",
        required: false,
        type: fieldTypes.text,
    },
    {
        fieldName: "Address",
        required: true,
        type: fieldTypes.fieldSet,
        fields: [
            {
                fieldName: "State - Province",
                required: true,
                type: fieldTypes.text,
            },
            {
                fieldName: "Street",
                required: true,
                type: fieldTypes.text,
            },
            {
                fieldName: "House",
                required: true,
                type: fieldTypes.text,
            },
        ]
    },
];

const getForm = (formStructure) => {
    if (!Array.isArray(formStructure)) return 'Wrong form structure';
    let form = '';
    formStructure.forEach((element, index) => {
        if (element.type === fieldTypes.text) {
            form = form +
                `<div class="field-wrapper">
        <label>${element.fieldName}</label>${element.required ? '<span class="required">*</span>' : ""}
        <input type="text">
        </div>`;
        }
        if (element.type === fieldTypes.fieldSet) {
            form = form + `<div
            class="fieldset">${getForm(element.fields)}</div>`;
        }
    });
    return form;
};

const result = getForm(formData);
console.log(result);
