'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10221<T> = T extends (infer U)[]
  ? DeepReadonlyArray10221<U>
  : T extends object
  ? DeepReadonlyObject10221<T>
  : T;

interface DeepReadonlyArray10221<T> extends ReadonlyArray<DeepReadonly10221<T>> {}

type DeepReadonlyObject10221<T> = {
  readonly [P in keyof T]: DeepReadonly10221<T[P]>;
};

type UnionToIntersection10221<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10221<T> = UnionToIntersection10221<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10221<T extends unknown[], V> = [...T, V];

type TuplifyUnion10221<T, L = LastOf10221<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10221<TuplifyUnion10221<Exclude<T, L>>, L>;

type DeepPartial10221<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10221<T[P]> }
  : T;

type Paths10221<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10221<K, Paths10221<T[K], Prev10221[D]>> : never }[keyof T]
  : never;

type Prev10221 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10221<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10221 {
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

type ConfigPaths10221 = Paths10221<NestedConfig10221>;

interface HeavyProps10221 {
  config: DeepPartial10221<NestedConfig10221>;
  path?: ConfigPaths10221;
}

const HeavyComponent10221 = memo(function HeavyComponent10221({ config }: HeavyProps10221) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10221) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10221 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10221: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10221.displayName = 'HeavyComponent10221';
export default HeavyComponent10221;
