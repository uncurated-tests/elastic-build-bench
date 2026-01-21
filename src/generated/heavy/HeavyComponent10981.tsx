'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10981<T> = T extends (infer U)[]
  ? DeepReadonlyArray10981<U>
  : T extends object
  ? DeepReadonlyObject10981<T>
  : T;

interface DeepReadonlyArray10981<T> extends ReadonlyArray<DeepReadonly10981<T>> {}

type DeepReadonlyObject10981<T> = {
  readonly [P in keyof T]: DeepReadonly10981<T[P]>;
};

type UnionToIntersection10981<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10981<T> = UnionToIntersection10981<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10981<T extends unknown[], V> = [...T, V];

type TuplifyUnion10981<T, L = LastOf10981<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10981<TuplifyUnion10981<Exclude<T, L>>, L>;

type DeepPartial10981<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10981<T[P]> }
  : T;

type Paths10981<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10981<K, Paths10981<T[K], Prev10981[D]>> : never }[keyof T]
  : never;

type Prev10981 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10981<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10981 {
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

type ConfigPaths10981 = Paths10981<NestedConfig10981>;

interface HeavyProps10981 {
  config: DeepPartial10981<NestedConfig10981>;
  path?: ConfigPaths10981;
}

const HeavyComponent10981 = memo(function HeavyComponent10981({ config }: HeavyProps10981) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10981) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10981 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10981: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10981.displayName = 'HeavyComponent10981';
export default HeavyComponent10981;
