import React from 'react';

const Group = () => {
  // let column = [{
  //     Header: '',
  //     columns: [
  //       {
  //         Header: 'Name',
  //         accessor: 'fullName',
  //       },
  //       {
  //           Header:'',
  //           accessor:'usertype'
  //       },
  //       { Header: 'Group Type', accessor: 'status', filterable: false },
  //       { Header: 'Members', accessor: 'personStatus', filterable: false },
  //       { Header: 'Subgropus', accessor: 'personStatus', filterable: false },
  //       {
  //         Header: 'Group Picture',
  //         accessor: 'picture',
  //         style: { height: '50px' },
  //         Cell: row =>
  //           <img
  //             src={`http://127.0.0.1:3000/images/lacadenelle13008fr/users/${row.original.picture}`}
  //             width='30px'
  //             height='auto'
  //             alt='profile picture'
  //           />,
  //         width: 200,
  //         filterable: false,
  //       },
  //       { Header: 'Manager', accessor: 'personStatus', filterable: false },
  //       {
  //         Header: 'Manager Picture',
  //         accessor: 'picture',
  //         style: { height: '50px' },
  //         Cell: row =>
  //           <img
  //             src={`http://127.0.0.1:3000/images/lacadenelle13008fr/users/${row.original.picture}`}
  //             width='30px'
  //             height='auto'
  //             alt='profile picture'
  //           />,
  //         width: 200,
  //         filterable: false,
  //       },
  //       { Header: 'Create on', accessor: 'personStatus', filterable: false },
  //       { Header: 'Created By', accessor: 'personStatus', filterable: false },
  //       {
  //         id: 'menu',
  //         accessor: '',
  //         Cell: ({ original }) => {
  //           return (
  //             <Dropdown className='drop-down' isOpen={this.state.markUser === original.id} toggle={() => this.markUser(original.id)} >
  //               <DropdownToggle style={{ backgroundColor: 'inherit', width: '100%', padding: '2px', color: 'black', borderStyle: 'none' }}>
  //                 <FaEllipsisV />
  //               </DropdownToggle>
  //               <DropdownMenu>
  //                 {original.familyId === null ? null :
  //                   <Link to={{
  //                     pathname: `/admin/family/${original.familyId}`,
  //                     state: { name: 'Fmaily' }
  //                   }}
  //                   >
  //                     <DropdownItem>go to family</DropdownItem>
  //                   </Link>
  //                 }
  //                 <DropdownItem>mark as handicapped</DropdownItem>
  //                 <DropdownItem>mark as inactive</DropdownItem>
  //               </DropdownMenu>
  //             </Dropdown >
  //           );
  //         },
  //         Header: x => {
  //           return null;
  //         },
  //         sortable: false,
  //         filterable: false,
  //       }],
  //   }];
  return (
    <React.Fragment>
      Gruop
        </React.Fragment>
  )
}

const Family = () => {
  return (
    <React.Fragment>
      Family
    </React.Fragment>
  )
}

export default { Group, Family };