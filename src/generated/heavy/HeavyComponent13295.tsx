'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13295<T> = T extends (infer U)[]
  ? DeepReadonlyArray13295<U>
  : T extends object
  ? DeepReadonlyObject13295<T>
  : T;

interface DeepReadonlyArray13295<T> extends ReadonlyArray<DeepReadonly13295<T>> {}

type DeepReadonlyObject13295<T> = {
  readonly [P in keyof T]: DeepReadonly13295<T[P]>;
};

type UnionToIntersection13295<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13295<T> = UnionToIntersection13295<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13295<T extends unknown[], V> = [...T, V];

type TuplifyUnion13295<T, L = LastOf13295<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13295<TuplifyUnion13295<Exclude<T, L>>, L>;

type DeepPartial13295<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13295<T[P]> }
  : T;

type Paths13295<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13295<K, Paths13295<T[K], Prev13295[D]>> : never }[keyof T]
  : never;

type Prev13295 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13295<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13295 {
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

type ConfigPaths13295 = Paths13295<NestedConfig13295>;

interface HeavyProps13295 {
  config: DeepPartial13295<NestedConfig13295>;
  path?: ConfigPaths13295;
}

const HeavyComponent13295 = memo(function HeavyComponent13295({ config }: HeavyProps13295) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13295) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13295 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13295: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13295.displayName = 'HeavyComponent13295';
export default HeavyComponent13295;
