'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10422<T> = T extends (infer U)[]
  ? DeepReadonlyArray10422<U>
  : T extends object
  ? DeepReadonlyObject10422<T>
  : T;

interface DeepReadonlyArray10422<T> extends ReadonlyArray<DeepReadonly10422<T>> {}

type DeepReadonlyObject10422<T> = {
  readonly [P in keyof T]: DeepReadonly10422<T[P]>;
};

type UnionToIntersection10422<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10422<T> = UnionToIntersection10422<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10422<T extends unknown[], V> = [...T, V];

type TuplifyUnion10422<T, L = LastOf10422<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10422<TuplifyUnion10422<Exclude<T, L>>, L>;

type DeepPartial10422<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10422<T[P]> }
  : T;

type Paths10422<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10422<K, Paths10422<T[K], Prev10422[D]>> : never }[keyof T]
  : never;

type Prev10422 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10422<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10422 {
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

type ConfigPaths10422 = Paths10422<NestedConfig10422>;

interface HeavyProps10422 {
  config: DeepPartial10422<NestedConfig10422>;
  path?: ConfigPaths10422;
}

const HeavyComponent10422 = memo(function HeavyComponent10422({ config }: HeavyProps10422) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10422) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10422 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10422: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10422.displayName = 'HeavyComponent10422';
export default HeavyComponent10422;
