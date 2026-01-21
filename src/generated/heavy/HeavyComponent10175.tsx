'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10175<T> = T extends (infer U)[]
  ? DeepReadonlyArray10175<U>
  : T extends object
  ? DeepReadonlyObject10175<T>
  : T;

interface DeepReadonlyArray10175<T> extends ReadonlyArray<DeepReadonly10175<T>> {}

type DeepReadonlyObject10175<T> = {
  readonly [P in keyof T]: DeepReadonly10175<T[P]>;
};

type UnionToIntersection10175<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10175<T> = UnionToIntersection10175<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10175<T extends unknown[], V> = [...T, V];

type TuplifyUnion10175<T, L = LastOf10175<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10175<TuplifyUnion10175<Exclude<T, L>>, L>;

type DeepPartial10175<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10175<T[P]> }
  : T;

type Paths10175<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10175<K, Paths10175<T[K], Prev10175[D]>> : never }[keyof T]
  : never;

type Prev10175 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10175<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10175 {
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

type ConfigPaths10175 = Paths10175<NestedConfig10175>;

interface HeavyProps10175 {
  config: DeepPartial10175<NestedConfig10175>;
  path?: ConfigPaths10175;
}

const HeavyComponent10175 = memo(function HeavyComponent10175({ config }: HeavyProps10175) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10175) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10175 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10175: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10175.displayName = 'HeavyComponent10175';
export default HeavyComponent10175;
