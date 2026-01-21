'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14948<T> = T extends (infer U)[]
  ? DeepReadonlyArray14948<U>
  : T extends object
  ? DeepReadonlyObject14948<T>
  : T;

interface DeepReadonlyArray14948<T> extends ReadonlyArray<DeepReadonly14948<T>> {}

type DeepReadonlyObject14948<T> = {
  readonly [P in keyof T]: DeepReadonly14948<T[P]>;
};

type UnionToIntersection14948<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14948<T> = UnionToIntersection14948<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14948<T extends unknown[], V> = [...T, V];

type TuplifyUnion14948<T, L = LastOf14948<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14948<TuplifyUnion14948<Exclude<T, L>>, L>;

type DeepPartial14948<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14948<T[P]> }
  : T;

type Paths14948<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14948<K, Paths14948<T[K], Prev14948[D]>> : never }[keyof T]
  : never;

type Prev14948 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14948<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14948 {
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

type ConfigPaths14948 = Paths14948<NestedConfig14948>;

interface HeavyProps14948 {
  config: DeepPartial14948<NestedConfig14948>;
  path?: ConfigPaths14948;
}

const HeavyComponent14948 = memo(function HeavyComponent14948({ config }: HeavyProps14948) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14948) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14948 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14948: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14948.displayName = 'HeavyComponent14948';
export default HeavyComponent14948;
