import * as React from 'react';
import { DataTable, Badge, Button, Menu, Divider, Provider } from 'react-native-paper';
import { StyleSheet, ScrollView, View, Image } from 'react-native';

const optionsPerPage = [2, 3, 4];

const DiscountTable = () => {
    const [page, setPage] = React.useState(0);
    // const [page, setPage] = React.useState < number > (0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

    // For dropdown menu
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);


    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <ScrollView horizontal={true}>
            <DataTable style={styles.container}>
                <DataTable.Header style={styles.tableHeader}>
                    <DataTable.Title style={{ marginRight: 60 }}>Name</DataTable.Title>
                    <DataTable.Title style={{ marginHorizontal: "4%" }}>Code</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Price</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Active from</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 10 }}>Active to</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Limit number</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Used from</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Actions</DataTable.Title>
                </DataTable.Header>


                {/* <DataTable.Pagination
                    page={page}
                    numberOfPages={3}
                    onPageChange={(page) => setPage(page)}
                    label="1-2 of 6"
                    optionsPerPage={optionsPerPage}
                    itemsPerPage={itemsPerPage}
                    setItemsPerPage={setItemsPerPage}
                    showFastPagination
                    optionsLabel={'Rows per page'}
                /> */}
            </DataTable>
        </ScrollView>
    );
}


export default DiscountTable;

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
    },
});