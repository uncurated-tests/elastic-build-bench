'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14569<T> = T extends (infer U)[]
  ? DeepReadonlyArray14569<U>
  : T extends object
  ? DeepReadonlyObject14569<T>
  : T;

interface DeepReadonlyArray14569<T> extends ReadonlyArray<DeepReadonly14569<T>> {}

type DeepReadonlyObject14569<T> = {
  readonly [P in keyof T]: DeepReadonly14569<T[P]>;
};

type UnionToIntersection14569<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14569<T> = UnionToIntersection14569<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14569<T extends unknown[], V> = [...T, V];

type TuplifyUnion14569<T, L = LastOf14569<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14569<TuplifyUnion14569<Exclude<T, L>>, L>;

type DeepPartial14569<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14569<T[P]> }
  : T;

type Paths14569<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14569<K, Paths14569<T[K], Prev14569[D]>> : never }[keyof T]
  : never;

type Prev14569 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14569<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14569 {
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

type ConfigPaths14569 = Paths14569<NestedConfig14569>;

interface HeavyProps14569 {
  config: DeepPartial14569<NestedConfig14569>;
  path?: ConfigPaths14569;
}

const HeavyComponent14569 = memo(function HeavyComponent14569({ config }: HeavyProps14569) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14569) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14569 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14569: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14569.displayName = 'HeavyComponent14569';
export default HeavyComponent14569;
