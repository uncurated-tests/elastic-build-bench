'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10721<T> = T extends (infer U)[]
  ? DeepReadonlyArray10721<U>
  : T extends object
  ? DeepReadonlyObject10721<T>
  : T;

interface DeepReadonlyArray10721<T> extends ReadonlyArray<DeepReadonly10721<T>> {}

type DeepReadonlyObject10721<T> = {
  readonly [P in keyof T]: DeepReadonly10721<T[P]>;
};

type UnionToIntersection10721<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10721<T> = UnionToIntersection10721<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10721<T extends unknown[], V> = [...T, V];

type TuplifyUnion10721<T, L = LastOf10721<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10721<TuplifyUnion10721<Exclude<T, L>>, L>;

type DeepPartial10721<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10721<T[P]> }
  : T;

type Paths10721<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10721<K, Paths10721<T[K], Prev10721[D]>> : never }[keyof T]
  : never;

type Prev10721 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10721<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10721 {
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

type ConfigPaths10721 = Paths10721<NestedConfig10721>;

interface HeavyProps10721 {
  config: DeepPartial10721<NestedConfig10721>;
  path?: ConfigPaths10721;
}

const HeavyComponent10721 = memo(function HeavyComponent10721({ config }: HeavyProps10721) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10721) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10721 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10721: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10721.displayName = 'HeavyComponent10721';
export default HeavyComponent10721;
