'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10956<T> = T extends (infer U)[]
  ? DeepReadonlyArray10956<U>
  : T extends object
  ? DeepReadonlyObject10956<T>
  : T;

interface DeepReadonlyArray10956<T> extends ReadonlyArray<DeepReadonly10956<T>> {}

type DeepReadonlyObject10956<T> = {
  readonly [P in keyof T]: DeepReadonly10956<T[P]>;
};

type UnionToIntersection10956<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10956<T> = UnionToIntersection10956<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10956<T extends unknown[], V> = [...T, V];

type TuplifyUnion10956<T, L = LastOf10956<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10956<TuplifyUnion10956<Exclude<T, L>>, L>;

type DeepPartial10956<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10956<T[P]> }
  : T;

type Paths10956<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10956<K, Paths10956<T[K], Prev10956[D]>> : never }[keyof T]
  : never;

type Prev10956 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10956<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10956 {
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

type ConfigPaths10956 = Paths10956<NestedConfig10956>;

interface HeavyProps10956 {
  config: DeepPartial10956<NestedConfig10956>;
  path?: ConfigPaths10956;
}

const HeavyComponent10956 = memo(function HeavyComponent10956({ config }: HeavyProps10956) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10956) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10956 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10956: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10956.displayName = 'HeavyComponent10956';
export default HeavyComponent10956;
