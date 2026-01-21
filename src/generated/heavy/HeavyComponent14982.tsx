'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14982<T> = T extends (infer U)[]
  ? DeepReadonlyArray14982<U>
  : T extends object
  ? DeepReadonlyObject14982<T>
  : T;

interface DeepReadonlyArray14982<T> extends ReadonlyArray<DeepReadonly14982<T>> {}

type DeepReadonlyObject14982<T> = {
  readonly [P in keyof T]: DeepReadonly14982<T[P]>;
};

type UnionToIntersection14982<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14982<T> = UnionToIntersection14982<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14982<T extends unknown[], V> = [...T, V];

type TuplifyUnion14982<T, L = LastOf14982<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14982<TuplifyUnion14982<Exclude<T, L>>, L>;

type DeepPartial14982<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14982<T[P]> }
  : T;

type Paths14982<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14982<K, Paths14982<T[K], Prev14982[D]>> : never }[keyof T]
  : never;

type Prev14982 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14982<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14982 {
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

type ConfigPaths14982 = Paths14982<NestedConfig14982>;

interface HeavyProps14982 {
  config: DeepPartial14982<NestedConfig14982>;
  path?: ConfigPaths14982;
}

const HeavyComponent14982 = memo(function HeavyComponent14982({ config }: HeavyProps14982) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14982) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14982 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14982: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14982.displayName = 'HeavyComponent14982';
export default HeavyComponent14982;
