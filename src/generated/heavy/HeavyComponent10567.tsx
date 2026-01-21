'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10567<T> = T extends (infer U)[]
  ? DeepReadonlyArray10567<U>
  : T extends object
  ? DeepReadonlyObject10567<T>
  : T;

interface DeepReadonlyArray10567<T> extends ReadonlyArray<DeepReadonly10567<T>> {}

type DeepReadonlyObject10567<T> = {
  readonly [P in keyof T]: DeepReadonly10567<T[P]>;
};

type UnionToIntersection10567<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10567<T> = UnionToIntersection10567<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10567<T extends unknown[], V> = [...T, V];

type TuplifyUnion10567<T, L = LastOf10567<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10567<TuplifyUnion10567<Exclude<T, L>>, L>;

type DeepPartial10567<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10567<T[P]> }
  : T;

type Paths10567<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10567<K, Paths10567<T[K], Prev10567[D]>> : never }[keyof T]
  : never;

type Prev10567 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10567<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10567 {
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

type ConfigPaths10567 = Paths10567<NestedConfig10567>;

interface HeavyProps10567 {
  config: DeepPartial10567<NestedConfig10567>;
  path?: ConfigPaths10567;
}

const HeavyComponent10567 = memo(function HeavyComponent10567({ config }: HeavyProps10567) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10567) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10567 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10567: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10567.displayName = 'HeavyComponent10567';
export default HeavyComponent10567;
