'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1227<T> = T extends (infer U)[]
  ? DeepReadonlyArray1227<U>
  : T extends object
  ? DeepReadonlyObject1227<T>
  : T;

interface DeepReadonlyArray1227<T> extends ReadonlyArray<DeepReadonly1227<T>> {}

type DeepReadonlyObject1227<T> = {
  readonly [P in keyof T]: DeepReadonly1227<T[P]>;
};

type UnionToIntersection1227<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1227<T> = UnionToIntersection1227<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1227<T extends unknown[], V> = [...T, V];

type TuplifyUnion1227<T, L = LastOf1227<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1227<TuplifyUnion1227<Exclude<T, L>>, L>;

type DeepPartial1227<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1227<T[P]> }
  : T;

type Paths1227<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1227<K, Paths1227<T[K], Prev1227[D]>> : never }[keyof T]
  : never;

type Prev1227 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1227<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1227 {
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

type ConfigPaths1227 = Paths1227<NestedConfig1227>;

interface HeavyProps1227 {
  config: DeepPartial1227<NestedConfig1227>;
  path?: ConfigPaths1227;
}

const HeavyComponent1227 = memo(function HeavyComponent1227({ config }: HeavyProps1227) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1227) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1227 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1227: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1227.displayName = 'HeavyComponent1227';
export default HeavyComponent1227;
