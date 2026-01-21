'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10025<T> = T extends (infer U)[]
  ? DeepReadonlyArray10025<U>
  : T extends object
  ? DeepReadonlyObject10025<T>
  : T;

interface DeepReadonlyArray10025<T> extends ReadonlyArray<DeepReadonly10025<T>> {}

type DeepReadonlyObject10025<T> = {
  readonly [P in keyof T]: DeepReadonly10025<T[P]>;
};

type UnionToIntersection10025<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10025<T> = UnionToIntersection10025<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10025<T extends unknown[], V> = [...T, V];

type TuplifyUnion10025<T, L = LastOf10025<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10025<TuplifyUnion10025<Exclude<T, L>>, L>;

type DeepPartial10025<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10025<T[P]> }
  : T;

type Paths10025<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10025<K, Paths10025<T[K], Prev10025[D]>> : never }[keyof T]
  : never;

type Prev10025 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10025<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10025 {
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

type ConfigPaths10025 = Paths10025<NestedConfig10025>;

interface HeavyProps10025 {
  config: DeepPartial10025<NestedConfig10025>;
  path?: ConfigPaths10025;
}

const HeavyComponent10025 = memo(function HeavyComponent10025({ config }: HeavyProps10025) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10025) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10025 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10025: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10025.displayName = 'HeavyComponent10025';
export default HeavyComponent10025;
