'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1181<T> = T extends (infer U)[]
  ? DeepReadonlyArray1181<U>
  : T extends object
  ? DeepReadonlyObject1181<T>
  : T;

interface DeepReadonlyArray1181<T> extends ReadonlyArray<DeepReadonly1181<T>> {}

type DeepReadonlyObject1181<T> = {
  readonly [P in keyof T]: DeepReadonly1181<T[P]>;
};

type UnionToIntersection1181<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1181<T> = UnionToIntersection1181<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1181<T extends unknown[], V> = [...T, V];

type TuplifyUnion1181<T, L = LastOf1181<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1181<TuplifyUnion1181<Exclude<T, L>>, L>;

type DeepPartial1181<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1181<T[P]> }
  : T;

type Paths1181<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1181<K, Paths1181<T[K], Prev1181[D]>> : never }[keyof T]
  : never;

type Prev1181 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1181<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1181 {
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

type ConfigPaths1181 = Paths1181<NestedConfig1181>;

interface HeavyProps1181 {
  config: DeepPartial1181<NestedConfig1181>;
  path?: ConfigPaths1181;
}

const HeavyComponent1181 = memo(function HeavyComponent1181({ config }: HeavyProps1181) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1181) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1181 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1181: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1181.displayName = 'HeavyComponent1181';
export default HeavyComponent1181;
