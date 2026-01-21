'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1006<T> = T extends (infer U)[]
  ? DeepReadonlyArray1006<U>
  : T extends object
  ? DeepReadonlyObject1006<T>
  : T;

interface DeepReadonlyArray1006<T> extends ReadonlyArray<DeepReadonly1006<T>> {}

type DeepReadonlyObject1006<T> = {
  readonly [P in keyof T]: DeepReadonly1006<T[P]>;
};

type UnionToIntersection1006<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1006<T> = UnionToIntersection1006<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1006<T extends unknown[], V> = [...T, V];

type TuplifyUnion1006<T, L = LastOf1006<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1006<TuplifyUnion1006<Exclude<T, L>>, L>;

type DeepPartial1006<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1006<T[P]> }
  : T;

type Paths1006<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1006<K, Paths1006<T[K], Prev1006[D]>> : never }[keyof T]
  : never;

type Prev1006 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1006<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1006 {
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

type ConfigPaths1006 = Paths1006<NestedConfig1006>;

interface HeavyProps1006 {
  config: DeepPartial1006<NestedConfig1006>;
  path?: ConfigPaths1006;
}

const HeavyComponent1006 = memo(function HeavyComponent1006({ config }: HeavyProps1006) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1006) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1006 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1006: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1006.displayName = 'HeavyComponent1006';
export default HeavyComponent1006;
