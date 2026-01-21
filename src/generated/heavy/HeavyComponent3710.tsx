'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3710<T> = T extends (infer U)[]
  ? DeepReadonlyArray3710<U>
  : T extends object
  ? DeepReadonlyObject3710<T>
  : T;

interface DeepReadonlyArray3710<T> extends ReadonlyArray<DeepReadonly3710<T>> {}

type DeepReadonlyObject3710<T> = {
  readonly [P in keyof T]: DeepReadonly3710<T[P]>;
};

type UnionToIntersection3710<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3710<T> = UnionToIntersection3710<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3710<T extends unknown[], V> = [...T, V];

type TuplifyUnion3710<T, L = LastOf3710<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3710<TuplifyUnion3710<Exclude<T, L>>, L>;

type DeepPartial3710<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3710<T[P]> }
  : T;

type Paths3710<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3710<K, Paths3710<T[K], Prev3710[D]>> : never }[keyof T]
  : never;

type Prev3710 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3710<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3710 {
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

type ConfigPaths3710 = Paths3710<NestedConfig3710>;

interface HeavyProps3710 {
  config: DeepPartial3710<NestedConfig3710>;
  path?: ConfigPaths3710;
}

const HeavyComponent3710 = memo(function HeavyComponent3710({ config }: HeavyProps3710) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3710) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3710 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3710: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3710.displayName = 'HeavyComponent3710';
export default HeavyComponent3710;
