'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12486<T> = T extends (infer U)[]
  ? DeepReadonlyArray12486<U>
  : T extends object
  ? DeepReadonlyObject12486<T>
  : T;

interface DeepReadonlyArray12486<T> extends ReadonlyArray<DeepReadonly12486<T>> {}

type DeepReadonlyObject12486<T> = {
  readonly [P in keyof T]: DeepReadonly12486<T[P]>;
};

type UnionToIntersection12486<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12486<T> = UnionToIntersection12486<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12486<T extends unknown[], V> = [...T, V];

type TuplifyUnion12486<T, L = LastOf12486<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12486<TuplifyUnion12486<Exclude<T, L>>, L>;

type DeepPartial12486<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12486<T[P]> }
  : T;

type Paths12486<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12486<K, Paths12486<T[K], Prev12486[D]>> : never }[keyof T]
  : never;

type Prev12486 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12486<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12486 {
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

type ConfigPaths12486 = Paths12486<NestedConfig12486>;

interface HeavyProps12486 {
  config: DeepPartial12486<NestedConfig12486>;
  path?: ConfigPaths12486;
}

const HeavyComponent12486 = memo(function HeavyComponent12486({ config }: HeavyProps12486) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12486) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12486 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12486: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12486.displayName = 'HeavyComponent12486';
export default HeavyComponent12486;
