import { TerraformStack } from 'cdktf';
import { Construct } from 'constructs';
import { Network, NetworkProps } from 'trn-components/lib/azure/network';

export class NetworkStack extends TerraformStack {
  constructor(scope: Construct, id: string, props: NetworkProps) {
    super(scope, id);

    new Network(this, 'network', props);
  }
}