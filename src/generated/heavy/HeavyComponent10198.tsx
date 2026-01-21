'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10198<T> = T extends (infer U)[]
  ? DeepReadonlyArray10198<U>
  : T extends object
  ? DeepReadonlyObject10198<T>
  : T;

interface DeepReadonlyArray10198<T> extends ReadonlyArray<DeepReadonly10198<T>> {}

type DeepReadonlyObject10198<T> = {
  readonly [P in keyof T]: DeepReadonly10198<T[P]>;
};

type UnionToIntersection10198<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10198<T> = UnionToIntersection10198<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10198<T extends unknown[], V> = [...T, V];

type TuplifyUnion10198<T, L = LastOf10198<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10198<TuplifyUnion10198<Exclude<T, L>>, L>;

type DeepPartial10198<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10198<T[P]> }
  : T;

type Paths10198<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10198<K, Paths10198<T[K], Prev10198[D]>> : never }[keyof T]
  : never;

type Prev10198 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10198<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10198 {
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

type ConfigPaths10198 = Paths10198<NestedConfig10198>;

interface HeavyProps10198 {
  config: DeepPartial10198<NestedConfig10198>;
  path?: ConfigPaths10198;
}

const HeavyComponent10198 = memo(function HeavyComponent10198({ config }: HeavyProps10198) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10198) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10198 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10198: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10198.displayName = 'HeavyComponent10198';
export default HeavyComponent10198;
