'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1058<T> = T extends (infer U)[]
  ? DeepReadonlyArray1058<U>
  : T extends object
  ? DeepReadonlyObject1058<T>
  : T;

interface DeepReadonlyArray1058<T> extends ReadonlyArray<DeepReadonly1058<T>> {}

type DeepReadonlyObject1058<T> = {
  readonly [P in keyof T]: DeepReadonly1058<T[P]>;
};

type UnionToIntersection1058<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1058<T> = UnionToIntersection1058<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1058<T extends unknown[], V> = [...T, V];

type TuplifyUnion1058<T, L = LastOf1058<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1058<TuplifyUnion1058<Exclude<T, L>>, L>;

type DeepPartial1058<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1058<T[P]> }
  : T;

type Paths1058<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1058<K, Paths1058<T[K], Prev1058[D]>> : never }[keyof T]
  : never;

type Prev1058 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1058<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1058 {
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

type ConfigPaths1058 = Paths1058<NestedConfig1058>;

interface HeavyProps1058 {
  config: DeepPartial1058<NestedConfig1058>;
  path?: ConfigPaths1058;
}

const HeavyComponent1058 = memo(function HeavyComponent1058({ config }: HeavyProps1058) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1058) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1058 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1058: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1058.displayName = 'HeavyComponent1058';
export default HeavyComponent1058;
