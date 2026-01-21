'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10249<T> = T extends (infer U)[]
  ? DeepReadonlyArray10249<U>
  : T extends object
  ? DeepReadonlyObject10249<T>
  : T;

interface DeepReadonlyArray10249<T> extends ReadonlyArray<DeepReadonly10249<T>> {}

type DeepReadonlyObject10249<T> = {
  readonly [P in keyof T]: DeepReadonly10249<T[P]>;
};

type UnionToIntersection10249<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10249<T> = UnionToIntersection10249<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10249<T extends unknown[], V> = [...T, V];

type TuplifyUnion10249<T, L = LastOf10249<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10249<TuplifyUnion10249<Exclude<T, L>>, L>;

type DeepPartial10249<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10249<T[P]> }
  : T;

type Paths10249<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10249<K, Paths10249<T[K], Prev10249[D]>> : never }[keyof T]
  : never;

type Prev10249 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10249<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10249 {
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

type ConfigPaths10249 = Paths10249<NestedConfig10249>;

interface HeavyProps10249 {
  config: DeepPartial10249<NestedConfig10249>;
  path?: ConfigPaths10249;
}

const HeavyComponent10249 = memo(function HeavyComponent10249({ config }: HeavyProps10249) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10249) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10249 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10249: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10249.displayName = 'HeavyComponent10249';
export default HeavyComponent10249;
