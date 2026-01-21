'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12097<T> = T extends (infer U)[]
  ? DeepReadonlyArray12097<U>
  : T extends object
  ? DeepReadonlyObject12097<T>
  : T;

interface DeepReadonlyArray12097<T> extends ReadonlyArray<DeepReadonly12097<T>> {}

type DeepReadonlyObject12097<T> = {
  readonly [P in keyof T]: DeepReadonly12097<T[P]>;
};

type UnionToIntersection12097<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12097<T> = UnionToIntersection12097<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12097<T extends unknown[], V> = [...T, V];

type TuplifyUnion12097<T, L = LastOf12097<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12097<TuplifyUnion12097<Exclude<T, L>>, L>;

type DeepPartial12097<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12097<T[P]> }
  : T;

type Paths12097<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12097<K, Paths12097<T[K], Prev12097[D]>> : never }[keyof T]
  : never;

type Prev12097 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12097<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12097 {
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

type ConfigPaths12097 = Paths12097<NestedConfig12097>;

interface HeavyProps12097 {
  config: DeepPartial12097<NestedConfig12097>;
  path?: ConfigPaths12097;
}

const HeavyComponent12097 = memo(function HeavyComponent12097({ config }: HeavyProps12097) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12097) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12097 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12097: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12097.displayName = 'HeavyComponent12097';
export default HeavyComponent12097;
