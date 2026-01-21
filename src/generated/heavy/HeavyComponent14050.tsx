'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14050<T> = T extends (infer U)[]
  ? DeepReadonlyArray14050<U>
  : T extends object
  ? DeepReadonlyObject14050<T>
  : T;

interface DeepReadonlyArray14050<T> extends ReadonlyArray<DeepReadonly14050<T>> {}

type DeepReadonlyObject14050<T> = {
  readonly [P in keyof T]: DeepReadonly14050<T[P]>;
};

type UnionToIntersection14050<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14050<T> = UnionToIntersection14050<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14050<T extends unknown[], V> = [...T, V];

type TuplifyUnion14050<T, L = LastOf14050<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14050<TuplifyUnion14050<Exclude<T, L>>, L>;

type DeepPartial14050<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14050<T[P]> }
  : T;

type Paths14050<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14050<K, Paths14050<T[K], Prev14050[D]>> : never }[keyof T]
  : never;

type Prev14050 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14050<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14050 {
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

type ConfigPaths14050 = Paths14050<NestedConfig14050>;

interface HeavyProps14050 {
  config: DeepPartial14050<NestedConfig14050>;
  path?: ConfigPaths14050;
}

const HeavyComponent14050 = memo(function HeavyComponent14050({ config }: HeavyProps14050) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14050) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14050 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14050: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14050.displayName = 'HeavyComponent14050';
export default HeavyComponent14050;
