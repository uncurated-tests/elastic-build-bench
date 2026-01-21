'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12414<T> = T extends (infer U)[]
  ? DeepReadonlyArray12414<U>
  : T extends object
  ? DeepReadonlyObject12414<T>
  : T;

interface DeepReadonlyArray12414<T> extends ReadonlyArray<DeepReadonly12414<T>> {}

type DeepReadonlyObject12414<T> = {
  readonly [P in keyof T]: DeepReadonly12414<T[P]>;
};

type UnionToIntersection12414<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12414<T> = UnionToIntersection12414<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12414<T extends unknown[], V> = [...T, V];

type TuplifyUnion12414<T, L = LastOf12414<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12414<TuplifyUnion12414<Exclude<T, L>>, L>;

type DeepPartial12414<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12414<T[P]> }
  : T;

type Paths12414<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12414<K, Paths12414<T[K], Prev12414[D]>> : never }[keyof T]
  : never;

type Prev12414 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12414<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12414 {
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

type ConfigPaths12414 = Paths12414<NestedConfig12414>;

interface HeavyProps12414 {
  config: DeepPartial12414<NestedConfig12414>;
  path?: ConfigPaths12414;
}

const HeavyComponent12414 = memo(function HeavyComponent12414({ config }: HeavyProps12414) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12414) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12414 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12414: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12414.displayName = 'HeavyComponent12414';
export default HeavyComponent12414;
