'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1096<T> = T extends (infer U)[]
  ? DeepReadonlyArray1096<U>
  : T extends object
  ? DeepReadonlyObject1096<T>
  : T;

interface DeepReadonlyArray1096<T> extends ReadonlyArray<DeepReadonly1096<T>> {}

type DeepReadonlyObject1096<T> = {
  readonly [P in keyof T]: DeepReadonly1096<T[P]>;
};

type UnionToIntersection1096<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1096<T> = UnionToIntersection1096<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1096<T extends unknown[], V> = [...T, V];

type TuplifyUnion1096<T, L = LastOf1096<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1096<TuplifyUnion1096<Exclude<T, L>>, L>;

type DeepPartial1096<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1096<T[P]> }
  : T;

type Paths1096<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1096<K, Paths1096<T[K], Prev1096[D]>> : never }[keyof T]
  : never;

type Prev1096 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1096<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1096 {
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

type ConfigPaths1096 = Paths1096<NestedConfig1096>;

interface HeavyProps1096 {
  config: DeepPartial1096<NestedConfig1096>;
  path?: ConfigPaths1096;
}

const HeavyComponent1096 = memo(function HeavyComponent1096({ config }: HeavyProps1096) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1096) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1096 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1096: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1096.displayName = 'HeavyComponent1096';
export default HeavyComponent1096;
