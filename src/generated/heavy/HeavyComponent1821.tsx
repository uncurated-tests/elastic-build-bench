'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1821<T> = T extends (infer U)[]
  ? DeepReadonlyArray1821<U>
  : T extends object
  ? DeepReadonlyObject1821<T>
  : T;

interface DeepReadonlyArray1821<T> extends ReadonlyArray<DeepReadonly1821<T>> {}

type DeepReadonlyObject1821<T> = {
  readonly [P in keyof T]: DeepReadonly1821<T[P]>;
};

type UnionToIntersection1821<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1821<T> = UnionToIntersection1821<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1821<T extends unknown[], V> = [...T, V];

type TuplifyUnion1821<T, L = LastOf1821<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1821<TuplifyUnion1821<Exclude<T, L>>, L>;

type DeepPartial1821<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1821<T[P]> }
  : T;

type Paths1821<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1821<K, Paths1821<T[K], Prev1821[D]>> : never }[keyof T]
  : never;

type Prev1821 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1821<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1821 {
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

type ConfigPaths1821 = Paths1821<NestedConfig1821>;

interface HeavyProps1821 {
  config: DeepPartial1821<NestedConfig1821>;
  path?: ConfigPaths1821;
}

const HeavyComponent1821 = memo(function HeavyComponent1821({ config }: HeavyProps1821) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1821) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1821 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1821: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1821.displayName = 'HeavyComponent1821';
export default HeavyComponent1821;
