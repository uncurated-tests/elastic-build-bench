'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10064<T> = T extends (infer U)[]
  ? DeepReadonlyArray10064<U>
  : T extends object
  ? DeepReadonlyObject10064<T>
  : T;

interface DeepReadonlyArray10064<T> extends ReadonlyArray<DeepReadonly10064<T>> {}

type DeepReadonlyObject10064<T> = {
  readonly [P in keyof T]: DeepReadonly10064<T[P]>;
};

type UnionToIntersection10064<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10064<T> = UnionToIntersection10064<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10064<T extends unknown[], V> = [...T, V];

type TuplifyUnion10064<T, L = LastOf10064<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10064<TuplifyUnion10064<Exclude<T, L>>, L>;

type DeepPartial10064<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10064<T[P]> }
  : T;

type Paths10064<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10064<K, Paths10064<T[K], Prev10064[D]>> : never }[keyof T]
  : never;

type Prev10064 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10064<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10064 {
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

type ConfigPaths10064 = Paths10064<NestedConfig10064>;

interface HeavyProps10064 {
  config: DeepPartial10064<NestedConfig10064>;
  path?: ConfigPaths10064;
}

const HeavyComponent10064 = memo(function HeavyComponent10064({ config }: HeavyProps10064) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10064) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10064 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10064: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10064.displayName = 'HeavyComponent10064';
export default HeavyComponent10064;
