'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1166<T> = T extends (infer U)[]
  ? DeepReadonlyArray1166<U>
  : T extends object
  ? DeepReadonlyObject1166<T>
  : T;

interface DeepReadonlyArray1166<T> extends ReadonlyArray<DeepReadonly1166<T>> {}

type DeepReadonlyObject1166<T> = {
  readonly [P in keyof T]: DeepReadonly1166<T[P]>;
};

type UnionToIntersection1166<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1166<T> = UnionToIntersection1166<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1166<T extends unknown[], V> = [...T, V];

type TuplifyUnion1166<T, L = LastOf1166<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1166<TuplifyUnion1166<Exclude<T, L>>, L>;

type DeepPartial1166<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1166<T[P]> }
  : T;

type Paths1166<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1166<K, Paths1166<T[K], Prev1166[D]>> : never }[keyof T]
  : never;

type Prev1166 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1166<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1166 {
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

type ConfigPaths1166 = Paths1166<NestedConfig1166>;

interface HeavyProps1166 {
  config: DeepPartial1166<NestedConfig1166>;
  path?: ConfigPaths1166;
}

const HeavyComponent1166 = memo(function HeavyComponent1166({ config }: HeavyProps1166) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1166) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1166 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1166: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1166.displayName = 'HeavyComponent1166';
export default HeavyComponent1166;
