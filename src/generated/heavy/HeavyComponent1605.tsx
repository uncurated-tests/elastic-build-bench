'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1605<T> = T extends (infer U)[]
  ? DeepReadonlyArray1605<U>
  : T extends object
  ? DeepReadonlyObject1605<T>
  : T;

interface DeepReadonlyArray1605<T> extends ReadonlyArray<DeepReadonly1605<T>> {}

type DeepReadonlyObject1605<T> = {
  readonly [P in keyof T]: DeepReadonly1605<T[P]>;
};

type UnionToIntersection1605<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1605<T> = UnionToIntersection1605<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1605<T extends unknown[], V> = [...T, V];

type TuplifyUnion1605<T, L = LastOf1605<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1605<TuplifyUnion1605<Exclude<T, L>>, L>;

type DeepPartial1605<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1605<T[P]> }
  : T;

type Paths1605<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1605<K, Paths1605<T[K], Prev1605[D]>> : never }[keyof T]
  : never;

type Prev1605 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1605<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1605 {
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

type ConfigPaths1605 = Paths1605<NestedConfig1605>;

interface HeavyProps1605 {
  config: DeepPartial1605<NestedConfig1605>;
  path?: ConfigPaths1605;
}

const HeavyComponent1605 = memo(function HeavyComponent1605({ config }: HeavyProps1605) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1605) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1605 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1605: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1605.displayName = 'HeavyComponent1605';
export default HeavyComponent1605;
