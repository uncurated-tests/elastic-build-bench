'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10308<T> = T extends (infer U)[]
  ? DeepReadonlyArray10308<U>
  : T extends object
  ? DeepReadonlyObject10308<T>
  : T;

interface DeepReadonlyArray10308<T> extends ReadonlyArray<DeepReadonly10308<T>> {}

type DeepReadonlyObject10308<T> = {
  readonly [P in keyof T]: DeepReadonly10308<T[P]>;
};

type UnionToIntersection10308<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10308<T> = UnionToIntersection10308<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10308<T extends unknown[], V> = [...T, V];

type TuplifyUnion10308<T, L = LastOf10308<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10308<TuplifyUnion10308<Exclude<T, L>>, L>;

type DeepPartial10308<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10308<T[P]> }
  : T;

type Paths10308<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10308<K, Paths10308<T[K], Prev10308[D]>> : never }[keyof T]
  : never;

type Prev10308 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10308<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10308 {
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

type ConfigPaths10308 = Paths10308<NestedConfig10308>;

interface HeavyProps10308 {
  config: DeepPartial10308<NestedConfig10308>;
  path?: ConfigPaths10308;
}

const HeavyComponent10308 = memo(function HeavyComponent10308({ config }: HeavyProps10308) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10308) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10308 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10308: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10308.displayName = 'HeavyComponent10308';
export default HeavyComponent10308;
