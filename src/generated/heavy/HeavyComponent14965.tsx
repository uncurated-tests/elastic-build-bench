'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14965<T> = T extends (infer U)[]
  ? DeepReadonlyArray14965<U>
  : T extends object
  ? DeepReadonlyObject14965<T>
  : T;

interface DeepReadonlyArray14965<T> extends ReadonlyArray<DeepReadonly14965<T>> {}

type DeepReadonlyObject14965<T> = {
  readonly [P in keyof T]: DeepReadonly14965<T[P]>;
};

type UnionToIntersection14965<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14965<T> = UnionToIntersection14965<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14965<T extends unknown[], V> = [...T, V];

type TuplifyUnion14965<T, L = LastOf14965<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14965<TuplifyUnion14965<Exclude<T, L>>, L>;

type DeepPartial14965<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14965<T[P]> }
  : T;

type Paths14965<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14965<K, Paths14965<T[K], Prev14965[D]>> : never }[keyof T]
  : never;

type Prev14965 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14965<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14965 {
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

type ConfigPaths14965 = Paths14965<NestedConfig14965>;

interface HeavyProps14965 {
  config: DeepPartial14965<NestedConfig14965>;
  path?: ConfigPaths14965;
}

const HeavyComponent14965 = memo(function HeavyComponent14965({ config }: HeavyProps14965) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14965) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14965 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14965: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14965.displayName = 'HeavyComponent14965';
export default HeavyComponent14965;
