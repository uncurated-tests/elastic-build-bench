'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12983<T> = T extends (infer U)[]
  ? DeepReadonlyArray12983<U>
  : T extends object
  ? DeepReadonlyObject12983<T>
  : T;

interface DeepReadonlyArray12983<T> extends ReadonlyArray<DeepReadonly12983<T>> {}

type DeepReadonlyObject12983<T> = {
  readonly [P in keyof T]: DeepReadonly12983<T[P]>;
};

type UnionToIntersection12983<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12983<T> = UnionToIntersection12983<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12983<T extends unknown[], V> = [...T, V];

type TuplifyUnion12983<T, L = LastOf12983<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12983<TuplifyUnion12983<Exclude<T, L>>, L>;

type DeepPartial12983<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12983<T[P]> }
  : T;

type Paths12983<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12983<K, Paths12983<T[K], Prev12983[D]>> : never }[keyof T]
  : never;

type Prev12983 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12983<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12983 {
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

type ConfigPaths12983 = Paths12983<NestedConfig12983>;

interface HeavyProps12983 {
  config: DeepPartial12983<NestedConfig12983>;
  path?: ConfigPaths12983;
}

const HeavyComponent12983 = memo(function HeavyComponent12983({ config }: HeavyProps12983) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12983) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12983 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12983: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12983.displayName = 'HeavyComponent12983';
export default HeavyComponent12983;
