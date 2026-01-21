'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10046<T> = T extends (infer U)[]
  ? DeepReadonlyArray10046<U>
  : T extends object
  ? DeepReadonlyObject10046<T>
  : T;

interface DeepReadonlyArray10046<T> extends ReadonlyArray<DeepReadonly10046<T>> {}

type DeepReadonlyObject10046<T> = {
  readonly [P in keyof T]: DeepReadonly10046<T[P]>;
};

type UnionToIntersection10046<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10046<T> = UnionToIntersection10046<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10046<T extends unknown[], V> = [...T, V];

type TuplifyUnion10046<T, L = LastOf10046<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10046<TuplifyUnion10046<Exclude<T, L>>, L>;

type DeepPartial10046<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10046<T[P]> }
  : T;

type Paths10046<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10046<K, Paths10046<T[K], Prev10046[D]>> : never }[keyof T]
  : never;

type Prev10046 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10046<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10046 {
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

type ConfigPaths10046 = Paths10046<NestedConfig10046>;

interface HeavyProps10046 {
  config: DeepPartial10046<NestedConfig10046>;
  path?: ConfigPaths10046;
}

const HeavyComponent10046 = memo(function HeavyComponent10046({ config }: HeavyProps10046) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10046) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10046 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10046: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10046.displayName = 'HeavyComponent10046';
export default HeavyComponent10046;
