'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10231<T> = T extends (infer U)[]
  ? DeepReadonlyArray10231<U>
  : T extends object
  ? DeepReadonlyObject10231<T>
  : T;

interface DeepReadonlyArray10231<T> extends ReadonlyArray<DeepReadonly10231<T>> {}

type DeepReadonlyObject10231<T> = {
  readonly [P in keyof T]: DeepReadonly10231<T[P]>;
};

type UnionToIntersection10231<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10231<T> = UnionToIntersection10231<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10231<T extends unknown[], V> = [...T, V];

type TuplifyUnion10231<T, L = LastOf10231<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10231<TuplifyUnion10231<Exclude<T, L>>, L>;

type DeepPartial10231<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10231<T[P]> }
  : T;

type Paths10231<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10231<K, Paths10231<T[K], Prev10231[D]>> : never }[keyof T]
  : never;

type Prev10231 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10231<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10231 {
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

type ConfigPaths10231 = Paths10231<NestedConfig10231>;

interface HeavyProps10231 {
  config: DeepPartial10231<NestedConfig10231>;
  path?: ConfigPaths10231;
}

const HeavyComponent10231 = memo(function HeavyComponent10231({ config }: HeavyProps10231) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10231) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10231 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10231: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10231.displayName = 'HeavyComponent10231';
export default HeavyComponent10231;
