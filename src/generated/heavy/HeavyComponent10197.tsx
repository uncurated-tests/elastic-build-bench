'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10197<T> = T extends (infer U)[]
  ? DeepReadonlyArray10197<U>
  : T extends object
  ? DeepReadonlyObject10197<T>
  : T;

interface DeepReadonlyArray10197<T> extends ReadonlyArray<DeepReadonly10197<T>> {}

type DeepReadonlyObject10197<T> = {
  readonly [P in keyof T]: DeepReadonly10197<T[P]>;
};

type UnionToIntersection10197<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10197<T> = UnionToIntersection10197<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10197<T extends unknown[], V> = [...T, V];

type TuplifyUnion10197<T, L = LastOf10197<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10197<TuplifyUnion10197<Exclude<T, L>>, L>;

type DeepPartial10197<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10197<T[P]> }
  : T;

type Paths10197<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10197<K, Paths10197<T[K], Prev10197[D]>> : never }[keyof T]
  : never;

type Prev10197 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10197<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10197 {
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

type ConfigPaths10197 = Paths10197<NestedConfig10197>;

interface HeavyProps10197 {
  config: DeepPartial10197<NestedConfig10197>;
  path?: ConfigPaths10197;
}

const HeavyComponent10197 = memo(function HeavyComponent10197({ config }: HeavyProps10197) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10197) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10197 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10197: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10197.displayName = 'HeavyComponent10197';
export default HeavyComponent10197;
