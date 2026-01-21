'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14690<T> = T extends (infer U)[]
  ? DeepReadonlyArray14690<U>
  : T extends object
  ? DeepReadonlyObject14690<T>
  : T;

interface DeepReadonlyArray14690<T> extends ReadonlyArray<DeepReadonly14690<T>> {}

type DeepReadonlyObject14690<T> = {
  readonly [P in keyof T]: DeepReadonly14690<T[P]>;
};

type UnionToIntersection14690<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14690<T> = UnionToIntersection14690<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14690<T extends unknown[], V> = [...T, V];

type TuplifyUnion14690<T, L = LastOf14690<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14690<TuplifyUnion14690<Exclude<T, L>>, L>;

type DeepPartial14690<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14690<T[P]> }
  : T;

type Paths14690<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14690<K, Paths14690<T[K], Prev14690[D]>> : never }[keyof T]
  : never;

type Prev14690 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14690<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14690 {
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

type ConfigPaths14690 = Paths14690<NestedConfig14690>;

interface HeavyProps14690 {
  config: DeepPartial14690<NestedConfig14690>;
  path?: ConfigPaths14690;
}

const HeavyComponent14690 = memo(function HeavyComponent14690({ config }: HeavyProps14690) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14690) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14690 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14690: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14690.displayName = 'HeavyComponent14690';
export default HeavyComponent14690;
