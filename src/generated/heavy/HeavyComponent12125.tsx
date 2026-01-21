'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12125<T> = T extends (infer U)[]
  ? DeepReadonlyArray12125<U>
  : T extends object
  ? DeepReadonlyObject12125<T>
  : T;

interface DeepReadonlyArray12125<T> extends ReadonlyArray<DeepReadonly12125<T>> {}

type DeepReadonlyObject12125<T> = {
  readonly [P in keyof T]: DeepReadonly12125<T[P]>;
};

type UnionToIntersection12125<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12125<T> = UnionToIntersection12125<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12125<T extends unknown[], V> = [...T, V];

type TuplifyUnion12125<T, L = LastOf12125<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12125<TuplifyUnion12125<Exclude<T, L>>, L>;

type DeepPartial12125<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12125<T[P]> }
  : T;

type Paths12125<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12125<K, Paths12125<T[K], Prev12125[D]>> : never }[keyof T]
  : never;

type Prev12125 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12125<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12125 {
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

type ConfigPaths12125 = Paths12125<NestedConfig12125>;

interface HeavyProps12125 {
  config: DeepPartial12125<NestedConfig12125>;
  path?: ConfigPaths12125;
}

const HeavyComponent12125 = memo(function HeavyComponent12125({ config }: HeavyProps12125) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12125) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12125 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12125: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12125.displayName = 'HeavyComponent12125';
export default HeavyComponent12125;
