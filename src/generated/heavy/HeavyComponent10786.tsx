'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10786<T> = T extends (infer U)[]
  ? DeepReadonlyArray10786<U>
  : T extends object
  ? DeepReadonlyObject10786<T>
  : T;

interface DeepReadonlyArray10786<T> extends ReadonlyArray<DeepReadonly10786<T>> {}

type DeepReadonlyObject10786<T> = {
  readonly [P in keyof T]: DeepReadonly10786<T[P]>;
};

type UnionToIntersection10786<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10786<T> = UnionToIntersection10786<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10786<T extends unknown[], V> = [...T, V];

type TuplifyUnion10786<T, L = LastOf10786<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10786<TuplifyUnion10786<Exclude<T, L>>, L>;

type DeepPartial10786<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10786<T[P]> }
  : T;

type Paths10786<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10786<K, Paths10786<T[K], Prev10786[D]>> : never }[keyof T]
  : never;

type Prev10786 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10786<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10786 {
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

type ConfigPaths10786 = Paths10786<NestedConfig10786>;

interface HeavyProps10786 {
  config: DeepPartial10786<NestedConfig10786>;
  path?: ConfigPaths10786;
}

const HeavyComponent10786 = memo(function HeavyComponent10786({ config }: HeavyProps10786) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10786) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10786 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10786: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10786.displayName = 'HeavyComponent10786';
export default HeavyComponent10786;
