'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12962<T> = T extends (infer U)[]
  ? DeepReadonlyArray12962<U>
  : T extends object
  ? DeepReadonlyObject12962<T>
  : T;

interface DeepReadonlyArray12962<T> extends ReadonlyArray<DeepReadonly12962<T>> {}

type DeepReadonlyObject12962<T> = {
  readonly [P in keyof T]: DeepReadonly12962<T[P]>;
};

type UnionToIntersection12962<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12962<T> = UnionToIntersection12962<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12962<T extends unknown[], V> = [...T, V];

type TuplifyUnion12962<T, L = LastOf12962<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12962<TuplifyUnion12962<Exclude<T, L>>, L>;

type DeepPartial12962<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12962<T[P]> }
  : T;

type Paths12962<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12962<K, Paths12962<T[K], Prev12962[D]>> : never }[keyof T]
  : never;

type Prev12962 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12962<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12962 {
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

type ConfigPaths12962 = Paths12962<NestedConfig12962>;

interface HeavyProps12962 {
  config: DeepPartial12962<NestedConfig12962>;
  path?: ConfigPaths12962;
}

const HeavyComponent12962 = memo(function HeavyComponent12962({ config }: HeavyProps12962) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12962) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12962 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12962: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12962.displayName = 'HeavyComponent12962';
export default HeavyComponent12962;
