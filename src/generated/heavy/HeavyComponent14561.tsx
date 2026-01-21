'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14561<T> = T extends (infer U)[]
  ? DeepReadonlyArray14561<U>
  : T extends object
  ? DeepReadonlyObject14561<T>
  : T;

interface DeepReadonlyArray14561<T> extends ReadonlyArray<DeepReadonly14561<T>> {}

type DeepReadonlyObject14561<T> = {
  readonly [P in keyof T]: DeepReadonly14561<T[P]>;
};

type UnionToIntersection14561<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14561<T> = UnionToIntersection14561<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14561<T extends unknown[], V> = [...T, V];

type TuplifyUnion14561<T, L = LastOf14561<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14561<TuplifyUnion14561<Exclude<T, L>>, L>;

type DeepPartial14561<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14561<T[P]> }
  : T;

type Paths14561<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14561<K, Paths14561<T[K], Prev14561[D]>> : never }[keyof T]
  : never;

type Prev14561 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14561<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14561 {
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

type ConfigPaths14561 = Paths14561<NestedConfig14561>;

interface HeavyProps14561 {
  config: DeepPartial14561<NestedConfig14561>;
  path?: ConfigPaths14561;
}

const HeavyComponent14561 = memo(function HeavyComponent14561({ config }: HeavyProps14561) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14561) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14561 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14561: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14561.displayName = 'HeavyComponent14561';
export default HeavyComponent14561;
