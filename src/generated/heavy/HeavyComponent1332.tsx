'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1332<T> = T extends (infer U)[]
  ? DeepReadonlyArray1332<U>
  : T extends object
  ? DeepReadonlyObject1332<T>
  : T;

interface DeepReadonlyArray1332<T> extends ReadonlyArray<DeepReadonly1332<T>> {}

type DeepReadonlyObject1332<T> = {
  readonly [P in keyof T]: DeepReadonly1332<T[P]>;
};

type UnionToIntersection1332<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1332<T> = UnionToIntersection1332<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1332<T extends unknown[], V> = [...T, V];

type TuplifyUnion1332<T, L = LastOf1332<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1332<TuplifyUnion1332<Exclude<T, L>>, L>;

type DeepPartial1332<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1332<T[P]> }
  : T;

type Paths1332<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1332<K, Paths1332<T[K], Prev1332[D]>> : never }[keyof T]
  : never;

type Prev1332 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1332<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1332 {
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

type ConfigPaths1332 = Paths1332<NestedConfig1332>;

interface HeavyProps1332 {
  config: DeepPartial1332<NestedConfig1332>;
  path?: ConfigPaths1332;
}

const HeavyComponent1332 = memo(function HeavyComponent1332({ config }: HeavyProps1332) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1332) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1332 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1332: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1332.displayName = 'HeavyComponent1332';
export default HeavyComponent1332;
