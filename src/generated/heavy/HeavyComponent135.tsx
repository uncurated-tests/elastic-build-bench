'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly135<T> = T extends (infer U)[]
  ? DeepReadonlyArray135<U>
  : T extends object
  ? DeepReadonlyObject135<T>
  : T;

interface DeepReadonlyArray135<T> extends ReadonlyArray<DeepReadonly135<T>> {}

type DeepReadonlyObject135<T> = {
  readonly [P in keyof T]: DeepReadonly135<T[P]>;
};

type UnionToIntersection135<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf135<T> = UnionToIntersection135<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push135<T extends unknown[], V> = [...T, V];

type TuplifyUnion135<T, L = LastOf135<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push135<TuplifyUnion135<Exclude<T, L>>, L>;

type DeepPartial135<T> = T extends object
  ? { [P in keyof T]?: DeepPartial135<T[P]> }
  : T;

type Paths135<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join135<K, Paths135<T[K], Prev135[D]>> : never }[keyof T]
  : never;

type Prev135 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join135<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig135 {
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

type ConfigPaths135 = Paths135<NestedConfig135>;

interface HeavyProps135 {
  config: DeepPartial135<NestedConfig135>;
  path?: ConfigPaths135;
}

const HeavyComponent135 = memo(function HeavyComponent135({ config }: HeavyProps135) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 135) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-135 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H135: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent135.displayName = 'HeavyComponent135';
export default HeavyComponent135;
