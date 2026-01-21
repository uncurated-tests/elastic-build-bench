'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12858<T> = T extends (infer U)[]
  ? DeepReadonlyArray12858<U>
  : T extends object
  ? DeepReadonlyObject12858<T>
  : T;

interface DeepReadonlyArray12858<T> extends ReadonlyArray<DeepReadonly12858<T>> {}

type DeepReadonlyObject12858<T> = {
  readonly [P in keyof T]: DeepReadonly12858<T[P]>;
};

type UnionToIntersection12858<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12858<T> = UnionToIntersection12858<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12858<T extends unknown[], V> = [...T, V];

type TuplifyUnion12858<T, L = LastOf12858<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12858<TuplifyUnion12858<Exclude<T, L>>, L>;

type DeepPartial12858<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12858<T[P]> }
  : T;

type Paths12858<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12858<K, Paths12858<T[K], Prev12858[D]>> : never }[keyof T]
  : never;

type Prev12858 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12858<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12858 {
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

type ConfigPaths12858 = Paths12858<NestedConfig12858>;

interface HeavyProps12858 {
  config: DeepPartial12858<NestedConfig12858>;
  path?: ConfigPaths12858;
}

const HeavyComponent12858 = memo(function HeavyComponent12858({ config }: HeavyProps12858) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12858) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12858 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12858: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12858.displayName = 'HeavyComponent12858';
export default HeavyComponent12858;
