'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10173<T> = T extends (infer U)[]
  ? DeepReadonlyArray10173<U>
  : T extends object
  ? DeepReadonlyObject10173<T>
  : T;

interface DeepReadonlyArray10173<T> extends ReadonlyArray<DeepReadonly10173<T>> {}

type DeepReadonlyObject10173<T> = {
  readonly [P in keyof T]: DeepReadonly10173<T[P]>;
};

type UnionToIntersection10173<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10173<T> = UnionToIntersection10173<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10173<T extends unknown[], V> = [...T, V];

type TuplifyUnion10173<T, L = LastOf10173<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10173<TuplifyUnion10173<Exclude<T, L>>, L>;

type DeepPartial10173<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10173<T[P]> }
  : T;

type Paths10173<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10173<K, Paths10173<T[K], Prev10173[D]>> : never }[keyof T]
  : never;

type Prev10173 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10173<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10173 {
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

type ConfigPaths10173 = Paths10173<NestedConfig10173>;

interface HeavyProps10173 {
  config: DeepPartial10173<NestedConfig10173>;
  path?: ConfigPaths10173;
}

const HeavyComponent10173 = memo(function HeavyComponent10173({ config }: HeavyProps10173) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10173) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10173 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10173: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10173.displayName = 'HeavyComponent10173';
export default HeavyComponent10173;
