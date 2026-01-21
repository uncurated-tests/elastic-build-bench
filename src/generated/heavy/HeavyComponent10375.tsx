'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10375<T> = T extends (infer U)[]
  ? DeepReadonlyArray10375<U>
  : T extends object
  ? DeepReadonlyObject10375<T>
  : T;

interface DeepReadonlyArray10375<T> extends ReadonlyArray<DeepReadonly10375<T>> {}

type DeepReadonlyObject10375<T> = {
  readonly [P in keyof T]: DeepReadonly10375<T[P]>;
};

type UnionToIntersection10375<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10375<T> = UnionToIntersection10375<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10375<T extends unknown[], V> = [...T, V];

type TuplifyUnion10375<T, L = LastOf10375<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10375<TuplifyUnion10375<Exclude<T, L>>, L>;

type DeepPartial10375<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10375<T[P]> }
  : T;

type Paths10375<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10375<K, Paths10375<T[K], Prev10375[D]>> : never }[keyof T]
  : never;

type Prev10375 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10375<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10375 {
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

type ConfigPaths10375 = Paths10375<NestedConfig10375>;

interface HeavyProps10375 {
  config: DeepPartial10375<NestedConfig10375>;
  path?: ConfigPaths10375;
}

const HeavyComponent10375 = memo(function HeavyComponent10375({ config }: HeavyProps10375) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10375) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10375 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10375: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10375.displayName = 'HeavyComponent10375';
export default HeavyComponent10375;
