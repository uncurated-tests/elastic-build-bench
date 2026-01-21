'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2778<T> = T extends (infer U)[]
  ? DeepReadonlyArray2778<U>
  : T extends object
  ? DeepReadonlyObject2778<T>
  : T;

interface DeepReadonlyArray2778<T> extends ReadonlyArray<DeepReadonly2778<T>> {}

type DeepReadonlyObject2778<T> = {
  readonly [P in keyof T]: DeepReadonly2778<T[P]>;
};

type UnionToIntersection2778<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2778<T> = UnionToIntersection2778<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2778<T extends unknown[], V> = [...T, V];

type TuplifyUnion2778<T, L = LastOf2778<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2778<TuplifyUnion2778<Exclude<T, L>>, L>;

type DeepPartial2778<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2778<T[P]> }
  : T;

type Paths2778<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2778<K, Paths2778<T[K], Prev2778[D]>> : never }[keyof T]
  : never;

type Prev2778 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2778<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2778 {
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

type ConfigPaths2778 = Paths2778<NestedConfig2778>;

interface HeavyProps2778 {
  config: DeepPartial2778<NestedConfig2778>;
  path?: ConfigPaths2778;
}

const HeavyComponent2778 = memo(function HeavyComponent2778({ config }: HeavyProps2778) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2778) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2778 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2778: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2778.displayName = 'HeavyComponent2778';
export default HeavyComponent2778;
