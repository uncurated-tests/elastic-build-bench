'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14171<T> = T extends (infer U)[]
  ? DeepReadonlyArray14171<U>
  : T extends object
  ? DeepReadonlyObject14171<T>
  : T;

interface DeepReadonlyArray14171<T> extends ReadonlyArray<DeepReadonly14171<T>> {}

type DeepReadonlyObject14171<T> = {
  readonly [P in keyof T]: DeepReadonly14171<T[P]>;
};

type UnionToIntersection14171<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14171<T> = UnionToIntersection14171<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14171<T extends unknown[], V> = [...T, V];

type TuplifyUnion14171<T, L = LastOf14171<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14171<TuplifyUnion14171<Exclude<T, L>>, L>;

type DeepPartial14171<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14171<T[P]> }
  : T;

type Paths14171<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14171<K, Paths14171<T[K], Prev14171[D]>> : never }[keyof T]
  : never;

type Prev14171 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14171<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14171 {
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

type ConfigPaths14171 = Paths14171<NestedConfig14171>;

interface HeavyProps14171 {
  config: DeepPartial14171<NestedConfig14171>;
  path?: ConfigPaths14171;
}

const HeavyComponent14171 = memo(function HeavyComponent14171({ config }: HeavyProps14171) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14171) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14171 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14171: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14171.displayName = 'HeavyComponent14171';
export default HeavyComponent14171;
