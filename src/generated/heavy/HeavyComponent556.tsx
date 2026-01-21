'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly556<T> = T extends (infer U)[]
  ? DeepReadonlyArray556<U>
  : T extends object
  ? DeepReadonlyObject556<T>
  : T;

interface DeepReadonlyArray556<T> extends ReadonlyArray<DeepReadonly556<T>> {}

type DeepReadonlyObject556<T> = {
  readonly [P in keyof T]: DeepReadonly556<T[P]>;
};

type UnionToIntersection556<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf556<T> = UnionToIntersection556<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push556<T extends unknown[], V> = [...T, V];

type TuplifyUnion556<T, L = LastOf556<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push556<TuplifyUnion556<Exclude<T, L>>, L>;

type DeepPartial556<T> = T extends object
  ? { [P in keyof T]?: DeepPartial556<T[P]> }
  : T;

type Paths556<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join556<K, Paths556<T[K], Prev556[D]>> : never }[keyof T]
  : never;

type Prev556 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join556<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig556 {
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

type ConfigPaths556 = Paths556<NestedConfig556>;

interface HeavyProps556 {
  config: DeepPartial556<NestedConfig556>;
  path?: ConfigPaths556;
}

const HeavyComponent556 = memo(function HeavyComponent556({ config }: HeavyProps556) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 556) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-556 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H556: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent556.displayName = 'HeavyComponent556';
export default HeavyComponent556;
