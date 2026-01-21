'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14337<T> = T extends (infer U)[]
  ? DeepReadonlyArray14337<U>
  : T extends object
  ? DeepReadonlyObject14337<T>
  : T;

interface DeepReadonlyArray14337<T> extends ReadonlyArray<DeepReadonly14337<T>> {}

type DeepReadonlyObject14337<T> = {
  readonly [P in keyof T]: DeepReadonly14337<T[P]>;
};

type UnionToIntersection14337<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14337<T> = UnionToIntersection14337<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14337<T extends unknown[], V> = [...T, V];

type TuplifyUnion14337<T, L = LastOf14337<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14337<TuplifyUnion14337<Exclude<T, L>>, L>;

type DeepPartial14337<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14337<T[P]> }
  : T;

type Paths14337<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14337<K, Paths14337<T[K], Prev14337[D]>> : never }[keyof T]
  : never;

type Prev14337 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14337<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14337 {
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

type ConfigPaths14337 = Paths14337<NestedConfig14337>;

interface HeavyProps14337 {
  config: DeepPartial14337<NestedConfig14337>;
  path?: ConfigPaths14337;
}

const HeavyComponent14337 = memo(function HeavyComponent14337({ config }: HeavyProps14337) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14337) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14337 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14337: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14337.displayName = 'HeavyComponent14337';
export default HeavyComponent14337;
