import * as React from 'react';
import { DataTable, Button, Badge } from 'react-native-paper';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const optionsPerPage = [2, 3, 4];

const RankTable = () => {
    const [page, setPage] = React.useState(0);
    // const [page, setPage] = React.useState < number > (0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    const navigation = useNavigation();
    const RedirectToEditRank = () => {
        navigation.navigate("EditRank");
    }


    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <ScrollView horizontal={true}>
            <DataTable style={styles.container}>
                <DataTable.Header style={styles.tableHeader}>
                    <DataTable.Title style={{ marginRight: 10 }}>ID</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 10 }}>Name</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 10 }}>Default Value</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Status</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 40 }}>Actions</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell style={{ marginRight: 20 }}>1</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20, marginTop: 10 }}>Silver</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>10</DataTable.Cell>
                    <DataTable.Cell style={{ marginLeft: 20, marginRight: 20 }}><Badge style={{ backgroundColor: "#03cfb7" }} size={25}> Active</Badge></DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}><Button title="Edit" mode="contained" onPress={RedirectToEditRank}>Edit</Button></DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell style={{ marginRight: 20 }}>2</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20, marginTop: 10 }}>Gold</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>20</DataTable.Cell>
                    <DataTable.Cell style={{ marginLeft: 20, marginRight: 20 }}><Badge style={{ backgroundColor: "#03cfb7" }} size={25}> Active</Badge></DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}><Button title="Edit" mode="contained" onPress={RedirectToEditRank}>Edit</Button></DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell style={{ marginRight: 20 }}>3</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20, marginTop: 10 }}>Gold</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>100</DataTable.Cell>
                    <DataTable.Cell style={{ marginLeft: 20, marginRight: 20 }}><Badge style={{ backgroundColor: "red" }} size={25}>Not Active</Badge></DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}><Button title="Edit" mode="contained" onPress={RedirectToEditRank}>Edit</Button></DataTable.Cell>
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


export default RankTable;

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
    },
});