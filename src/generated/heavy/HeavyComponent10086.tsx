'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10086<T> = T extends (infer U)[]
  ? DeepReadonlyArray10086<U>
  : T extends object
  ? DeepReadonlyObject10086<T>
  : T;

interface DeepReadonlyArray10086<T> extends ReadonlyArray<DeepReadonly10086<T>> {}

type DeepReadonlyObject10086<T> = {
  readonly [P in keyof T]: DeepReadonly10086<T[P]>;
};

type UnionToIntersection10086<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10086<T> = UnionToIntersection10086<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10086<T extends unknown[], V> = [...T, V];

type TuplifyUnion10086<T, L = LastOf10086<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10086<TuplifyUnion10086<Exclude<T, L>>, L>;

type DeepPartial10086<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10086<T[P]> }
  : T;

type Paths10086<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10086<K, Paths10086<T[K], Prev10086[D]>> : never }[keyof T]
  : never;

type Prev10086 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10086<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10086 {
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

type ConfigPaths10086 = Paths10086<NestedConfig10086>;

interface HeavyProps10086 {
  config: DeepPartial10086<NestedConfig10086>;
  path?: ConfigPaths10086;
}

const HeavyComponent10086 = memo(function HeavyComponent10086({ config }: HeavyProps10086) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10086) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10086 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10086: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10086.displayName = 'HeavyComponent10086';
export default HeavyComponent10086;
