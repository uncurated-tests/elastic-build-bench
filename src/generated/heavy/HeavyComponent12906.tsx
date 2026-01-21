'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12906<T> = T extends (infer U)[]
  ? DeepReadonlyArray12906<U>
  : T extends object
  ? DeepReadonlyObject12906<T>
  : T;

interface DeepReadonlyArray12906<T> extends ReadonlyArray<DeepReadonly12906<T>> {}

type DeepReadonlyObject12906<T> = {
  readonly [P in keyof T]: DeepReadonly12906<T[P]>;
};

type UnionToIntersection12906<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12906<T> = UnionToIntersection12906<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12906<T extends unknown[], V> = [...T, V];

type TuplifyUnion12906<T, L = LastOf12906<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12906<TuplifyUnion12906<Exclude<T, L>>, L>;

type DeepPartial12906<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12906<T[P]> }
  : T;

type Paths12906<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12906<K, Paths12906<T[K], Prev12906[D]>> : never }[keyof T]
  : never;

type Prev12906 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12906<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12906 {
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

type ConfigPaths12906 = Paths12906<NestedConfig12906>;

interface HeavyProps12906 {
  config: DeepPartial12906<NestedConfig12906>;
  path?: ConfigPaths12906;
}

const HeavyComponent12906 = memo(function HeavyComponent12906({ config }: HeavyProps12906) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12906) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12906 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12906: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12906.displayName = 'HeavyComponent12906';
export default HeavyComponent12906;
