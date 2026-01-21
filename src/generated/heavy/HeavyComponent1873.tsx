'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1873<T> = T extends (infer U)[]
  ? DeepReadonlyArray1873<U>
  : T extends object
  ? DeepReadonlyObject1873<T>
  : T;

interface DeepReadonlyArray1873<T> extends ReadonlyArray<DeepReadonly1873<T>> {}

type DeepReadonlyObject1873<T> = {
  readonly [P in keyof T]: DeepReadonly1873<T[P]>;
};

type UnionToIntersection1873<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1873<T> = UnionToIntersection1873<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1873<T extends unknown[], V> = [...T, V];

type TuplifyUnion1873<T, L = LastOf1873<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1873<TuplifyUnion1873<Exclude<T, L>>, L>;

type DeepPartial1873<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1873<T[P]> }
  : T;

type Paths1873<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1873<K, Paths1873<T[K], Prev1873[D]>> : never }[keyof T]
  : never;

type Prev1873 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1873<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1873 {
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

type ConfigPaths1873 = Paths1873<NestedConfig1873>;

interface HeavyProps1873 {
  config: DeepPartial1873<NestedConfig1873>;
  path?: ConfigPaths1873;
}

const HeavyComponent1873 = memo(function HeavyComponent1873({ config }: HeavyProps1873) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1873) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1873 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1873: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1873.displayName = 'HeavyComponent1873';
export default HeavyComponent1873;
