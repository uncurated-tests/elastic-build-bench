'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10448<T> = T extends (infer U)[]
  ? DeepReadonlyArray10448<U>
  : T extends object
  ? DeepReadonlyObject10448<T>
  : T;

interface DeepReadonlyArray10448<T> extends ReadonlyArray<DeepReadonly10448<T>> {}

type DeepReadonlyObject10448<T> = {
  readonly [P in keyof T]: DeepReadonly10448<T[P]>;
};

type UnionToIntersection10448<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10448<T> = UnionToIntersection10448<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10448<T extends unknown[], V> = [...T, V];

type TuplifyUnion10448<T, L = LastOf10448<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10448<TuplifyUnion10448<Exclude<T, L>>, L>;

type DeepPartial10448<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10448<T[P]> }
  : T;

type Paths10448<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10448<K, Paths10448<T[K], Prev10448[D]>> : never }[keyof T]
  : never;

type Prev10448 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10448<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10448 {
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

type ConfigPaths10448 = Paths10448<NestedConfig10448>;

interface HeavyProps10448 {
  config: DeepPartial10448<NestedConfig10448>;
  path?: ConfigPaths10448;
}

const HeavyComponent10448 = memo(function HeavyComponent10448({ config }: HeavyProps10448) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10448) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10448 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10448: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10448.displayName = 'HeavyComponent10448';
export default HeavyComponent10448;
