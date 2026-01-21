'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12465<T> = T extends (infer U)[]
  ? DeepReadonlyArray12465<U>
  : T extends object
  ? DeepReadonlyObject12465<T>
  : T;

interface DeepReadonlyArray12465<T> extends ReadonlyArray<DeepReadonly12465<T>> {}

type DeepReadonlyObject12465<T> = {
  readonly [P in keyof T]: DeepReadonly12465<T[P]>;
};

type UnionToIntersection12465<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12465<T> = UnionToIntersection12465<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12465<T extends unknown[], V> = [...T, V];

type TuplifyUnion12465<T, L = LastOf12465<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12465<TuplifyUnion12465<Exclude<T, L>>, L>;

type DeepPartial12465<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12465<T[P]> }
  : T;

type Paths12465<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12465<K, Paths12465<T[K], Prev12465[D]>> : never }[keyof T]
  : never;

type Prev12465 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12465<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12465 {
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

type ConfigPaths12465 = Paths12465<NestedConfig12465>;

interface HeavyProps12465 {
  config: DeepPartial12465<NestedConfig12465>;
  path?: ConfigPaths12465;
}

const HeavyComponent12465 = memo(function HeavyComponent12465({ config }: HeavyProps12465) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12465) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12465 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12465: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12465.displayName = 'HeavyComponent12465';
export default HeavyComponent12465;
