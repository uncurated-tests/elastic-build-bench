'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14665<T> = T extends (infer U)[]
  ? DeepReadonlyArray14665<U>
  : T extends object
  ? DeepReadonlyObject14665<T>
  : T;

interface DeepReadonlyArray14665<T> extends ReadonlyArray<DeepReadonly14665<T>> {}

type DeepReadonlyObject14665<T> = {
  readonly [P in keyof T]: DeepReadonly14665<T[P]>;
};

type UnionToIntersection14665<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14665<T> = UnionToIntersection14665<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14665<T extends unknown[], V> = [...T, V];

type TuplifyUnion14665<T, L = LastOf14665<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14665<TuplifyUnion14665<Exclude<T, L>>, L>;

type DeepPartial14665<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14665<T[P]> }
  : T;

type Paths14665<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14665<K, Paths14665<T[K], Prev14665[D]>> : never }[keyof T]
  : never;

type Prev14665 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14665<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14665 {
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

type ConfigPaths14665 = Paths14665<NestedConfig14665>;

interface HeavyProps14665 {
  config: DeepPartial14665<NestedConfig14665>;
  path?: ConfigPaths14665;
}

const HeavyComponent14665 = memo(function HeavyComponent14665({ config }: HeavyProps14665) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14665) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14665 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14665: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14665.displayName = 'HeavyComponent14665';
export default HeavyComponent14665;
