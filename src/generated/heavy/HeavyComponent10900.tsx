'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10900<T> = T extends (infer U)[]
  ? DeepReadonlyArray10900<U>
  : T extends object
  ? DeepReadonlyObject10900<T>
  : T;

interface DeepReadonlyArray10900<T> extends ReadonlyArray<DeepReadonly10900<T>> {}

type DeepReadonlyObject10900<T> = {
  readonly [P in keyof T]: DeepReadonly10900<T[P]>;
};

type UnionToIntersection10900<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10900<T> = UnionToIntersection10900<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10900<T extends unknown[], V> = [...T, V];

type TuplifyUnion10900<T, L = LastOf10900<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10900<TuplifyUnion10900<Exclude<T, L>>, L>;

type DeepPartial10900<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10900<T[P]> }
  : T;

type Paths10900<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10900<K, Paths10900<T[K], Prev10900[D]>> : never }[keyof T]
  : never;

type Prev10900 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10900<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10900 {
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

type ConfigPaths10900 = Paths10900<NestedConfig10900>;

interface HeavyProps10900 {
  config: DeepPartial10900<NestedConfig10900>;
  path?: ConfigPaths10900;
}

const HeavyComponent10900 = memo(function HeavyComponent10900({ config }: HeavyProps10900) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10900) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10900 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10900: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10900.displayName = 'HeavyComponent10900';
export default HeavyComponent10900;
