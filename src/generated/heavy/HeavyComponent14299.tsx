'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14299<T> = T extends (infer U)[]
  ? DeepReadonlyArray14299<U>
  : T extends object
  ? DeepReadonlyObject14299<T>
  : T;

interface DeepReadonlyArray14299<T> extends ReadonlyArray<DeepReadonly14299<T>> {}

type DeepReadonlyObject14299<T> = {
  readonly [P in keyof T]: DeepReadonly14299<T[P]>;
};

type UnionToIntersection14299<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14299<T> = UnionToIntersection14299<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14299<T extends unknown[], V> = [...T, V];

type TuplifyUnion14299<T, L = LastOf14299<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14299<TuplifyUnion14299<Exclude<T, L>>, L>;

type DeepPartial14299<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14299<T[P]> }
  : T;

type Paths14299<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14299<K, Paths14299<T[K], Prev14299[D]>> : never }[keyof T]
  : never;

type Prev14299 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14299<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14299 {
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

type ConfigPaths14299 = Paths14299<NestedConfig14299>;

interface HeavyProps14299 {
  config: DeepPartial14299<NestedConfig14299>;
  path?: ConfigPaths14299;
}

const HeavyComponent14299 = memo(function HeavyComponent14299({ config }: HeavyProps14299) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14299) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14299 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14299: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14299.displayName = 'HeavyComponent14299';
export default HeavyComponent14299;
