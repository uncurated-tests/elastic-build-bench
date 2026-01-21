'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10171<T> = T extends (infer U)[]
  ? DeepReadonlyArray10171<U>
  : T extends object
  ? DeepReadonlyObject10171<T>
  : T;

interface DeepReadonlyArray10171<T> extends ReadonlyArray<DeepReadonly10171<T>> {}

type DeepReadonlyObject10171<T> = {
  readonly [P in keyof T]: DeepReadonly10171<T[P]>;
};

type UnionToIntersection10171<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10171<T> = UnionToIntersection10171<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10171<T extends unknown[], V> = [...T, V];

type TuplifyUnion10171<T, L = LastOf10171<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10171<TuplifyUnion10171<Exclude<T, L>>, L>;

type DeepPartial10171<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10171<T[P]> }
  : T;

type Paths10171<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10171<K, Paths10171<T[K], Prev10171[D]>> : never }[keyof T]
  : never;

type Prev10171 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10171<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10171 {
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

type ConfigPaths10171 = Paths10171<NestedConfig10171>;

interface HeavyProps10171 {
  config: DeepPartial10171<NestedConfig10171>;
  path?: ConfigPaths10171;
}

const HeavyComponent10171 = memo(function HeavyComponent10171({ config }: HeavyProps10171) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10171) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10171 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10171: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10171.displayName = 'HeavyComponent10171';
export default HeavyComponent10171;
