'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10279<T> = T extends (infer U)[]
  ? DeepReadonlyArray10279<U>
  : T extends object
  ? DeepReadonlyObject10279<T>
  : T;

interface DeepReadonlyArray10279<T> extends ReadonlyArray<DeepReadonly10279<T>> {}

type DeepReadonlyObject10279<T> = {
  readonly [P in keyof T]: DeepReadonly10279<T[P]>;
};

type UnionToIntersection10279<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10279<T> = UnionToIntersection10279<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10279<T extends unknown[], V> = [...T, V];

type TuplifyUnion10279<T, L = LastOf10279<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10279<TuplifyUnion10279<Exclude<T, L>>, L>;

type DeepPartial10279<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10279<T[P]> }
  : T;

type Paths10279<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10279<K, Paths10279<T[K], Prev10279[D]>> : never }[keyof T]
  : never;

type Prev10279 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10279<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10279 {
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

type ConfigPaths10279 = Paths10279<NestedConfig10279>;

interface HeavyProps10279 {
  config: DeepPartial10279<NestedConfig10279>;
  path?: ConfigPaths10279;
}

const HeavyComponent10279 = memo(function HeavyComponent10279({ config }: HeavyProps10279) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10279) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10279 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10279: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10279.displayName = 'HeavyComponent10279';
export default HeavyComponent10279;
