'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10095<T> = T extends (infer U)[]
  ? DeepReadonlyArray10095<U>
  : T extends object
  ? DeepReadonlyObject10095<T>
  : T;

interface DeepReadonlyArray10095<T> extends ReadonlyArray<DeepReadonly10095<T>> {}

type DeepReadonlyObject10095<T> = {
  readonly [P in keyof T]: DeepReadonly10095<T[P]>;
};

type UnionToIntersection10095<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10095<T> = UnionToIntersection10095<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10095<T extends unknown[], V> = [...T, V];

type TuplifyUnion10095<T, L = LastOf10095<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10095<TuplifyUnion10095<Exclude<T, L>>, L>;

type DeepPartial10095<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10095<T[P]> }
  : T;

type Paths10095<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10095<K, Paths10095<T[K], Prev10095[D]>> : never }[keyof T]
  : never;

type Prev10095 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10095<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10095 {
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

type ConfigPaths10095 = Paths10095<NestedConfig10095>;

interface HeavyProps10095 {
  config: DeepPartial10095<NestedConfig10095>;
  path?: ConfigPaths10095;
}

const HeavyComponent10095 = memo(function HeavyComponent10095({ config }: HeavyProps10095) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10095) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10095 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10095: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10095.displayName = 'HeavyComponent10095';
export default HeavyComponent10095;
