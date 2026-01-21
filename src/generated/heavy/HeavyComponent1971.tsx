'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1971<T> = T extends (infer U)[]
  ? DeepReadonlyArray1971<U>
  : T extends object
  ? DeepReadonlyObject1971<T>
  : T;

interface DeepReadonlyArray1971<T> extends ReadonlyArray<DeepReadonly1971<T>> {}

type DeepReadonlyObject1971<T> = {
  readonly [P in keyof T]: DeepReadonly1971<T[P]>;
};

type UnionToIntersection1971<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1971<T> = UnionToIntersection1971<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1971<T extends unknown[], V> = [...T, V];

type TuplifyUnion1971<T, L = LastOf1971<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1971<TuplifyUnion1971<Exclude<T, L>>, L>;

type DeepPartial1971<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1971<T[P]> }
  : T;

type Paths1971<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1971<K, Paths1971<T[K], Prev1971[D]>> : never }[keyof T]
  : never;

type Prev1971 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1971<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1971 {
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

type ConfigPaths1971 = Paths1971<NestedConfig1971>;

interface HeavyProps1971 {
  config: DeepPartial1971<NestedConfig1971>;
  path?: ConfigPaths1971;
}

const HeavyComponent1971 = memo(function HeavyComponent1971({ config }: HeavyProps1971) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1971) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1971 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1971: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1971.displayName = 'HeavyComponent1971';
export default HeavyComponent1971;
