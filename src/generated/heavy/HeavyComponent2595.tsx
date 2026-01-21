'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2595<T> = T extends (infer U)[]
  ? DeepReadonlyArray2595<U>
  : T extends object
  ? DeepReadonlyObject2595<T>
  : T;

interface DeepReadonlyArray2595<T> extends ReadonlyArray<DeepReadonly2595<T>> {}

type DeepReadonlyObject2595<T> = {
  readonly [P in keyof T]: DeepReadonly2595<T[P]>;
};

type UnionToIntersection2595<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2595<T> = UnionToIntersection2595<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2595<T extends unknown[], V> = [...T, V];

type TuplifyUnion2595<T, L = LastOf2595<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2595<TuplifyUnion2595<Exclude<T, L>>, L>;

type DeepPartial2595<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2595<T[P]> }
  : T;

type Paths2595<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2595<K, Paths2595<T[K], Prev2595[D]>> : never }[keyof T]
  : never;

type Prev2595 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2595<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2595 {
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

type ConfigPaths2595 = Paths2595<NestedConfig2595>;

interface HeavyProps2595 {
  config: DeepPartial2595<NestedConfig2595>;
  path?: ConfigPaths2595;
}

const HeavyComponent2595 = memo(function HeavyComponent2595({ config }: HeavyProps2595) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2595) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2595 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2595: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2595.displayName = 'HeavyComponent2595';
export default HeavyComponent2595;
