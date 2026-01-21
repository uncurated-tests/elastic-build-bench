'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly426<T> = T extends (infer U)[]
  ? DeepReadonlyArray426<U>
  : T extends object
  ? DeepReadonlyObject426<T>
  : T;

interface DeepReadonlyArray426<T> extends ReadonlyArray<DeepReadonly426<T>> {}

type DeepReadonlyObject426<T> = {
  readonly [P in keyof T]: DeepReadonly426<T[P]>;
};

type UnionToIntersection426<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf426<T> = UnionToIntersection426<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push426<T extends unknown[], V> = [...T, V];

type TuplifyUnion426<T, L = LastOf426<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push426<TuplifyUnion426<Exclude<T, L>>, L>;

type DeepPartial426<T> = T extends object
  ? { [P in keyof T]?: DeepPartial426<T[P]> }
  : T;

type Paths426<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join426<K, Paths426<T[K], Prev426[D]>> : never }[keyof T]
  : never;

type Prev426 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join426<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig426 {
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

type ConfigPaths426 = Paths426<NestedConfig426>;

interface HeavyProps426 {
  config: DeepPartial426<NestedConfig426>;
  path?: ConfigPaths426;
}

const HeavyComponent426 = memo(function HeavyComponent426({ config }: HeavyProps426) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 426) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-426 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H426: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent426.displayName = 'HeavyComponent426';
export default HeavyComponent426;
