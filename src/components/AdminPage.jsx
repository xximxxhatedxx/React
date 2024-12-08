import React from 'react';
import { Table, Card, Button, Modal, Typography, notification } from 'antd';

const { Title } = Typography;

const AdminPage = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const usersData = [
        { key: '1', name: 'John', email: 'john@gmail.com', role: 'User' },
        { key: '2', name: 'Marie', email: 'jane@gmail.com', role: 'User' },
        { key: '3', name: 'Admin', email: 'admin@gmail.com', role: 'Admin' },
    ];

    const handleDelete = (record) => {
        notification.success({
            message: 'User Deleted',
            description: `User ${record.name} has been removed.`,
        });
    };

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Role', dataIndex: 'role', key: 'role' },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Button danger onClick={() => handleDelete(record)}>
                    Delete
                </Button>
            ),
        },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <Card
                style={{ maxWidth: '800px', margin: '0 auto' }}
                title={<Title level={4}>Admin Dashboard</Title>}
                extra={
                    <Button type="primary" onClick={() => setIsModalVisible(true)}>
                        Add User
                    </Button>
                }
            >
                <Table dataSource={usersData} columns={columns} />
            </Card>
            <Modal
                title="Add New User"
                open={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                onOk={() => setIsModalVisible(false)}
            >
                <p>Form for adding new users will go here.</p>
            </Modal>
        </div>
    );
};

export default AdminPage;
