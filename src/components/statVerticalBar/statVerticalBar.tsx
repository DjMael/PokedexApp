import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

const StatVertcalBar = ({stats}: {stats: IPokemonStats}) => {
  const [width, setWidth] = useState<number>(0);
  const [baseColor, setBaseColor] = useState<string>();

  useEffect(() => {
    setWidth((stats.base_stat / 200) * 100);
  }, []);

  useEffect(() => {
    let color: string;
    if (width! < 30) color = '#ff7f0f';
    else if (width! < 50) color = '#ffdd57';
    else if (width! < 60) color = '#a0e515';
    else color = '#23cd5e';

    setBaseColor(color);
  }, [width]);

  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          flexDirection: 'row',
          width: '40%',
          height: '100%',
          justifyContent: 'space-between',
        }}>
        <Text>{stats.stat.name}</Text>
        <Text>{stats.base_stat}</Text>
      </View>
      <View style={{width: '100%'}}>
        <View
          style={{
            backgroundColor: baseColor,
            width: width + '%',
            height: '100%',
            borderRadius: 3,
          }}
        />
      </View>
    </View>
  );
};

export default StatVertcalBar;
