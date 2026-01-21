'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14381<T> = T extends (infer U)[]
  ? DeepReadonlyArray14381<U>
  : T extends object
  ? DeepReadonlyObject14381<T>
  : T;

interface DeepReadonlyArray14381<T> extends ReadonlyArray<DeepReadonly14381<T>> {}

type DeepReadonlyObject14381<T> = {
  readonly [P in keyof T]: DeepReadonly14381<T[P]>;
};

type UnionToIntersection14381<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14381<T> = UnionToIntersection14381<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14381<T extends unknown[], V> = [...T, V];

type TuplifyUnion14381<T, L = LastOf14381<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14381<TuplifyUnion14381<Exclude<T, L>>, L>;

type DeepPartial14381<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14381<T[P]> }
  : T;

type Paths14381<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14381<K, Paths14381<T[K], Prev14381[D]>> : never }[keyof T]
  : never;

type Prev14381 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14381<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14381 {
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

type ConfigPaths14381 = Paths14381<NestedConfig14381>;

interface HeavyProps14381 {
  config: DeepPartial14381<NestedConfig14381>;
  path?: ConfigPaths14381;
}

const HeavyComponent14381 = memo(function HeavyComponent14381({ config }: HeavyProps14381) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14381) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14381 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14381: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14381.displayName = 'HeavyComponent14381';
export default HeavyComponent14381;
