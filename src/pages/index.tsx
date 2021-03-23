import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Container from '../components/Container';

const Home: React.FC = () => (
  <Layout>
    <Head />
    <Container>
      <div>
        <h2>Recently Updated News</h2>
      </div>
    </Container>
  </Layout>
);

export default Home;
