'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14800<T> = T extends (infer U)[]
  ? DeepReadonlyArray14800<U>
  : T extends object
  ? DeepReadonlyObject14800<T>
  : T;

interface DeepReadonlyArray14800<T> extends ReadonlyArray<DeepReadonly14800<T>> {}

type DeepReadonlyObject14800<T> = {
  readonly [P in keyof T]: DeepReadonly14800<T[P]>;
};

type UnionToIntersection14800<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14800<T> = UnionToIntersection14800<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14800<T extends unknown[], V> = [...T, V];

type TuplifyUnion14800<T, L = LastOf14800<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14800<TuplifyUnion14800<Exclude<T, L>>, L>;

type DeepPartial14800<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14800<T[P]> }
  : T;

type Paths14800<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14800<K, Paths14800<T[K], Prev14800[D]>> : never }[keyof T]
  : never;

type Prev14800 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14800<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14800 {
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

type ConfigPaths14800 = Paths14800<NestedConfig14800>;

interface HeavyProps14800 {
  config: DeepPartial14800<NestedConfig14800>;
  path?: ConfigPaths14800;
}

const HeavyComponent14800 = memo(function HeavyComponent14800({ config }: HeavyProps14800) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14800) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14800 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14800: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14800.displayName = 'HeavyComponent14800';
export default HeavyComponent14800;
