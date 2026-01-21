'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly244<T> = T extends (infer U)[]
  ? DeepReadonlyArray244<U>
  : T extends object
  ? DeepReadonlyObject244<T>
  : T;

interface DeepReadonlyArray244<T> extends ReadonlyArray<DeepReadonly244<T>> {}

type DeepReadonlyObject244<T> = {
  readonly [P in keyof T]: DeepReadonly244<T[P]>;
};

type UnionToIntersection244<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf244<T> = UnionToIntersection244<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push244<T extends unknown[], V> = [...T, V];

type TuplifyUnion244<T, L = LastOf244<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push244<TuplifyUnion244<Exclude<T, L>>, L>;

type DeepPartial244<T> = T extends object
  ? { [P in keyof T]?: DeepPartial244<T[P]> }
  : T;

type Paths244<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join244<K, Paths244<T[K], Prev244[D]>> : never }[keyof T]
  : never;

type Prev244 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join244<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig244 {
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

type ConfigPaths244 = Paths244<NestedConfig244>;

interface HeavyProps244 {
  config: DeepPartial244<NestedConfig244>;
  path?: ConfigPaths244;
}

const HeavyComponent244 = memo(function HeavyComponent244({ config }: HeavyProps244) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 244) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-244 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H244: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent244.displayName = 'HeavyComponent244';
export default HeavyComponent244;
