'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3627<T> = T extends (infer U)[]
  ? DeepReadonlyArray3627<U>
  : T extends object
  ? DeepReadonlyObject3627<T>
  : T;

interface DeepReadonlyArray3627<T> extends ReadonlyArray<DeepReadonly3627<T>> {}

type DeepReadonlyObject3627<T> = {
  readonly [P in keyof T]: DeepReadonly3627<T[P]>;
};

type UnionToIntersection3627<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3627<T> = UnionToIntersection3627<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3627<T extends unknown[], V> = [...T, V];

type TuplifyUnion3627<T, L = LastOf3627<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3627<TuplifyUnion3627<Exclude<T, L>>, L>;

type DeepPartial3627<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3627<T[P]> }
  : T;

type Paths3627<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3627<K, Paths3627<T[K], Prev3627[D]>> : never }[keyof T]
  : never;

type Prev3627 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3627<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3627 {
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

type ConfigPaths3627 = Paths3627<NestedConfig3627>;

interface HeavyProps3627 {
  config: DeepPartial3627<NestedConfig3627>;
  path?: ConfigPaths3627;
}

const HeavyComponent3627 = memo(function HeavyComponent3627({ config }: HeavyProps3627) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3627) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3627 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3627: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3627.displayName = 'HeavyComponent3627';
export default HeavyComponent3627;
