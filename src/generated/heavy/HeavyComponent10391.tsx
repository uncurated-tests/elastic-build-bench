'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10391<T> = T extends (infer U)[]
  ? DeepReadonlyArray10391<U>
  : T extends object
  ? DeepReadonlyObject10391<T>
  : T;

interface DeepReadonlyArray10391<T> extends ReadonlyArray<DeepReadonly10391<T>> {}

type DeepReadonlyObject10391<T> = {
  readonly [P in keyof T]: DeepReadonly10391<T[P]>;
};

type UnionToIntersection10391<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10391<T> = UnionToIntersection10391<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10391<T extends unknown[], V> = [...T, V];

type TuplifyUnion10391<T, L = LastOf10391<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10391<TuplifyUnion10391<Exclude<T, L>>, L>;

type DeepPartial10391<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10391<T[P]> }
  : T;

type Paths10391<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10391<K, Paths10391<T[K], Prev10391[D]>> : never }[keyof T]
  : never;

type Prev10391 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10391<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10391 {
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

type ConfigPaths10391 = Paths10391<NestedConfig10391>;

interface HeavyProps10391 {
  config: DeepPartial10391<NestedConfig10391>;
  path?: ConfigPaths10391;
}

const HeavyComponent10391 = memo(function HeavyComponent10391({ config }: HeavyProps10391) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10391) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10391 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10391: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10391.displayName = 'HeavyComponent10391';
export default HeavyComponent10391;
