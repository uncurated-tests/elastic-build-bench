'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10893<T> = T extends (infer U)[]
  ? DeepReadonlyArray10893<U>
  : T extends object
  ? DeepReadonlyObject10893<T>
  : T;

interface DeepReadonlyArray10893<T> extends ReadonlyArray<DeepReadonly10893<T>> {}

type DeepReadonlyObject10893<T> = {
  readonly [P in keyof T]: DeepReadonly10893<T[P]>;
};

type UnionToIntersection10893<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10893<T> = UnionToIntersection10893<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10893<T extends unknown[], V> = [...T, V];

type TuplifyUnion10893<T, L = LastOf10893<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10893<TuplifyUnion10893<Exclude<T, L>>, L>;

type DeepPartial10893<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10893<T[P]> }
  : T;

type Paths10893<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10893<K, Paths10893<T[K], Prev10893[D]>> : never }[keyof T]
  : never;

type Prev10893 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10893<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10893 {
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

type ConfigPaths10893 = Paths10893<NestedConfig10893>;

interface HeavyProps10893 {
  config: DeepPartial10893<NestedConfig10893>;
  path?: ConfigPaths10893;
}

const HeavyComponent10893 = memo(function HeavyComponent10893({ config }: HeavyProps10893) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10893) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10893 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10893: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10893.displayName = 'HeavyComponent10893';
export default HeavyComponent10893;
