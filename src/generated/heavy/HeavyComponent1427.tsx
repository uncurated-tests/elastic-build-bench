'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1427<T> = T extends (infer U)[]
  ? DeepReadonlyArray1427<U>
  : T extends object
  ? DeepReadonlyObject1427<T>
  : T;

interface DeepReadonlyArray1427<T> extends ReadonlyArray<DeepReadonly1427<T>> {}

type DeepReadonlyObject1427<T> = {
  readonly [P in keyof T]: DeepReadonly1427<T[P]>;
};

type UnionToIntersection1427<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1427<T> = UnionToIntersection1427<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1427<T extends unknown[], V> = [...T, V];

type TuplifyUnion1427<T, L = LastOf1427<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1427<TuplifyUnion1427<Exclude<T, L>>, L>;

type DeepPartial1427<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1427<T[P]> }
  : T;

type Paths1427<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1427<K, Paths1427<T[K], Prev1427[D]>> : never }[keyof T]
  : never;

type Prev1427 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1427<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1427 {
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

type ConfigPaths1427 = Paths1427<NestedConfig1427>;

interface HeavyProps1427 {
  config: DeepPartial1427<NestedConfig1427>;
  path?: ConfigPaths1427;
}

const HeavyComponent1427 = memo(function HeavyComponent1427({ config }: HeavyProps1427) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1427) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1427 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1427: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1427.displayName = 'HeavyComponent1427';
export default HeavyComponent1427;
