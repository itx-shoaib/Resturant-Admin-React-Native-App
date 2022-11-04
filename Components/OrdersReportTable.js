import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { StyleSheet, ScrollView, Image } from 'react-native';

const optionsPerPage = [2, 3, 4];

const OrdersReportTable = () => {
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
                    <DataTable.Title style={{ marginRight: 60 }}>#</DataTable.Title>
                    <DataTable.Title style={{ marginleft: "10%" }}>Customer Name</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Creation Date</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Method</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 10 }}>Status </DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>PLATFORM FEE</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>PROCESSOR FEE</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>NET</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Total</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell style={{ marginRight: 20 }}>1788-1667517765-012</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20, marginTop: 10 }}>Chloe</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>2022-11-03 23:22:45</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>stripe</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Accepted by restaurant</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>£0.37</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>£0.60</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>£10.53</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>£11.50</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{ marginRight: 20 }}>1788-1667517765-012</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20, marginTop: 10 }}>Chloe</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>2022-11-03 23:22:45</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>stripe</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Accepted by restaurant</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>£0.37</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>£0.60</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>£10.53</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>£11.50</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{ marginRight: 20 }}>1788-1667517765-012</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20, marginTop: 10 }}>Chloe</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>2022-11-03 23:22:45</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>stripe</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Accepted by restaurant</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>£0.37</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>£0.60</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>£10.53</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>£11.50</DataTable.Cell>
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


export default OrdersReportTable;

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
    },
});