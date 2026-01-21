'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14728<T> = T extends (infer U)[]
  ? DeepReadonlyArray14728<U>
  : T extends object
  ? DeepReadonlyObject14728<T>
  : T;

interface DeepReadonlyArray14728<T> extends ReadonlyArray<DeepReadonly14728<T>> {}

type DeepReadonlyObject14728<T> = {
  readonly [P in keyof T]: DeepReadonly14728<T[P]>;
};

type UnionToIntersection14728<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14728<T> = UnionToIntersection14728<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14728<T extends unknown[], V> = [...T, V];

type TuplifyUnion14728<T, L = LastOf14728<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14728<TuplifyUnion14728<Exclude<T, L>>, L>;

type DeepPartial14728<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14728<T[P]> }
  : T;

type Paths14728<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14728<K, Paths14728<T[K], Prev14728[D]>> : never }[keyof T]
  : never;

type Prev14728 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14728<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14728 {
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

type ConfigPaths14728 = Paths14728<NestedConfig14728>;

interface HeavyProps14728 {
  config: DeepPartial14728<NestedConfig14728>;
  path?: ConfigPaths14728;
}

const HeavyComponent14728 = memo(function HeavyComponent14728({ config }: HeavyProps14728) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14728) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14728 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14728: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14728.displayName = 'HeavyComponent14728';
export default HeavyComponent14728;
