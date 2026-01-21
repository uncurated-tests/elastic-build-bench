'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14946<T> = T extends (infer U)[]
  ? DeepReadonlyArray14946<U>
  : T extends object
  ? DeepReadonlyObject14946<T>
  : T;

interface DeepReadonlyArray14946<T> extends ReadonlyArray<DeepReadonly14946<T>> {}

type DeepReadonlyObject14946<T> = {
  readonly [P in keyof T]: DeepReadonly14946<T[P]>;
};

type UnionToIntersection14946<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14946<T> = UnionToIntersection14946<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14946<T extends unknown[], V> = [...T, V];

type TuplifyUnion14946<T, L = LastOf14946<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14946<TuplifyUnion14946<Exclude<T, L>>, L>;

type DeepPartial14946<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14946<T[P]> }
  : T;

type Paths14946<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14946<K, Paths14946<T[K], Prev14946[D]>> : never }[keyof T]
  : never;

type Prev14946 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14946<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14946 {
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

type ConfigPaths14946 = Paths14946<NestedConfig14946>;

interface HeavyProps14946 {
  config: DeepPartial14946<NestedConfig14946>;
  path?: ConfigPaths14946;
}

const HeavyComponent14946 = memo(function HeavyComponent14946({ config }: HeavyProps14946) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14946) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14946 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14946: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14946.displayName = 'HeavyComponent14946';
export default HeavyComponent14946;
