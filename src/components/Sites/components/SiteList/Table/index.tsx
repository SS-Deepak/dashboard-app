import {View, ScrollView} from 'react-native';
import React from 'react';
import {Row, Table} from 'react-native-table-component';
import styles from '../../index.module.scss';
import SiteListFormatter from '../../../utils/list-formatter';
import {MockSiteList} from '../../../utils/mock-list';
import ActionButtons from './ActionButtons';
import Thumbnail from './Thumbnail';
import TitleComponent from './Title';
import {SiteCellWidthArr, SiteTableHeader} from './tableConfig';
import {Divider} from '@rneui/themed';

const SiteListTable = () => {
  const tableData = SiteListFormatter(MockSiteList).map(s => {
    return [
      <Thumbnail label={s.thumbnail} />,
      <TitleComponent pageCount={s.pagesCount} title={s.title} />,
      s.domain,
      s.updatedAt,
      s.type,
      <ActionButtons />,
    ];
  });

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table>
            <Row
              data={SiteTableHeader}
              style={styles.header}
              widthArr={SiteCellWidthArr}
              textStyle={[styles.text, styles.textHeader]}
            />
          </Table>
          <Divider width={1} color="#0008" />
          <Divider width={5} color="transparent" />
          <ScrollView>
            <Table>
              {tableData.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  widthArr={SiteCellWidthArr}
                  style={[styles.row, index % 2 && styles.alter]}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default SiteListTable;
