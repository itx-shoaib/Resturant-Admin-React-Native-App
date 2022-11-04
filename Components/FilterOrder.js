import * as React from 'react';
import { List } from 'react-native-paper';
import FilterByResturant from './FilterByResturant';

const FilterOrder = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <List.Section>
            <List.Accordion
                title="Filter">
                <FilterByResturant />
            </List.Accordion>
        </List.Section>
    );
};

export default FilterOrder;