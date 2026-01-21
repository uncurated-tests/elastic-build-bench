'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3098<T> = T extends (infer U)[]
  ? DeepReadonlyArray3098<U>
  : T extends object
  ? DeepReadonlyObject3098<T>
  : T;

interface DeepReadonlyArray3098<T> extends ReadonlyArray<DeepReadonly3098<T>> {}

type DeepReadonlyObject3098<T> = {
  readonly [P in keyof T]: DeepReadonly3098<T[P]>;
};

type UnionToIntersection3098<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3098<T> = UnionToIntersection3098<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3098<T extends unknown[], V> = [...T, V];

type TuplifyUnion3098<T, L = LastOf3098<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3098<TuplifyUnion3098<Exclude<T, L>>, L>;

type DeepPartial3098<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3098<T[P]> }
  : T;

type Paths3098<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3098<K, Paths3098<T[K], Prev3098[D]>> : never }[keyof T]
  : never;

type Prev3098 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3098<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3098 {
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

type ConfigPaths3098 = Paths3098<NestedConfig3098>;

interface HeavyProps3098 {
  config: DeepPartial3098<NestedConfig3098>;
  path?: ConfigPaths3098;
}

const HeavyComponent3098 = memo(function HeavyComponent3098({ config }: HeavyProps3098) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3098) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3098 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3098: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3098.displayName = 'HeavyComponent3098';
export default HeavyComponent3098;
