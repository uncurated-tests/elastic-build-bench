'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1820<T> = T extends (infer U)[]
  ? DeepReadonlyArray1820<U>
  : T extends object
  ? DeepReadonlyObject1820<T>
  : T;

interface DeepReadonlyArray1820<T> extends ReadonlyArray<DeepReadonly1820<T>> {}

type DeepReadonlyObject1820<T> = {
  readonly [P in keyof T]: DeepReadonly1820<T[P]>;
};

type UnionToIntersection1820<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1820<T> = UnionToIntersection1820<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1820<T extends unknown[], V> = [...T, V];

type TuplifyUnion1820<T, L = LastOf1820<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1820<TuplifyUnion1820<Exclude<T, L>>, L>;

type DeepPartial1820<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1820<T[P]> }
  : T;

type Paths1820<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1820<K, Paths1820<T[K], Prev1820[D]>> : never }[keyof T]
  : never;

type Prev1820 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1820<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1820 {
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

type ConfigPaths1820 = Paths1820<NestedConfig1820>;

interface HeavyProps1820 {
  config: DeepPartial1820<NestedConfig1820>;
  path?: ConfigPaths1820;
}

const HeavyComponent1820 = memo(function HeavyComponent1820({ config }: HeavyProps1820) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1820) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1820 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1820: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1820.displayName = 'HeavyComponent1820';
export default HeavyComponent1820;
