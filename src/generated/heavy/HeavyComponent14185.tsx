'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14185<T> = T extends (infer U)[]
  ? DeepReadonlyArray14185<U>
  : T extends object
  ? DeepReadonlyObject14185<T>
  : T;

interface DeepReadonlyArray14185<T> extends ReadonlyArray<DeepReadonly14185<T>> {}

type DeepReadonlyObject14185<T> = {
  readonly [P in keyof T]: DeepReadonly14185<T[P]>;
};

type UnionToIntersection14185<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14185<T> = UnionToIntersection14185<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14185<T extends unknown[], V> = [...T, V];

type TuplifyUnion14185<T, L = LastOf14185<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14185<TuplifyUnion14185<Exclude<T, L>>, L>;

type DeepPartial14185<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14185<T[P]> }
  : T;

type Paths14185<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14185<K, Paths14185<T[K], Prev14185[D]>> : never }[keyof T]
  : never;

type Prev14185 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14185<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14185 {
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

type ConfigPaths14185 = Paths14185<NestedConfig14185>;

interface HeavyProps14185 {
  config: DeepPartial14185<NestedConfig14185>;
  path?: ConfigPaths14185;
}

const HeavyComponent14185 = memo(function HeavyComponent14185({ config }: HeavyProps14185) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14185) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14185 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14185: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14185.displayName = 'HeavyComponent14185';
export default HeavyComponent14185;
