'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12430<T> = T extends (infer U)[]
  ? DeepReadonlyArray12430<U>
  : T extends object
  ? DeepReadonlyObject12430<T>
  : T;

interface DeepReadonlyArray12430<T> extends ReadonlyArray<DeepReadonly12430<T>> {}

type DeepReadonlyObject12430<T> = {
  readonly [P in keyof T]: DeepReadonly12430<T[P]>;
};

type UnionToIntersection12430<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12430<T> = UnionToIntersection12430<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12430<T extends unknown[], V> = [...T, V];

type TuplifyUnion12430<T, L = LastOf12430<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12430<TuplifyUnion12430<Exclude<T, L>>, L>;

type DeepPartial12430<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12430<T[P]> }
  : T;

type Paths12430<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12430<K, Paths12430<T[K], Prev12430[D]>> : never }[keyof T]
  : never;

type Prev12430 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12430<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12430 {
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

type ConfigPaths12430 = Paths12430<NestedConfig12430>;

interface HeavyProps12430 {
  config: DeepPartial12430<NestedConfig12430>;
  path?: ConfigPaths12430;
}

const HeavyComponent12430 = memo(function HeavyComponent12430({ config }: HeavyProps12430) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12430) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12430 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12430: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12430.displayName = 'HeavyComponent12430';
export default HeavyComponent12430;
