'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14546<T> = T extends (infer U)[]
  ? DeepReadonlyArray14546<U>
  : T extends object
  ? DeepReadonlyObject14546<T>
  : T;

interface DeepReadonlyArray14546<T> extends ReadonlyArray<DeepReadonly14546<T>> {}

type DeepReadonlyObject14546<T> = {
  readonly [P in keyof T]: DeepReadonly14546<T[P]>;
};

type UnionToIntersection14546<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14546<T> = UnionToIntersection14546<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14546<T extends unknown[], V> = [...T, V];

type TuplifyUnion14546<T, L = LastOf14546<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14546<TuplifyUnion14546<Exclude<T, L>>, L>;

type DeepPartial14546<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14546<T[P]> }
  : T;

type Paths14546<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14546<K, Paths14546<T[K], Prev14546[D]>> : never }[keyof T]
  : never;

type Prev14546 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14546<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14546 {
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

type ConfigPaths14546 = Paths14546<NestedConfig14546>;

interface HeavyProps14546 {
  config: DeepPartial14546<NestedConfig14546>;
  path?: ConfigPaths14546;
}

const HeavyComponent14546 = memo(function HeavyComponent14546({ config }: HeavyProps14546) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14546) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14546 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14546: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14546.displayName = 'HeavyComponent14546';
export default HeavyComponent14546;
