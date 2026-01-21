'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12381<T> = T extends (infer U)[]
  ? DeepReadonlyArray12381<U>
  : T extends object
  ? DeepReadonlyObject12381<T>
  : T;

interface DeepReadonlyArray12381<T> extends ReadonlyArray<DeepReadonly12381<T>> {}

type DeepReadonlyObject12381<T> = {
  readonly [P in keyof T]: DeepReadonly12381<T[P]>;
};

type UnionToIntersection12381<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12381<T> = UnionToIntersection12381<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12381<T extends unknown[], V> = [...T, V];

type TuplifyUnion12381<T, L = LastOf12381<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12381<TuplifyUnion12381<Exclude<T, L>>, L>;

type DeepPartial12381<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12381<T[P]> }
  : T;

type Paths12381<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12381<K, Paths12381<T[K], Prev12381[D]>> : never }[keyof T]
  : never;

type Prev12381 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12381<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12381 {
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

type ConfigPaths12381 = Paths12381<NestedConfig12381>;

interface HeavyProps12381 {
  config: DeepPartial12381<NestedConfig12381>;
  path?: ConfigPaths12381;
}

const HeavyComponent12381 = memo(function HeavyComponent12381({ config }: HeavyProps12381) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12381) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12381 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12381: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12381.displayName = 'HeavyComponent12381';
export default HeavyComponent12381;
