// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';
import { defaultProps } from '../../../../.storybook/helpers';

// Modules
import { ChoiceModule } from './choice.module';

storiesOf('Components/Choice', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                StoriesModule,
                ChoiceModule
            ]
        }),
    )
    .add('Intro', () => ({
        template: `
            <app-storybook-component-intro-component
                [imports]="imports"
                [parameters]="parameters"
                [notes]="notes"
            ></app-storybook-component-intro-component>
        `,
        props: {
            imports: [
                {
                    modules: ['ChoiceModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
            ],
            parameters: [
                {
                    name: 'inputType',
                    type: 'string',
                    // tslint:disable-next-line: max-line-length
                    value: 'Use this to set the type of the input in this component.  You can use either checkbox or radio.  The default value is checkbox.',
                },
                {
                    name: 'index',
                    type: 'string',
                    value: 'This will allow you find the unique input within the whole group',
                },
                {
                    name: 'label',
                    type: 'string',
                    value: 'Label is the label that shows next to the checkbox.  If none is provided, value is shown.',
                },
                {
                    name: 'value',
                    type: 'string',
                    value: 'Value is what the input represents when clicked, and is read by screen readers',
                },
                {
                    name: 'ariaLabel',
                    type: 'string',
                    value: 'Use this to further specify button to the screen reader',
                },
                {
                    name: 'size',
                    type: 'string',
                    value: 'Allows you to set the size of the checkbox.  Options are small and medium.  The default value is medium.'
                },
                {
                    name: 'groupName',
                    type: 'string',
                    value: 'The name that each input will fall under, to help you scope this group',
                },
                {
                    name: 'showTitle',
                    type: 'boolean',
                    value: 'Enable or Disable the component label',
                },
                {
                    name: 'labelClass',
                    type: 'string',
                    value: 'Class to style the label',
                },
                {
                    name: 'inputClass',
                    type: 'string',
                    value: 'Class to style the input',
                },
                {
                    name: 'dataAutoId',
                    type: 'string',
                    value: 'Use this for testing ID',
                },
                {
                    name: 'isChecked',
                    type: 'boolean',
                    value: 'Use this to check the input by default',
                },
                {
                    name: 'disabled',
                    type: 'boolean',
                    value: 'Use this to disable the input',
                },
                {
                    name: 'choiceChange',
                    type: 'function',
                    // tslint:disable-next-line: max-line-length
                    value: 'A javascript function that will be called when the checkbox is checked. It takes one argument, which is a click event.',
                },
                {
                    name: 'errorMessage',
                    type: 'string',
                    value: 'An error message to display in the component',
                },
            ],
            notes: [
                'The choice component can be used to display a checkbox or radio box.'
            ]
        }
    }))
    .add('Checkbox', () => ({
        template: `
            <app-choice
                index = 0
                value = 'I agree to the terms and conditions'
                ariaLabel = 'Check the checkbox to agree to the terms and conditions'
                groupName = 'choicetoendallchoice'
                size = 'small'
                [isChecked] = 'false'
                [showTitle] = true
                labelClass = 'choiceEx'
                inputClass = 'choiceInputClass'
                dataAutoId = 'testingID'
                (choiceChange) = 'handleEvent($event)'
            >
            </app-choice>
        `,
        props: defaultProps
    })).add('Checkbox Group', () => ({
        template: `
            <app-choice
                index = 0
                label = 'Option 1'
                value = '1'
                groupName = 'choicetoendallchoice'
                [isChecked] = 'true'
                [showTitle] = true
                labelClass = 'choiceEx'
                dataAutoId = 'testingID'
                (choiceChange) = 'handleEvent($event)'
            >
            </app-choice>
            <app-choice
                index = 1
                label = 'Option 2'
                value = '2'
                groupName = 'choicetoendallchoice'
                [isChecked] = 'true'
                [showTitle] = true
                labelClass = 'choiceEx'
                dataAutoId = 'testingID'
                (choiceChange) = 'handleEvent($event)'
            >
            </app-choice>
            <app-choice
                index = 2
                label = 'Option 3'
                value = '3'
                groupName = 'choicetoendallchoice'
                [isChecked] = 'false'
                [showTitle] = true
                labelClass = 'choiceEx'
                dataAutoId = 'testingID'
                (choiceChange) = 'handleEvent($event)'
            >
            </app-choice>
        `,
        props: defaultProps
    })).add('Radio Group', () => ({
        template: `
            <app-choice
                index = 0
                inputType = 'radio'
                value = 'Option 1'
                groupName = 'choicetoendallchoice'
                [isChecked] = 'true'
                [showTitle] = true
                labelClass = 'choiceEx'
                dataAutoId = 'testingID'
                (choiceChange) = 'handleEvent($event)'
            >
            </app-choice>
            <app-choice
                index = 1
                inputType = 'radio'
                value = 'Option 2'
                groupName = 'choicetoendallchoice'
                [isChecked] = 'false'
                [showTitle] = true
                labelClass = 'choiceEx'
                dataAutoId = 'testingID'
                (choiceChange) = 'handleEvent($event)'
            >
            </app-choice>
            <app-choice
                index = 2
                inputType = 'radio'
                value = 'Option 3'
                groupName = 'choicetoendallchoice'
                [isChecked] = 'false'
                [showTitle] = true
                labelClass = 'choiceEx'
                dataAutoId = 'testingID'
                (choiceChange) = 'handleEvent($event)'
            >
            </app-choice>
        `,
        props: defaultProps
    })).add('Disabled', () => ({
        template: `
            <app-choice
                index = 0
                inputType = 'radio'
                value = 'Option 1'
                groupName = 'choicetoendallchoice'
                [isChecked] = 'true'
                [showTitle] = true
                labelClass = 'choiceEx'
                dataAutoId = 'testingID'
                [disabled] = 'true'
                (choiceChange) = 'handleEvent($event)'
            >
            </app-choice>
            <app-choice
                index = 1
                inputType = 'checkbox'
                value = 'Option 2'
                groupName = 'choicetoendallchoice'
                [isChecked] = 'false'
                [showTitle] = true
                labelClass = 'choiceEx'
                dataAutoId = 'testingID'
                [disabled] = 'true'
                (choiceChange) = 'handleEvent($event)'
            >
            </app-choice>
        `,
        props: defaultProps
    }));
