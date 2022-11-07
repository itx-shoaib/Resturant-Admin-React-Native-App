import * as React from 'react';
import { List } from 'react-native-paper';
import { View } from "react-native"
import FilterByResturant from './FilterByResturant';
import ShowResturant from './ShowResturant';

const FilterResturant = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <List.Section>
            <View style={{ backgroundColor: "#C0C0C0" }}>
                <List.Accordion
                    style={{ backgroundColor: "white" }}
                    title="Filter">
                    <FilterByResturant />
                    <ShowResturant />
                </List.Accordion>
            </View>
        </List.Section>
    );
};

export default FilterResturant;