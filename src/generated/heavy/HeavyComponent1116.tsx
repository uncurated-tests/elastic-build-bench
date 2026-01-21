'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1116<T> = T extends (infer U)[]
  ? DeepReadonlyArray1116<U>
  : T extends object
  ? DeepReadonlyObject1116<T>
  : T;

interface DeepReadonlyArray1116<T> extends ReadonlyArray<DeepReadonly1116<T>> {}

type DeepReadonlyObject1116<T> = {
  readonly [P in keyof T]: DeepReadonly1116<T[P]>;
};

type UnionToIntersection1116<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1116<T> = UnionToIntersection1116<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1116<T extends unknown[], V> = [...T, V];

type TuplifyUnion1116<T, L = LastOf1116<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1116<TuplifyUnion1116<Exclude<T, L>>, L>;

type DeepPartial1116<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1116<T[P]> }
  : T;

type Paths1116<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1116<K, Paths1116<T[K], Prev1116[D]>> : never }[keyof T]
  : never;

type Prev1116 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1116<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1116 {
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

type ConfigPaths1116 = Paths1116<NestedConfig1116>;

interface HeavyProps1116 {
  config: DeepPartial1116<NestedConfig1116>;
  path?: ConfigPaths1116;
}

const HeavyComponent1116 = memo(function HeavyComponent1116({ config }: HeavyProps1116) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1116) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1116 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1116: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1116.displayName = 'HeavyComponent1116';
export default HeavyComponent1116;
