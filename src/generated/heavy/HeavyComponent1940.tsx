'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1940<T> = T extends (infer U)[]
  ? DeepReadonlyArray1940<U>
  : T extends object
  ? DeepReadonlyObject1940<T>
  : T;

interface DeepReadonlyArray1940<T> extends ReadonlyArray<DeepReadonly1940<T>> {}

type DeepReadonlyObject1940<T> = {
  readonly [P in keyof T]: DeepReadonly1940<T[P]>;
};

type UnionToIntersection1940<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1940<T> = UnionToIntersection1940<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1940<T extends unknown[], V> = [...T, V];

type TuplifyUnion1940<T, L = LastOf1940<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1940<TuplifyUnion1940<Exclude<T, L>>, L>;

type DeepPartial1940<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1940<T[P]> }
  : T;

type Paths1940<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1940<K, Paths1940<T[K], Prev1940[D]>> : never }[keyof T]
  : never;

type Prev1940 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1940<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1940 {
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

type ConfigPaths1940 = Paths1940<NestedConfig1940>;

interface HeavyProps1940 {
  config: DeepPartial1940<NestedConfig1940>;
  path?: ConfigPaths1940;
}

const HeavyComponent1940 = memo(function HeavyComponent1940({ config }: HeavyProps1940) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1940) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1940 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1940: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1940.displayName = 'HeavyComponent1940';
export default HeavyComponent1940;
