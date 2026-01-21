'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1327<T> = T extends (infer U)[]
  ? DeepReadonlyArray1327<U>
  : T extends object
  ? DeepReadonlyObject1327<T>
  : T;

interface DeepReadonlyArray1327<T> extends ReadonlyArray<DeepReadonly1327<T>> {}

type DeepReadonlyObject1327<T> = {
  readonly [P in keyof T]: DeepReadonly1327<T[P]>;
};

type UnionToIntersection1327<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1327<T> = UnionToIntersection1327<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1327<T extends unknown[], V> = [...T, V];

type TuplifyUnion1327<T, L = LastOf1327<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1327<TuplifyUnion1327<Exclude<T, L>>, L>;

type DeepPartial1327<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1327<T[P]> }
  : T;

type Paths1327<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1327<K, Paths1327<T[K], Prev1327[D]>> : never }[keyof T]
  : never;

type Prev1327 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1327<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1327 {
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

type ConfigPaths1327 = Paths1327<NestedConfig1327>;

interface HeavyProps1327 {
  config: DeepPartial1327<NestedConfig1327>;
  path?: ConfigPaths1327;
}

const HeavyComponent1327 = memo(function HeavyComponent1327({ config }: HeavyProps1327) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1327) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1327 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1327: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1327.displayName = 'HeavyComponent1327';
export default HeavyComponent1327;
