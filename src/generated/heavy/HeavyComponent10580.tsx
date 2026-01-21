'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10580<T> = T extends (infer U)[]
  ? DeepReadonlyArray10580<U>
  : T extends object
  ? DeepReadonlyObject10580<T>
  : T;

interface DeepReadonlyArray10580<T> extends ReadonlyArray<DeepReadonly10580<T>> {}

type DeepReadonlyObject10580<T> = {
  readonly [P in keyof T]: DeepReadonly10580<T[P]>;
};

type UnionToIntersection10580<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10580<T> = UnionToIntersection10580<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10580<T extends unknown[], V> = [...T, V];

type TuplifyUnion10580<T, L = LastOf10580<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10580<TuplifyUnion10580<Exclude<T, L>>, L>;

type DeepPartial10580<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10580<T[P]> }
  : T;

type Paths10580<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10580<K, Paths10580<T[K], Prev10580[D]>> : never }[keyof T]
  : never;

type Prev10580 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10580<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10580 {
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

type ConfigPaths10580 = Paths10580<NestedConfig10580>;

interface HeavyProps10580 {
  config: DeepPartial10580<NestedConfig10580>;
  path?: ConfigPaths10580;
}

const HeavyComponent10580 = memo(function HeavyComponent10580({ config }: HeavyProps10580) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10580) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10580 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10580: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10580.displayName = 'HeavyComponent10580';
export default HeavyComponent10580;
