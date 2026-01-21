'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10794<T> = T extends (infer U)[]
  ? DeepReadonlyArray10794<U>
  : T extends object
  ? DeepReadonlyObject10794<T>
  : T;

interface DeepReadonlyArray10794<T> extends ReadonlyArray<DeepReadonly10794<T>> {}

type DeepReadonlyObject10794<T> = {
  readonly [P in keyof T]: DeepReadonly10794<T[P]>;
};

type UnionToIntersection10794<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10794<T> = UnionToIntersection10794<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10794<T extends unknown[], V> = [...T, V];

type TuplifyUnion10794<T, L = LastOf10794<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10794<TuplifyUnion10794<Exclude<T, L>>, L>;

type DeepPartial10794<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10794<T[P]> }
  : T;

type Paths10794<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10794<K, Paths10794<T[K], Prev10794[D]>> : never }[keyof T]
  : never;

type Prev10794 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10794<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10794 {
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

type ConfigPaths10794 = Paths10794<NestedConfig10794>;

interface HeavyProps10794 {
  config: DeepPartial10794<NestedConfig10794>;
  path?: ConfigPaths10794;
}

const HeavyComponent10794 = memo(function HeavyComponent10794({ config }: HeavyProps10794) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10794) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10794 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10794: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10794.displayName = 'HeavyComponent10794';
export default HeavyComponent10794;
