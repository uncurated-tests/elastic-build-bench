'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2737<T> = T extends (infer U)[]
  ? DeepReadonlyArray2737<U>
  : T extends object
  ? DeepReadonlyObject2737<T>
  : T;

interface DeepReadonlyArray2737<T> extends ReadonlyArray<DeepReadonly2737<T>> {}

type DeepReadonlyObject2737<T> = {
  readonly [P in keyof T]: DeepReadonly2737<T[P]>;
};

type UnionToIntersection2737<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2737<T> = UnionToIntersection2737<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2737<T extends unknown[], V> = [...T, V];

type TuplifyUnion2737<T, L = LastOf2737<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2737<TuplifyUnion2737<Exclude<T, L>>, L>;

type DeepPartial2737<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2737<T[P]> }
  : T;

type Paths2737<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2737<K, Paths2737<T[K], Prev2737[D]>> : never }[keyof T]
  : never;

type Prev2737 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2737<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2737 {
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

type ConfigPaths2737 = Paths2737<NestedConfig2737>;

interface HeavyProps2737 {
  config: DeepPartial2737<NestedConfig2737>;
  path?: ConfigPaths2737;
}

const HeavyComponent2737 = memo(function HeavyComponent2737({ config }: HeavyProps2737) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2737) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2737 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2737: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2737.displayName = 'HeavyComponent2737';
export default HeavyComponent2737;
