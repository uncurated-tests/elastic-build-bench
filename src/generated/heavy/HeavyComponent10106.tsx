'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10106<T> = T extends (infer U)[]
  ? DeepReadonlyArray10106<U>
  : T extends object
  ? DeepReadonlyObject10106<T>
  : T;

interface DeepReadonlyArray10106<T> extends ReadonlyArray<DeepReadonly10106<T>> {}

type DeepReadonlyObject10106<T> = {
  readonly [P in keyof T]: DeepReadonly10106<T[P]>;
};

type UnionToIntersection10106<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10106<T> = UnionToIntersection10106<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10106<T extends unknown[], V> = [...T, V];

type TuplifyUnion10106<T, L = LastOf10106<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10106<TuplifyUnion10106<Exclude<T, L>>, L>;

type DeepPartial10106<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10106<T[P]> }
  : T;

type Paths10106<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10106<K, Paths10106<T[K], Prev10106[D]>> : never }[keyof T]
  : never;

type Prev10106 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10106<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10106 {
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

type ConfigPaths10106 = Paths10106<NestedConfig10106>;

interface HeavyProps10106 {
  config: DeepPartial10106<NestedConfig10106>;
  path?: ConfigPaths10106;
}

const HeavyComponent10106 = memo(function HeavyComponent10106({ config }: HeavyProps10106) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10106) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10106 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10106: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10106.displayName = 'HeavyComponent10106';
export default HeavyComponent10106;
