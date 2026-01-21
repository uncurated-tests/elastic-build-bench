'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1649<T> = T extends (infer U)[]
  ? DeepReadonlyArray1649<U>
  : T extends object
  ? DeepReadonlyObject1649<T>
  : T;

interface DeepReadonlyArray1649<T> extends ReadonlyArray<DeepReadonly1649<T>> {}

type DeepReadonlyObject1649<T> = {
  readonly [P in keyof T]: DeepReadonly1649<T[P]>;
};

type UnionToIntersection1649<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1649<T> = UnionToIntersection1649<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1649<T extends unknown[], V> = [...T, V];

type TuplifyUnion1649<T, L = LastOf1649<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1649<TuplifyUnion1649<Exclude<T, L>>, L>;

type DeepPartial1649<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1649<T[P]> }
  : T;

type Paths1649<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1649<K, Paths1649<T[K], Prev1649[D]>> : never }[keyof T]
  : never;

type Prev1649 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1649<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1649 {
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

type ConfigPaths1649 = Paths1649<NestedConfig1649>;

interface HeavyProps1649 {
  config: DeepPartial1649<NestedConfig1649>;
  path?: ConfigPaths1649;
}

const HeavyComponent1649 = memo(function HeavyComponent1649({ config }: HeavyProps1649) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1649) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1649 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1649: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1649.displayName = 'HeavyComponent1649';
export default HeavyComponent1649;
