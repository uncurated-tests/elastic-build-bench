'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14566<T> = T extends (infer U)[]
  ? DeepReadonlyArray14566<U>
  : T extends object
  ? DeepReadonlyObject14566<T>
  : T;

interface DeepReadonlyArray14566<T> extends ReadonlyArray<DeepReadonly14566<T>> {}

type DeepReadonlyObject14566<T> = {
  readonly [P in keyof T]: DeepReadonly14566<T[P]>;
};

type UnionToIntersection14566<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14566<T> = UnionToIntersection14566<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14566<T extends unknown[], V> = [...T, V];

type TuplifyUnion14566<T, L = LastOf14566<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14566<TuplifyUnion14566<Exclude<T, L>>, L>;

type DeepPartial14566<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14566<T[P]> }
  : T;

type Paths14566<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14566<K, Paths14566<T[K], Prev14566[D]>> : never }[keyof T]
  : never;

type Prev14566 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14566<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14566 {
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

type ConfigPaths14566 = Paths14566<NestedConfig14566>;

interface HeavyProps14566 {
  config: DeepPartial14566<NestedConfig14566>;
  path?: ConfigPaths14566;
}

const HeavyComponent14566 = memo(function HeavyComponent14566({ config }: HeavyProps14566) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14566) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14566 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14566: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14566.displayName = 'HeavyComponent14566';
export default HeavyComponent14566;
