'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1281<T> = T extends (infer U)[]
  ? DeepReadonlyArray1281<U>
  : T extends object
  ? DeepReadonlyObject1281<T>
  : T;

interface DeepReadonlyArray1281<T> extends ReadonlyArray<DeepReadonly1281<T>> {}

type DeepReadonlyObject1281<T> = {
  readonly [P in keyof T]: DeepReadonly1281<T[P]>;
};

type UnionToIntersection1281<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1281<T> = UnionToIntersection1281<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1281<T extends unknown[], V> = [...T, V];

type TuplifyUnion1281<T, L = LastOf1281<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1281<TuplifyUnion1281<Exclude<T, L>>, L>;

type DeepPartial1281<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1281<T[P]> }
  : T;

type Paths1281<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1281<K, Paths1281<T[K], Prev1281[D]>> : never }[keyof T]
  : never;

type Prev1281 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1281<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1281 {
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

type ConfigPaths1281 = Paths1281<NestedConfig1281>;

interface HeavyProps1281 {
  config: DeepPartial1281<NestedConfig1281>;
  path?: ConfigPaths1281;
}

const HeavyComponent1281 = memo(function HeavyComponent1281({ config }: HeavyProps1281) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1281) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1281 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1281: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1281.displayName = 'HeavyComponent1281';
export default HeavyComponent1281;
