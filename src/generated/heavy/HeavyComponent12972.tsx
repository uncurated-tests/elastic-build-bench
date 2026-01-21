'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12972<T> = T extends (infer U)[]
  ? DeepReadonlyArray12972<U>
  : T extends object
  ? DeepReadonlyObject12972<T>
  : T;

interface DeepReadonlyArray12972<T> extends ReadonlyArray<DeepReadonly12972<T>> {}

type DeepReadonlyObject12972<T> = {
  readonly [P in keyof T]: DeepReadonly12972<T[P]>;
};

type UnionToIntersection12972<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12972<T> = UnionToIntersection12972<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12972<T extends unknown[], V> = [...T, V];

type TuplifyUnion12972<T, L = LastOf12972<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12972<TuplifyUnion12972<Exclude<T, L>>, L>;

type DeepPartial12972<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12972<T[P]> }
  : T;

type Paths12972<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12972<K, Paths12972<T[K], Prev12972[D]>> : never }[keyof T]
  : never;

type Prev12972 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12972<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12972 {
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

type ConfigPaths12972 = Paths12972<NestedConfig12972>;

interface HeavyProps12972 {
  config: DeepPartial12972<NestedConfig12972>;
  path?: ConfigPaths12972;
}

const HeavyComponent12972 = memo(function HeavyComponent12972({ config }: HeavyProps12972) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12972) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12972 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12972: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12972.displayName = 'HeavyComponent12972';
export default HeavyComponent12972;
