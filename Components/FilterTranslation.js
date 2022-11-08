import * as React from 'react';
import { List } from 'react-native-paper';
import { View } from "react-native"
import SearchBAr from './Searchbar';
import FilterByLangauge from './FilterByLanguage';
import FilterByGroup from './FilterByGroup';


const FilterTranslation = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <List.Section>
            <View style={{ backgroundColor: "#C0C0C0" }}>
                <List.Accordion
                    style={{ backgroundColor: "white" }}
                    title="Filter">
                    <SearchBAr />
                    <FilterByLangauge />
                    <FilterByGroup />
                </List.Accordion>
            </View>
        </List.Section>
    );
};

export default FilterTranslation;