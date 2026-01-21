'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1106<T> = T extends (infer U)[]
  ? DeepReadonlyArray1106<U>
  : T extends object
  ? DeepReadonlyObject1106<T>
  : T;

interface DeepReadonlyArray1106<T> extends ReadonlyArray<DeepReadonly1106<T>> {}

type DeepReadonlyObject1106<T> = {
  readonly [P in keyof T]: DeepReadonly1106<T[P]>;
};

type UnionToIntersection1106<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1106<T> = UnionToIntersection1106<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1106<T extends unknown[], V> = [...T, V];

type TuplifyUnion1106<T, L = LastOf1106<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1106<TuplifyUnion1106<Exclude<T, L>>, L>;

type DeepPartial1106<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1106<T[P]> }
  : T;

type Paths1106<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1106<K, Paths1106<T[K], Prev1106[D]>> : never }[keyof T]
  : never;

type Prev1106 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1106<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1106 {
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

type ConfigPaths1106 = Paths1106<NestedConfig1106>;

interface HeavyProps1106 {
  config: DeepPartial1106<NestedConfig1106>;
  path?: ConfigPaths1106;
}

const HeavyComponent1106 = memo(function HeavyComponent1106({ config }: HeavyProps1106) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1106) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1106 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1106: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1106.displayName = 'HeavyComponent1106';
export default HeavyComponent1106;
