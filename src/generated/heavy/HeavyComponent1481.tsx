'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1481<T> = T extends (infer U)[]
  ? DeepReadonlyArray1481<U>
  : T extends object
  ? DeepReadonlyObject1481<T>
  : T;

interface DeepReadonlyArray1481<T> extends ReadonlyArray<DeepReadonly1481<T>> {}

type DeepReadonlyObject1481<T> = {
  readonly [P in keyof T]: DeepReadonly1481<T[P]>;
};

type UnionToIntersection1481<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1481<T> = UnionToIntersection1481<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1481<T extends unknown[], V> = [...T, V];

type TuplifyUnion1481<T, L = LastOf1481<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1481<TuplifyUnion1481<Exclude<T, L>>, L>;

type DeepPartial1481<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1481<T[P]> }
  : T;

type Paths1481<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1481<K, Paths1481<T[K], Prev1481[D]>> : never }[keyof T]
  : never;

type Prev1481 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1481<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1481 {
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

type ConfigPaths1481 = Paths1481<NestedConfig1481>;

interface HeavyProps1481 {
  config: DeepPartial1481<NestedConfig1481>;
  path?: ConfigPaths1481;
}

const HeavyComponent1481 = memo(function HeavyComponent1481({ config }: HeavyProps1481) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1481) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1481 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1481: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1481.displayName = 'HeavyComponent1481';
export default HeavyComponent1481;
