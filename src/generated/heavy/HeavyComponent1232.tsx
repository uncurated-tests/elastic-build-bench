'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1232<T> = T extends (infer U)[]
  ? DeepReadonlyArray1232<U>
  : T extends object
  ? DeepReadonlyObject1232<T>
  : T;

interface DeepReadonlyArray1232<T> extends ReadonlyArray<DeepReadonly1232<T>> {}

type DeepReadonlyObject1232<T> = {
  readonly [P in keyof T]: DeepReadonly1232<T[P]>;
};

type UnionToIntersection1232<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1232<T> = UnionToIntersection1232<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1232<T extends unknown[], V> = [...T, V];

type TuplifyUnion1232<T, L = LastOf1232<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1232<TuplifyUnion1232<Exclude<T, L>>, L>;

type DeepPartial1232<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1232<T[P]> }
  : T;

type Paths1232<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1232<K, Paths1232<T[K], Prev1232[D]>> : never }[keyof T]
  : never;

type Prev1232 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1232<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1232 {
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

type ConfigPaths1232 = Paths1232<NestedConfig1232>;

interface HeavyProps1232 {
  config: DeepPartial1232<NestedConfig1232>;
  path?: ConfigPaths1232;
}

const HeavyComponent1232 = memo(function HeavyComponent1232({ config }: HeavyProps1232) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1232) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1232 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1232: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1232.displayName = 'HeavyComponent1232';
export default HeavyComponent1232;
