import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { StyleSheet, ScrollView } from 'react-native';

const optionsPerPage = [2, 3, 4];

const OrdersTable = () => {
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
                    <DataTable.Title>ID</DataTable.Title>
                    <DataTable.Title style={{ marginHorizontal: "24%" }}>Resturant</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Created</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Method</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Last Status</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Payment Method</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Total</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell style={{ marginRight: 20 }}>1</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>House 290-Block 12-Sector A2,Wapda Town</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>24 OCt 2021</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Live</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Rejected</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>$30</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{ marginRight: 20 }}>2</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>House 290-Block 12-Sector A2,Wapda Town</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>24 OCt 2021</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Live</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Rejected</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>$30</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{ marginRight: 20 }}>3</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>House 290-Block 12-Sector A2,Wapda Town</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>24 OCt 2021</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Live</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Rejected</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>$30</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{ marginRight: 20 }}>4</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>House 290-Block 12-Sector A2,Wapda Town</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>24 OCt 2021</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Live</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Rejected</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>$30</DataTable.Cell>
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


export default OrdersTable;

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    tableHeader: {
        backgroundColor: '#DCDCDC'
    },
});