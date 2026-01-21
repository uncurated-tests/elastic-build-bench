'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14137<T> = T extends (infer U)[]
  ? DeepReadonlyArray14137<U>
  : T extends object
  ? DeepReadonlyObject14137<T>
  : T;

interface DeepReadonlyArray14137<T> extends ReadonlyArray<DeepReadonly14137<T>> {}

type DeepReadonlyObject14137<T> = {
  readonly [P in keyof T]: DeepReadonly14137<T[P]>;
};

type UnionToIntersection14137<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14137<T> = UnionToIntersection14137<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14137<T extends unknown[], V> = [...T, V];

type TuplifyUnion14137<T, L = LastOf14137<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14137<TuplifyUnion14137<Exclude<T, L>>, L>;

type DeepPartial14137<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14137<T[P]> }
  : T;

type Paths14137<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14137<K, Paths14137<T[K], Prev14137[D]>> : never }[keyof T]
  : never;

type Prev14137 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14137<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14137 {
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

type ConfigPaths14137 = Paths14137<NestedConfig14137>;

interface HeavyProps14137 {
  config: DeepPartial14137<NestedConfig14137>;
  path?: ConfigPaths14137;
}

const HeavyComponent14137 = memo(function HeavyComponent14137({ config }: HeavyProps14137) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14137) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14137 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14137: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14137.displayName = 'HeavyComponent14137';
export default HeavyComponent14137;
