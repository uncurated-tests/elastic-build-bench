'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2550<T> = T extends (infer U)[]
  ? DeepReadonlyArray2550<U>
  : T extends object
  ? DeepReadonlyObject2550<T>
  : T;

interface DeepReadonlyArray2550<T> extends ReadonlyArray<DeepReadonly2550<T>> {}

type DeepReadonlyObject2550<T> = {
  readonly [P in keyof T]: DeepReadonly2550<T[P]>;
};

type UnionToIntersection2550<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2550<T> = UnionToIntersection2550<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2550<T extends unknown[], V> = [...T, V];

type TuplifyUnion2550<T, L = LastOf2550<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2550<TuplifyUnion2550<Exclude<T, L>>, L>;

type DeepPartial2550<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2550<T[P]> }
  : T;

type Paths2550<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2550<K, Paths2550<T[K], Prev2550[D]>> : never }[keyof T]
  : never;

type Prev2550 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2550<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2550 {
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

type ConfigPaths2550 = Paths2550<NestedConfig2550>;

interface HeavyProps2550 {
  config: DeepPartial2550<NestedConfig2550>;
  path?: ConfigPaths2550;
}

const HeavyComponent2550 = memo(function HeavyComponent2550({ config }: HeavyProps2550) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2550) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2550 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2550: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2550.displayName = 'HeavyComponent2550';
export default HeavyComponent2550;
