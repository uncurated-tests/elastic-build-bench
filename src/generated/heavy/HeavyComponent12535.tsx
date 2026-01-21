'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12535<T> = T extends (infer U)[]
  ? DeepReadonlyArray12535<U>
  : T extends object
  ? DeepReadonlyObject12535<T>
  : T;

interface DeepReadonlyArray12535<T> extends ReadonlyArray<DeepReadonly12535<T>> {}

type DeepReadonlyObject12535<T> = {
  readonly [P in keyof T]: DeepReadonly12535<T[P]>;
};

type UnionToIntersection12535<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12535<T> = UnionToIntersection12535<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12535<T extends unknown[], V> = [...T, V];

type TuplifyUnion12535<T, L = LastOf12535<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12535<TuplifyUnion12535<Exclude<T, L>>, L>;

type DeepPartial12535<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12535<T[P]> }
  : T;

type Paths12535<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12535<K, Paths12535<T[K], Prev12535[D]>> : never }[keyof T]
  : never;

type Prev12535 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12535<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12535 {
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

type ConfigPaths12535 = Paths12535<NestedConfig12535>;

interface HeavyProps12535 {
  config: DeepPartial12535<NestedConfig12535>;
  path?: ConfigPaths12535;
}

const HeavyComponent12535 = memo(function HeavyComponent12535({ config }: HeavyProps12535) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12535) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12535 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12535: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12535.displayName = 'HeavyComponent12535';
export default HeavyComponent12535;
