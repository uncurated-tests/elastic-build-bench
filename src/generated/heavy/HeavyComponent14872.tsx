'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14872<T> = T extends (infer U)[]
  ? DeepReadonlyArray14872<U>
  : T extends object
  ? DeepReadonlyObject14872<T>
  : T;

interface DeepReadonlyArray14872<T> extends ReadonlyArray<DeepReadonly14872<T>> {}

type DeepReadonlyObject14872<T> = {
  readonly [P in keyof T]: DeepReadonly14872<T[P]>;
};

type UnionToIntersection14872<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14872<T> = UnionToIntersection14872<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14872<T extends unknown[], V> = [...T, V];

type TuplifyUnion14872<T, L = LastOf14872<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14872<TuplifyUnion14872<Exclude<T, L>>, L>;

type DeepPartial14872<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14872<T[P]> }
  : T;

type Paths14872<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14872<K, Paths14872<T[K], Prev14872[D]>> : never }[keyof T]
  : never;

type Prev14872 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14872<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14872 {
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

type ConfigPaths14872 = Paths14872<NestedConfig14872>;

interface HeavyProps14872 {
  config: DeepPartial14872<NestedConfig14872>;
  path?: ConfigPaths14872;
}

const HeavyComponent14872 = memo(function HeavyComponent14872({ config }: HeavyProps14872) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14872) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14872 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14872: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14872.displayName = 'HeavyComponent14872';
export default HeavyComponent14872;
