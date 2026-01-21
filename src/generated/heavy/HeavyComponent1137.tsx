'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1137<T> = T extends (infer U)[]
  ? DeepReadonlyArray1137<U>
  : T extends object
  ? DeepReadonlyObject1137<T>
  : T;

interface DeepReadonlyArray1137<T> extends ReadonlyArray<DeepReadonly1137<T>> {}

type DeepReadonlyObject1137<T> = {
  readonly [P in keyof T]: DeepReadonly1137<T[P]>;
};

type UnionToIntersection1137<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1137<T> = UnionToIntersection1137<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1137<T extends unknown[], V> = [...T, V];

type TuplifyUnion1137<T, L = LastOf1137<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1137<TuplifyUnion1137<Exclude<T, L>>, L>;

type DeepPartial1137<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1137<T[P]> }
  : T;

type Paths1137<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1137<K, Paths1137<T[K], Prev1137[D]>> : never }[keyof T]
  : never;

type Prev1137 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1137<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1137 {
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

type ConfigPaths1137 = Paths1137<NestedConfig1137>;

interface HeavyProps1137 {
  config: DeepPartial1137<NestedConfig1137>;
  path?: ConfigPaths1137;
}

const HeavyComponent1137 = memo(function HeavyComponent1137({ config }: HeavyProps1137) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1137) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1137 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1137: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1137.displayName = 'HeavyComponent1137';
export default HeavyComponent1137;
