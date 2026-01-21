'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10453<T> = T extends (infer U)[]
  ? DeepReadonlyArray10453<U>
  : T extends object
  ? DeepReadonlyObject10453<T>
  : T;

interface DeepReadonlyArray10453<T> extends ReadonlyArray<DeepReadonly10453<T>> {}

type DeepReadonlyObject10453<T> = {
  readonly [P in keyof T]: DeepReadonly10453<T[P]>;
};

type UnionToIntersection10453<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10453<T> = UnionToIntersection10453<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10453<T extends unknown[], V> = [...T, V];

type TuplifyUnion10453<T, L = LastOf10453<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10453<TuplifyUnion10453<Exclude<T, L>>, L>;

type DeepPartial10453<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10453<T[P]> }
  : T;

type Paths10453<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10453<K, Paths10453<T[K], Prev10453[D]>> : never }[keyof T]
  : never;

type Prev10453 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10453<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10453 {
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

type ConfigPaths10453 = Paths10453<NestedConfig10453>;

interface HeavyProps10453 {
  config: DeepPartial10453<NestedConfig10453>;
  path?: ConfigPaths10453;
}

const HeavyComponent10453 = memo(function HeavyComponent10453({ config }: HeavyProps10453) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10453) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10453 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10453: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10453.displayName = 'HeavyComponent10453';
export default HeavyComponent10453;
