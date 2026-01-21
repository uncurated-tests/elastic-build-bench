'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly626<T> = T extends (infer U)[]
  ? DeepReadonlyArray626<U>
  : T extends object
  ? DeepReadonlyObject626<T>
  : T;

interface DeepReadonlyArray626<T> extends ReadonlyArray<DeepReadonly626<T>> {}

type DeepReadonlyObject626<T> = {
  readonly [P in keyof T]: DeepReadonly626<T[P]>;
};

type UnionToIntersection626<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf626<T> = UnionToIntersection626<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push626<T extends unknown[], V> = [...T, V];

type TuplifyUnion626<T, L = LastOf626<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push626<TuplifyUnion626<Exclude<T, L>>, L>;

type DeepPartial626<T> = T extends object
  ? { [P in keyof T]?: DeepPartial626<T[P]> }
  : T;

type Paths626<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join626<K, Paths626<T[K], Prev626[D]>> : never }[keyof T]
  : never;

type Prev626 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join626<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig626 {
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

type ConfigPaths626 = Paths626<NestedConfig626>;

interface HeavyProps626 {
  config: DeepPartial626<NestedConfig626>;
  path?: ConfigPaths626;
}

const HeavyComponent626 = memo(function HeavyComponent626({ config }: HeavyProps626) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 626) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-626 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H626: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent626.displayName = 'HeavyComponent626';
export default HeavyComponent626;
