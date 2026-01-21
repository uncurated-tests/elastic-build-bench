'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12630<T> = T extends (infer U)[]
  ? DeepReadonlyArray12630<U>
  : T extends object
  ? DeepReadonlyObject12630<T>
  : T;

interface DeepReadonlyArray12630<T> extends ReadonlyArray<DeepReadonly12630<T>> {}

type DeepReadonlyObject12630<T> = {
  readonly [P in keyof T]: DeepReadonly12630<T[P]>;
};

type UnionToIntersection12630<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12630<T> = UnionToIntersection12630<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12630<T extends unknown[], V> = [...T, V];

type TuplifyUnion12630<T, L = LastOf12630<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12630<TuplifyUnion12630<Exclude<T, L>>, L>;

type DeepPartial12630<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12630<T[P]> }
  : T;

type Paths12630<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12630<K, Paths12630<T[K], Prev12630[D]>> : never }[keyof T]
  : never;

type Prev12630 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12630<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12630 {
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

type ConfigPaths12630 = Paths12630<NestedConfig12630>;

interface HeavyProps12630 {
  config: DeepPartial12630<NestedConfig12630>;
  path?: ConfigPaths12630;
}

const HeavyComponent12630 = memo(function HeavyComponent12630({ config }: HeavyProps12630) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12630) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12630 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12630: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12630.displayName = 'HeavyComponent12630';
export default HeavyComponent12630;
