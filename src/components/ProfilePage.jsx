import React from 'react';
import { Card, Avatar, List, Typography, Button, Divider } from 'antd';
import { UserOutlined, EditOutlined, SettingOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const ProfilePage = () => {
    const userData = {
        username: 'Ronald',
        email: 'Ronald@gmail.com',
        bio: 'Autist Schizophrenic',
        recentActivity: ['Logged in', 'Viewed product: iPhone 13', 'Updated profile picture']
    };

    return (
        <div style={{ padding: '20px' }}>
            <Card
                style={{ maxWidth: '600px', margin: '0 auto' }}
                actions={[
                    <Button icon={<EditOutlined />} type="link">
                        Edit Profile
                    </Button>,
                    <Button icon={<SettingOutlined />} type="link">
                        Settings
                    </Button>,
                ]}
            >
                <Card.Meta
                    avatar={<Avatar size={64} icon={<UserOutlined />} />}
                    title={<Title level={4}>{userData.username}</Title>}
                    description={userData.email}
                />
                <Divider />
                <Paragraph>{userData.bio}</Paragraph>
                <Divider />
                <Title level={5}>Recent Activity</Title>
                <List
                    dataSource={userData.recentActivity}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />
            </Card>
        </div>
    );
};

export default ProfilePage;
