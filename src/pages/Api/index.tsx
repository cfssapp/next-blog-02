import { Layout, Row, Typography } from 'antd';
import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';



import services from '@/services/demo';

const { addUser, queryUserList, deleteUser, modifyUser } =
  services.UserController;



const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <Layout>
        <Row>
          <Typography.Title level={3} className={styles.title}>
            Testing <strong>API</strong> ！
          </Typography.Title>
          
        </Row>
      </Layout>
    </PageContainer>
  );
};

export default HomePage;
