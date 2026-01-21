'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1073<T> = T extends (infer U)[]
  ? DeepReadonlyArray1073<U>
  : T extends object
  ? DeepReadonlyObject1073<T>
  : T;

interface DeepReadonlyArray1073<T> extends ReadonlyArray<DeepReadonly1073<T>> {}

type DeepReadonlyObject1073<T> = {
  readonly [P in keyof T]: DeepReadonly1073<T[P]>;
};

type UnionToIntersection1073<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1073<T> = UnionToIntersection1073<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1073<T extends unknown[], V> = [...T, V];

type TuplifyUnion1073<T, L = LastOf1073<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1073<TuplifyUnion1073<Exclude<T, L>>, L>;

type DeepPartial1073<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1073<T[P]> }
  : T;

type Paths1073<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1073<K, Paths1073<T[K], Prev1073[D]>> : never }[keyof T]
  : never;

type Prev1073 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1073<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1073 {
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

type ConfigPaths1073 = Paths1073<NestedConfig1073>;

interface HeavyProps1073 {
  config: DeepPartial1073<NestedConfig1073>;
  path?: ConfigPaths1073;
}

const HeavyComponent1073 = memo(function HeavyComponent1073({ config }: HeavyProps1073) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1073) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1073 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1073: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1073.displayName = 'HeavyComponent1073';
export default HeavyComponent1073;
