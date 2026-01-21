'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly915<T> = T extends (infer U)[]
  ? DeepReadonlyArray915<U>
  : T extends object
  ? DeepReadonlyObject915<T>
  : T;

interface DeepReadonlyArray915<T> extends ReadonlyArray<DeepReadonly915<T>> {}

type DeepReadonlyObject915<T> = {
  readonly [P in keyof T]: DeepReadonly915<T[P]>;
};

type UnionToIntersection915<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf915<T> = UnionToIntersection915<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push915<T extends unknown[], V> = [...T, V];

type TuplifyUnion915<T, L = LastOf915<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push915<TuplifyUnion915<Exclude<T, L>>, L>;

type DeepPartial915<T> = T extends object
  ? { [P in keyof T]?: DeepPartial915<T[P]> }
  : T;

type Paths915<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join915<K, Paths915<T[K], Prev915[D]>> : never }[keyof T]
  : never;

type Prev915 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join915<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig915 {
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

type ConfigPaths915 = Paths915<NestedConfig915>;

interface HeavyProps915 {
  config: DeepPartial915<NestedConfig915>;
  path?: ConfigPaths915;
}

const HeavyComponent915 = memo(function HeavyComponent915({ config }: HeavyProps915) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 915) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-915 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H915: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent915.displayName = 'HeavyComponent915';
export default HeavyComponent915;
