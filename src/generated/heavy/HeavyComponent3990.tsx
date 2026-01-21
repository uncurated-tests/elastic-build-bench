'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3990<T> = T extends (infer U)[]
  ? DeepReadonlyArray3990<U>
  : T extends object
  ? DeepReadonlyObject3990<T>
  : T;

interface DeepReadonlyArray3990<T> extends ReadonlyArray<DeepReadonly3990<T>> {}

type DeepReadonlyObject3990<T> = {
  readonly [P in keyof T]: DeepReadonly3990<T[P]>;
};

type UnionToIntersection3990<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3990<T> = UnionToIntersection3990<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3990<T extends unknown[], V> = [...T, V];

type TuplifyUnion3990<T, L = LastOf3990<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3990<TuplifyUnion3990<Exclude<T, L>>, L>;

type DeepPartial3990<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3990<T[P]> }
  : T;

type Paths3990<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3990<K, Paths3990<T[K], Prev3990[D]>> : never }[keyof T]
  : never;

type Prev3990 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3990<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3990 {
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

type ConfigPaths3990 = Paths3990<NestedConfig3990>;

interface HeavyProps3990 {
  config: DeepPartial3990<NestedConfig3990>;
  path?: ConfigPaths3990;
}

const HeavyComponent3990 = memo(function HeavyComponent3990({ config }: HeavyProps3990) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3990) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3990 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3990: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3990.displayName = 'HeavyComponent3990';
export default HeavyComponent3990;
