'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14684<T> = T extends (infer U)[]
  ? DeepReadonlyArray14684<U>
  : T extends object
  ? DeepReadonlyObject14684<T>
  : T;

interface DeepReadonlyArray14684<T> extends ReadonlyArray<DeepReadonly14684<T>> {}

type DeepReadonlyObject14684<T> = {
  readonly [P in keyof T]: DeepReadonly14684<T[P]>;
};

type UnionToIntersection14684<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14684<T> = UnionToIntersection14684<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14684<T extends unknown[], V> = [...T, V];

type TuplifyUnion14684<T, L = LastOf14684<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14684<TuplifyUnion14684<Exclude<T, L>>, L>;

type DeepPartial14684<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14684<T[P]> }
  : T;

type Paths14684<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14684<K, Paths14684<T[K], Prev14684[D]>> : never }[keyof T]
  : never;

type Prev14684 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14684<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14684 {
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

type ConfigPaths14684 = Paths14684<NestedConfig14684>;

interface HeavyProps14684 {
  config: DeepPartial14684<NestedConfig14684>;
  path?: ConfigPaths14684;
}

const HeavyComponent14684 = memo(function HeavyComponent14684({ config }: HeavyProps14684) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14684) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14684 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14684: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14684.displayName = 'HeavyComponent14684';
export default HeavyComponent14684;
