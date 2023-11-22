'use client';

import styles from './page.module.css';

import { Button } from 'antd';

import SelectDemo from './components/SelectDemo';

export default function Home() {
  return (
    <main className={styles.main}>
      <SelectDemo />

      <Button type='default'>Thong nguyen</Button>
    </main>
  );
}
