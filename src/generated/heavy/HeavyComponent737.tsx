'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly737<T> = T extends (infer U)[]
  ? DeepReadonlyArray737<U>
  : T extends object
  ? DeepReadonlyObject737<T>
  : T;

interface DeepReadonlyArray737<T> extends ReadonlyArray<DeepReadonly737<T>> {}

type DeepReadonlyObject737<T> = {
  readonly [P in keyof T]: DeepReadonly737<T[P]>;
};

type UnionToIntersection737<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf737<T> = UnionToIntersection737<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push737<T extends unknown[], V> = [...T, V];

type TuplifyUnion737<T, L = LastOf737<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push737<TuplifyUnion737<Exclude<T, L>>, L>;

type DeepPartial737<T> = T extends object
  ? { [P in keyof T]?: DeepPartial737<T[P]> }
  : T;

type Paths737<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join737<K, Paths737<T[K], Prev737[D]>> : never }[keyof T]
  : never;

type Prev737 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join737<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig737 {
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

type ConfigPaths737 = Paths737<NestedConfig737>;

interface HeavyProps737 {
  config: DeepPartial737<NestedConfig737>;
  path?: ConfigPaths737;
}

const HeavyComponent737 = memo(function HeavyComponent737({ config }: HeavyProps737) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 737) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-737 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H737: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent737.displayName = 'HeavyComponent737';
export default HeavyComponent737;
