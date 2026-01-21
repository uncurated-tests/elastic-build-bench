'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2788<T> = T extends (infer U)[]
  ? DeepReadonlyArray2788<U>
  : T extends object
  ? DeepReadonlyObject2788<T>
  : T;

interface DeepReadonlyArray2788<T> extends ReadonlyArray<DeepReadonly2788<T>> {}

type DeepReadonlyObject2788<T> = {
  readonly [P in keyof T]: DeepReadonly2788<T[P]>;
};

type UnionToIntersection2788<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2788<T> = UnionToIntersection2788<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2788<T extends unknown[], V> = [...T, V];

type TuplifyUnion2788<T, L = LastOf2788<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2788<TuplifyUnion2788<Exclude<T, L>>, L>;

type DeepPartial2788<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2788<T[P]> }
  : T;

type Paths2788<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2788<K, Paths2788<T[K], Prev2788[D]>> : never }[keyof T]
  : never;

type Prev2788 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2788<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2788 {
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

type ConfigPaths2788 = Paths2788<NestedConfig2788>;

interface HeavyProps2788 {
  config: DeepPartial2788<NestedConfig2788>;
  path?: ConfigPaths2788;
}

const HeavyComponent2788 = memo(function HeavyComponent2788({ config }: HeavyProps2788) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2788) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2788 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2788: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2788.displayName = 'HeavyComponent2788';
export default HeavyComponent2788;
