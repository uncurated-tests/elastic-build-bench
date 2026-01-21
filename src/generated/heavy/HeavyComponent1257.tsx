'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1257<T> = T extends (infer U)[]
  ? DeepReadonlyArray1257<U>
  : T extends object
  ? DeepReadonlyObject1257<T>
  : T;

interface DeepReadonlyArray1257<T> extends ReadonlyArray<DeepReadonly1257<T>> {}

type DeepReadonlyObject1257<T> = {
  readonly [P in keyof T]: DeepReadonly1257<T[P]>;
};

type UnionToIntersection1257<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1257<T> = UnionToIntersection1257<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1257<T extends unknown[], V> = [...T, V];

type TuplifyUnion1257<T, L = LastOf1257<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1257<TuplifyUnion1257<Exclude<T, L>>, L>;

type DeepPartial1257<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1257<T[P]> }
  : T;

type Paths1257<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1257<K, Paths1257<T[K], Prev1257[D]>> : never }[keyof T]
  : never;

type Prev1257 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1257<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1257 {
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

type ConfigPaths1257 = Paths1257<NestedConfig1257>;

interface HeavyProps1257 {
  config: DeepPartial1257<NestedConfig1257>;
  path?: ConfigPaths1257;
}

const HeavyComponent1257 = memo(function HeavyComponent1257({ config }: HeavyProps1257) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1257) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1257 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1257: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1257.displayName = 'HeavyComponent1257';
export default HeavyComponent1257;
