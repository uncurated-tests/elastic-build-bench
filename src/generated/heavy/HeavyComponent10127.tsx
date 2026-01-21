'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10127<T> = T extends (infer U)[]
  ? DeepReadonlyArray10127<U>
  : T extends object
  ? DeepReadonlyObject10127<T>
  : T;

interface DeepReadonlyArray10127<T> extends ReadonlyArray<DeepReadonly10127<T>> {}

type DeepReadonlyObject10127<T> = {
  readonly [P in keyof T]: DeepReadonly10127<T[P]>;
};

type UnionToIntersection10127<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10127<T> = UnionToIntersection10127<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10127<T extends unknown[], V> = [...T, V];

type TuplifyUnion10127<T, L = LastOf10127<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10127<TuplifyUnion10127<Exclude<T, L>>, L>;

type DeepPartial10127<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10127<T[P]> }
  : T;

type Paths10127<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10127<K, Paths10127<T[K], Prev10127[D]>> : never }[keyof T]
  : never;

type Prev10127 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10127<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10127 {
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

type ConfigPaths10127 = Paths10127<NestedConfig10127>;

interface HeavyProps10127 {
  config: DeepPartial10127<NestedConfig10127>;
  path?: ConfigPaths10127;
}

const HeavyComponent10127 = memo(function HeavyComponent10127({ config }: HeavyProps10127) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10127) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10127 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10127: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10127.displayName = 'HeavyComponent10127';
export default HeavyComponent10127;
