'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14173<T> = T extends (infer U)[]
  ? DeepReadonlyArray14173<U>
  : T extends object
  ? DeepReadonlyObject14173<T>
  : T;

interface DeepReadonlyArray14173<T> extends ReadonlyArray<DeepReadonly14173<T>> {}

type DeepReadonlyObject14173<T> = {
  readonly [P in keyof T]: DeepReadonly14173<T[P]>;
};

type UnionToIntersection14173<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14173<T> = UnionToIntersection14173<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14173<T extends unknown[], V> = [...T, V];

type TuplifyUnion14173<T, L = LastOf14173<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14173<TuplifyUnion14173<Exclude<T, L>>, L>;

type DeepPartial14173<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14173<T[P]> }
  : T;

type Paths14173<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14173<K, Paths14173<T[K], Prev14173[D]>> : never }[keyof T]
  : never;

type Prev14173 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14173<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14173 {
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

type ConfigPaths14173 = Paths14173<NestedConfig14173>;

interface HeavyProps14173 {
  config: DeepPartial14173<NestedConfig14173>;
  path?: ConfigPaths14173;
}

const HeavyComponent14173 = memo(function HeavyComponent14173({ config }: HeavyProps14173) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14173) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14173 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14173: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14173.displayName = 'HeavyComponent14173';
export default HeavyComponent14173;
