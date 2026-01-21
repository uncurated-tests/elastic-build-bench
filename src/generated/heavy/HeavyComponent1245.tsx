'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1245<T> = T extends (infer U)[]
  ? DeepReadonlyArray1245<U>
  : T extends object
  ? DeepReadonlyObject1245<T>
  : T;

interface DeepReadonlyArray1245<T> extends ReadonlyArray<DeepReadonly1245<T>> {}

type DeepReadonlyObject1245<T> = {
  readonly [P in keyof T]: DeepReadonly1245<T[P]>;
};

type UnionToIntersection1245<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1245<T> = UnionToIntersection1245<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1245<T extends unknown[], V> = [...T, V];

type TuplifyUnion1245<T, L = LastOf1245<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1245<TuplifyUnion1245<Exclude<T, L>>, L>;

type DeepPartial1245<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1245<T[P]> }
  : T;

type Paths1245<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1245<K, Paths1245<T[K], Prev1245[D]>> : never }[keyof T]
  : never;

type Prev1245 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1245<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1245 {
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

type ConfigPaths1245 = Paths1245<NestedConfig1245>;

interface HeavyProps1245 {
  config: DeepPartial1245<NestedConfig1245>;
  path?: ConfigPaths1245;
}

const HeavyComponent1245 = memo(function HeavyComponent1245({ config }: HeavyProps1245) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1245) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1245 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1245: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1245.displayName = 'HeavyComponent1245';
export default HeavyComponent1245;
