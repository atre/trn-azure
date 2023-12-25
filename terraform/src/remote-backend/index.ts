import { TerraformStack } from 'cdktf';
import { Construct } from 'constructs';
import { AzureRemoteBackend, AzureRemoteBackendProps } from 'trn-components/lib/azure/remote-backend';

export class RemoteBackend extends TerraformStack {
  constructor(scope: Construct, id: string, props: AzureRemoteBackendProps) {
    super(scope, id);

    new AzureRemoteBackend(this, 'remote_backend', props);
  }
}