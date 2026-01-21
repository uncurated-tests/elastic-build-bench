'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14559<T> = T extends (infer U)[]
  ? DeepReadonlyArray14559<U>
  : T extends object
  ? DeepReadonlyObject14559<T>
  : T;

interface DeepReadonlyArray14559<T> extends ReadonlyArray<DeepReadonly14559<T>> {}

type DeepReadonlyObject14559<T> = {
  readonly [P in keyof T]: DeepReadonly14559<T[P]>;
};

type UnionToIntersection14559<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14559<T> = UnionToIntersection14559<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14559<T extends unknown[], V> = [...T, V];

type TuplifyUnion14559<T, L = LastOf14559<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14559<TuplifyUnion14559<Exclude<T, L>>, L>;

type DeepPartial14559<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14559<T[P]> }
  : T;

type Paths14559<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14559<K, Paths14559<T[K], Prev14559[D]>> : never }[keyof T]
  : never;

type Prev14559 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14559<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14559 {
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

type ConfigPaths14559 = Paths14559<NestedConfig14559>;

interface HeavyProps14559 {
  config: DeepPartial14559<NestedConfig14559>;
  path?: ConfigPaths14559;
}

const HeavyComponent14559 = memo(function HeavyComponent14559({ config }: HeavyProps14559) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14559) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14559 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14559: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14559.displayName = 'HeavyComponent14559';
export default HeavyComponent14559;
