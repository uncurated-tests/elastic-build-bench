'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12601<T> = T extends (infer U)[]
  ? DeepReadonlyArray12601<U>
  : T extends object
  ? DeepReadonlyObject12601<T>
  : T;

interface DeepReadonlyArray12601<T> extends ReadonlyArray<DeepReadonly12601<T>> {}

type DeepReadonlyObject12601<T> = {
  readonly [P in keyof T]: DeepReadonly12601<T[P]>;
};

type UnionToIntersection12601<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12601<T> = UnionToIntersection12601<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12601<T extends unknown[], V> = [...T, V];

type TuplifyUnion12601<T, L = LastOf12601<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12601<TuplifyUnion12601<Exclude<T, L>>, L>;

type DeepPartial12601<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12601<T[P]> }
  : T;

type Paths12601<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12601<K, Paths12601<T[K], Prev12601[D]>> : never }[keyof T]
  : never;

type Prev12601 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12601<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12601 {
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

type ConfigPaths12601 = Paths12601<NestedConfig12601>;

interface HeavyProps12601 {
  config: DeepPartial12601<NestedConfig12601>;
  path?: ConfigPaths12601;
}

const HeavyComponent12601 = memo(function HeavyComponent12601({ config }: HeavyProps12601) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12601) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12601 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12601: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12601.displayName = 'HeavyComponent12601';
export default HeavyComponent12601;
