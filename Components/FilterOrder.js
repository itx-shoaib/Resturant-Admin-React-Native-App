import * as React from 'react';
import { List } from 'react-native-paper';
import { View } from "react-native"
import FilterByDate from './FilterByDate';
import FilterByResturant from './FilterByResturant';

const FilterOrder = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <List.Section>
            <View style={{ backgroundColor: "#C0C0C0" }}>
                <List.Accordion
                    style={{ backgroundColor: "white" }}
                    title="Filter">
                    <FilterByResturant />
                    <FilterByDate />
                </List.Accordion>
            </View>
        </List.Section>
    );
};

export default FilterOrder;