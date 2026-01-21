'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1292<T> = T extends (infer U)[]
  ? DeepReadonlyArray1292<U>
  : T extends object
  ? DeepReadonlyObject1292<T>
  : T;

interface DeepReadonlyArray1292<T> extends ReadonlyArray<DeepReadonly1292<T>> {}

type DeepReadonlyObject1292<T> = {
  readonly [P in keyof T]: DeepReadonly1292<T[P]>;
};

type UnionToIntersection1292<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1292<T> = UnionToIntersection1292<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1292<T extends unknown[], V> = [...T, V];

type TuplifyUnion1292<T, L = LastOf1292<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1292<TuplifyUnion1292<Exclude<T, L>>, L>;

type DeepPartial1292<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1292<T[P]> }
  : T;

type Paths1292<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1292<K, Paths1292<T[K], Prev1292[D]>> : never }[keyof T]
  : never;

type Prev1292 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1292<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1292 {
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

type ConfigPaths1292 = Paths1292<NestedConfig1292>;

interface HeavyProps1292 {
  config: DeepPartial1292<NestedConfig1292>;
  path?: ConfigPaths1292;
}

const HeavyComponent1292 = memo(function HeavyComponent1292({ config }: HeavyProps1292) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1292) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1292 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1292: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1292.displayName = 'HeavyComponent1292';
export default HeavyComponent1292;
