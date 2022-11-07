import * as React from 'react';
import { DataTable, Badge, Button, Menu, Divider, Provider } from 'react-native-paper';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import ResturantAction from '../Components/ResturantAction';

const optionsPerPage = [2, 3, 4];

const CustomersTable = () => {
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
                    <DataTable.Title style={{ marginHorizontal: "4%" }}>Logo</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Owner</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Email</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 10 }}>Creation Date</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Active</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Live</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Actions</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell style={{ marginRight: 20 }}>Christopher Barrett</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20, marginTop: 10 }}><Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={{ width: 30, height: 40 }} /></DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Christopher</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Christopher@gmail.com</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>24 OCt 2021</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}><Badge style={{ backgroundColor: "#03cfb7" }} size={25}> Active</Badge></DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}><Badge style={{ backgroundColor: "#03cfb7" }} size={25}> Live</Badge></DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>icon</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell style={{ marginRight: 20 }}>Christopher Barrett</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20, marginTop: 10 }}><Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={{ width: 30, height: 40 }} /></DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Christopher</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Christopher@gmail.com</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>24 OCt 2021</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}><Badge style={{ backgroundColor: "red" }} >Not Active</Badge></DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}><Badge style={{ backgroundColor: "red" }} >Not Live</Badge></DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>
                        <ResturantAction />
                    </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell style={{ marginRight: 20 }}>Christopher Barrett</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20, marginTop: 10 }}><Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={{ width: 30, height: 40 }} /></DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Christopher</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>Christopher@gmail.com</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>24 OCt 2021</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}><Badge style={{ backgroundColor: "#03cfb7" }} size={25}> Active</Badge></DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}><Badge style={{ backgroundColor: "#03cfb7" }} size={25}>Live</Badge></DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>icon</DataTable.Cell>
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