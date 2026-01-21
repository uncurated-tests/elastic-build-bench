'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12503<T> = T extends (infer U)[]
  ? DeepReadonlyArray12503<U>
  : T extends object
  ? DeepReadonlyObject12503<T>
  : T;

interface DeepReadonlyArray12503<T> extends ReadonlyArray<DeepReadonly12503<T>> {}

type DeepReadonlyObject12503<T> = {
  readonly [P in keyof T]: DeepReadonly12503<T[P]>;
};

type UnionToIntersection12503<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12503<T> = UnionToIntersection12503<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12503<T extends unknown[], V> = [...T, V];

type TuplifyUnion12503<T, L = LastOf12503<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12503<TuplifyUnion12503<Exclude<T, L>>, L>;

type DeepPartial12503<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12503<T[P]> }
  : T;

type Paths12503<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12503<K, Paths12503<T[K], Prev12503[D]>> : never }[keyof T]
  : never;

type Prev12503 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12503<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12503 {
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

type ConfigPaths12503 = Paths12503<NestedConfig12503>;

interface HeavyProps12503 {
  config: DeepPartial12503<NestedConfig12503>;
  path?: ConfigPaths12503;
}

const HeavyComponent12503 = memo(function HeavyComponent12503({ config }: HeavyProps12503) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12503) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12503 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12503: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12503.displayName = 'HeavyComponent12503';
export default HeavyComponent12503;
