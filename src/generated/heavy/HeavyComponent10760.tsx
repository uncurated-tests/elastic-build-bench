'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10760<T> = T extends (infer U)[]
  ? DeepReadonlyArray10760<U>
  : T extends object
  ? DeepReadonlyObject10760<T>
  : T;

interface DeepReadonlyArray10760<T> extends ReadonlyArray<DeepReadonly10760<T>> {}

type DeepReadonlyObject10760<T> = {
  readonly [P in keyof T]: DeepReadonly10760<T[P]>;
};

type UnionToIntersection10760<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10760<T> = UnionToIntersection10760<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10760<T extends unknown[], V> = [...T, V];

type TuplifyUnion10760<T, L = LastOf10760<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10760<TuplifyUnion10760<Exclude<T, L>>, L>;

type DeepPartial10760<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10760<T[P]> }
  : T;

type Paths10760<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10760<K, Paths10760<T[K], Prev10760[D]>> : never }[keyof T]
  : never;

type Prev10760 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10760<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10760 {
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

type ConfigPaths10760 = Paths10760<NestedConfig10760>;

interface HeavyProps10760 {
  config: DeepPartial10760<NestedConfig10760>;
  path?: ConfigPaths10760;
}

const HeavyComponent10760 = memo(function HeavyComponent10760({ config }: HeavyProps10760) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10760) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10760 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10760: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10760.displayName = 'HeavyComponent10760';
export default HeavyComponent10760;
