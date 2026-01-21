'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3297<T> = T extends (infer U)[]
  ? DeepReadonlyArray3297<U>
  : T extends object
  ? DeepReadonlyObject3297<T>
  : T;

interface DeepReadonlyArray3297<T> extends ReadonlyArray<DeepReadonly3297<T>> {}

type DeepReadonlyObject3297<T> = {
  readonly [P in keyof T]: DeepReadonly3297<T[P]>;
};

type UnionToIntersection3297<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3297<T> = UnionToIntersection3297<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3297<T extends unknown[], V> = [...T, V];

type TuplifyUnion3297<T, L = LastOf3297<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3297<TuplifyUnion3297<Exclude<T, L>>, L>;

type DeepPartial3297<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3297<T[P]> }
  : T;

type Paths3297<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3297<K, Paths3297<T[K], Prev3297[D]>> : never }[keyof T]
  : never;

type Prev3297 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3297<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3297 {
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

type ConfigPaths3297 = Paths3297<NestedConfig3297>;

interface HeavyProps3297 {
  config: DeepPartial3297<NestedConfig3297>;
  path?: ConfigPaths3297;
}

const HeavyComponent3297 = memo(function HeavyComponent3297({ config }: HeavyProps3297) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3297) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3297 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3297: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3297.displayName = 'HeavyComponent3297';
export default HeavyComponent3297;
