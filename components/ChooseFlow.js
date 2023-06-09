import FormRadio from "./FormRadio";

const ChooseFlow = ({ onChoice }) => (
    <fieldset form="form" className="flex flex-col content-between gap-4 mb-3 mt-10">
        <FormRadio
            name="chooseFlow"
            value="hide"
            label="Թաքնագրում"
            onChange={onChoice}
        />
        <FormRadio
            name="chooseFlow"
            value="find"
            label="Վերծանում"
            onChange={onChoice}
        />
    </fieldset>
    
    
);

export default ChooseFlow;
