'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1080<T> = T extends (infer U)[]
  ? DeepReadonlyArray1080<U>
  : T extends object
  ? DeepReadonlyObject1080<T>
  : T;

interface DeepReadonlyArray1080<T> extends ReadonlyArray<DeepReadonly1080<T>> {}

type DeepReadonlyObject1080<T> = {
  readonly [P in keyof T]: DeepReadonly1080<T[P]>;
};

type UnionToIntersection1080<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1080<T> = UnionToIntersection1080<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1080<T extends unknown[], V> = [...T, V];

type TuplifyUnion1080<T, L = LastOf1080<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1080<TuplifyUnion1080<Exclude<T, L>>, L>;

type DeepPartial1080<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1080<T[P]> }
  : T;

type Paths1080<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1080<K, Paths1080<T[K], Prev1080[D]>> : never }[keyof T]
  : never;

type Prev1080 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1080<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1080 {
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

type ConfigPaths1080 = Paths1080<NestedConfig1080>;

interface HeavyProps1080 {
  config: DeepPartial1080<NestedConfig1080>;
  path?: ConfigPaths1080;
}

const HeavyComponent1080 = memo(function HeavyComponent1080({ config }: HeavyProps1080) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1080) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1080 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1080: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1080.displayName = 'HeavyComponent1080';
export default HeavyComponent1080;
