'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly116<T> = T extends (infer U)[]
  ? DeepReadonlyArray116<U>
  : T extends object
  ? DeepReadonlyObject116<T>
  : T;

interface DeepReadonlyArray116<T> extends ReadonlyArray<DeepReadonly116<T>> {}

type DeepReadonlyObject116<T> = {
  readonly [P in keyof T]: DeepReadonly116<T[P]>;
};

type UnionToIntersection116<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf116<T> = UnionToIntersection116<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push116<T extends unknown[], V> = [...T, V];

type TuplifyUnion116<T, L = LastOf116<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push116<TuplifyUnion116<Exclude<T, L>>, L>;

type DeepPartial116<T> = T extends object
  ? { [P in keyof T]?: DeepPartial116<T[P]> }
  : T;

type Paths116<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join116<K, Paths116<T[K], Prev116[D]>> : never }[keyof T]
  : never;

type Prev116 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join116<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig116 {
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

type ConfigPaths116 = Paths116<NestedConfig116>;

interface HeavyProps116 {
  config: DeepPartial116<NestedConfig116>;
  path?: ConfigPaths116;
}

const HeavyComponent116 = memo(function HeavyComponent116({ config }: HeavyProps116) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 116) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-116 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H116: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent116.displayName = 'HeavyComponent116';
export default HeavyComponent116;
