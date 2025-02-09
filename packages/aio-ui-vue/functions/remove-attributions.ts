import type { CompilerOptions } from "vue/compiler-sfc";

type NodeTransforms = CompilerOptions["nodeTransforms"];

export function removeAttributions(attributions: string | Array<string>): NodeTransforms {
	return [
		(node) => {
			if (node.type === 1) {
				for (let i = 0; i < node.props.length; i++) {
					if (Array.isArray(attributions) ? attributions.includes(node.props[i].name) : node.props[i].name === attributions) {
						node.props.splice(i, 1);
						i--;
					}
				}
			}
		},
	];
}
