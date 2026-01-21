'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1107<T> = T extends (infer U)[]
  ? DeepReadonlyArray1107<U>
  : T extends object
  ? DeepReadonlyObject1107<T>
  : T;

interface DeepReadonlyArray1107<T> extends ReadonlyArray<DeepReadonly1107<T>> {}

type DeepReadonlyObject1107<T> = {
  readonly [P in keyof T]: DeepReadonly1107<T[P]>;
};

type UnionToIntersection1107<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1107<T> = UnionToIntersection1107<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1107<T extends unknown[], V> = [...T, V];

type TuplifyUnion1107<T, L = LastOf1107<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1107<TuplifyUnion1107<Exclude<T, L>>, L>;

type DeepPartial1107<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1107<T[P]> }
  : T;

type Paths1107<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1107<K, Paths1107<T[K], Prev1107[D]>> : never }[keyof T]
  : never;

type Prev1107 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1107<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1107 {
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

type ConfigPaths1107 = Paths1107<NestedConfig1107>;

interface HeavyProps1107 {
  config: DeepPartial1107<NestedConfig1107>;
  path?: ConfigPaths1107;
}

const HeavyComponent1107 = memo(function HeavyComponent1107({ config }: HeavyProps1107) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1107) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1107 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1107: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1107.displayName = 'HeavyComponent1107';
export default HeavyComponent1107;
