'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1705<T> = T extends (infer U)[]
  ? DeepReadonlyArray1705<U>
  : T extends object
  ? DeepReadonlyObject1705<T>
  : T;

interface DeepReadonlyArray1705<T> extends ReadonlyArray<DeepReadonly1705<T>> {}

type DeepReadonlyObject1705<T> = {
  readonly [P in keyof T]: DeepReadonly1705<T[P]>;
};

type UnionToIntersection1705<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1705<T> = UnionToIntersection1705<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1705<T extends unknown[], V> = [...T, V];

type TuplifyUnion1705<T, L = LastOf1705<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1705<TuplifyUnion1705<Exclude<T, L>>, L>;

type DeepPartial1705<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1705<T[P]> }
  : T;

type Paths1705<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1705<K, Paths1705<T[K], Prev1705[D]>> : never }[keyof T]
  : never;

type Prev1705 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1705<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1705 {
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

type ConfigPaths1705 = Paths1705<NestedConfig1705>;

interface HeavyProps1705 {
  config: DeepPartial1705<NestedConfig1705>;
  path?: ConfigPaths1705;
}

const HeavyComponent1705 = memo(function HeavyComponent1705({ config }: HeavyProps1705) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1705) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1705 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1705: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1705.displayName = 'HeavyComponent1705';
export default HeavyComponent1705;
