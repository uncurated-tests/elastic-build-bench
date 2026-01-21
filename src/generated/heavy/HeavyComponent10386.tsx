'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10386<T> = T extends (infer U)[]
  ? DeepReadonlyArray10386<U>
  : T extends object
  ? DeepReadonlyObject10386<T>
  : T;

interface DeepReadonlyArray10386<T> extends ReadonlyArray<DeepReadonly10386<T>> {}

type DeepReadonlyObject10386<T> = {
  readonly [P in keyof T]: DeepReadonly10386<T[P]>;
};

type UnionToIntersection10386<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10386<T> = UnionToIntersection10386<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10386<T extends unknown[], V> = [...T, V];

type TuplifyUnion10386<T, L = LastOf10386<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10386<TuplifyUnion10386<Exclude<T, L>>, L>;

type DeepPartial10386<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10386<T[P]> }
  : T;

type Paths10386<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10386<K, Paths10386<T[K], Prev10386[D]>> : never }[keyof T]
  : never;

type Prev10386 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10386<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10386 {
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

type ConfigPaths10386 = Paths10386<NestedConfig10386>;

interface HeavyProps10386 {
  config: DeepPartial10386<NestedConfig10386>;
  path?: ConfigPaths10386;
}

const HeavyComponent10386 = memo(function HeavyComponent10386({ config }: HeavyProps10386) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10386) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10386 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10386: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10386.displayName = 'HeavyComponent10386';
export default HeavyComponent10386;
