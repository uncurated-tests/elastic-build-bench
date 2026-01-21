'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14478<T> = T extends (infer U)[]
  ? DeepReadonlyArray14478<U>
  : T extends object
  ? DeepReadonlyObject14478<T>
  : T;

interface DeepReadonlyArray14478<T> extends ReadonlyArray<DeepReadonly14478<T>> {}

type DeepReadonlyObject14478<T> = {
  readonly [P in keyof T]: DeepReadonly14478<T[P]>;
};

type UnionToIntersection14478<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14478<T> = UnionToIntersection14478<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14478<T extends unknown[], V> = [...T, V];

type TuplifyUnion14478<T, L = LastOf14478<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14478<TuplifyUnion14478<Exclude<T, L>>, L>;

type DeepPartial14478<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14478<T[P]> }
  : T;

type Paths14478<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14478<K, Paths14478<T[K], Prev14478[D]>> : never }[keyof T]
  : never;

type Prev14478 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14478<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14478 {
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

type ConfigPaths14478 = Paths14478<NestedConfig14478>;

interface HeavyProps14478 {
  config: DeepPartial14478<NestedConfig14478>;
  path?: ConfigPaths14478;
}

const HeavyComponent14478 = memo(function HeavyComponent14478({ config }: HeavyProps14478) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14478) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14478 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14478: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14478.displayName = 'HeavyComponent14478';
export default HeavyComponent14478;
