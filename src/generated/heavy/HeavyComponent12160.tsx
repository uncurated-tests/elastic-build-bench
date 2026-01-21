'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12160<T> = T extends (infer U)[]
  ? DeepReadonlyArray12160<U>
  : T extends object
  ? DeepReadonlyObject12160<T>
  : T;

interface DeepReadonlyArray12160<T> extends ReadonlyArray<DeepReadonly12160<T>> {}

type DeepReadonlyObject12160<T> = {
  readonly [P in keyof T]: DeepReadonly12160<T[P]>;
};

type UnionToIntersection12160<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12160<T> = UnionToIntersection12160<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12160<T extends unknown[], V> = [...T, V];

type TuplifyUnion12160<T, L = LastOf12160<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12160<TuplifyUnion12160<Exclude<T, L>>, L>;

type DeepPartial12160<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12160<T[P]> }
  : T;

type Paths12160<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12160<K, Paths12160<T[K], Prev12160[D]>> : never }[keyof T]
  : never;

type Prev12160 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12160<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12160 {
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

type ConfigPaths12160 = Paths12160<NestedConfig12160>;

interface HeavyProps12160 {
  config: DeepPartial12160<NestedConfig12160>;
  path?: ConfigPaths12160;
}

const HeavyComponent12160 = memo(function HeavyComponent12160({ config }: HeavyProps12160) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12160) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12160 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12160: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12160.displayName = 'HeavyComponent12160';
export default HeavyComponent12160;
