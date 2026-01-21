'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1452<T> = T extends (infer U)[]
  ? DeepReadonlyArray1452<U>
  : T extends object
  ? DeepReadonlyObject1452<T>
  : T;

interface DeepReadonlyArray1452<T> extends ReadonlyArray<DeepReadonly1452<T>> {}

type DeepReadonlyObject1452<T> = {
  readonly [P in keyof T]: DeepReadonly1452<T[P]>;
};

type UnionToIntersection1452<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1452<T> = UnionToIntersection1452<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1452<T extends unknown[], V> = [...T, V];

type TuplifyUnion1452<T, L = LastOf1452<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1452<TuplifyUnion1452<Exclude<T, L>>, L>;

type DeepPartial1452<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1452<T[P]> }
  : T;

type Paths1452<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1452<K, Paths1452<T[K], Prev1452[D]>> : never }[keyof T]
  : never;

type Prev1452 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1452<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1452 {
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

type ConfigPaths1452 = Paths1452<NestedConfig1452>;

interface HeavyProps1452 {
  config: DeepPartial1452<NestedConfig1452>;
  path?: ConfigPaths1452;
}

const HeavyComponent1452 = memo(function HeavyComponent1452({ config }: HeavyProps1452) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1452) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1452 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1452: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1452.displayName = 'HeavyComponent1452';
export default HeavyComponent1452;
