import * as React from 'react';
import { DataTable, Badge, Button, Menu, Divider, Provider } from 'react-native-paper';
import { StyleSheet, ScrollView, View, Image } from 'react-native';

const optionsPerPage = [2, 3, 4];

const TranslationTable = () => {
    const [page, setPage] = React.useState(0);
    // const [page, setPage] = React.useState < number > (0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <ScrollView horizontal={true}>
            <DataTable style={styles.container}>
                <DataTable.Header style={styles.tableHeader}>
                    <DataTable.Title >GROUP/SINGLE</DataTable.Title>
                    <DataTable.Title >KEY</DataTable.Title>
                    <DataTable.Title >EN</DataTable.Title>
                    <DataTable.Title >EN</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell style={{ marginRight: 20 }}>auth</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Failed</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>"These credentials do not match our record"</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>These credentials do not match our record</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell style={{ marginRight: 10 }}>validation</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>email</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>"Enter :item name"</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Enter :item name</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Pagination
                    page={page}
                    numberOfPages={3}
                    onPageChange={(page) => setPage(page)}
                    label="1-2 of 6"
                    optionsPerPage={optionsPerPage}
                    itemsPerPage={itemsPerPage}
                    setItemsPerPage={setItemsPerPage}
                    showFastPagination
                    optionsLabel={'Rows per page'}
                />
            </DataTable>
        </ScrollView>
    );
}

export default TranslationTable;

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
    },
});