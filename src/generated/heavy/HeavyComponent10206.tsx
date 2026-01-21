'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10206<T> = T extends (infer U)[]
  ? DeepReadonlyArray10206<U>
  : T extends object
  ? DeepReadonlyObject10206<T>
  : T;

interface DeepReadonlyArray10206<T> extends ReadonlyArray<DeepReadonly10206<T>> {}

type DeepReadonlyObject10206<T> = {
  readonly [P in keyof T]: DeepReadonly10206<T[P]>;
};

type UnionToIntersection10206<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10206<T> = UnionToIntersection10206<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10206<T extends unknown[], V> = [...T, V];

type TuplifyUnion10206<T, L = LastOf10206<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10206<TuplifyUnion10206<Exclude<T, L>>, L>;

type DeepPartial10206<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10206<T[P]> }
  : T;

type Paths10206<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10206<K, Paths10206<T[K], Prev10206[D]>> : never }[keyof T]
  : never;

type Prev10206 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10206<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10206 {
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

type ConfigPaths10206 = Paths10206<NestedConfig10206>;

interface HeavyProps10206 {
  config: DeepPartial10206<NestedConfig10206>;
  path?: ConfigPaths10206;
}

const HeavyComponent10206 = memo(function HeavyComponent10206({ config }: HeavyProps10206) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10206) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10206 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10206: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10206.displayName = 'HeavyComponent10206';
export default HeavyComponent10206;
