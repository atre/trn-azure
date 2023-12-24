import { App } from 'cdktf';
import { env } from './config';
import { AksStack } from './src/aks';
import { NetworkStack } from './src/network';
import { RemoteBackend } from './src/remote-backend';

const app = new App();

new RemoteBackend(app, 'remote_backend', {
  env,
  storageAccount: {
    accountTier: 'Standard',
    accountReplicationType: 'LRS',
    allowNestedItemsToBePublic: false,
  },
});

new NetworkStack(app, 'network', {
  env,
  virtualNetwork: {
    addressSpace: ['10.0.0.0/16'],
  },
});

new AksStack(app, 'aks', {
  env,
  kubernetesCluster: {
    defaultNodePool: {
      name: 'default',
      nodeCount: 1,
      vmSize: 'Standard_D2_v2',
    },
    identity: {
      type: 'SystemAssigned',
    },
  },
});

app.synth();
