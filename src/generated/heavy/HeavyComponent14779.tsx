'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14779<T> = T extends (infer U)[]
  ? DeepReadonlyArray14779<U>
  : T extends object
  ? DeepReadonlyObject14779<T>
  : T;

interface DeepReadonlyArray14779<T> extends ReadonlyArray<DeepReadonly14779<T>> {}

type DeepReadonlyObject14779<T> = {
  readonly [P in keyof T]: DeepReadonly14779<T[P]>;
};

type UnionToIntersection14779<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14779<T> = UnionToIntersection14779<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14779<T extends unknown[], V> = [...T, V];

type TuplifyUnion14779<T, L = LastOf14779<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14779<TuplifyUnion14779<Exclude<T, L>>, L>;

type DeepPartial14779<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14779<T[P]> }
  : T;

type Paths14779<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14779<K, Paths14779<T[K], Prev14779[D]>> : never }[keyof T]
  : never;

type Prev14779 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14779<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14779 {
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

type ConfigPaths14779 = Paths14779<NestedConfig14779>;

interface HeavyProps14779 {
  config: DeepPartial14779<NestedConfig14779>;
  path?: ConfigPaths14779;
}

const HeavyComponent14779 = memo(function HeavyComponent14779({ config }: HeavyProps14779) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14779) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14779 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14779: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14779.displayName = 'HeavyComponent14779';
export default HeavyComponent14779;
