'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14633<T> = T extends (infer U)[]
  ? DeepReadonlyArray14633<U>
  : T extends object
  ? DeepReadonlyObject14633<T>
  : T;

interface DeepReadonlyArray14633<T> extends ReadonlyArray<DeepReadonly14633<T>> {}

type DeepReadonlyObject14633<T> = {
  readonly [P in keyof T]: DeepReadonly14633<T[P]>;
};

type UnionToIntersection14633<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14633<T> = UnionToIntersection14633<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14633<T extends unknown[], V> = [...T, V];

type TuplifyUnion14633<T, L = LastOf14633<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14633<TuplifyUnion14633<Exclude<T, L>>, L>;

type DeepPartial14633<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14633<T[P]> }
  : T;

type Paths14633<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14633<K, Paths14633<T[K], Prev14633[D]>> : never }[keyof T]
  : never;

type Prev14633 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14633<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14633 {
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

type ConfigPaths14633 = Paths14633<NestedConfig14633>;

interface HeavyProps14633 {
  config: DeepPartial14633<NestedConfig14633>;
  path?: ConfigPaths14633;
}

const HeavyComponent14633 = memo(function HeavyComponent14633({ config }: HeavyProps14633) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14633) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14633 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14633: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14633.displayName = 'HeavyComponent14633';
export default HeavyComponent14633;
