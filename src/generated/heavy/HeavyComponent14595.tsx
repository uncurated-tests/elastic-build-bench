'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14595<T> = T extends (infer U)[]
  ? DeepReadonlyArray14595<U>
  : T extends object
  ? DeepReadonlyObject14595<T>
  : T;

interface DeepReadonlyArray14595<T> extends ReadonlyArray<DeepReadonly14595<T>> {}

type DeepReadonlyObject14595<T> = {
  readonly [P in keyof T]: DeepReadonly14595<T[P]>;
};

type UnionToIntersection14595<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14595<T> = UnionToIntersection14595<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14595<T extends unknown[], V> = [...T, V];

type TuplifyUnion14595<T, L = LastOf14595<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14595<TuplifyUnion14595<Exclude<T, L>>, L>;

type DeepPartial14595<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14595<T[P]> }
  : T;

type Paths14595<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14595<K, Paths14595<T[K], Prev14595[D]>> : never }[keyof T]
  : never;

type Prev14595 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14595<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14595 {
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

type ConfigPaths14595 = Paths14595<NestedConfig14595>;

interface HeavyProps14595 {
  config: DeepPartial14595<NestedConfig14595>;
  path?: ConfigPaths14595;
}

const HeavyComponent14595 = memo(function HeavyComponent14595({ config }: HeavyProps14595) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14595) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14595 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14595: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14595.displayName = 'HeavyComponent14595';
export default HeavyComponent14595;
