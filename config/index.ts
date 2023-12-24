import 'dotenv/config';
import { EnvProps } from 'trn-components/lib/azure/interfaces';

export const env: EnvProps = {
  name: process.env.NAME || 'trn-azure',
  location: process.env.LOCATION || 'westeurope',
  resourceGroupName: process.env.RESOURCEGROUPNAME || 'trn-azure',
};