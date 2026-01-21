'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1749<T> = T extends (infer U)[]
  ? DeepReadonlyArray1749<U>
  : T extends object
  ? DeepReadonlyObject1749<T>
  : T;

interface DeepReadonlyArray1749<T> extends ReadonlyArray<DeepReadonly1749<T>> {}

type DeepReadonlyObject1749<T> = {
  readonly [P in keyof T]: DeepReadonly1749<T[P]>;
};

type UnionToIntersection1749<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1749<T> = UnionToIntersection1749<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1749<T extends unknown[], V> = [...T, V];

type TuplifyUnion1749<T, L = LastOf1749<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1749<TuplifyUnion1749<Exclude<T, L>>, L>;

type DeepPartial1749<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1749<T[P]> }
  : T;

type Paths1749<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1749<K, Paths1749<T[K], Prev1749[D]>> : never }[keyof T]
  : never;

type Prev1749 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1749<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1749 {
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

type ConfigPaths1749 = Paths1749<NestedConfig1749>;

interface HeavyProps1749 {
  config: DeepPartial1749<NestedConfig1749>;
  path?: ConfigPaths1749;
}

const HeavyComponent1749 = memo(function HeavyComponent1749({ config }: HeavyProps1749) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1749) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1749 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1749: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1749.displayName = 'HeavyComponent1749';
export default HeavyComponent1749;
