'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10430<T> = T extends (infer U)[]
  ? DeepReadonlyArray10430<U>
  : T extends object
  ? DeepReadonlyObject10430<T>
  : T;

interface DeepReadonlyArray10430<T> extends ReadonlyArray<DeepReadonly10430<T>> {}

type DeepReadonlyObject10430<T> = {
  readonly [P in keyof T]: DeepReadonly10430<T[P]>;
};

type UnionToIntersection10430<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10430<T> = UnionToIntersection10430<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10430<T extends unknown[], V> = [...T, V];

type TuplifyUnion10430<T, L = LastOf10430<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10430<TuplifyUnion10430<Exclude<T, L>>, L>;

type DeepPartial10430<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10430<T[P]> }
  : T;

type Paths10430<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10430<K, Paths10430<T[K], Prev10430[D]>> : never }[keyof T]
  : never;

type Prev10430 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10430<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10430 {
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

type ConfigPaths10430 = Paths10430<NestedConfig10430>;

interface HeavyProps10430 {
  config: DeepPartial10430<NestedConfig10430>;
  path?: ConfigPaths10430;
}

const HeavyComponent10430 = memo(function HeavyComponent10430({ config }: HeavyProps10430) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10430) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10430 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10430: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10430.displayName = 'HeavyComponent10430';
export default HeavyComponent10430;
