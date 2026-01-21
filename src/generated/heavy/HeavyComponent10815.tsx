'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10815<T> = T extends (infer U)[]
  ? DeepReadonlyArray10815<U>
  : T extends object
  ? DeepReadonlyObject10815<T>
  : T;

interface DeepReadonlyArray10815<T> extends ReadonlyArray<DeepReadonly10815<T>> {}

type DeepReadonlyObject10815<T> = {
  readonly [P in keyof T]: DeepReadonly10815<T[P]>;
};

type UnionToIntersection10815<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10815<T> = UnionToIntersection10815<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10815<T extends unknown[], V> = [...T, V];

type TuplifyUnion10815<T, L = LastOf10815<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10815<TuplifyUnion10815<Exclude<T, L>>, L>;

type DeepPartial10815<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10815<T[P]> }
  : T;

type Paths10815<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10815<K, Paths10815<T[K], Prev10815[D]>> : never }[keyof T]
  : never;

type Prev10815 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10815<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10815 {
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

type ConfigPaths10815 = Paths10815<NestedConfig10815>;

interface HeavyProps10815 {
  config: DeepPartial10815<NestedConfig10815>;
  path?: ConfigPaths10815;
}

const HeavyComponent10815 = memo(function HeavyComponent10815({ config }: HeavyProps10815) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10815) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10815 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10815: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10815.displayName = 'HeavyComponent10815';
export default HeavyComponent10815;
