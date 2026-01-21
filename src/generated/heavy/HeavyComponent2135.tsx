'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2135<T> = T extends (infer U)[]
  ? DeepReadonlyArray2135<U>
  : T extends object
  ? DeepReadonlyObject2135<T>
  : T;

interface DeepReadonlyArray2135<T> extends ReadonlyArray<DeepReadonly2135<T>> {}

type DeepReadonlyObject2135<T> = {
  readonly [P in keyof T]: DeepReadonly2135<T[P]>;
};

type UnionToIntersection2135<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2135<T> = UnionToIntersection2135<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2135<T extends unknown[], V> = [...T, V];

type TuplifyUnion2135<T, L = LastOf2135<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2135<TuplifyUnion2135<Exclude<T, L>>, L>;

type DeepPartial2135<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2135<T[P]> }
  : T;

type Paths2135<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2135<K, Paths2135<T[K], Prev2135[D]>> : never }[keyof T]
  : never;

type Prev2135 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2135<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2135 {
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

type ConfigPaths2135 = Paths2135<NestedConfig2135>;

interface HeavyProps2135 {
  config: DeepPartial2135<NestedConfig2135>;
  path?: ConfigPaths2135;
}

const HeavyComponent2135 = memo(function HeavyComponent2135({ config }: HeavyProps2135) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2135) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2135 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2135: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2135.displayName = 'HeavyComponent2135';
export default HeavyComponent2135;
