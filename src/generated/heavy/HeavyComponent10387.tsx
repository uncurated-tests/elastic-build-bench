'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10387<T> = T extends (infer U)[]
  ? DeepReadonlyArray10387<U>
  : T extends object
  ? DeepReadonlyObject10387<T>
  : T;

interface DeepReadonlyArray10387<T> extends ReadonlyArray<DeepReadonly10387<T>> {}

type DeepReadonlyObject10387<T> = {
  readonly [P in keyof T]: DeepReadonly10387<T[P]>;
};

type UnionToIntersection10387<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10387<T> = UnionToIntersection10387<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10387<T extends unknown[], V> = [...T, V];

type TuplifyUnion10387<T, L = LastOf10387<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10387<TuplifyUnion10387<Exclude<T, L>>, L>;

type DeepPartial10387<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10387<T[P]> }
  : T;

type Paths10387<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10387<K, Paths10387<T[K], Prev10387[D]>> : never }[keyof T]
  : never;

type Prev10387 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10387<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10387 {
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

type ConfigPaths10387 = Paths10387<NestedConfig10387>;

interface HeavyProps10387 {
  config: DeepPartial10387<NestedConfig10387>;
  path?: ConfigPaths10387;
}

const HeavyComponent10387 = memo(function HeavyComponent10387({ config }: HeavyProps10387) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10387) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10387 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10387: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10387.displayName = 'HeavyComponent10387';
export default HeavyComponent10387;
