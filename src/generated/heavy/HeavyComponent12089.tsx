'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12089<T> = T extends (infer U)[]
  ? DeepReadonlyArray12089<U>
  : T extends object
  ? DeepReadonlyObject12089<T>
  : T;

interface DeepReadonlyArray12089<T> extends ReadonlyArray<DeepReadonly12089<T>> {}

type DeepReadonlyObject12089<T> = {
  readonly [P in keyof T]: DeepReadonly12089<T[P]>;
};

type UnionToIntersection12089<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12089<T> = UnionToIntersection12089<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12089<T extends unknown[], V> = [...T, V];

type TuplifyUnion12089<T, L = LastOf12089<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12089<TuplifyUnion12089<Exclude<T, L>>, L>;

type DeepPartial12089<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12089<T[P]> }
  : T;

type Paths12089<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12089<K, Paths12089<T[K], Prev12089[D]>> : never }[keyof T]
  : never;

type Prev12089 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12089<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12089 {
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

type ConfigPaths12089 = Paths12089<NestedConfig12089>;

interface HeavyProps12089 {
  config: DeepPartial12089<NestedConfig12089>;
  path?: ConfigPaths12089;
}

const HeavyComponent12089 = memo(function HeavyComponent12089({ config }: HeavyProps12089) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12089) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12089 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12089: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12089.displayName = 'HeavyComponent12089';
export default HeavyComponent12089;
