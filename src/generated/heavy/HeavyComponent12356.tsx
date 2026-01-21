'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12356<T> = T extends (infer U)[]
  ? DeepReadonlyArray12356<U>
  : T extends object
  ? DeepReadonlyObject12356<T>
  : T;

interface DeepReadonlyArray12356<T> extends ReadonlyArray<DeepReadonly12356<T>> {}

type DeepReadonlyObject12356<T> = {
  readonly [P in keyof T]: DeepReadonly12356<T[P]>;
};

type UnionToIntersection12356<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12356<T> = UnionToIntersection12356<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12356<T extends unknown[], V> = [...T, V];

type TuplifyUnion12356<T, L = LastOf12356<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12356<TuplifyUnion12356<Exclude<T, L>>, L>;

type DeepPartial12356<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12356<T[P]> }
  : T;

type Paths12356<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12356<K, Paths12356<T[K], Prev12356[D]>> : never }[keyof T]
  : never;

type Prev12356 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12356<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12356 {
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

type ConfigPaths12356 = Paths12356<NestedConfig12356>;

interface HeavyProps12356 {
  config: DeepPartial12356<NestedConfig12356>;
  path?: ConfigPaths12356;
}

const HeavyComponent12356 = memo(function HeavyComponent12356({ config }: HeavyProps12356) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12356) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12356 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12356: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12356.displayName = 'HeavyComponent12356';
export default HeavyComponent12356;
