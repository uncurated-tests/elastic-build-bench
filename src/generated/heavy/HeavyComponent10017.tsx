'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10017<T> = T extends (infer U)[]
  ? DeepReadonlyArray10017<U>
  : T extends object
  ? DeepReadonlyObject10017<T>
  : T;

interface DeepReadonlyArray10017<T> extends ReadonlyArray<DeepReadonly10017<T>> {}

type DeepReadonlyObject10017<T> = {
  readonly [P in keyof T]: DeepReadonly10017<T[P]>;
};

type UnionToIntersection10017<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10017<T> = UnionToIntersection10017<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10017<T extends unknown[], V> = [...T, V];

type TuplifyUnion10017<T, L = LastOf10017<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10017<TuplifyUnion10017<Exclude<T, L>>, L>;

type DeepPartial10017<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10017<T[P]> }
  : T;

type Paths10017<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10017<K, Paths10017<T[K], Prev10017[D]>> : never }[keyof T]
  : never;

type Prev10017 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10017<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10017 {
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

type ConfigPaths10017 = Paths10017<NestedConfig10017>;

interface HeavyProps10017 {
  config: DeepPartial10017<NestedConfig10017>;
  path?: ConfigPaths10017;
}

const HeavyComponent10017 = memo(function HeavyComponent10017({ config }: HeavyProps10017) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10017) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10017 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10017: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10017.displayName = 'HeavyComponent10017';
export default HeavyComponent10017;
