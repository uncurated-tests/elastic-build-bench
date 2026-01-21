'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10418<T> = T extends (infer U)[]
  ? DeepReadonlyArray10418<U>
  : T extends object
  ? DeepReadonlyObject10418<T>
  : T;

interface DeepReadonlyArray10418<T> extends ReadonlyArray<DeepReadonly10418<T>> {}

type DeepReadonlyObject10418<T> = {
  readonly [P in keyof T]: DeepReadonly10418<T[P]>;
};

type UnionToIntersection10418<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10418<T> = UnionToIntersection10418<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10418<T extends unknown[], V> = [...T, V];

type TuplifyUnion10418<T, L = LastOf10418<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10418<TuplifyUnion10418<Exclude<T, L>>, L>;

type DeepPartial10418<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10418<T[P]> }
  : T;

type Paths10418<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10418<K, Paths10418<T[K], Prev10418[D]>> : never }[keyof T]
  : never;

type Prev10418 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10418<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10418 {
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

type ConfigPaths10418 = Paths10418<NestedConfig10418>;

interface HeavyProps10418 {
  config: DeepPartial10418<NestedConfig10418>;
  path?: ConfigPaths10418;
}

const HeavyComponent10418 = memo(function HeavyComponent10418({ config }: HeavyProps10418) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10418) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10418 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10418: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10418.displayName = 'HeavyComponent10418';
export default HeavyComponent10418;
