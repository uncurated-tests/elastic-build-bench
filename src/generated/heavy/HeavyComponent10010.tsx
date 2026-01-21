'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10010<T> = T extends (infer U)[]
  ? DeepReadonlyArray10010<U>
  : T extends object
  ? DeepReadonlyObject10010<T>
  : T;

interface DeepReadonlyArray10010<T> extends ReadonlyArray<DeepReadonly10010<T>> {}

type DeepReadonlyObject10010<T> = {
  readonly [P in keyof T]: DeepReadonly10010<T[P]>;
};

type UnionToIntersection10010<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10010<T> = UnionToIntersection10010<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10010<T extends unknown[], V> = [...T, V];

type TuplifyUnion10010<T, L = LastOf10010<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10010<TuplifyUnion10010<Exclude<T, L>>, L>;

type DeepPartial10010<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10010<T[P]> }
  : T;

type Paths10010<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10010<K, Paths10010<T[K], Prev10010[D]>> : never }[keyof T]
  : never;

type Prev10010 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10010<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10010 {
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

type ConfigPaths10010 = Paths10010<NestedConfig10010>;

interface HeavyProps10010 {
  config: DeepPartial10010<NestedConfig10010>;
  path?: ConfigPaths10010;
}

const HeavyComponent10010 = memo(function HeavyComponent10010({ config }: HeavyProps10010) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10010) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10010 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10010: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10010.displayName = 'HeavyComponent10010';
export default HeavyComponent10010;
