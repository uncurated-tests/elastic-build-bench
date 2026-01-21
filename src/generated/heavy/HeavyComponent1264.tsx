'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1264<T> = T extends (infer U)[]
  ? DeepReadonlyArray1264<U>
  : T extends object
  ? DeepReadonlyObject1264<T>
  : T;

interface DeepReadonlyArray1264<T> extends ReadonlyArray<DeepReadonly1264<T>> {}

type DeepReadonlyObject1264<T> = {
  readonly [P in keyof T]: DeepReadonly1264<T[P]>;
};

type UnionToIntersection1264<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1264<T> = UnionToIntersection1264<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1264<T extends unknown[], V> = [...T, V];

type TuplifyUnion1264<T, L = LastOf1264<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1264<TuplifyUnion1264<Exclude<T, L>>, L>;

type DeepPartial1264<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1264<T[P]> }
  : T;

type Paths1264<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1264<K, Paths1264<T[K], Prev1264[D]>> : never }[keyof T]
  : never;

type Prev1264 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1264<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1264 {
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

type ConfigPaths1264 = Paths1264<NestedConfig1264>;

interface HeavyProps1264 {
  config: DeepPartial1264<NestedConfig1264>;
  path?: ConfigPaths1264;
}

const HeavyComponent1264 = memo(function HeavyComponent1264({ config }: HeavyProps1264) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1264) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1264 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1264: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1264.displayName = 'HeavyComponent1264';
export default HeavyComponent1264;
