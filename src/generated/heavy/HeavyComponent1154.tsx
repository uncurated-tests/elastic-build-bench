'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1154<T> = T extends (infer U)[]
  ? DeepReadonlyArray1154<U>
  : T extends object
  ? DeepReadonlyObject1154<T>
  : T;

interface DeepReadonlyArray1154<T> extends ReadonlyArray<DeepReadonly1154<T>> {}

type DeepReadonlyObject1154<T> = {
  readonly [P in keyof T]: DeepReadonly1154<T[P]>;
};

type UnionToIntersection1154<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1154<T> = UnionToIntersection1154<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1154<T extends unknown[], V> = [...T, V];

type TuplifyUnion1154<T, L = LastOf1154<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1154<TuplifyUnion1154<Exclude<T, L>>, L>;

type DeepPartial1154<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1154<T[P]> }
  : T;

type Paths1154<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1154<K, Paths1154<T[K], Prev1154[D]>> : never }[keyof T]
  : never;

type Prev1154 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1154<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1154 {
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

type ConfigPaths1154 = Paths1154<NestedConfig1154>;

interface HeavyProps1154 {
  config: DeepPartial1154<NestedConfig1154>;
  path?: ConfigPaths1154;
}

const HeavyComponent1154 = memo(function HeavyComponent1154({ config }: HeavyProps1154) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1154) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1154 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1154: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1154.displayName = 'HeavyComponent1154';
export default HeavyComponent1154;
