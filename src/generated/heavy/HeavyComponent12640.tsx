'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12640<T> = T extends (infer U)[]
  ? DeepReadonlyArray12640<U>
  : T extends object
  ? DeepReadonlyObject12640<T>
  : T;

interface DeepReadonlyArray12640<T> extends ReadonlyArray<DeepReadonly12640<T>> {}

type DeepReadonlyObject12640<T> = {
  readonly [P in keyof T]: DeepReadonly12640<T[P]>;
};

type UnionToIntersection12640<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12640<T> = UnionToIntersection12640<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12640<T extends unknown[], V> = [...T, V];

type TuplifyUnion12640<T, L = LastOf12640<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12640<TuplifyUnion12640<Exclude<T, L>>, L>;

type DeepPartial12640<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12640<T[P]> }
  : T;

type Paths12640<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12640<K, Paths12640<T[K], Prev12640[D]>> : never }[keyof T]
  : never;

type Prev12640 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12640<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12640 {
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

type ConfigPaths12640 = Paths12640<NestedConfig12640>;

interface HeavyProps12640 {
  config: DeepPartial12640<NestedConfig12640>;
  path?: ConfigPaths12640;
}

const HeavyComponent12640 = memo(function HeavyComponent12640({ config }: HeavyProps12640) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12640) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12640 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12640: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12640.displayName = 'HeavyComponent12640';
export default HeavyComponent12640;
