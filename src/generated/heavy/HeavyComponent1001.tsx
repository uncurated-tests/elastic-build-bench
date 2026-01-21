'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1001<T> = T extends (infer U)[]
  ? DeepReadonlyArray1001<U>
  : T extends object
  ? DeepReadonlyObject1001<T>
  : T;

interface DeepReadonlyArray1001<T> extends ReadonlyArray<DeepReadonly1001<T>> {}

type DeepReadonlyObject1001<T> = {
  readonly [P in keyof T]: DeepReadonly1001<T[P]>;
};

type UnionToIntersection1001<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1001<T> = UnionToIntersection1001<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1001<T extends unknown[], V> = [...T, V];

type TuplifyUnion1001<T, L = LastOf1001<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1001<TuplifyUnion1001<Exclude<T, L>>, L>;

type DeepPartial1001<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1001<T[P]> }
  : T;

type Paths1001<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1001<K, Paths1001<T[K], Prev1001[D]>> : never }[keyof T]
  : never;

type Prev1001 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1001<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1001 {
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

type ConfigPaths1001 = Paths1001<NestedConfig1001>;

interface HeavyProps1001 {
  config: DeepPartial1001<NestedConfig1001>;
  path?: ConfigPaths1001;
}

const HeavyComponent1001 = memo(function HeavyComponent1001({ config }: HeavyProps1001) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1001) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1001 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1001: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1001.displayName = 'HeavyComponent1001';
export default HeavyComponent1001;
