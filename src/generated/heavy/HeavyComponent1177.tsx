'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1177<T> = T extends (infer U)[]
  ? DeepReadonlyArray1177<U>
  : T extends object
  ? DeepReadonlyObject1177<T>
  : T;

interface DeepReadonlyArray1177<T> extends ReadonlyArray<DeepReadonly1177<T>> {}

type DeepReadonlyObject1177<T> = {
  readonly [P in keyof T]: DeepReadonly1177<T[P]>;
};

type UnionToIntersection1177<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1177<T> = UnionToIntersection1177<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1177<T extends unknown[], V> = [...T, V];

type TuplifyUnion1177<T, L = LastOf1177<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1177<TuplifyUnion1177<Exclude<T, L>>, L>;

type DeepPartial1177<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1177<T[P]> }
  : T;

type Paths1177<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1177<K, Paths1177<T[K], Prev1177[D]>> : never }[keyof T]
  : never;

type Prev1177 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1177<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1177 {
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

type ConfigPaths1177 = Paths1177<NestedConfig1177>;

interface HeavyProps1177 {
  config: DeepPartial1177<NestedConfig1177>;
  path?: ConfigPaths1177;
}

const HeavyComponent1177 = memo(function HeavyComponent1177({ config }: HeavyProps1177) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1177) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1177 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1177: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1177.displayName = 'HeavyComponent1177';
export default HeavyComponent1177;
