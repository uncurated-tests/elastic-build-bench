'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12686<T> = T extends (infer U)[]
  ? DeepReadonlyArray12686<U>
  : T extends object
  ? DeepReadonlyObject12686<T>
  : T;

interface DeepReadonlyArray12686<T> extends ReadonlyArray<DeepReadonly12686<T>> {}

type DeepReadonlyObject12686<T> = {
  readonly [P in keyof T]: DeepReadonly12686<T[P]>;
};

type UnionToIntersection12686<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12686<T> = UnionToIntersection12686<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12686<T extends unknown[], V> = [...T, V];

type TuplifyUnion12686<T, L = LastOf12686<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12686<TuplifyUnion12686<Exclude<T, L>>, L>;

type DeepPartial12686<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12686<T[P]> }
  : T;

type Paths12686<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12686<K, Paths12686<T[K], Prev12686[D]>> : never }[keyof T]
  : never;

type Prev12686 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12686<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12686 {
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

type ConfigPaths12686 = Paths12686<NestedConfig12686>;

interface HeavyProps12686 {
  config: DeepPartial12686<NestedConfig12686>;
  path?: ConfigPaths12686;
}

const HeavyComponent12686 = memo(function HeavyComponent12686({ config }: HeavyProps12686) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12686) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12686 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12686: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12686.displayName = 'HeavyComponent12686';
export default HeavyComponent12686;
