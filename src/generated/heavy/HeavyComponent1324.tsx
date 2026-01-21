'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1324<T> = T extends (infer U)[]
  ? DeepReadonlyArray1324<U>
  : T extends object
  ? DeepReadonlyObject1324<T>
  : T;

interface DeepReadonlyArray1324<T> extends ReadonlyArray<DeepReadonly1324<T>> {}

type DeepReadonlyObject1324<T> = {
  readonly [P in keyof T]: DeepReadonly1324<T[P]>;
};

type UnionToIntersection1324<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1324<T> = UnionToIntersection1324<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1324<T extends unknown[], V> = [...T, V];

type TuplifyUnion1324<T, L = LastOf1324<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1324<TuplifyUnion1324<Exclude<T, L>>, L>;

type DeepPartial1324<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1324<T[P]> }
  : T;

type Paths1324<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1324<K, Paths1324<T[K], Prev1324[D]>> : never }[keyof T]
  : never;

type Prev1324 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1324<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1324 {
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

type ConfigPaths1324 = Paths1324<NestedConfig1324>;

interface HeavyProps1324 {
  config: DeepPartial1324<NestedConfig1324>;
  path?: ConfigPaths1324;
}

const HeavyComponent1324 = memo(function HeavyComponent1324({ config }: HeavyProps1324) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1324) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1324 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1324: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1324.displayName = 'HeavyComponent1324';
export default HeavyComponent1324;
