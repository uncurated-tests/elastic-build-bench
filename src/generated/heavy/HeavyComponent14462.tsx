'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14462<T> = T extends (infer U)[]
  ? DeepReadonlyArray14462<U>
  : T extends object
  ? DeepReadonlyObject14462<T>
  : T;

interface DeepReadonlyArray14462<T> extends ReadonlyArray<DeepReadonly14462<T>> {}

type DeepReadonlyObject14462<T> = {
  readonly [P in keyof T]: DeepReadonly14462<T[P]>;
};

type UnionToIntersection14462<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14462<T> = UnionToIntersection14462<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14462<T extends unknown[], V> = [...T, V];

type TuplifyUnion14462<T, L = LastOf14462<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14462<TuplifyUnion14462<Exclude<T, L>>, L>;

type DeepPartial14462<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14462<T[P]> }
  : T;

type Paths14462<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14462<K, Paths14462<T[K], Prev14462[D]>> : never }[keyof T]
  : never;

type Prev14462 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14462<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14462 {
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

type ConfigPaths14462 = Paths14462<NestedConfig14462>;

interface HeavyProps14462 {
  config: DeepPartial14462<NestedConfig14462>;
  path?: ConfigPaths14462;
}

const HeavyComponent14462 = memo(function HeavyComponent14462({ config }: HeavyProps14462) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14462) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14462 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14462: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14462.displayName = 'HeavyComponent14462';
export default HeavyComponent14462;
