'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1424<T> = T extends (infer U)[]
  ? DeepReadonlyArray1424<U>
  : T extends object
  ? DeepReadonlyObject1424<T>
  : T;

interface DeepReadonlyArray1424<T> extends ReadonlyArray<DeepReadonly1424<T>> {}

type DeepReadonlyObject1424<T> = {
  readonly [P in keyof T]: DeepReadonly1424<T[P]>;
};

type UnionToIntersection1424<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1424<T> = UnionToIntersection1424<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1424<T extends unknown[], V> = [...T, V];

type TuplifyUnion1424<T, L = LastOf1424<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1424<TuplifyUnion1424<Exclude<T, L>>, L>;

type DeepPartial1424<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1424<T[P]> }
  : T;

type Paths1424<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1424<K, Paths1424<T[K], Prev1424[D]>> : never }[keyof T]
  : never;

type Prev1424 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1424<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1424 {
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

type ConfigPaths1424 = Paths1424<NestedConfig1424>;

interface HeavyProps1424 {
  config: DeepPartial1424<NestedConfig1424>;
  path?: ConfigPaths1424;
}

const HeavyComponent1424 = memo(function HeavyComponent1424({ config }: HeavyProps1424) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1424) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1424 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1424: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1424.displayName = 'HeavyComponent1424';
export default HeavyComponent1424;
