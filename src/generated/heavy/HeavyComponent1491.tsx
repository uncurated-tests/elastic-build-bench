'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1491<T> = T extends (infer U)[]
  ? DeepReadonlyArray1491<U>
  : T extends object
  ? DeepReadonlyObject1491<T>
  : T;

interface DeepReadonlyArray1491<T> extends ReadonlyArray<DeepReadonly1491<T>> {}

type DeepReadonlyObject1491<T> = {
  readonly [P in keyof T]: DeepReadonly1491<T[P]>;
};

type UnionToIntersection1491<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1491<T> = UnionToIntersection1491<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1491<T extends unknown[], V> = [...T, V];

type TuplifyUnion1491<T, L = LastOf1491<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1491<TuplifyUnion1491<Exclude<T, L>>, L>;

type DeepPartial1491<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1491<T[P]> }
  : T;

type Paths1491<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1491<K, Paths1491<T[K], Prev1491[D]>> : never }[keyof T]
  : never;

type Prev1491 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1491<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1491 {
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

type ConfigPaths1491 = Paths1491<NestedConfig1491>;

interface HeavyProps1491 {
  config: DeepPartial1491<NestedConfig1491>;
  path?: ConfigPaths1491;
}

const HeavyComponent1491 = memo(function HeavyComponent1491({ config }: HeavyProps1491) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1491) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1491 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1491: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1491.displayName = 'HeavyComponent1491';
export default HeavyComponent1491;
