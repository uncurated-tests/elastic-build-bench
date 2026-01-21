'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3516<T> = T extends (infer U)[]
  ? DeepReadonlyArray3516<U>
  : T extends object
  ? DeepReadonlyObject3516<T>
  : T;

interface DeepReadonlyArray3516<T> extends ReadonlyArray<DeepReadonly3516<T>> {}

type DeepReadonlyObject3516<T> = {
  readonly [P in keyof T]: DeepReadonly3516<T[P]>;
};

type UnionToIntersection3516<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3516<T> = UnionToIntersection3516<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3516<T extends unknown[], V> = [...T, V];

type TuplifyUnion3516<T, L = LastOf3516<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3516<TuplifyUnion3516<Exclude<T, L>>, L>;

type DeepPartial3516<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3516<T[P]> }
  : T;

type Paths3516<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3516<K, Paths3516<T[K], Prev3516[D]>> : never }[keyof T]
  : never;

type Prev3516 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3516<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3516 {
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

type ConfigPaths3516 = Paths3516<NestedConfig3516>;

interface HeavyProps3516 {
  config: DeepPartial3516<NestedConfig3516>;
  path?: ConfigPaths3516;
}

const HeavyComponent3516 = memo(function HeavyComponent3516({ config }: HeavyProps3516) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3516) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3516 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3516: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3516.displayName = 'HeavyComponent3516';
export default HeavyComponent3516;
