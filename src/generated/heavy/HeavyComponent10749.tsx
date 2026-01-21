'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10749<T> = T extends (infer U)[]
  ? DeepReadonlyArray10749<U>
  : T extends object
  ? DeepReadonlyObject10749<T>
  : T;

interface DeepReadonlyArray10749<T> extends ReadonlyArray<DeepReadonly10749<T>> {}

type DeepReadonlyObject10749<T> = {
  readonly [P in keyof T]: DeepReadonly10749<T[P]>;
};

type UnionToIntersection10749<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10749<T> = UnionToIntersection10749<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10749<T extends unknown[], V> = [...T, V];

type TuplifyUnion10749<T, L = LastOf10749<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10749<TuplifyUnion10749<Exclude<T, L>>, L>;

type DeepPartial10749<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10749<T[P]> }
  : T;

type Paths10749<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10749<K, Paths10749<T[K], Prev10749[D]>> : never }[keyof T]
  : never;

type Prev10749 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10749<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10749 {
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

type ConfigPaths10749 = Paths10749<NestedConfig10749>;

interface HeavyProps10749 {
  config: DeepPartial10749<NestedConfig10749>;
  path?: ConfigPaths10749;
}

const HeavyComponent10749 = memo(function HeavyComponent10749({ config }: HeavyProps10749) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10749) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10749 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10749: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10749.displayName = 'HeavyComponent10749';
export default HeavyComponent10749;
