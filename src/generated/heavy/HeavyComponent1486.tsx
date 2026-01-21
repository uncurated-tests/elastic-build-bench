'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1486<T> = T extends (infer U)[]
  ? DeepReadonlyArray1486<U>
  : T extends object
  ? DeepReadonlyObject1486<T>
  : T;

interface DeepReadonlyArray1486<T> extends ReadonlyArray<DeepReadonly1486<T>> {}

type DeepReadonlyObject1486<T> = {
  readonly [P in keyof T]: DeepReadonly1486<T[P]>;
};

type UnionToIntersection1486<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1486<T> = UnionToIntersection1486<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1486<T extends unknown[], V> = [...T, V];

type TuplifyUnion1486<T, L = LastOf1486<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1486<TuplifyUnion1486<Exclude<T, L>>, L>;

type DeepPartial1486<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1486<T[P]> }
  : T;

type Paths1486<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1486<K, Paths1486<T[K], Prev1486[D]>> : never }[keyof T]
  : never;

type Prev1486 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1486<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1486 {
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

type ConfigPaths1486 = Paths1486<NestedConfig1486>;

interface HeavyProps1486 {
  config: DeepPartial1486<NestedConfig1486>;
  path?: ConfigPaths1486;
}

const HeavyComponent1486 = memo(function HeavyComponent1486({ config }: HeavyProps1486) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1486) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1486 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1486: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1486.displayName = 'HeavyComponent1486';
export default HeavyComponent1486;
