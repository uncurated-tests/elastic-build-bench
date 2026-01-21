'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10421<T> = T extends (infer U)[]
  ? DeepReadonlyArray10421<U>
  : T extends object
  ? DeepReadonlyObject10421<T>
  : T;

interface DeepReadonlyArray10421<T> extends ReadonlyArray<DeepReadonly10421<T>> {}

type DeepReadonlyObject10421<T> = {
  readonly [P in keyof T]: DeepReadonly10421<T[P]>;
};

type UnionToIntersection10421<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10421<T> = UnionToIntersection10421<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10421<T extends unknown[], V> = [...T, V];

type TuplifyUnion10421<T, L = LastOf10421<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10421<TuplifyUnion10421<Exclude<T, L>>, L>;

type DeepPartial10421<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10421<T[P]> }
  : T;

type Paths10421<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10421<K, Paths10421<T[K], Prev10421[D]>> : never }[keyof T]
  : never;

type Prev10421 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10421<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10421 {
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

type ConfigPaths10421 = Paths10421<NestedConfig10421>;

interface HeavyProps10421 {
  config: DeepPartial10421<NestedConfig10421>;
  path?: ConfigPaths10421;
}

const HeavyComponent10421 = memo(function HeavyComponent10421({ config }: HeavyProps10421) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10421) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10421 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10421: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10421.displayName = 'HeavyComponent10421';
export default HeavyComponent10421;
