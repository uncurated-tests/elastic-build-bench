'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1194<T> = T extends (infer U)[]
  ? DeepReadonlyArray1194<U>
  : T extends object
  ? DeepReadonlyObject1194<T>
  : T;

interface DeepReadonlyArray1194<T> extends ReadonlyArray<DeepReadonly1194<T>> {}

type DeepReadonlyObject1194<T> = {
  readonly [P in keyof T]: DeepReadonly1194<T[P]>;
};

type UnionToIntersection1194<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1194<T> = UnionToIntersection1194<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1194<T extends unknown[], V> = [...T, V];

type TuplifyUnion1194<T, L = LastOf1194<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1194<TuplifyUnion1194<Exclude<T, L>>, L>;

type DeepPartial1194<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1194<T[P]> }
  : T;

type Paths1194<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1194<K, Paths1194<T[K], Prev1194[D]>> : never }[keyof T]
  : never;

type Prev1194 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1194<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1194 {
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

type ConfigPaths1194 = Paths1194<NestedConfig1194>;

interface HeavyProps1194 {
  config: DeepPartial1194<NestedConfig1194>;
  path?: ConfigPaths1194;
}

const HeavyComponent1194 = memo(function HeavyComponent1194({ config }: HeavyProps1194) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1194) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1194 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1194: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1194.displayName = 'HeavyComponent1194';
export default HeavyComponent1194;
