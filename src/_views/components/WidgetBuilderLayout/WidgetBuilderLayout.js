import React, { Fragment } from "react";
import { Field, FormSection, reduxForm } from "redux-form";
import Button from "../Button";

const WidgetBuilderLayout = ( { handleBackToSelection, handleCloseCreator, BuilderForm, widgetId, handleSubmit } ) => (
	<div>
		<Button onClick={ handleBackToSelection }>Back</Button>
		<Button onClick={ handleCloseCreator }>Cancel</Button>
		{ /*open form*/ }
		{ /*title input <-- all widgets should have a user given title*/ }
		{ /*builderform will contain all data pertinent to that specific widget type*/ }
		<CreateWidgetForm BuilderForm={ BuilderForm } onSubmit={ handleSubmit } widgetId={ widgetId }/>
		{ /*close form*/ }
	</div>
);

let CreateWidgetForm = ( { BuilderForm, handleSubmit, onSubmit, widgetId } ) => {

	return (
		<Fragment>
			<form onSubmit={ handleSubmit( data => onSubmit( { ...data, widgetId } ) ) }>
				<div>
					<label htmlFor="title">Title</label>
					<Field name="title" component="input" type="text"/>
				</div>
				<FormSection name="data">
					<BuilderForm/>
				</FormSection>
				<Button type="submit">Create Widget</Button>
			</form>
		</Fragment>
	);
};


CreateWidgetForm = reduxForm( {
	form: "createWidget"
} )( CreateWidgetForm );


export default WidgetBuilderLayout;

