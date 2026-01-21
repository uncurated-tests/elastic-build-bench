'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly175<T> = T extends (infer U)[]
  ? DeepReadonlyArray175<U>
  : T extends object
  ? DeepReadonlyObject175<T>
  : T;

interface DeepReadonlyArray175<T> extends ReadonlyArray<DeepReadonly175<T>> {}

type DeepReadonlyObject175<T> = {
  readonly [P in keyof T]: DeepReadonly175<T[P]>;
};

type UnionToIntersection175<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf175<T> = UnionToIntersection175<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push175<T extends unknown[], V> = [...T, V];

type TuplifyUnion175<T, L = LastOf175<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push175<TuplifyUnion175<Exclude<T, L>>, L>;

type DeepPartial175<T> = T extends object
  ? { [P in keyof T]?: DeepPartial175<T[P]> }
  : T;

type Paths175<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join175<K, Paths175<T[K], Prev175[D]>> : never }[keyof T]
  : never;

type Prev175 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join175<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig175 {
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

type ConfigPaths175 = Paths175<NestedConfig175>;

interface HeavyProps175 {
  config: DeepPartial175<NestedConfig175>;
  path?: ConfigPaths175;
}

const HeavyComponent175 = memo(function HeavyComponent175({ config }: HeavyProps175) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 175) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-175 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H175: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent175.displayName = 'HeavyComponent175';
export default HeavyComponent175;
