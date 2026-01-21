'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly371<T> = T extends (infer U)[]
  ? DeepReadonlyArray371<U>
  : T extends object
  ? DeepReadonlyObject371<T>
  : T;

interface DeepReadonlyArray371<T> extends ReadonlyArray<DeepReadonly371<T>> {}

type DeepReadonlyObject371<T> = {
  readonly [P in keyof T]: DeepReadonly371<T[P]>;
};

type UnionToIntersection371<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf371<T> = UnionToIntersection371<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push371<T extends unknown[], V> = [...T, V];

type TuplifyUnion371<T, L = LastOf371<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push371<TuplifyUnion371<Exclude<T, L>>, L>;

type DeepPartial371<T> = T extends object
  ? { [P in keyof T]?: DeepPartial371<T[P]> }
  : T;

type Paths371<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join371<K, Paths371<T[K], Prev371[D]>> : never }[keyof T]
  : never;

type Prev371 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join371<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig371 {
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

type ConfigPaths371 = Paths371<NestedConfig371>;

interface HeavyProps371 {
  config: DeepPartial371<NestedConfig371>;
  path?: ConfigPaths371;
}

const HeavyComponent371 = memo(function HeavyComponent371({ config }: HeavyProps371) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 371) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-371 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H371: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent371.displayName = 'HeavyComponent371';
export default HeavyComponent371;
