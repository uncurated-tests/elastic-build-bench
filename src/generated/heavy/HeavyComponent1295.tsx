'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1295<T> = T extends (infer U)[]
  ? DeepReadonlyArray1295<U>
  : T extends object
  ? DeepReadonlyObject1295<T>
  : T;

interface DeepReadonlyArray1295<T> extends ReadonlyArray<DeepReadonly1295<T>> {}

type DeepReadonlyObject1295<T> = {
  readonly [P in keyof T]: DeepReadonly1295<T[P]>;
};

type UnionToIntersection1295<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1295<T> = UnionToIntersection1295<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1295<T extends unknown[], V> = [...T, V];

type TuplifyUnion1295<T, L = LastOf1295<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1295<TuplifyUnion1295<Exclude<T, L>>, L>;

type DeepPartial1295<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1295<T[P]> }
  : T;

type Paths1295<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1295<K, Paths1295<T[K], Prev1295[D]>> : never }[keyof T]
  : never;

type Prev1295 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1295<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1295 {
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

type ConfigPaths1295 = Paths1295<NestedConfig1295>;

interface HeavyProps1295 {
  config: DeepPartial1295<NestedConfig1295>;
  path?: ConfigPaths1295;
}

const HeavyComponent1295 = memo(function HeavyComponent1295({ config }: HeavyProps1295) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1295) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1295 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1295: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1295.displayName = 'HeavyComponent1295';
export default HeavyComponent1295;
