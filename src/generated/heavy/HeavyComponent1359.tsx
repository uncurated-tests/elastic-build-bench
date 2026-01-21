'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1359<T> = T extends (infer U)[]
  ? DeepReadonlyArray1359<U>
  : T extends object
  ? DeepReadonlyObject1359<T>
  : T;

interface DeepReadonlyArray1359<T> extends ReadonlyArray<DeepReadonly1359<T>> {}

type DeepReadonlyObject1359<T> = {
  readonly [P in keyof T]: DeepReadonly1359<T[P]>;
};

type UnionToIntersection1359<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1359<T> = UnionToIntersection1359<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1359<T extends unknown[], V> = [...T, V];

type TuplifyUnion1359<T, L = LastOf1359<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1359<TuplifyUnion1359<Exclude<T, L>>, L>;

type DeepPartial1359<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1359<T[P]> }
  : T;

type Paths1359<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1359<K, Paths1359<T[K], Prev1359[D]>> : never }[keyof T]
  : never;

type Prev1359 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1359<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1359 {
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

type ConfigPaths1359 = Paths1359<NestedConfig1359>;

interface HeavyProps1359 {
  config: DeepPartial1359<NestedConfig1359>;
  path?: ConfigPaths1359;
}

const HeavyComponent1359 = memo(function HeavyComponent1359({ config }: HeavyProps1359) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1359) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1359 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1359: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1359.displayName = 'HeavyComponent1359';
export default HeavyComponent1359;
