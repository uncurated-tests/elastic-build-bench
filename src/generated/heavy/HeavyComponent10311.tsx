'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10311<T> = T extends (infer U)[]
  ? DeepReadonlyArray10311<U>
  : T extends object
  ? DeepReadonlyObject10311<T>
  : T;

interface DeepReadonlyArray10311<T> extends ReadonlyArray<DeepReadonly10311<T>> {}

type DeepReadonlyObject10311<T> = {
  readonly [P in keyof T]: DeepReadonly10311<T[P]>;
};

type UnionToIntersection10311<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10311<T> = UnionToIntersection10311<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10311<T extends unknown[], V> = [...T, V];

type TuplifyUnion10311<T, L = LastOf10311<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10311<TuplifyUnion10311<Exclude<T, L>>, L>;

type DeepPartial10311<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10311<T[P]> }
  : T;

type Paths10311<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10311<K, Paths10311<T[K], Prev10311[D]>> : never }[keyof T]
  : never;

type Prev10311 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10311<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10311 {
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

type ConfigPaths10311 = Paths10311<NestedConfig10311>;

interface HeavyProps10311 {
  config: DeepPartial10311<NestedConfig10311>;
  path?: ConfigPaths10311;
}

const HeavyComponent10311 = memo(function HeavyComponent10311({ config }: HeavyProps10311) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10311) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10311 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10311: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10311.displayName = 'HeavyComponent10311';
export default HeavyComponent10311;
