'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1318<T> = T extends (infer U)[]
  ? DeepReadonlyArray1318<U>
  : T extends object
  ? DeepReadonlyObject1318<T>
  : T;

interface DeepReadonlyArray1318<T> extends ReadonlyArray<DeepReadonly1318<T>> {}

type DeepReadonlyObject1318<T> = {
  readonly [P in keyof T]: DeepReadonly1318<T[P]>;
};

type UnionToIntersection1318<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1318<T> = UnionToIntersection1318<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1318<T extends unknown[], V> = [...T, V];

type TuplifyUnion1318<T, L = LastOf1318<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1318<TuplifyUnion1318<Exclude<T, L>>, L>;

type DeepPartial1318<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1318<T[P]> }
  : T;

type Paths1318<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1318<K, Paths1318<T[K], Prev1318[D]>> : never }[keyof T]
  : never;

type Prev1318 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1318<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1318 {
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

type ConfigPaths1318 = Paths1318<NestedConfig1318>;

interface HeavyProps1318 {
  config: DeepPartial1318<NestedConfig1318>;
  path?: ConfigPaths1318;
}

const HeavyComponent1318 = memo(function HeavyComponent1318({ config }: HeavyProps1318) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1318) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1318 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1318: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1318.displayName = 'HeavyComponent1318';
export default HeavyComponent1318;
