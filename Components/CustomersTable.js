import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { StyleSheet, ScrollView } from 'react-native';

const optionsPerPage = [2, 3, 4];

const CustomersTable = () => {
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
                    <DataTable.Title>Name</DataTable.Title>
                    <DataTable.Title style={{ marginHorizontal: "24%" }}>Email</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Created Date</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Referral Balance</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Rank</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}></DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell style={{ marginRight: 20 }}>Christopher Barrett</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Christopher@gmail.com</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>24 OCt 2021</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>$0.00</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>---</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Icon</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell style={{ marginRight: 20 }}>Christopher Barrett</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Christopher@gmail.com</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>24 OCt 2021</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>$0.00</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>---</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Icon</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell style={{ marginRight: 20 }}>Christopher Barrett</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Christopher@gmail.com</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>24 OCt 2021</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>$0.00</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>---</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Icon</DataTable.Cell>
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


export default CustomersTable;

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
    },
});