'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10001<T> = T extends (infer U)[]
  ? DeepReadonlyArray10001<U>
  : T extends object
  ? DeepReadonlyObject10001<T>
  : T;

interface DeepReadonlyArray10001<T> extends ReadonlyArray<DeepReadonly10001<T>> {}

type DeepReadonlyObject10001<T> = {
  readonly [P in keyof T]: DeepReadonly10001<T[P]>;
};

type UnionToIntersection10001<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10001<T> = UnionToIntersection10001<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10001<T extends unknown[], V> = [...T, V];

type TuplifyUnion10001<T, L = LastOf10001<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10001<TuplifyUnion10001<Exclude<T, L>>, L>;

type DeepPartial10001<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10001<T[P]> }
  : T;

type Paths10001<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10001<K, Paths10001<T[K], Prev10001[D]>> : never }[keyof T]
  : never;

type Prev10001 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10001<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10001 {
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

type ConfigPaths10001 = Paths10001<NestedConfig10001>;

interface HeavyProps10001 {
  config: DeepPartial10001<NestedConfig10001>;
  path?: ConfigPaths10001;
}

const HeavyComponent10001 = memo(function HeavyComponent10001({ config }: HeavyProps10001) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10001) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10001 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10001: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10001.displayName = 'HeavyComponent10001';
export default HeavyComponent10001;
