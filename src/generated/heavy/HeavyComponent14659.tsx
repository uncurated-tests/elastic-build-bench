'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14659<T> = T extends (infer U)[]
  ? DeepReadonlyArray14659<U>
  : T extends object
  ? DeepReadonlyObject14659<T>
  : T;

interface DeepReadonlyArray14659<T> extends ReadonlyArray<DeepReadonly14659<T>> {}

type DeepReadonlyObject14659<T> = {
  readonly [P in keyof T]: DeepReadonly14659<T[P]>;
};

type UnionToIntersection14659<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14659<T> = UnionToIntersection14659<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14659<T extends unknown[], V> = [...T, V];

type TuplifyUnion14659<T, L = LastOf14659<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14659<TuplifyUnion14659<Exclude<T, L>>, L>;

type DeepPartial14659<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14659<T[P]> }
  : T;

type Paths14659<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14659<K, Paths14659<T[K], Prev14659[D]>> : never }[keyof T]
  : never;

type Prev14659 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14659<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14659 {
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

type ConfigPaths14659 = Paths14659<NestedConfig14659>;

interface HeavyProps14659 {
  config: DeepPartial14659<NestedConfig14659>;
  path?: ConfigPaths14659;
}

const HeavyComponent14659 = memo(function HeavyComponent14659({ config }: HeavyProps14659) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14659) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14659 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14659: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14659.displayName = 'HeavyComponent14659';
export default HeavyComponent14659;
