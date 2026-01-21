'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly578<T> = T extends (infer U)[]
  ? DeepReadonlyArray578<U>
  : T extends object
  ? DeepReadonlyObject578<T>
  : T;

interface DeepReadonlyArray578<T> extends ReadonlyArray<DeepReadonly578<T>> {}

type DeepReadonlyObject578<T> = {
  readonly [P in keyof T]: DeepReadonly578<T[P]>;
};

type UnionToIntersection578<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf578<T> = UnionToIntersection578<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push578<T extends unknown[], V> = [...T, V];

type TuplifyUnion578<T, L = LastOf578<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push578<TuplifyUnion578<Exclude<T, L>>, L>;

type DeepPartial578<T> = T extends object
  ? { [P in keyof T]?: DeepPartial578<T[P]> }
  : T;

type Paths578<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join578<K, Paths578<T[K], Prev578[D]>> : never }[keyof T]
  : never;

type Prev578 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join578<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig578 {
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

type ConfigPaths578 = Paths578<NestedConfig578>;

interface HeavyProps578 {
  config: DeepPartial578<NestedConfig578>;
  path?: ConfigPaths578;
}

const HeavyComponent578 = memo(function HeavyComponent578({ config }: HeavyProps578) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 578) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-578 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H578: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent578.displayName = 'HeavyComponent578';
export default HeavyComponent578;
