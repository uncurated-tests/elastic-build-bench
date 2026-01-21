'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1562<T> = T extends (infer U)[]
  ? DeepReadonlyArray1562<U>
  : T extends object
  ? DeepReadonlyObject1562<T>
  : T;

interface DeepReadonlyArray1562<T> extends ReadonlyArray<DeepReadonly1562<T>> {}

type DeepReadonlyObject1562<T> = {
  readonly [P in keyof T]: DeepReadonly1562<T[P]>;
};

type UnionToIntersection1562<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1562<T> = UnionToIntersection1562<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1562<T extends unknown[], V> = [...T, V];

type TuplifyUnion1562<T, L = LastOf1562<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1562<TuplifyUnion1562<Exclude<T, L>>, L>;

type DeepPartial1562<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1562<T[P]> }
  : T;

type Paths1562<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1562<K, Paths1562<T[K], Prev1562[D]>> : never }[keyof T]
  : never;

type Prev1562 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1562<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1562 {
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

type ConfigPaths1562 = Paths1562<NestedConfig1562>;

interface HeavyProps1562 {
  config: DeepPartial1562<NestedConfig1562>;
  path?: ConfigPaths1562;
}

const HeavyComponent1562 = memo(function HeavyComponent1562({ config }: HeavyProps1562) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1562) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1562 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1562: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1562.displayName = 'HeavyComponent1562';
export default HeavyComponent1562;
