'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3514<T> = T extends (infer U)[]
  ? DeepReadonlyArray3514<U>
  : T extends object
  ? DeepReadonlyObject3514<T>
  : T;

interface DeepReadonlyArray3514<T> extends ReadonlyArray<DeepReadonly3514<T>> {}

type DeepReadonlyObject3514<T> = {
  readonly [P in keyof T]: DeepReadonly3514<T[P]>;
};

type UnionToIntersection3514<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3514<T> = UnionToIntersection3514<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3514<T extends unknown[], V> = [...T, V];

type TuplifyUnion3514<T, L = LastOf3514<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3514<TuplifyUnion3514<Exclude<T, L>>, L>;

type DeepPartial3514<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3514<T[P]> }
  : T;

type Paths3514<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3514<K, Paths3514<T[K], Prev3514[D]>> : never }[keyof T]
  : never;

type Prev3514 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3514<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3514 {
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

type ConfigPaths3514 = Paths3514<NestedConfig3514>;

interface HeavyProps3514 {
  config: DeepPartial3514<NestedConfig3514>;
  path?: ConfigPaths3514;
}

const HeavyComponent3514 = memo(function HeavyComponent3514({ config }: HeavyProps3514) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3514) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3514 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3514: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3514.displayName = 'HeavyComponent3514';
export default HeavyComponent3514;
