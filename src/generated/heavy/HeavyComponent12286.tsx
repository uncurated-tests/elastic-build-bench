'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12286<T> = T extends (infer U)[]
  ? DeepReadonlyArray12286<U>
  : T extends object
  ? DeepReadonlyObject12286<T>
  : T;

interface DeepReadonlyArray12286<T> extends ReadonlyArray<DeepReadonly12286<T>> {}

type DeepReadonlyObject12286<T> = {
  readonly [P in keyof T]: DeepReadonly12286<T[P]>;
};

type UnionToIntersection12286<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12286<T> = UnionToIntersection12286<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12286<T extends unknown[], V> = [...T, V];

type TuplifyUnion12286<T, L = LastOf12286<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12286<TuplifyUnion12286<Exclude<T, L>>, L>;

type DeepPartial12286<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12286<T[P]> }
  : T;

type Paths12286<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12286<K, Paths12286<T[K], Prev12286[D]>> : never }[keyof T]
  : never;

type Prev12286 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12286<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12286 {
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

type ConfigPaths12286 = Paths12286<NestedConfig12286>;

interface HeavyProps12286 {
  config: DeepPartial12286<NestedConfig12286>;
  path?: ConfigPaths12286;
}

const HeavyComponent12286 = memo(function HeavyComponent12286({ config }: HeavyProps12286) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12286) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12286 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12286: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12286.displayName = 'HeavyComponent12286';
export default HeavyComponent12286;
