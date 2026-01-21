'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly872<T> = T extends (infer U)[]
  ? DeepReadonlyArray872<U>
  : T extends object
  ? DeepReadonlyObject872<T>
  : T;

interface DeepReadonlyArray872<T> extends ReadonlyArray<DeepReadonly872<T>> {}

type DeepReadonlyObject872<T> = {
  readonly [P in keyof T]: DeepReadonly872<T[P]>;
};

type UnionToIntersection872<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf872<T> = UnionToIntersection872<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push872<T extends unknown[], V> = [...T, V];

type TuplifyUnion872<T, L = LastOf872<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push872<TuplifyUnion872<Exclude<T, L>>, L>;

type DeepPartial872<T> = T extends object
  ? { [P in keyof T]?: DeepPartial872<T[P]> }
  : T;

type Paths872<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join872<K, Paths872<T[K], Prev872[D]>> : never }[keyof T]
  : never;

type Prev872 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join872<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig872 {
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

type ConfigPaths872 = Paths872<NestedConfig872>;

interface HeavyProps872 {
  config: DeepPartial872<NestedConfig872>;
  path?: ConfigPaths872;
}

const HeavyComponent872 = memo(function HeavyComponent872({ config }: HeavyProps872) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 872) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-872 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H872: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent872.displayName = 'HeavyComponent872';
export default HeavyComponent872;
