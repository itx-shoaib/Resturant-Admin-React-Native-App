import * as React from 'react';
import { DataTable, Switch, Button, Menu, Divider, Provider } from 'react-native-paper';
import { StyleSheet, ScrollView, Image } from 'react-native';

const optionsPerPage = [2, 3, 4];

const PageTable = () => {
    const [page, setPage] = React.useState(0);
    // const [page, setPage] = React.useState < number > (0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

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
                    <DataTable.Title style={{ marginRight: 120 }}>Title</DataTable.Title>
                    <DataTable.Title style={{ marginHorizontal: "4%" }}>Content</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 5 }}>Show as link</DataTable.Title>
                    <DataTable.Title style={{ marginRight: 20 }}>Actions</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell style={{ marginRight: 20 }}>Terms and Condition</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20, marginTop: 10, color: "blue" }}>Click for Details</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}><Switch value={isSwitchOn} onValueChange={onToggleSwitch} /></DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>
                        <Provider>
                            <Menu
                                visible={visible}
                                onDismiss={closeMenu}
                                anchor={<Button icon="format-list-bulleted" onPress={openMenu}></Button>}>
                                <Menu.Item onPress={() => { }} title="Item 1" />
                                <Menu.Item onPress={() => { }} title="Item 2" />
                                <Divider />
                                <Menu.Item onPress={() => { }} title="Item 3" />
                            </Menu>
                        </Provider>
                    </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{ marginRight: 20 }}>Terms and Condition</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20, marginTop: 10, color: "blue" }}>Click for Details</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}><Switch value={isSwitchOn} onValueChange={onToggleSwitch} /></DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>
                        <Provider>
                            <Menu
                                visible={visible}
                                onDismiss={closeMenu}
                                anchor={<Button icon="format-list-bulleted" onPress={openMenu}></Button>}>
                                <Menu.Item onPress={() => { }} title="Item 1" />
                                <Menu.Item onPress={() => { }} title="Item 2" />
                                <Divider />
                                <Menu.Item onPress={() => { }} title="Item 3" />
                            </Menu>
                        </Provider>
                    </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{ marginRight: 20 }}>Terms and Condition</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20, marginTop: 10, color: "blue" }}>Click for Details</DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}><Switch value={isSwitchOn} onValueChange={onToggleSwitch} /></DataTable.Cell>
                    <DataTable.Cell style={{ marginRight: 20 }}>
                        <Provider>
                            <Menu
                                visible={visible}
                                onDismiss={closeMenu}
                                anchor={<Button icon="format-list-bulleted" onPress={openMenu}></Button>}>
                                <Menu.Item onPress={() => { }} title="Item 1" />
                                <Menu.Item onPress={() => { }} title="Item 2" />
                                <Divider />
                                <Menu.Item onPress={() => { }} title="Item 3" />
                            </Menu>
                        </Provider>
                    </DataTable.Cell>
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


export default PageTable;

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
    },
});