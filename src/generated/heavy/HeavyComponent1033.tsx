'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1033<T> = T extends (infer U)[]
  ? DeepReadonlyArray1033<U>
  : T extends object
  ? DeepReadonlyObject1033<T>
  : T;

interface DeepReadonlyArray1033<T> extends ReadonlyArray<DeepReadonly1033<T>> {}

type DeepReadonlyObject1033<T> = {
  readonly [P in keyof T]: DeepReadonly1033<T[P]>;
};

type UnionToIntersection1033<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1033<T> = UnionToIntersection1033<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1033<T extends unknown[], V> = [...T, V];

type TuplifyUnion1033<T, L = LastOf1033<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1033<TuplifyUnion1033<Exclude<T, L>>, L>;

type DeepPartial1033<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1033<T[P]> }
  : T;

type Paths1033<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1033<K, Paths1033<T[K], Prev1033[D]>> : never }[keyof T]
  : never;

type Prev1033 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1033<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1033 {
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

type ConfigPaths1033 = Paths1033<NestedConfig1033>;

interface HeavyProps1033 {
  config: DeepPartial1033<NestedConfig1033>;
  path?: ConfigPaths1033;
}

const HeavyComponent1033 = memo(function HeavyComponent1033({ config }: HeavyProps1033) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1033) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1033 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1033: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1033.displayName = 'HeavyComponent1033';
export default HeavyComponent1033;
