'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2626<T> = T extends (infer U)[]
  ? DeepReadonlyArray2626<U>
  : T extends object
  ? DeepReadonlyObject2626<T>
  : T;

interface DeepReadonlyArray2626<T> extends ReadonlyArray<DeepReadonly2626<T>> {}

type DeepReadonlyObject2626<T> = {
  readonly [P in keyof T]: DeepReadonly2626<T[P]>;
};

type UnionToIntersection2626<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2626<T> = UnionToIntersection2626<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2626<T extends unknown[], V> = [...T, V];

type TuplifyUnion2626<T, L = LastOf2626<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2626<TuplifyUnion2626<Exclude<T, L>>, L>;

type DeepPartial2626<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2626<T[P]> }
  : T;

type Paths2626<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2626<K, Paths2626<T[K], Prev2626[D]>> : never }[keyof T]
  : never;

type Prev2626 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2626<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2626 {
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

type ConfigPaths2626 = Paths2626<NestedConfig2626>;

interface HeavyProps2626 {
  config: DeepPartial2626<NestedConfig2626>;
  path?: ConfigPaths2626;
}

const HeavyComponent2626 = memo(function HeavyComponent2626({ config }: HeavyProps2626) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2626) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2626 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2626: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2626.displayName = 'HeavyComponent2626';
export default HeavyComponent2626;
