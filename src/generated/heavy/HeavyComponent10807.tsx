'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10807<T> = T extends (infer U)[]
  ? DeepReadonlyArray10807<U>
  : T extends object
  ? DeepReadonlyObject10807<T>
  : T;

interface DeepReadonlyArray10807<T> extends ReadonlyArray<DeepReadonly10807<T>> {}

type DeepReadonlyObject10807<T> = {
  readonly [P in keyof T]: DeepReadonly10807<T[P]>;
};

type UnionToIntersection10807<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10807<T> = UnionToIntersection10807<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10807<T extends unknown[], V> = [...T, V];

type TuplifyUnion10807<T, L = LastOf10807<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10807<TuplifyUnion10807<Exclude<T, L>>, L>;

type DeepPartial10807<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10807<T[P]> }
  : T;

type Paths10807<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10807<K, Paths10807<T[K], Prev10807[D]>> : never }[keyof T]
  : never;

type Prev10807 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10807<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10807 {
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

type ConfigPaths10807 = Paths10807<NestedConfig10807>;

interface HeavyProps10807 {
  config: DeepPartial10807<NestedConfig10807>;
  path?: ConfigPaths10807;
}

const HeavyComponent10807 = memo(function HeavyComponent10807({ config }: HeavyProps10807) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10807) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10807 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10807: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10807.displayName = 'HeavyComponent10807';
export default HeavyComponent10807;
