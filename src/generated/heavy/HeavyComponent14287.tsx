'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14287<T> = T extends (infer U)[]
  ? DeepReadonlyArray14287<U>
  : T extends object
  ? DeepReadonlyObject14287<T>
  : T;

interface DeepReadonlyArray14287<T> extends ReadonlyArray<DeepReadonly14287<T>> {}

type DeepReadonlyObject14287<T> = {
  readonly [P in keyof T]: DeepReadonly14287<T[P]>;
};

type UnionToIntersection14287<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14287<T> = UnionToIntersection14287<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14287<T extends unknown[], V> = [...T, V];

type TuplifyUnion14287<T, L = LastOf14287<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14287<TuplifyUnion14287<Exclude<T, L>>, L>;

type DeepPartial14287<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14287<T[P]> }
  : T;

type Paths14287<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14287<K, Paths14287<T[K], Prev14287[D]>> : never }[keyof T]
  : never;

type Prev14287 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14287<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14287 {
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

type ConfigPaths14287 = Paths14287<NestedConfig14287>;

interface HeavyProps14287 {
  config: DeepPartial14287<NestedConfig14287>;
  path?: ConfigPaths14287;
}

const HeavyComponent14287 = memo(function HeavyComponent14287({ config }: HeavyProps14287) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14287) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14287 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14287: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14287.displayName = 'HeavyComponent14287';
export default HeavyComponent14287;
