// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';

// Modules
import { ModalModule } from '../../modules/modal/modal.module';

// Services
import { ModalService } from './modal.service';

storiesOf('Services/Modal Service', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                StoriesModule,
                ModalModule,
            ],
            providers: [
                ModalService
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
                    modules: ['AppTableModalComponent'],
                    file: '@bellese/angular-design-system',
                    ngmodule: null,
                },
                {
                    modules: ['ModalService'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'providers',
                },
            ],
            parameters: [
                {
                    name: 'component',
                    type: 'Component',
                    value: 'pass in any modal component. AppTableModalComponent is provided as an example'
                },
                {
                    name: 'id',
                    type: 'string',
                    value: 'this is to hold the id of the button that clicked to trigger the modal',
                },
                {
                    name: 'title',
                    type: 'string',
                    value: 'name of modal',
                },
                {
                    name: 'data',
                    type: 'array',
                    value: 'data structure needed for component',
                },
                {
                    name: 'firstFocus',
                    type: 'string',
                    value: 'used to set what gets focused on first when the modal opens',
                },
            ],
            notes: [
                'This is exported so that you can use this generic modal layout and add it to your app module as an exported member under entry component',
                'reference modal service parameters to use',
                'appendComponentToBody(component, id, title, data, firstFocus)',
                `<pre>
array": [
    {
        "heading": "Description",
        "class": "test Header"
    },
    {
        "paragraph": "Severe Sepsis and Septic Shock",
        "class": "testparagraph"
    },
    {
        "heading2": "Supplemental Information",
        "class": "test 3 Header"
    },
    {
        "hline": true,
        "class": "testline"
    }
];
            </pre>`
            ]
        }
    }));
