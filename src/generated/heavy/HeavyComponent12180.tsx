'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12180<T> = T extends (infer U)[]
  ? DeepReadonlyArray12180<U>
  : T extends object
  ? DeepReadonlyObject12180<T>
  : T;

interface DeepReadonlyArray12180<T> extends ReadonlyArray<DeepReadonly12180<T>> {}

type DeepReadonlyObject12180<T> = {
  readonly [P in keyof T]: DeepReadonly12180<T[P]>;
};

type UnionToIntersection12180<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12180<T> = UnionToIntersection12180<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12180<T extends unknown[], V> = [...T, V];

type TuplifyUnion12180<T, L = LastOf12180<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12180<TuplifyUnion12180<Exclude<T, L>>, L>;

type DeepPartial12180<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12180<T[P]> }
  : T;

type Paths12180<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12180<K, Paths12180<T[K], Prev12180[D]>> : never }[keyof T]
  : never;

type Prev12180 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12180<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12180 {
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

type ConfigPaths12180 = Paths12180<NestedConfig12180>;

interface HeavyProps12180 {
  config: DeepPartial12180<NestedConfig12180>;
  path?: ConfigPaths12180;
}

const HeavyComponent12180 = memo(function HeavyComponent12180({ config }: HeavyProps12180) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12180) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12180 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12180: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12180.displayName = 'HeavyComponent12180';
export default HeavyComponent12180;
