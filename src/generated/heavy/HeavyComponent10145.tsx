'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10145<T> = T extends (infer U)[]
  ? DeepReadonlyArray10145<U>
  : T extends object
  ? DeepReadonlyObject10145<T>
  : T;

interface DeepReadonlyArray10145<T> extends ReadonlyArray<DeepReadonly10145<T>> {}

type DeepReadonlyObject10145<T> = {
  readonly [P in keyof T]: DeepReadonly10145<T[P]>;
};

type UnionToIntersection10145<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10145<T> = UnionToIntersection10145<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10145<T extends unknown[], V> = [...T, V];

type TuplifyUnion10145<T, L = LastOf10145<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10145<TuplifyUnion10145<Exclude<T, L>>, L>;

type DeepPartial10145<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10145<T[P]> }
  : T;

type Paths10145<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10145<K, Paths10145<T[K], Prev10145[D]>> : never }[keyof T]
  : never;

type Prev10145 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10145<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10145 {
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

type ConfigPaths10145 = Paths10145<NestedConfig10145>;

interface HeavyProps10145 {
  config: DeepPartial10145<NestedConfig10145>;
  path?: ConfigPaths10145;
}

const HeavyComponent10145 = memo(function HeavyComponent10145({ config }: HeavyProps10145) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10145) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10145 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10145: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10145.displayName = 'HeavyComponent10145';
export default HeavyComponent10145;
