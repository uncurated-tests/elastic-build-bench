'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1797<T> = T extends (infer U)[]
  ? DeepReadonlyArray1797<U>
  : T extends object
  ? DeepReadonlyObject1797<T>
  : T;

interface DeepReadonlyArray1797<T> extends ReadonlyArray<DeepReadonly1797<T>> {}

type DeepReadonlyObject1797<T> = {
  readonly [P in keyof T]: DeepReadonly1797<T[P]>;
};

type UnionToIntersection1797<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1797<T> = UnionToIntersection1797<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1797<T extends unknown[], V> = [...T, V];

type TuplifyUnion1797<T, L = LastOf1797<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1797<TuplifyUnion1797<Exclude<T, L>>, L>;

type DeepPartial1797<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1797<T[P]> }
  : T;

type Paths1797<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1797<K, Paths1797<T[K], Prev1797[D]>> : never }[keyof T]
  : never;

type Prev1797 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1797<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1797 {
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

type ConfigPaths1797 = Paths1797<NestedConfig1797>;

interface HeavyProps1797 {
  config: DeepPartial1797<NestedConfig1797>;
  path?: ConfigPaths1797;
}

const HeavyComponent1797 = memo(function HeavyComponent1797({ config }: HeavyProps1797) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1797) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1797 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1797: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1797.displayName = 'HeavyComponent1797';
export default HeavyComponent1797;
