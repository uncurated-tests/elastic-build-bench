'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14856<T> = T extends (infer U)[]
  ? DeepReadonlyArray14856<U>
  : T extends object
  ? DeepReadonlyObject14856<T>
  : T;

interface DeepReadonlyArray14856<T> extends ReadonlyArray<DeepReadonly14856<T>> {}

type DeepReadonlyObject14856<T> = {
  readonly [P in keyof T]: DeepReadonly14856<T[P]>;
};

type UnionToIntersection14856<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14856<T> = UnionToIntersection14856<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14856<T extends unknown[], V> = [...T, V];

type TuplifyUnion14856<T, L = LastOf14856<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14856<TuplifyUnion14856<Exclude<T, L>>, L>;

type DeepPartial14856<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14856<T[P]> }
  : T;

type Paths14856<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14856<K, Paths14856<T[K], Prev14856[D]>> : never }[keyof T]
  : never;

type Prev14856 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14856<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14856 {
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

type ConfigPaths14856 = Paths14856<NestedConfig14856>;

interface HeavyProps14856 {
  config: DeepPartial14856<NestedConfig14856>;
  path?: ConfigPaths14856;
}

const HeavyComponent14856 = memo(function HeavyComponent14856({ config }: HeavyProps14856) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14856) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14856 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14856: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14856.displayName = 'HeavyComponent14856';
export default HeavyComponent14856;
