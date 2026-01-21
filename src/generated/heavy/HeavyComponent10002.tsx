'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10002<T> = T extends (infer U)[]
  ? DeepReadonlyArray10002<U>
  : T extends object
  ? DeepReadonlyObject10002<T>
  : T;

interface DeepReadonlyArray10002<T> extends ReadonlyArray<DeepReadonly10002<T>> {}

type DeepReadonlyObject10002<T> = {
  readonly [P in keyof T]: DeepReadonly10002<T[P]>;
};

type UnionToIntersection10002<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10002<T> = UnionToIntersection10002<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10002<T extends unknown[], V> = [...T, V];

type TuplifyUnion10002<T, L = LastOf10002<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10002<TuplifyUnion10002<Exclude<T, L>>, L>;

type DeepPartial10002<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10002<T[P]> }
  : T;

type Paths10002<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10002<K, Paths10002<T[K], Prev10002[D]>> : never }[keyof T]
  : never;

type Prev10002 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10002<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10002 {
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

type ConfigPaths10002 = Paths10002<NestedConfig10002>;

interface HeavyProps10002 {
  config: DeepPartial10002<NestedConfig10002>;
  path?: ConfigPaths10002;
}

const HeavyComponent10002 = memo(function HeavyComponent10002({ config }: HeavyProps10002) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10002) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10002 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10002: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10002.displayName = 'HeavyComponent10002';
export default HeavyComponent10002;
