'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3006<T> = T extends (infer U)[]
  ? DeepReadonlyArray3006<U>
  : T extends object
  ? DeepReadonlyObject3006<T>
  : T;

interface DeepReadonlyArray3006<T> extends ReadonlyArray<DeepReadonly3006<T>> {}

type DeepReadonlyObject3006<T> = {
  readonly [P in keyof T]: DeepReadonly3006<T[P]>;
};

type UnionToIntersection3006<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3006<T> = UnionToIntersection3006<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3006<T extends unknown[], V> = [...T, V];

type TuplifyUnion3006<T, L = LastOf3006<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3006<TuplifyUnion3006<Exclude<T, L>>, L>;

type DeepPartial3006<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3006<T[P]> }
  : T;

type Paths3006<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3006<K, Paths3006<T[K], Prev3006[D]>> : never }[keyof T]
  : never;

type Prev3006 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3006<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3006 {
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

type ConfigPaths3006 = Paths3006<NestedConfig3006>;

interface HeavyProps3006 {
  config: DeepPartial3006<NestedConfig3006>;
  path?: ConfigPaths3006;
}

const HeavyComponent3006 = memo(function HeavyComponent3006({ config }: HeavyProps3006) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3006) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3006 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3006: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3006.displayName = 'HeavyComponent3006';
export default HeavyComponent3006;
