'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3818<T> = T extends (infer U)[]
  ? DeepReadonlyArray3818<U>
  : T extends object
  ? DeepReadonlyObject3818<T>
  : T;

interface DeepReadonlyArray3818<T> extends ReadonlyArray<DeepReadonly3818<T>> {}

type DeepReadonlyObject3818<T> = {
  readonly [P in keyof T]: DeepReadonly3818<T[P]>;
};

type UnionToIntersection3818<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3818<T> = UnionToIntersection3818<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3818<T extends unknown[], V> = [...T, V];

type TuplifyUnion3818<T, L = LastOf3818<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3818<TuplifyUnion3818<Exclude<T, L>>, L>;

type DeepPartial3818<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3818<T[P]> }
  : T;

type Paths3818<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3818<K, Paths3818<T[K], Prev3818[D]>> : never }[keyof T]
  : never;

type Prev3818 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3818<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3818 {
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

type ConfigPaths3818 = Paths3818<NestedConfig3818>;

interface HeavyProps3818 {
  config: DeepPartial3818<NestedConfig3818>;
  path?: ConfigPaths3818;
}

const HeavyComponent3818 = memo(function HeavyComponent3818({ config }: HeavyProps3818) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3818) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3818 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3818: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3818.displayName = 'HeavyComponent3818';
export default HeavyComponent3818;
