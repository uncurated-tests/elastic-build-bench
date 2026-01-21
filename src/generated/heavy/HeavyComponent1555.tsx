'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1555<T> = T extends (infer U)[]
  ? DeepReadonlyArray1555<U>
  : T extends object
  ? DeepReadonlyObject1555<T>
  : T;

interface DeepReadonlyArray1555<T> extends ReadonlyArray<DeepReadonly1555<T>> {}

type DeepReadonlyObject1555<T> = {
  readonly [P in keyof T]: DeepReadonly1555<T[P]>;
};

type UnionToIntersection1555<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1555<T> = UnionToIntersection1555<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1555<T extends unknown[], V> = [...T, V];

type TuplifyUnion1555<T, L = LastOf1555<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1555<TuplifyUnion1555<Exclude<T, L>>, L>;

type DeepPartial1555<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1555<T[P]> }
  : T;

type Paths1555<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1555<K, Paths1555<T[K], Prev1555[D]>> : never }[keyof T]
  : never;

type Prev1555 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1555<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1555 {
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

type ConfigPaths1555 = Paths1555<NestedConfig1555>;

interface HeavyProps1555 {
  config: DeepPartial1555<NestedConfig1555>;
  path?: ConfigPaths1555;
}

const HeavyComponent1555 = memo(function HeavyComponent1555({ config }: HeavyProps1555) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1555) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1555 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1555: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1555.displayName = 'HeavyComponent1555';
export default HeavyComponent1555;
