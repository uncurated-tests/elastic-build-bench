'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14396<T> = T extends (infer U)[]
  ? DeepReadonlyArray14396<U>
  : T extends object
  ? DeepReadonlyObject14396<T>
  : T;

interface DeepReadonlyArray14396<T> extends ReadonlyArray<DeepReadonly14396<T>> {}

type DeepReadonlyObject14396<T> = {
  readonly [P in keyof T]: DeepReadonly14396<T[P]>;
};

type UnionToIntersection14396<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14396<T> = UnionToIntersection14396<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14396<T extends unknown[], V> = [...T, V];

type TuplifyUnion14396<T, L = LastOf14396<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14396<TuplifyUnion14396<Exclude<T, L>>, L>;

type DeepPartial14396<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14396<T[P]> }
  : T;

type Paths14396<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14396<K, Paths14396<T[K], Prev14396[D]>> : never }[keyof T]
  : never;

type Prev14396 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14396<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14396 {
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

type ConfigPaths14396 = Paths14396<NestedConfig14396>;

interface HeavyProps14396 {
  config: DeepPartial14396<NestedConfig14396>;
  path?: ConfigPaths14396;
}

const HeavyComponent14396 = memo(function HeavyComponent14396({ config }: HeavyProps14396) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14396) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14396 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14396: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14396.displayName = 'HeavyComponent14396';
export default HeavyComponent14396;
