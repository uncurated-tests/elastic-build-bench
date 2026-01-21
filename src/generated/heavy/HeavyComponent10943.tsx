'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10943<T> = T extends (infer U)[]
  ? DeepReadonlyArray10943<U>
  : T extends object
  ? DeepReadonlyObject10943<T>
  : T;

interface DeepReadonlyArray10943<T> extends ReadonlyArray<DeepReadonly10943<T>> {}

type DeepReadonlyObject10943<T> = {
  readonly [P in keyof T]: DeepReadonly10943<T[P]>;
};

type UnionToIntersection10943<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10943<T> = UnionToIntersection10943<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10943<T extends unknown[], V> = [...T, V];

type TuplifyUnion10943<T, L = LastOf10943<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10943<TuplifyUnion10943<Exclude<T, L>>, L>;

type DeepPartial10943<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10943<T[P]> }
  : T;

type Paths10943<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10943<K, Paths10943<T[K], Prev10943[D]>> : never }[keyof T]
  : never;

type Prev10943 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10943<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10943 {
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

type ConfigPaths10943 = Paths10943<NestedConfig10943>;

interface HeavyProps10943 {
  config: DeepPartial10943<NestedConfig10943>;
  path?: ConfigPaths10943;
}

const HeavyComponent10943 = memo(function HeavyComponent10943({ config }: HeavyProps10943) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10943) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10943 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10943: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10943.displayName = 'HeavyComponent10943';
export default HeavyComponent10943;
