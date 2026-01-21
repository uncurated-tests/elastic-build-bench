'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14589<T> = T extends (infer U)[]
  ? DeepReadonlyArray14589<U>
  : T extends object
  ? DeepReadonlyObject14589<T>
  : T;

interface DeepReadonlyArray14589<T> extends ReadonlyArray<DeepReadonly14589<T>> {}

type DeepReadonlyObject14589<T> = {
  readonly [P in keyof T]: DeepReadonly14589<T[P]>;
};

type UnionToIntersection14589<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14589<T> = UnionToIntersection14589<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14589<T extends unknown[], V> = [...T, V];

type TuplifyUnion14589<T, L = LastOf14589<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14589<TuplifyUnion14589<Exclude<T, L>>, L>;

type DeepPartial14589<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14589<T[P]> }
  : T;

type Paths14589<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14589<K, Paths14589<T[K], Prev14589[D]>> : never }[keyof T]
  : never;

type Prev14589 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14589<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14589 {
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

type ConfigPaths14589 = Paths14589<NestedConfig14589>;

interface HeavyProps14589 {
  config: DeepPartial14589<NestedConfig14589>;
  path?: ConfigPaths14589;
}

const HeavyComponent14589 = memo(function HeavyComponent14589({ config }: HeavyProps14589) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14589) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14589 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14589: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14589.displayName = 'HeavyComponent14589';
export default HeavyComponent14589;
