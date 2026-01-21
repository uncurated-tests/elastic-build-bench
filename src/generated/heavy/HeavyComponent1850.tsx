'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1850<T> = T extends (infer U)[]
  ? DeepReadonlyArray1850<U>
  : T extends object
  ? DeepReadonlyObject1850<T>
  : T;

interface DeepReadonlyArray1850<T> extends ReadonlyArray<DeepReadonly1850<T>> {}

type DeepReadonlyObject1850<T> = {
  readonly [P in keyof T]: DeepReadonly1850<T[P]>;
};

type UnionToIntersection1850<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1850<T> = UnionToIntersection1850<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1850<T extends unknown[], V> = [...T, V];

type TuplifyUnion1850<T, L = LastOf1850<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1850<TuplifyUnion1850<Exclude<T, L>>, L>;

type DeepPartial1850<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1850<T[P]> }
  : T;

type Paths1850<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1850<K, Paths1850<T[K], Prev1850[D]>> : never }[keyof T]
  : never;

type Prev1850 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1850<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1850 {
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

type ConfigPaths1850 = Paths1850<NestedConfig1850>;

interface HeavyProps1850 {
  config: DeepPartial1850<NestedConfig1850>;
  path?: ConfigPaths1850;
}

const HeavyComponent1850 = memo(function HeavyComponent1850({ config }: HeavyProps1850) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1850) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1850 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1850: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1850.displayName = 'HeavyComponent1850';
export default HeavyComponent1850;
