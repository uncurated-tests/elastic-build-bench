'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly253<T> = T extends (infer U)[]
  ? DeepReadonlyArray253<U>
  : T extends object
  ? DeepReadonlyObject253<T>
  : T;

interface DeepReadonlyArray253<T> extends ReadonlyArray<DeepReadonly253<T>> {}

type DeepReadonlyObject253<T> = {
  readonly [P in keyof T]: DeepReadonly253<T[P]>;
};

type UnionToIntersection253<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf253<T> = UnionToIntersection253<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push253<T extends unknown[], V> = [...T, V];

type TuplifyUnion253<T, L = LastOf253<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push253<TuplifyUnion253<Exclude<T, L>>, L>;

type DeepPartial253<T> = T extends object
  ? { [P in keyof T]?: DeepPartial253<T[P]> }
  : T;

type Paths253<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join253<K, Paths253<T[K], Prev253[D]>> : never }[keyof T]
  : never;

type Prev253 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join253<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig253 {
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

type ConfigPaths253 = Paths253<NestedConfig253>;

interface HeavyProps253 {
  config: DeepPartial253<NestedConfig253>;
  path?: ConfigPaths253;
}

const HeavyComponent253 = memo(function HeavyComponent253({ config }: HeavyProps253) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 253) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-253 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H253: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent253.displayName = 'HeavyComponent253';
export default HeavyComponent253;
