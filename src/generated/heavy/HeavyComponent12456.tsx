'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12456<T> = T extends (infer U)[]
  ? DeepReadonlyArray12456<U>
  : T extends object
  ? DeepReadonlyObject12456<T>
  : T;

interface DeepReadonlyArray12456<T> extends ReadonlyArray<DeepReadonly12456<T>> {}

type DeepReadonlyObject12456<T> = {
  readonly [P in keyof T]: DeepReadonly12456<T[P]>;
};

type UnionToIntersection12456<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12456<T> = UnionToIntersection12456<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12456<T extends unknown[], V> = [...T, V];

type TuplifyUnion12456<T, L = LastOf12456<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12456<TuplifyUnion12456<Exclude<T, L>>, L>;

type DeepPartial12456<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12456<T[P]> }
  : T;

type Paths12456<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12456<K, Paths12456<T[K], Prev12456[D]>> : never }[keyof T]
  : never;

type Prev12456 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12456<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12456 {
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

type ConfigPaths12456 = Paths12456<NestedConfig12456>;

interface HeavyProps12456 {
  config: DeepPartial12456<NestedConfig12456>;
  path?: ConfigPaths12456;
}

const HeavyComponent12456 = memo(function HeavyComponent12456({ config }: HeavyProps12456) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12456) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12456 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12456: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12456.displayName = 'HeavyComponent12456';
export default HeavyComponent12456;
