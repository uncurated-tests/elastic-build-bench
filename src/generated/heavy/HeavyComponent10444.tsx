'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10444<T> = T extends (infer U)[]
  ? DeepReadonlyArray10444<U>
  : T extends object
  ? DeepReadonlyObject10444<T>
  : T;

interface DeepReadonlyArray10444<T> extends ReadonlyArray<DeepReadonly10444<T>> {}

type DeepReadonlyObject10444<T> = {
  readonly [P in keyof T]: DeepReadonly10444<T[P]>;
};

type UnionToIntersection10444<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10444<T> = UnionToIntersection10444<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10444<T extends unknown[], V> = [...T, V];

type TuplifyUnion10444<T, L = LastOf10444<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10444<TuplifyUnion10444<Exclude<T, L>>, L>;

type DeepPartial10444<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10444<T[P]> }
  : T;

type Paths10444<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10444<K, Paths10444<T[K], Prev10444[D]>> : never }[keyof T]
  : never;

type Prev10444 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10444<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10444 {
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

type ConfigPaths10444 = Paths10444<NestedConfig10444>;

interface HeavyProps10444 {
  config: DeepPartial10444<NestedConfig10444>;
  path?: ConfigPaths10444;
}

const HeavyComponent10444 = memo(function HeavyComponent10444({ config }: HeavyProps10444) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10444) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10444 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10444: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10444.displayName = 'HeavyComponent10444';
export default HeavyComponent10444;
