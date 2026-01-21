'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10146<T> = T extends (infer U)[]
  ? DeepReadonlyArray10146<U>
  : T extends object
  ? DeepReadonlyObject10146<T>
  : T;

interface DeepReadonlyArray10146<T> extends ReadonlyArray<DeepReadonly10146<T>> {}

type DeepReadonlyObject10146<T> = {
  readonly [P in keyof T]: DeepReadonly10146<T[P]>;
};

type UnionToIntersection10146<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10146<T> = UnionToIntersection10146<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10146<T extends unknown[], V> = [...T, V];

type TuplifyUnion10146<T, L = LastOf10146<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10146<TuplifyUnion10146<Exclude<T, L>>, L>;

type DeepPartial10146<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10146<T[P]> }
  : T;

type Paths10146<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10146<K, Paths10146<T[K], Prev10146[D]>> : never }[keyof T]
  : never;

type Prev10146 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10146<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10146 {
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

type ConfigPaths10146 = Paths10146<NestedConfig10146>;

interface HeavyProps10146 {
  config: DeepPartial10146<NestedConfig10146>;
  path?: ConfigPaths10146;
}

const HeavyComponent10146 = memo(function HeavyComponent10146({ config }: HeavyProps10146) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10146) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10146 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10146: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10146.displayName = 'HeavyComponent10146';
export default HeavyComponent10146;
