'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10796<T> = T extends (infer U)[]
  ? DeepReadonlyArray10796<U>
  : T extends object
  ? DeepReadonlyObject10796<T>
  : T;

interface DeepReadonlyArray10796<T> extends ReadonlyArray<DeepReadonly10796<T>> {}

type DeepReadonlyObject10796<T> = {
  readonly [P in keyof T]: DeepReadonly10796<T[P]>;
};

type UnionToIntersection10796<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10796<T> = UnionToIntersection10796<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10796<T extends unknown[], V> = [...T, V];

type TuplifyUnion10796<T, L = LastOf10796<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10796<TuplifyUnion10796<Exclude<T, L>>, L>;

type DeepPartial10796<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10796<T[P]> }
  : T;

type Paths10796<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10796<K, Paths10796<T[K], Prev10796[D]>> : never }[keyof T]
  : never;

type Prev10796 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10796<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10796 {
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

type ConfigPaths10796 = Paths10796<NestedConfig10796>;

interface HeavyProps10796 {
  config: DeepPartial10796<NestedConfig10796>;
  path?: ConfigPaths10796;
}

const HeavyComponent10796 = memo(function HeavyComponent10796({ config }: HeavyProps10796) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10796) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10796 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10796: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10796.displayName = 'HeavyComponent10796';
export default HeavyComponent10796;
