'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14883<T> = T extends (infer U)[]
  ? DeepReadonlyArray14883<U>
  : T extends object
  ? DeepReadonlyObject14883<T>
  : T;

interface DeepReadonlyArray14883<T> extends ReadonlyArray<DeepReadonly14883<T>> {}

type DeepReadonlyObject14883<T> = {
  readonly [P in keyof T]: DeepReadonly14883<T[P]>;
};

type UnionToIntersection14883<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14883<T> = UnionToIntersection14883<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14883<T extends unknown[], V> = [...T, V];

type TuplifyUnion14883<T, L = LastOf14883<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14883<TuplifyUnion14883<Exclude<T, L>>, L>;

type DeepPartial14883<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14883<T[P]> }
  : T;

type Paths14883<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14883<K, Paths14883<T[K], Prev14883[D]>> : never }[keyof T]
  : never;

type Prev14883 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14883<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14883 {
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

type ConfigPaths14883 = Paths14883<NestedConfig14883>;

interface HeavyProps14883 {
  config: DeepPartial14883<NestedConfig14883>;
  path?: ConfigPaths14883;
}

const HeavyComponent14883 = memo(function HeavyComponent14883({ config }: HeavyProps14883) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14883) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14883 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14883: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14883.displayName = 'HeavyComponent14883';
export default HeavyComponent14883;
