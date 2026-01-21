'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1620<T> = T extends (infer U)[]
  ? DeepReadonlyArray1620<U>
  : T extends object
  ? DeepReadonlyObject1620<T>
  : T;

interface DeepReadonlyArray1620<T> extends ReadonlyArray<DeepReadonly1620<T>> {}

type DeepReadonlyObject1620<T> = {
  readonly [P in keyof T]: DeepReadonly1620<T[P]>;
};

type UnionToIntersection1620<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1620<T> = UnionToIntersection1620<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1620<T extends unknown[], V> = [...T, V];

type TuplifyUnion1620<T, L = LastOf1620<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1620<TuplifyUnion1620<Exclude<T, L>>, L>;

type DeepPartial1620<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1620<T[P]> }
  : T;

type Paths1620<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1620<K, Paths1620<T[K], Prev1620[D]>> : never }[keyof T]
  : never;

type Prev1620 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1620<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1620 {
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

type ConfigPaths1620 = Paths1620<NestedConfig1620>;

interface HeavyProps1620 {
  config: DeepPartial1620<NestedConfig1620>;
  path?: ConfigPaths1620;
}

const HeavyComponent1620 = memo(function HeavyComponent1620({ config }: HeavyProps1620) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1620) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1620 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1620: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1620.displayName = 'HeavyComponent1620';
export default HeavyComponent1620;
