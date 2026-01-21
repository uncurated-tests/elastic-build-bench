'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1764<T> = T extends (infer U)[]
  ? DeepReadonlyArray1764<U>
  : T extends object
  ? DeepReadonlyObject1764<T>
  : T;

interface DeepReadonlyArray1764<T> extends ReadonlyArray<DeepReadonly1764<T>> {}

type DeepReadonlyObject1764<T> = {
  readonly [P in keyof T]: DeepReadonly1764<T[P]>;
};

type UnionToIntersection1764<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1764<T> = UnionToIntersection1764<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1764<T extends unknown[], V> = [...T, V];

type TuplifyUnion1764<T, L = LastOf1764<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1764<TuplifyUnion1764<Exclude<T, L>>, L>;

type DeepPartial1764<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1764<T[P]> }
  : T;

type Paths1764<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1764<K, Paths1764<T[K], Prev1764[D]>> : never }[keyof T]
  : never;

type Prev1764 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1764<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1764 {
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

type ConfigPaths1764 = Paths1764<NestedConfig1764>;

interface HeavyProps1764 {
  config: DeepPartial1764<NestedConfig1764>;
  path?: ConfigPaths1764;
}

const HeavyComponent1764 = memo(function HeavyComponent1764({ config }: HeavyProps1764) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1764) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1764 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1764: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1764.displayName = 'HeavyComponent1764';
export default HeavyComponent1764;
