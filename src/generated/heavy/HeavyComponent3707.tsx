'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3707<T> = T extends (infer U)[]
  ? DeepReadonlyArray3707<U>
  : T extends object
  ? DeepReadonlyObject3707<T>
  : T;

interface DeepReadonlyArray3707<T> extends ReadonlyArray<DeepReadonly3707<T>> {}

type DeepReadonlyObject3707<T> = {
  readonly [P in keyof T]: DeepReadonly3707<T[P]>;
};

type UnionToIntersection3707<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3707<T> = UnionToIntersection3707<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3707<T extends unknown[], V> = [...T, V];

type TuplifyUnion3707<T, L = LastOf3707<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3707<TuplifyUnion3707<Exclude<T, L>>, L>;

type DeepPartial3707<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3707<T[P]> }
  : T;

type Paths3707<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3707<K, Paths3707<T[K], Prev3707[D]>> : never }[keyof T]
  : never;

type Prev3707 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3707<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3707 {
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

type ConfigPaths3707 = Paths3707<NestedConfig3707>;

interface HeavyProps3707 {
  config: DeepPartial3707<NestedConfig3707>;
  path?: ConfigPaths3707;
}

const HeavyComponent3707 = memo(function HeavyComponent3707({ config }: HeavyProps3707) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3707) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3707 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3707: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3707.displayName = 'HeavyComponent3707';
export default HeavyComponent3707;
