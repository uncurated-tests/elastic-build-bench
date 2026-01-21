'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14412<T> = T extends (infer U)[]
  ? DeepReadonlyArray14412<U>
  : T extends object
  ? DeepReadonlyObject14412<T>
  : T;

interface DeepReadonlyArray14412<T> extends ReadonlyArray<DeepReadonly14412<T>> {}

type DeepReadonlyObject14412<T> = {
  readonly [P in keyof T]: DeepReadonly14412<T[P]>;
};

type UnionToIntersection14412<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14412<T> = UnionToIntersection14412<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14412<T extends unknown[], V> = [...T, V];

type TuplifyUnion14412<T, L = LastOf14412<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14412<TuplifyUnion14412<Exclude<T, L>>, L>;

type DeepPartial14412<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14412<T[P]> }
  : T;

type Paths14412<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14412<K, Paths14412<T[K], Prev14412[D]>> : never }[keyof T]
  : never;

type Prev14412 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14412<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14412 {
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

type ConfigPaths14412 = Paths14412<NestedConfig14412>;

interface HeavyProps14412 {
  config: DeepPartial14412<NestedConfig14412>;
  path?: ConfigPaths14412;
}

const HeavyComponent14412 = memo(function HeavyComponent14412({ config }: HeavyProps14412) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14412) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14412 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14412: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14412.displayName = 'HeavyComponent14412';
export default HeavyComponent14412;
