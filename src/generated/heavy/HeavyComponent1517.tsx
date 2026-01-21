'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1517<T> = T extends (infer U)[]
  ? DeepReadonlyArray1517<U>
  : T extends object
  ? DeepReadonlyObject1517<T>
  : T;

interface DeepReadonlyArray1517<T> extends ReadonlyArray<DeepReadonly1517<T>> {}

type DeepReadonlyObject1517<T> = {
  readonly [P in keyof T]: DeepReadonly1517<T[P]>;
};

type UnionToIntersection1517<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1517<T> = UnionToIntersection1517<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1517<T extends unknown[], V> = [...T, V];

type TuplifyUnion1517<T, L = LastOf1517<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1517<TuplifyUnion1517<Exclude<T, L>>, L>;

type DeepPartial1517<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1517<T[P]> }
  : T;

type Paths1517<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1517<K, Paths1517<T[K], Prev1517[D]>> : never }[keyof T]
  : never;

type Prev1517 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1517<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1517 {
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

type ConfigPaths1517 = Paths1517<NestedConfig1517>;

interface HeavyProps1517 {
  config: DeepPartial1517<NestedConfig1517>;
  path?: ConfigPaths1517;
}

const HeavyComponent1517 = memo(function HeavyComponent1517({ config }: HeavyProps1517) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1517) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1517 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1517: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1517.displayName = 'HeavyComponent1517';
export default HeavyComponent1517;
