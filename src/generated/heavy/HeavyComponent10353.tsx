'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10353<T> = T extends (infer U)[]
  ? DeepReadonlyArray10353<U>
  : T extends object
  ? DeepReadonlyObject10353<T>
  : T;

interface DeepReadonlyArray10353<T> extends ReadonlyArray<DeepReadonly10353<T>> {}

type DeepReadonlyObject10353<T> = {
  readonly [P in keyof T]: DeepReadonly10353<T[P]>;
};

type UnionToIntersection10353<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10353<T> = UnionToIntersection10353<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10353<T extends unknown[], V> = [...T, V];

type TuplifyUnion10353<T, L = LastOf10353<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10353<TuplifyUnion10353<Exclude<T, L>>, L>;

type DeepPartial10353<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10353<T[P]> }
  : T;

type Paths10353<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10353<K, Paths10353<T[K], Prev10353[D]>> : never }[keyof T]
  : never;

type Prev10353 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10353<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10353 {
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

type ConfigPaths10353 = Paths10353<NestedConfig10353>;

interface HeavyProps10353 {
  config: DeepPartial10353<NestedConfig10353>;
  path?: ConfigPaths10353;
}

const HeavyComponent10353 = memo(function HeavyComponent10353({ config }: HeavyProps10353) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10353) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10353 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10353: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10353.displayName = 'HeavyComponent10353';
export default HeavyComponent10353;
