'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10204<T> = T extends (infer U)[]
  ? DeepReadonlyArray10204<U>
  : T extends object
  ? DeepReadonlyObject10204<T>
  : T;

interface DeepReadonlyArray10204<T> extends ReadonlyArray<DeepReadonly10204<T>> {}

type DeepReadonlyObject10204<T> = {
  readonly [P in keyof T]: DeepReadonly10204<T[P]>;
};

type UnionToIntersection10204<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10204<T> = UnionToIntersection10204<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10204<T extends unknown[], V> = [...T, V];

type TuplifyUnion10204<T, L = LastOf10204<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10204<TuplifyUnion10204<Exclude<T, L>>, L>;

type DeepPartial10204<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10204<T[P]> }
  : T;

type Paths10204<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10204<K, Paths10204<T[K], Prev10204[D]>> : never }[keyof T]
  : never;

type Prev10204 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10204<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10204 {
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

type ConfigPaths10204 = Paths10204<NestedConfig10204>;

interface HeavyProps10204 {
  config: DeepPartial10204<NestedConfig10204>;
  path?: ConfigPaths10204;
}

const HeavyComponent10204 = memo(function HeavyComponent10204({ config }: HeavyProps10204) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10204) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10204 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10204: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10204.displayName = 'HeavyComponent10204';
export default HeavyComponent10204;
