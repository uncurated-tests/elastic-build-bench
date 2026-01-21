'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12396<T> = T extends (infer U)[]
  ? DeepReadonlyArray12396<U>
  : T extends object
  ? DeepReadonlyObject12396<T>
  : T;

interface DeepReadonlyArray12396<T> extends ReadonlyArray<DeepReadonly12396<T>> {}

type DeepReadonlyObject12396<T> = {
  readonly [P in keyof T]: DeepReadonly12396<T[P]>;
};

type UnionToIntersection12396<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12396<T> = UnionToIntersection12396<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12396<T extends unknown[], V> = [...T, V];

type TuplifyUnion12396<T, L = LastOf12396<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12396<TuplifyUnion12396<Exclude<T, L>>, L>;

type DeepPartial12396<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12396<T[P]> }
  : T;

type Paths12396<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12396<K, Paths12396<T[K], Prev12396[D]>> : never }[keyof T]
  : never;

type Prev12396 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12396<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12396 {
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

type ConfigPaths12396 = Paths12396<NestedConfig12396>;

interface HeavyProps12396 {
  config: DeepPartial12396<NestedConfig12396>;
  path?: ConfigPaths12396;
}

const HeavyComponent12396 = memo(function HeavyComponent12396({ config }: HeavyProps12396) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12396) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12396 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12396: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12396.displayName = 'HeavyComponent12396';
export default HeavyComponent12396;
