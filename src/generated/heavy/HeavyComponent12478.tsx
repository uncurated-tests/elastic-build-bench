'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12478<T> = T extends (infer U)[]
  ? DeepReadonlyArray12478<U>
  : T extends object
  ? DeepReadonlyObject12478<T>
  : T;

interface DeepReadonlyArray12478<T> extends ReadonlyArray<DeepReadonly12478<T>> {}

type DeepReadonlyObject12478<T> = {
  readonly [P in keyof T]: DeepReadonly12478<T[P]>;
};

type UnionToIntersection12478<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12478<T> = UnionToIntersection12478<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12478<T extends unknown[], V> = [...T, V];

type TuplifyUnion12478<T, L = LastOf12478<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12478<TuplifyUnion12478<Exclude<T, L>>, L>;

type DeepPartial12478<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12478<T[P]> }
  : T;

type Paths12478<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12478<K, Paths12478<T[K], Prev12478[D]>> : never }[keyof T]
  : never;

type Prev12478 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12478<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12478 {
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

type ConfigPaths12478 = Paths12478<NestedConfig12478>;

interface HeavyProps12478 {
  config: DeepPartial12478<NestedConfig12478>;
  path?: ConfigPaths12478;
}

const HeavyComponent12478 = memo(function HeavyComponent12478({ config }: HeavyProps12478) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12478) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12478 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12478: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12478.displayName = 'HeavyComponent12478';
export default HeavyComponent12478;
