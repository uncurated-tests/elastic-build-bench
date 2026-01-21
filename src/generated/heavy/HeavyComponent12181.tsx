'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12181<T> = T extends (infer U)[]
  ? DeepReadonlyArray12181<U>
  : T extends object
  ? DeepReadonlyObject12181<T>
  : T;

interface DeepReadonlyArray12181<T> extends ReadonlyArray<DeepReadonly12181<T>> {}

type DeepReadonlyObject12181<T> = {
  readonly [P in keyof T]: DeepReadonly12181<T[P]>;
};

type UnionToIntersection12181<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12181<T> = UnionToIntersection12181<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12181<T extends unknown[], V> = [...T, V];

type TuplifyUnion12181<T, L = LastOf12181<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12181<TuplifyUnion12181<Exclude<T, L>>, L>;

type DeepPartial12181<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12181<T[P]> }
  : T;

type Paths12181<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12181<K, Paths12181<T[K], Prev12181[D]>> : never }[keyof T]
  : never;

type Prev12181 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12181<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12181 {
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

type ConfigPaths12181 = Paths12181<NestedConfig12181>;

interface HeavyProps12181 {
  config: DeepPartial12181<NestedConfig12181>;
  path?: ConfigPaths12181;
}

const HeavyComponent12181 = memo(function HeavyComponent12181({ config }: HeavyProps12181) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12181) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12181 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12181: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12181.displayName = 'HeavyComponent12181';
export default HeavyComponent12181;
