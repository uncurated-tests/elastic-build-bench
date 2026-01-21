'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1293<T> = T extends (infer U)[]
  ? DeepReadonlyArray1293<U>
  : T extends object
  ? DeepReadonlyObject1293<T>
  : T;

interface DeepReadonlyArray1293<T> extends ReadonlyArray<DeepReadonly1293<T>> {}

type DeepReadonlyObject1293<T> = {
  readonly [P in keyof T]: DeepReadonly1293<T[P]>;
};

type UnionToIntersection1293<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1293<T> = UnionToIntersection1293<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1293<T extends unknown[], V> = [...T, V];

type TuplifyUnion1293<T, L = LastOf1293<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1293<TuplifyUnion1293<Exclude<T, L>>, L>;

type DeepPartial1293<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1293<T[P]> }
  : T;

type Paths1293<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1293<K, Paths1293<T[K], Prev1293[D]>> : never }[keyof T]
  : never;

type Prev1293 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1293<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1293 {
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

type ConfigPaths1293 = Paths1293<NestedConfig1293>;

interface HeavyProps1293 {
  config: DeepPartial1293<NestedConfig1293>;
  path?: ConfigPaths1293;
}

const HeavyComponent1293 = memo(function HeavyComponent1293({ config }: HeavyProps1293) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1293) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1293 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1293: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1293.displayName = 'HeavyComponent1293';
export default HeavyComponent1293;
