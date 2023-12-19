import { Grid, Select } from "@mantine/core";
import { useMemo } from "react";
import classes from './CarSelection.module.css';

export type CarSelectionProps = {
  value: string;
  onChange: (value: string) => void;
}

const options = [{
  name: 'mclaren',
  label: 'McLaren Senna',
}, {
  name: 'mercedez',
  label: 'Mercedez'
}]


export const CarSelection = (props: CarSelectionProps) => {
  const { onChange, value } = props;
  const selectedLabel = useMemo(() => {
    return options.find(record => record.name === value)?.label;
  }, [value])


  const autocompleteOptions = useMemo(() => {
    return options.map(record => record.label);
  }, [])

  const onSelectLabel = (value: string | null) => {
    const selected = options.find(record => record.label === value);
    if (!selected) {
      return;
    }
    onChange(selected.name);
  }

  return <Grid className={classes.carSelectionContainer} p='lg'>
    <Grid.Col span={12}>
      <Select
        label='Pick car model'
        placeholder='Mclaren'
        data={autocompleteOptions}
        value={selectedLabel}
        onChange={onSelectLabel}
      />
    </Grid.Col>
  </Grid>

}