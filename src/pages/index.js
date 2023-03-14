import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import styles from '@/styles/Home.module.scss'

export default function Home(props) {
  const { t } = useTranslation('common')

  return (
    <>
      <p className={styles.demo}>demo</p>
      <p>{t('home')}</p>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common'
      ])),
    },
  }
}