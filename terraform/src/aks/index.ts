import { TerraformStack } from 'cdktf';
import { Construct } from 'constructs';
import { Aks, AksProps } from 'trn-cdktf-components/lib/azure/aks';

export class AksStack extends TerraformStack {
  constructor(scope: Construct, id: string, props: AksProps) {
    super(scope, id);

    new Aks(this, 'aks_cluster', props);
  }
}