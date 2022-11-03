import * as React from 'react';
import { DataTable } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];

const Datatable = () => {
    const [page, setPage] = React.useState(0);
    // const [page, setPage] = React.useState < number > (0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>#</DataTable.Title>
                <DataTable.Title>Title</DataTable.Title>
                <DataTable.Title numeric>Status</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
                <DataTable.Cell>1</DataTable.Cell>
                <DataTable.Cell>KFC</DataTable.Cell>
                <DataTable.Cell numeric>Live</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>2</DataTable.Cell>
                <DataTable.Cell>Dagwood</DataTable.Cell>
                <DataTable.Cell numeric>Live</DataTable.Cell>
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
    );
}

export default Datatable;