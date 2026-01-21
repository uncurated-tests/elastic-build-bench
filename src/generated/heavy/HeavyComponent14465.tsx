'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14465<T> = T extends (infer U)[]
  ? DeepReadonlyArray14465<U>
  : T extends object
  ? DeepReadonlyObject14465<T>
  : T;

interface DeepReadonlyArray14465<T> extends ReadonlyArray<DeepReadonly14465<T>> {}

type DeepReadonlyObject14465<T> = {
  readonly [P in keyof T]: DeepReadonly14465<T[P]>;
};

type UnionToIntersection14465<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14465<T> = UnionToIntersection14465<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14465<T extends unknown[], V> = [...T, V];

type TuplifyUnion14465<T, L = LastOf14465<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14465<TuplifyUnion14465<Exclude<T, L>>, L>;

type DeepPartial14465<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14465<T[P]> }
  : T;

type Paths14465<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14465<K, Paths14465<T[K], Prev14465[D]>> : never }[keyof T]
  : never;

type Prev14465 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14465<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14465 {
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

type ConfigPaths14465 = Paths14465<NestedConfig14465>;

interface HeavyProps14465 {
  config: DeepPartial14465<NestedConfig14465>;
  path?: ConfigPaths14465;
}

const HeavyComponent14465 = memo(function HeavyComponent14465({ config }: HeavyProps14465) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14465) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14465 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14465: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14465.displayName = 'HeavyComponent14465';
export default HeavyComponent14465;
