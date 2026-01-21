'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1015<T> = T extends (infer U)[]
  ? DeepReadonlyArray1015<U>
  : T extends object
  ? DeepReadonlyObject1015<T>
  : T;

interface DeepReadonlyArray1015<T> extends ReadonlyArray<DeepReadonly1015<T>> {}

type DeepReadonlyObject1015<T> = {
  readonly [P in keyof T]: DeepReadonly1015<T[P]>;
};

type UnionToIntersection1015<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1015<T> = UnionToIntersection1015<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1015<T extends unknown[], V> = [...T, V];

type TuplifyUnion1015<T, L = LastOf1015<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1015<TuplifyUnion1015<Exclude<T, L>>, L>;

type DeepPartial1015<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1015<T[P]> }
  : T;

type Paths1015<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1015<K, Paths1015<T[K], Prev1015[D]>> : never }[keyof T]
  : never;

type Prev1015 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1015<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1015 {
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

type ConfigPaths1015 = Paths1015<NestedConfig1015>;

interface HeavyProps1015 {
  config: DeepPartial1015<NestedConfig1015>;
  path?: ConfigPaths1015;
}

const HeavyComponent1015 = memo(function HeavyComponent1015({ config }: HeavyProps1015) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1015) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1015 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1015: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1015.displayName = 'HeavyComponent1015';
export default HeavyComponent1015;
