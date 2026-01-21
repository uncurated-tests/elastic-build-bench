'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14451<T> = T extends (infer U)[]
  ? DeepReadonlyArray14451<U>
  : T extends object
  ? DeepReadonlyObject14451<T>
  : T;

interface DeepReadonlyArray14451<T> extends ReadonlyArray<DeepReadonly14451<T>> {}

type DeepReadonlyObject14451<T> = {
  readonly [P in keyof T]: DeepReadonly14451<T[P]>;
};

type UnionToIntersection14451<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14451<T> = UnionToIntersection14451<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14451<T extends unknown[], V> = [...T, V];

type TuplifyUnion14451<T, L = LastOf14451<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14451<TuplifyUnion14451<Exclude<T, L>>, L>;

type DeepPartial14451<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14451<T[P]> }
  : T;

type Paths14451<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14451<K, Paths14451<T[K], Prev14451[D]>> : never }[keyof T]
  : never;

type Prev14451 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14451<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14451 {
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

type ConfigPaths14451 = Paths14451<NestedConfig14451>;

interface HeavyProps14451 {
  config: DeepPartial14451<NestedConfig14451>;
  path?: ConfigPaths14451;
}

const HeavyComponent14451 = memo(function HeavyComponent14451({ config }: HeavyProps14451) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14451) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14451 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14451: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14451.displayName = 'HeavyComponent14451';
export default HeavyComponent14451;
