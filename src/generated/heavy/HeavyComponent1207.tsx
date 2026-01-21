'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1207<T> = T extends (infer U)[]
  ? DeepReadonlyArray1207<U>
  : T extends object
  ? DeepReadonlyObject1207<T>
  : T;

interface DeepReadonlyArray1207<T> extends ReadonlyArray<DeepReadonly1207<T>> {}

type DeepReadonlyObject1207<T> = {
  readonly [P in keyof T]: DeepReadonly1207<T[P]>;
};

type UnionToIntersection1207<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1207<T> = UnionToIntersection1207<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1207<T extends unknown[], V> = [...T, V];

type TuplifyUnion1207<T, L = LastOf1207<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1207<TuplifyUnion1207<Exclude<T, L>>, L>;

type DeepPartial1207<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1207<T[P]> }
  : T;

type Paths1207<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1207<K, Paths1207<T[K], Prev1207[D]>> : never }[keyof T]
  : never;

type Prev1207 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1207<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1207 {
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

type ConfigPaths1207 = Paths1207<NestedConfig1207>;

interface HeavyProps1207 {
  config: DeepPartial1207<NestedConfig1207>;
  path?: ConfigPaths1207;
}

const HeavyComponent1207 = memo(function HeavyComponent1207({ config }: HeavyProps1207) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1207) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1207 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1207: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1207.displayName = 'HeavyComponent1207';
export default HeavyComponent1207;
