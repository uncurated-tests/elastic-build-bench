'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12468<T> = T extends (infer U)[]
  ? DeepReadonlyArray12468<U>
  : T extends object
  ? DeepReadonlyObject12468<T>
  : T;

interface DeepReadonlyArray12468<T> extends ReadonlyArray<DeepReadonly12468<T>> {}

type DeepReadonlyObject12468<T> = {
  readonly [P in keyof T]: DeepReadonly12468<T[P]>;
};

type UnionToIntersection12468<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12468<T> = UnionToIntersection12468<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12468<T extends unknown[], V> = [...T, V];

type TuplifyUnion12468<T, L = LastOf12468<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12468<TuplifyUnion12468<Exclude<T, L>>, L>;

type DeepPartial12468<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12468<T[P]> }
  : T;

type Paths12468<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12468<K, Paths12468<T[K], Prev12468[D]>> : never }[keyof T]
  : never;

type Prev12468 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12468<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12468 {
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

type ConfigPaths12468 = Paths12468<NestedConfig12468>;

interface HeavyProps12468 {
  config: DeepPartial12468<NestedConfig12468>;
  path?: ConfigPaths12468;
}

const HeavyComponent12468 = memo(function HeavyComponent12468({ config }: HeavyProps12468) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12468) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12468 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12468: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12468.displayName = 'HeavyComponent12468';
export default HeavyComponent12468;
