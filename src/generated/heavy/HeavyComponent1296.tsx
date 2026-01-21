'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1296<T> = T extends (infer U)[]
  ? DeepReadonlyArray1296<U>
  : T extends object
  ? DeepReadonlyObject1296<T>
  : T;

interface DeepReadonlyArray1296<T> extends ReadonlyArray<DeepReadonly1296<T>> {}

type DeepReadonlyObject1296<T> = {
  readonly [P in keyof T]: DeepReadonly1296<T[P]>;
};

type UnionToIntersection1296<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1296<T> = UnionToIntersection1296<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1296<T extends unknown[], V> = [...T, V];

type TuplifyUnion1296<T, L = LastOf1296<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1296<TuplifyUnion1296<Exclude<T, L>>, L>;

type DeepPartial1296<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1296<T[P]> }
  : T;

type Paths1296<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1296<K, Paths1296<T[K], Prev1296[D]>> : never }[keyof T]
  : never;

type Prev1296 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1296<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1296 {
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

type ConfigPaths1296 = Paths1296<NestedConfig1296>;

interface HeavyProps1296 {
  config: DeepPartial1296<NestedConfig1296>;
  path?: ConfigPaths1296;
}

const HeavyComponent1296 = memo(function HeavyComponent1296({ config }: HeavyProps1296) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1296) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1296 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1296: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1296.displayName = 'HeavyComponent1296';
export default HeavyComponent1296;
