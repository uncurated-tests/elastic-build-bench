'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1395<T> = T extends (infer U)[]
  ? DeepReadonlyArray1395<U>
  : T extends object
  ? DeepReadonlyObject1395<T>
  : T;

interface DeepReadonlyArray1395<T> extends ReadonlyArray<DeepReadonly1395<T>> {}

type DeepReadonlyObject1395<T> = {
  readonly [P in keyof T]: DeepReadonly1395<T[P]>;
};

type UnionToIntersection1395<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1395<T> = UnionToIntersection1395<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1395<T extends unknown[], V> = [...T, V];

type TuplifyUnion1395<T, L = LastOf1395<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1395<TuplifyUnion1395<Exclude<T, L>>, L>;

type DeepPartial1395<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1395<T[P]> }
  : T;

type Paths1395<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1395<K, Paths1395<T[K], Prev1395[D]>> : never }[keyof T]
  : never;

type Prev1395 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1395<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1395 {
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

type ConfigPaths1395 = Paths1395<NestedConfig1395>;

interface HeavyProps1395 {
  config: DeepPartial1395<NestedConfig1395>;
  path?: ConfigPaths1395;
}

const HeavyComponent1395 = memo(function HeavyComponent1395({ config }: HeavyProps1395) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1395) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1395 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1395: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1395.displayName = 'HeavyComponent1395';
export default HeavyComponent1395;
