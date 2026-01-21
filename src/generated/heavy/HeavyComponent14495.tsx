'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14495<T> = T extends (infer U)[]
  ? DeepReadonlyArray14495<U>
  : T extends object
  ? DeepReadonlyObject14495<T>
  : T;

interface DeepReadonlyArray14495<T> extends ReadonlyArray<DeepReadonly14495<T>> {}

type DeepReadonlyObject14495<T> = {
  readonly [P in keyof T]: DeepReadonly14495<T[P]>;
};

type UnionToIntersection14495<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14495<T> = UnionToIntersection14495<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14495<T extends unknown[], V> = [...T, V];

type TuplifyUnion14495<T, L = LastOf14495<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14495<TuplifyUnion14495<Exclude<T, L>>, L>;

type DeepPartial14495<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14495<T[P]> }
  : T;

type Paths14495<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14495<K, Paths14495<T[K], Prev14495[D]>> : never }[keyof T]
  : never;

type Prev14495 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14495<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14495 {
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

type ConfigPaths14495 = Paths14495<NestedConfig14495>;

interface HeavyProps14495 {
  config: DeepPartial14495<NestedConfig14495>;
  path?: ConfigPaths14495;
}

const HeavyComponent14495 = memo(function HeavyComponent14495({ config }: HeavyProps14495) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14495) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14495 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14495: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14495.displayName = 'HeavyComponent14495';
export default HeavyComponent14495;
