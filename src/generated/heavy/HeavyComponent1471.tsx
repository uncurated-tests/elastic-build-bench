'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1471<T> = T extends (infer U)[]
  ? DeepReadonlyArray1471<U>
  : T extends object
  ? DeepReadonlyObject1471<T>
  : T;

interface DeepReadonlyArray1471<T> extends ReadonlyArray<DeepReadonly1471<T>> {}

type DeepReadonlyObject1471<T> = {
  readonly [P in keyof T]: DeepReadonly1471<T[P]>;
};

type UnionToIntersection1471<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1471<T> = UnionToIntersection1471<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1471<T extends unknown[], V> = [...T, V];

type TuplifyUnion1471<T, L = LastOf1471<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1471<TuplifyUnion1471<Exclude<T, L>>, L>;

type DeepPartial1471<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1471<T[P]> }
  : T;

type Paths1471<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1471<K, Paths1471<T[K], Prev1471[D]>> : never }[keyof T]
  : never;

type Prev1471 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1471<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1471 {
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

type ConfigPaths1471 = Paths1471<NestedConfig1471>;

interface HeavyProps1471 {
  config: DeepPartial1471<NestedConfig1471>;
  path?: ConfigPaths1471;
}

const HeavyComponent1471 = memo(function HeavyComponent1471({ config }: HeavyProps1471) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1471) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1471 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1471: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1471.displayName = 'HeavyComponent1471';
export default HeavyComponent1471;
