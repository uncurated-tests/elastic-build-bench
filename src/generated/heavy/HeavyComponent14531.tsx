'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14531<T> = T extends (infer U)[]
  ? DeepReadonlyArray14531<U>
  : T extends object
  ? DeepReadonlyObject14531<T>
  : T;

interface DeepReadonlyArray14531<T> extends ReadonlyArray<DeepReadonly14531<T>> {}

type DeepReadonlyObject14531<T> = {
  readonly [P in keyof T]: DeepReadonly14531<T[P]>;
};

type UnionToIntersection14531<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14531<T> = UnionToIntersection14531<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14531<T extends unknown[], V> = [...T, V];

type TuplifyUnion14531<T, L = LastOf14531<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14531<TuplifyUnion14531<Exclude<T, L>>, L>;

type DeepPartial14531<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14531<T[P]> }
  : T;

type Paths14531<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14531<K, Paths14531<T[K], Prev14531[D]>> : never }[keyof T]
  : never;

type Prev14531 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14531<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14531 {
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

type ConfigPaths14531 = Paths14531<NestedConfig14531>;

interface HeavyProps14531 {
  config: DeepPartial14531<NestedConfig14531>;
  path?: ConfigPaths14531;
}

const HeavyComponent14531 = memo(function HeavyComponent14531({ config }: HeavyProps14531) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14531) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14531 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14531: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14531.displayName = 'HeavyComponent14531';
export default HeavyComponent14531;
