'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1575<T> = T extends (infer U)[]
  ? DeepReadonlyArray1575<U>
  : T extends object
  ? DeepReadonlyObject1575<T>
  : T;

interface DeepReadonlyArray1575<T> extends ReadonlyArray<DeepReadonly1575<T>> {}

type DeepReadonlyObject1575<T> = {
  readonly [P in keyof T]: DeepReadonly1575<T[P]>;
};

type UnionToIntersection1575<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1575<T> = UnionToIntersection1575<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1575<T extends unknown[], V> = [...T, V];

type TuplifyUnion1575<T, L = LastOf1575<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1575<TuplifyUnion1575<Exclude<T, L>>, L>;

type DeepPartial1575<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1575<T[P]> }
  : T;

type Paths1575<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1575<K, Paths1575<T[K], Prev1575[D]>> : never }[keyof T]
  : never;

type Prev1575 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1575<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1575 {
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

type ConfigPaths1575 = Paths1575<NestedConfig1575>;

interface HeavyProps1575 {
  config: DeepPartial1575<NestedConfig1575>;
  path?: ConfigPaths1575;
}

const HeavyComponent1575 = memo(function HeavyComponent1575({ config }: HeavyProps1575) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1575) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1575 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1575: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1575.displayName = 'HeavyComponent1575';
export default HeavyComponent1575;
