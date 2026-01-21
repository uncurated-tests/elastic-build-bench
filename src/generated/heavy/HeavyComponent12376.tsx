'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12376<T> = T extends (infer U)[]
  ? DeepReadonlyArray12376<U>
  : T extends object
  ? DeepReadonlyObject12376<T>
  : T;

interface DeepReadonlyArray12376<T> extends ReadonlyArray<DeepReadonly12376<T>> {}

type DeepReadonlyObject12376<T> = {
  readonly [P in keyof T]: DeepReadonly12376<T[P]>;
};

type UnionToIntersection12376<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12376<T> = UnionToIntersection12376<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12376<T extends unknown[], V> = [...T, V];

type TuplifyUnion12376<T, L = LastOf12376<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12376<TuplifyUnion12376<Exclude<T, L>>, L>;

type DeepPartial12376<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12376<T[P]> }
  : T;

type Paths12376<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12376<K, Paths12376<T[K], Prev12376[D]>> : never }[keyof T]
  : never;

type Prev12376 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12376<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12376 {
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

type ConfigPaths12376 = Paths12376<NestedConfig12376>;

interface HeavyProps12376 {
  config: DeepPartial12376<NestedConfig12376>;
  path?: ConfigPaths12376;
}

const HeavyComponent12376 = memo(function HeavyComponent12376({ config }: HeavyProps12376) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12376) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12376 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12376: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12376.displayName = 'HeavyComponent12376';
export default HeavyComponent12376;
