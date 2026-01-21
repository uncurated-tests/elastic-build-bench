'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2659<T> = T extends (infer U)[]
  ? DeepReadonlyArray2659<U>
  : T extends object
  ? DeepReadonlyObject2659<T>
  : T;

interface DeepReadonlyArray2659<T> extends ReadonlyArray<DeepReadonly2659<T>> {}

type DeepReadonlyObject2659<T> = {
  readonly [P in keyof T]: DeepReadonly2659<T[P]>;
};

type UnionToIntersection2659<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2659<T> = UnionToIntersection2659<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2659<T extends unknown[], V> = [...T, V];

type TuplifyUnion2659<T, L = LastOf2659<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2659<TuplifyUnion2659<Exclude<T, L>>, L>;

type DeepPartial2659<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2659<T[P]> }
  : T;

type Paths2659<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2659<K, Paths2659<T[K], Prev2659[D]>> : never }[keyof T]
  : never;

type Prev2659 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2659<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2659 {
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

type ConfigPaths2659 = Paths2659<NestedConfig2659>;

interface HeavyProps2659 {
  config: DeepPartial2659<NestedConfig2659>;
  path?: ConfigPaths2659;
}

const HeavyComponent2659 = memo(function HeavyComponent2659({ config }: HeavyProps2659) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2659) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2659 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2659: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2659.displayName = 'HeavyComponent2659';
export default HeavyComponent2659;
