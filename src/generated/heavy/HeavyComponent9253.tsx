'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9253<T> = T extends (infer U)[]
  ? DeepReadonlyArray9253<U>
  : T extends object
  ? DeepReadonlyObject9253<T>
  : T;

interface DeepReadonlyArray9253<T> extends ReadonlyArray<DeepReadonly9253<T>> {}

type DeepReadonlyObject9253<T> = {
  readonly [P in keyof T]: DeepReadonly9253<T[P]>;
};

type UnionToIntersection9253<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9253<T> = UnionToIntersection9253<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9253<T extends unknown[], V> = [...T, V];

type TuplifyUnion9253<T, L = LastOf9253<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9253<TuplifyUnion9253<Exclude<T, L>>, L>;

type DeepPartial9253<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9253<T[P]> }
  : T;

type Paths9253<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9253<K, Paths9253<T[K], Prev9253[D]>> : never }[keyof T]
  : never;

type Prev9253 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9253<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9253 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths9253 = Paths9253<NestedConfig9253>;

interface HeavyProps9253 {
  config: DeepPartial9253<NestedConfig9253>;
  path?: ConfigPaths9253;
}

const HeavyComponent9253 = memo(function HeavyComponent9253({ config }: HeavyProps9253) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9253) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9253 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9253: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9253.displayName = 'HeavyComponent9253';
export default HeavyComponent9253;
