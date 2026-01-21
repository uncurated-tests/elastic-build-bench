'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14030<T> = T extends (infer U)[]
  ? DeepReadonlyArray14030<U>
  : T extends object
  ? DeepReadonlyObject14030<T>
  : T;

interface DeepReadonlyArray14030<T> extends ReadonlyArray<DeepReadonly14030<T>> {}

type DeepReadonlyObject14030<T> = {
  readonly [P in keyof T]: DeepReadonly14030<T[P]>;
};

type UnionToIntersection14030<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14030<T> = UnionToIntersection14030<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14030<T extends unknown[], V> = [...T, V];

type TuplifyUnion14030<T, L = LastOf14030<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14030<TuplifyUnion14030<Exclude<T, L>>, L>;

type DeepPartial14030<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14030<T[P]> }
  : T;

type Paths14030<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14030<K, Paths14030<T[K], Prev14030[D]>> : never }[keyof T]
  : never;

type Prev14030 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14030<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14030 {
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

type ConfigPaths14030 = Paths14030<NestedConfig14030>;

interface HeavyProps14030 {
  config: DeepPartial14030<NestedConfig14030>;
  path?: ConfigPaths14030;
}

const HeavyComponent14030 = memo(function HeavyComponent14030({ config }: HeavyProps14030) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14030) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14030 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14030: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14030.displayName = 'HeavyComponent14030';
export default HeavyComponent14030;
